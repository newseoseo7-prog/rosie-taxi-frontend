  import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {NextRequest} from "next/server";


import * as cheerio from 'cheerio';

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

async function parseFlightTable(t:string): Promise<Flight[] | null> {
    try {
        const schedules = await callLaxApi(t);
        const $ = cheerio.load(schedules);

        const flights: Flight[] = [];

        $('table.table#flight-search tbody tr').each((i, row) => {
            const $row = $(row);

            // Extract data from row attributes
            const airlineName = $row.attr('data-airline') || '';
            const flightCode = $row.attr('data-airlinecode') || '';

            // Extract airline logo
            const airlineLogo ="https://www.flylax.com" +  $row.find('.airline-column img').attr('src') || '';

            // Extract flight number (primary)
            const flightNumber = $row.find('td:nth-child(2) .primary-fn').text().trim();

            // Extract destination city
            const city = $row.find('td:nth-child(4)').text().trim();

            // Extract status (removing extra whitespace)
            var flightStatus = $row.find('td.ontime').text().replace(/\s+/g, ' ').trim() || ''
            if (flightStatus.length<=0){
                  flightStatus = $row.find('td.delayed').text().replace(/\s+/g, ' ').trim() || ''

            }

            // Extract scheduled and arrival times (assuming 5th column is scheduled time)
            const scheduled = $row.find('td:nth-child(5)').text().trim();

            // If arrivalTime is separate, adjust the selector accordingly
            // Currently using scheduled for both as per your example
            const arrivalTime = scheduled;

            flights.push({
                airlineLogo,
                airlineName,
                flightNumber,
                flightCode,
                city,
                flightStatus,
                scheduled,
                arrivalTime
            });
        });

         return flights;

    } catch (error) {
        console.error('Error parsing flight table:', error);
        return null;
    }
}
export async function GET(request:NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    if(query==="arrivals"){
        let data  =await parseFlightTable("arr")
      //   return new Response(JSON.stringify(data))
        return new Response(JSON.stringify({data:data}))
    }
    else{
        let data  =await parseFlightTable("dep")
        return new Response(JSON.stringify({data:data}))
     //   return new Response(JSON.stringify(data))
    }

}

interface FlightData {
    // Define the structure based on the actual API response
    // These are placeholder properties - adjust according to real API response
    Airline?: string;
    Status?: string;
    City?: string;
    FlightNumber?: string;
    Gate?: string;
    Remarks?: string;
    Time?: string;
    // Add other fields as needed
}



      async function callLaxApi(type: string): Promise<any> {
        const url = `https://www.flylax.com/flight-search-list?type=${type}`;

        const config: AxiosRequestConfig = {
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
            },
            maxRedirects: 10,
            timeout: 0,
            responseType: 'json'
        };

        try {
            const response: AxiosResponse = await axios(config);

            if (response.status !== 200) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const decoded = response.data;

            if (decoded?.success) {
                throw new Error(`<div class="alert alert-danger" role="alert">${decoded.error}</div>`);
            } else {
                return decoded;
            }

        } catch (error) {

            if (error instanceof Error) {
                throw "error";
                //throw error;
            } else {
                throw new Error('An unknown error occurred');
            }
        }
    }

