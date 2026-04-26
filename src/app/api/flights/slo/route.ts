import axios from "axios";
import { parse } from 'node-html-parser'
import {NextApiRequest} from "next";
import {NextRequest} from "next/server";

export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')

    let data  =await getSLOArrivalsJson()
  return new Response(JSON.stringify(data))
}


 async function fetchSLOPageContent(url: string): Promise<string | null> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
      },
      maxRedirects: 5, // Follow redirects
    })

    return response.data // Return the fetched HTML content
  } catch (error) {
    console.error('Error fetching page content:', error)
    return null
  }
}

// Parse the fetched HTML content to extract flight data
function  parseSLOTable(html: string): any[] {
  const root = parse(html) // Parse the HTML using node-html-parser
  const flightRows = root.querySelectorAll('.flight.even, .flight.odd')

  return flightRows.map((flightRow) => {
    const airlineLogo = flightRow.querySelector('#ffAlLog img')
        ? 'https://tracker.flightview.com/' +
        flightRow.querySelector('#ffAlLog img')?.getAttribute('src')
        : ''
    const airlineName = flightRow.querySelector('#ffAlLbl')?.textContent ?? '' // Optional chaining with fallback value
    const flightNumber = flightRow.childNodes[3]?.textContent.trim() || ''
    const flightCode = flightRow.childNodes[5]?.textContent.trim() || ''
    const city = flightRow.childNodes[7]?.textContent.trim() || ''
    const status = flightRow.childNodes[9]?.textContent.trim() || ''
    const scheduled = flightRow.childNodes[11]?.textContent.trim() || ''
    const delayed = flightRow.childNodes[13]?.textContent.trim() || ''

    return {
      airlineLogo,
      airlineName,
      flightNumber,
      flightCode,
      city,
      flightStatus: status,
      scheduled,
      arrivalTime: delayed,
    }
  })
}

// Get arrivals data and return as JSON
 async function  getSLOArrivalsJson() {
  const url =
      'https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp?accCustId=SLOAirport&fidsId=20001&fidsInit=arrivals'

  const htmlContent = await fetchSLOPageContent(url)
  if (!htmlContent) {
    return { message: 'Error fetching arrivals data' }
  }

  const flightData = parseSLOTable(htmlContent)
  return { data: flightData }
}

// Get departures data and return as JSON
 async function  getSLODeparturesJson() {
  const url =
      'https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp?accCustId=SLOAirport&fidsId=20001&fidsInit=departures'

  const htmlContent = await fetchSLOPageContent(url)
  if (!htmlContent) {
    return { message: 'Error fetching departures data' }
  }

  const flightData = parseSLOTable(htmlContent)
  return { data: flightData }
}

// Example of rendering the data (optional based on your need)
 async function  SLOAirportTable() {
  const url =
      'https://tracker.flightview.com/FVAccess3/tools/fids/fidsDefault.asp?accCustId=SLOAirport&fidsId=20001&fidsInit=arrivals'

  const htmlContent = await fetchSLOPageContent(url)
  if (!htmlContent) {
    return { message: 'Error loading airport table data' }
  }

  // You can render a view here or return the data as needed
     return parseSLOTable(htmlContent)
}