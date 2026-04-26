import axios from "axios";
import { parse } from 'node-html-parser'
import {NextApiRequest} from "next";
import {NextRequest} from "next/server";

interface SanDiegoFlight {
    origin?: string
    destination?: string
    date: string
    time: string
    airlineLogo: string
    airlineName: string
    flight: string
    gate: string
    status: string
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

const BASE_URL = 'https://www.san.org/Flights/Flight-Status'
const  IMAGE_BASE = 'https://www.san.org'
const REQUEST_TIMEOUT = 10000 // 10 seconds

/**
 * Fetch HTML content from SAN website
 */
  async function fetchSanDiegoHtml(): Promise<string> {
    try {
        const { data } = await axios.get(BASE_URL, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            },
            timeout: REQUEST_TIMEOUT,
        })
        return data
    } catch (error) {
        throw new Error(`Failed to fetch SAN flight data: ${error}`)
    }
}

/**
 * Parse flight data from HTML tables
 */
function parseSanDiegoFlights(html: string, tableId: string): SanDiegoFlight[] {
    const dom = parse(html)
    const table = dom.getElementById(tableId)
    const flights: SanDiegoFlight[] = []

    if (!table) {
        return flights
    }

    const rows = table.getElementsByTagName('tr')

    rows.forEach((row) => {
        const cols = row.getElementsByTagName('td')
        if (cols.length >= 7) {
            const airlineImg = cols[3].querySelector('img')
            const airlineNameSpan = cols[3].querySelector('span')

            flights.push({
                origin: tableId === 'arrivalsTable' ? cols[0].text.trim() : undefined,
                destination: tableId === 'departTable' ? cols[0].text.trim() : undefined,
                date: cols[1].text.trim(),
                time: cols[2].text.trim(),
                airlineLogo: airlineImg
                    ? `${IMAGE_BASE}${airlineImg.getAttribute('src')?.trim() || ''}`
                    : '',
                airlineName: airlineNameSpan?.text.trim() || cols[3].text.trim(),
                flight: cols[4].text.trim(),
                gate: cols[5].text.trim(),
                status: cols[6].text.trim(),
            })
        }
    })

    return flights
}

/**
 * Get arrivals data
 */
async function arrivals() {
    try {
        const html = await fetchSanDiegoHtml()
        const arrivals = parseSanDiegoFlights(html, 'arrivalsTable')

        return {
            success: true,
            data: arrivals,
            timestamp: new Date().toISOString(),
        }
    } catch (error) {
        return {
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
        const html = await fetchSanDiegoHtml()
        const departures = parseSanDiegoFlights(html, 'departTable')

        return {
            success: true,
            data: departures,
            timestamp: new Date().toISOString(),
        }
    } catch (error) {
        return {
            success: false,
            message: error,
            timestamp: new Date().toISOString(),
        }
    }
}

/**
 * Get all flight data (arrivals + departures)
 */
async function index() {
    try {
        const html = await fetchSanDiegoHtml()
        const arrivals = parseSanDiegoFlights(html, 'arrivalsTable')
        const departures = parseSanDiegoFlights(html, 'departTable')

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
        return {
            success: false,
            message: error,
            timestamp: new Date().toISOString(),
        }
    }
}