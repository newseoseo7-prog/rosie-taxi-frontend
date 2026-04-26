// pages/api/bookings/[id].ts
import { NextResponse } from 'next/server';
import {Booking, BookingRepository, UpdateBookingInput} from "@/db/Bookings";
import axios from "axios";
import { emailService } from '@/lib/EmailService';
import { BookingDetails } from '@/types/booking';
import {RedisCache} from "@/utils/redisCache";

const cache = new RedisCache({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    defaultTtl: 1800 // 30 minutes
});

const bookingRepository = new BookingRepository();
async function getLocationAirQualityIndex(lat: string,lng:string) {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lng}&current=us_aqi`;

    try {
        const res = await axios.get(url);
        return res.data.current;
    } catch (error: any) {
        console.error('Error fetching location info:', error.message);
        throw new Error('Failed to fetch location info');
    }
}

interface AirQualityData {
    dateTime: string;
    regionCode: string;
    indexes: {
        code: string;
        displayName: string;
        aqi: number;
        aqiDisplay: string;
        color: {
            red: number;
            green: number;
            blue: number;
            alpha: number;
        };
        category: string;
        dominantPollutant: string;
    }[];
}

interface AirQualityResponse {
    error?: {
        code: number;
        message: string;
    };
    data?: AirQualityData;
}

/**
 * Fetches air quality index data from Google Maps API
 * @param apiKey - Your Google Maps API key
 * @param location - The location to check (latitude/longitude object or address string)
 * @param language - Preferred language for results (default: 'en')
 * @returns Promise with air quality data or error
 */
async function fetchAirQualityIndex(
    apiKey: string,
    location: { lat: string; lng: string } | string,
    language: string = 'en'
): Promise<AirQualityResponse> {
    try {
        // Construct the location parameter
        const locationParam = typeof location === 'string'
            ? encodeURIComponent(location)
            : `${location.lat},${location.lng}`;

        // Construct the API URL
        const url = `https://airquality.googleapis.com/v1/currentConditions:lookup?key=${apiKey}&languageCode=${language}`;

        // Make the request
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                location: {
                    // Handle both string address and lat/lng object
                    ...(typeof location === 'object'
                        ? { latitude: location.lat, longitude: location.lng }
                        : { address: location }),
                },
                extraComputations: ["DOMINANT_POLLUTANT_CONCENTRATION"],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return {
                error: {
                    code: response.status,
                    message: errorData.error?.message || 'Unknown error occurred',
                },
            };
        }

        const data: AirQualityData = await response.json();
        return { data };
    } catch (error) {
        return {
            error: {
                code: 500,
                message: error instanceof Error ? error.message : 'Unknown error occurred',
            },
        };
    }
}

// Example usage:
/*
async function exampleUsage() {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

    // Using coordinates
    const result1 = await fetchAirQualityIndex(apiKey, { lat: 37.7749, lng: -122.4194 });

    // Using address
    const result2 = await fetchAirQualityIndex(apiKey, "San Francisco, CA");

    if (result1.data) {
        console.log('Current AQI:', result1.data.indexes[0].aqiDisplay);
        console.log('Dominant pollutant:', result1.data.indexes[0].dominantPollutant);
    } else if (result1.error) {
        console.error('Error:', result1.error.message);
    }
}
*/

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: number }> }
) {
    const { id } = await params // 'a', 'b', or 'c'
    try {

         try{
             let key = "booking:"+id
            const exists = await cache.has(key);
            if (exists){

                 const cachedBooking = await cache.get<Booking>(key);
                return NextResponse.json(cachedBooking);
            }
        }
        catch (e){
            console.log(e)
        }

        const booking =await bookingRepository.findBookingById(id);
        if (!booking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }
        let directions= booking.directions;
        if(directions){
            directions= JSON.parse(directions);
            booking.directions=directions;
        }
        let dropOffLatLng = booking.drop_off_latlng;
        let lat_lng = dropOffLatLng.split(',');
        let lat = lat_lng[0];
        let lng = lat_lng[1];
        const apiKey = process.env.NEXT_PRIVATE_GOOGLE_MAP_KEY || '';

        const result1 = await fetchAirQualityIndex(apiKey, { lat: lat, lng: lng });

       // let aqi =await getLocationAirQualityIndex(lat,lng)
        booking.aqi = result1.data;

        try{
            let key = "booking:"+id
            await cache.set(key,booking);

        }
        catch (e){
            console.log(e)
        }
        return NextResponse.json(booking);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch booking' }, { status: 500 });
    }

}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params // 'a', 'b', or 'c'
    const data = await request.json();
    const {name,phone,email} = data
    try {
        if (!id || typeof id !== 'string' || !/^\d+$/.test(id)) {
            return NextResponse.json({ error: 'Invalid numeric booking ID' }, { status: 400 });
        }

        // First get the booking to find the booking_id
        const existingBooking = await bookingRepository.findBookingById(parseInt(id));
        if (!existingBooking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }
        
        const updatedBooking = await bookingRepository.updateBooking(existingBooking.booking_id, data);
        const booking = await bookingRepository.findBookingById(parseInt(id));
        if (!booking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        // Send admin notification email when contact details are updated
        try {
            const bookingDetails: BookingDetails = {
                bookingId: booking.booking_id,
                name: booking.name,
                email: booking.email,
                phone: booking.phone,
                pickupDate: booking.selected_date ? booking.selected_date.toISOString().split('T')[0] : 'Not set',
                pickupTime: booking.selected_time ? booking.selected_time.toString() : 'Not set',
                pickupLocation: booking.pickup_address,
                dropLocation: booking.drop_off_address,
                mileage: booking.distance ? `${booking.distance} miles` : 'Not calculated',
                total: `$${booking.fare_charges}`
            };

            // Send new booking notification asynchronously (don't wait for it to complete)
            emailService.sendNewBookingNotification(bookingDetails).then(() => {
                console.log('New booking notification sent for contact update:', booking.booking_id);
            }).catch((error) => {
                console.error('Failed to send new booking notification:', error);
            });

            try{
                let key = "booking:"+id
                await cache.delete(key);
                await cache.set(key,booking)
            }
            catch (e){
                console.log(e)
            }
        } catch (emailError) {
            console.error('Error preparing new booking notification:', emailError);
            // Don't fail the request if email fails
        }

        return NextResponse.json(booking);
    } catch (error) {
        console.error('Error updating booking:', error);
        return NextResponse.json({ error: 'Failed to update booking', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
    }
}