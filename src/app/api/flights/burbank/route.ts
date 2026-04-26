import axios from "axios";
import { parse } from 'node-html-parser'
import {NextApiRequest} from "next";
import {NextRequest} from "next/server";

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    if(query==="arrivals"){
        let data  =await arrivals()
        return new Response(JSON.stringify(data))
    }
    else{
        let data  =await departures()
        return new Response(JSON.stringify(data))
    }

}

const BASE_URL = 'https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp'
const AIRPORT_CODE = 'BurbankAirport'
const FIDS_ID = '20001'
const REQUEST_TIMEOUT = 5000


/**
 * Fetch HTML content from FlightView
 */
 async function fetchFlightData(url: string): Promise<string | null> {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
            },
            timeout:  REQUEST_TIMEOUT,
            maxRedirects: 5,
        })
        return data
    } catch (error) {
        console.error(`[BurbankFlightsController] Error fetching data: ${error}`)
        return null
    }
}

/**
 * Parse flight data from HTML
 */
function parseFlightData(html: string): any[] {
    const root = parse(html)
    const flightRows = root.querySelectorAll('.flight.even, .flight.odd')

    return flightRows.map((flightRow) => {
        const children = flightRow.childNodes
        return {
            airlineLogo: flightRow.querySelector('#ffAlLog img')
                ? `https://tracker.flightview.com/${flightRow.querySelector('#ffAlLog img')?.getAttribute('src')}`
                : '',
            airlineName: children[1]?.textContent?.trim() || '',
            flightNumber: children[3]?.textContent?.trim() || '',
            flightCode: children[5]?.textContent?.trim() || '',
            city: children[7]?.textContent?.trim() || '',
            flightStatus: children[9]?.textContent?.trim() || '',
            scheduled: children[11]?.textContent?.trim() || '',
            arrivalTime: children[13]?.textContent?.trim() || '',
        }
    })
}

/**
 * Get arrivals data
 * @responseBody 200 - Successful response with arrivals data
 * @responseBody 500 - Error response
 */
  async function arrivals( ) {
    const url = `${  BASE_URL}?accCustId=${ AIRPORT_CODE}&fidsId=${ FIDS_ID}&fidsInit=arrivals`
    const html = await  fetchFlightData(url)

    if (!html) {
        return  {
            success: false,
            message: 'Failed to fetch arrivals data',
            timestamp: new Date().toISOString(),
        }
    }

    const flightData = parseFlightData(html)
    return {
        success: true,
        data: flightData,
        timestamp: new Date().toISOString(),
    }
}

/**
 * Get departures data
 * @responseBody 200 - Successful response with departures data
 * @responseBody 500 - Error response
 */
  async function departures( ) {
    const url = `${BASE_URL}?accCustId=${AIRPORT_CODE}&fidsId=${FIDS_ID}&fidsInit=departures`
    const html = await fetchFlightData(url)

    if (!html) {
        return  {
            success: false,
            message: 'Failed to fetch departures data',
            timestamp: new Date().toISOString(),
        }
    }

    const flightData = parseFlightData(html)
    return {
        success: true,
        data: flightData,
        timestamp: new Date().toISOString(),
    }
}

/**
 * Get combined arrivals and departures
 * @responseBody 200 - Successful response with all flight data
 * @responseBody 500 - Error response
 */
  async function index( ) {
    try {
        const [arrivalsHtml, departuresHtml] = await Promise.all([
             fetchFlightData(
                `${ BASE_URL}?accCustId=${ AIRPORT_CODE}&fidsId=${ FIDS_ID}&fidsInit=arrivals`
            ),
             fetchFlightData(
                `${ BASE_URL}?accCustId=${AIRPORT_CODE}&fidsId=${FIDS_ID}&fidsInit=departures`
            ),
        ])

        if (!arrivalsHtml || !departuresHtml) {
            throw new Error('Partial data failure')
        }

        const arrivals =  parseFlightData(arrivalsHtml)
        const departures = parseFlightData(departuresHtml)

        return  {
            success: true,
            data: {
                arrivals,
                departures,
                total: arrivals.length + departures.length,
            },
            timestamp: new Date().toISOString(),
        }
    } catch (error) {
        return  {
            success: false,
            message: 'Failed to fetch complete flight data',
            timestamp: new Date().toISOString(),
        }
    }
}