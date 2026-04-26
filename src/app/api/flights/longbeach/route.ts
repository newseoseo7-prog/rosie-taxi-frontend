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
interface Flight {
    airlineLogo: string;
    airlineName: string;
    flightNumber: string;
    flightCode: string;
    city: string;
    flightStatus: string;
    scheduled: string;
    arrivalTime: string;
}


/**
 * Base URL for flight status page
 */
const FLIGHT_STATUS_URL =
    'https://www.longbeach.gov/lgb/airlines-destinations/flight-status/'

/**
 * Base URL for airline logo images
 */
const IMAGE_BASE_URL = 'https://www.longbeach.gov'

/**
 * Timeout for HTTP requests (ms)
 */
const REQUEST_TIMEOUT = 8000

/**
 * Fetch HTML content from LongBeach Airport website
 */
  async function fetchFlightStatusPage(): Promise<string> {
    try {
        const { data } = await axios.get(FLIGHT_STATUS_URL, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            },
            timeout: REQUEST_TIMEOUT,
        })
        return data
    } catch (error) {
        throw new Error(`Failed to fetch flight status page: ${error}`)
    }
}

/**
 * Parse flight data from HTML table
 */
function parseFlightTable(html: string, type: 'arrivals' | 'departures'): Flight[] {
    const root = parse(html)
    const tableClass = type === 'arrivals' ? 'flight-list-arrival' : 'flight-list-departure'
    const tbody = root.querySelector(`tbody.${tableClass}`)

    if (!tbody) return []

    return Array.from(tbody.querySelectorAll('tr')).map((row): Flight => {
        const cells = row.querySelectorAll('td')
        const airlineImg = cells[2]?.querySelector('img')
        const fullFlightCode = cells[1]?.textContent?.trim() || ''

        // Extract flight code and number
        const match = fullFlightCode.match(/^([A-Za-z]+)(\d+)$/)
         const flightCode = fullFlightCode || ''
        const flightNumber = fullFlightCode || ''

        return {
            airlineLogo: airlineImg
                ? `${IMAGE_BASE_URL}/${airlineImg.getAttribute('src')?.trim() || ''}`
                : '',
            airlineName: cells[2]?.textContent?.trim() || '',
            flightCode,
            flightNumber,
            city: cells[0]?.textContent?.trim() || '',
            flightStatus: cells[4]?.textContent?.trim() || '',
            scheduled: cells[3]?.textContent?.trim() || '',
            arrivalTime: cells[3]?.textContent?.trim() || '', // Still using scheduled as arrivalTime fallback
        }
    })
}

/**
 * Get arrivals data
 *
 * @responseBody 200 - Successful response with arrivals data
 * @responseBody 500 - Error response
 */
async function arrivals() {
    try {
        const html = await fetchFlightStatusPage()

        const arrivalsData = parseFlightTable(html, 'arrivals')

        return  {
            success: true,
            data: arrivalsData,
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
 *
 * @responseBody 200 - Successful response with departures data
 * @responseBody 500 - Error response
 */
async function departures() {
    try {
        const html = await fetchFlightStatusPage()
        const departuresData = parseFlightTable(html, 'departures')

        return  {
            success: true,
            data: departuresData,
            timestamp: new Date().toISOString(),
        }
    } catch (error) {
        return  {
            success: false,
            message: error,
            timestamp: new Date().toISOString(),
        }
    }
}

/**
 * Get all flight data (arrivals + departures)
 *
 * @responseBody 200 - Successful response with all flight data
 * @responseBody 500 - Error response
 */
async function index() {
    try {
        const html = await fetchFlightStatusPage()
        const arrivals = parseFlightTable(html, 'arrivals')
        const departures = parseFlightTable(html, 'departures')

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
            message:  error,
            timestamp: new Date().toISOString(),
        }
    }
}