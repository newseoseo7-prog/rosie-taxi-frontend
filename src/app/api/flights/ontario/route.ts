import axios from "axios";
import { parse } from 'node-html-parser'
import {NextApiRequest} from "next";
import {NextRequest} from "next/server";


interface OntarioFlight {
    origin?: string
    destination?: string
    airline: string
    flightNumber: string
    scheduledTime: string
    actualTime: string
    status: string
    gate?: string
}

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


const BASE_URL = 'https://www.flyontario.com/flights'
const REQUEST_TIMEOUT = 10000 // 10 seconds

/**
 * Fetch HTML content from ONT website
 */
  async function fetchOntarioHtml(flightType: 'arrivals' | 'departures'): Promise<string> {
    try {
        const url = `${BASE_URL}/${flightType}`
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            },
            timeout: REQUEST_TIMEOUT,
        })
        return data
    } catch (error) {
        throw new Error(`Failed to fetch ONT ${flightType} data: ${error }`)
    }
}

/**
 * Parse flight data from HTML tables
 */
function parseOntarioFlights(
    html: string,
    flightType: 'arrivals' | 'departures'
): OntarioFlight[] {
    const dom = parse(html)
    const flights: OntarioFlight[] = []

    // Ontario's flight data is typically in a table with class 'flight-table'
    const table = dom.querySelector('.flight-table')
    if (!table) return flights

    const rows = table.querySelectorAll('tbody tr')

    rows.forEach((row) => {
        const cols = row.querySelectorAll('td')

        // Adjust column indexes based on Ontario's actual table structure
        const flightData: OntarioFlight = {
            airline: cols[0]?.text.trim() || '',
            flightNumber: cols[1]?.text.trim() || '',
            scheduledTime: cols[2]?.text.trim() || '',
            actualTime: cols[3]?.text.trim() || '',
            status: cols[4]?.text.trim() || '',
        }

        // Add origin/destination based on flight type
        if (flightType === 'arrivals') {
            flightData.origin = cols[5]?.text.trim()
        } else {
            flightData.destination = cols[5]?.text.trim()
        }

        // Ontario may include gate information
        if (cols.length > 6) {
            flightData.gate = cols[6]?.text.trim()
        }

        flights.push(flightData)
    })

    return flights
}

/**
 * Get arrivals data
 */
async function arrivals() {
    try {
        const html = await fetchOntarioHtml('arrivals')

        const arrivals = parseOntarioFlights(html, 'arrivals')

        return {
            success: true,
            data: arrivals,
            timestamp: new Date().toISOString(),
        }
    } catch (error) {
        console.log(error)
        return  {
            success: false,
            message: error,
            timestamp: new Date().toISOString(),
        }
    }
}

/**
 * Get departures data
 */
async function departures() {
    try {
        const html = await fetchOntarioHtml('departures')
        const departures = parseOntarioFlights(html, 'departures')

        return  {
            success: true,
            data: departures,
            timestamp: new Date().toISOString(),
        }
    } catch (error) {
        return {
            success: false,
            message: error ,
            timestamp: new Date().toISOString(),
        }
    }
}

/**
 * Get all flight data (arrivals + departures)
 */
async function index() {
    try {
        const [arrivalsHtml, departuresHtml] = await Promise.all([
            fetchOntarioHtml('arrivals'),
            fetchOntarioHtml('departures'),
        ])

        const arrivals = parseOntarioFlights(arrivalsHtml, 'arrivals')
        const departures = parseOntarioFlights(departuresHtml, 'departures')

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
            message: error ,
            timestamp: new Date().toISOString(),
        }
    }
}