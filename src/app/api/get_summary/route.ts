import axios from "axios";
import {BookingRepository, CreateBookingInput} from '@/db/Bookings';
import { NextResponse } from 'next/server'
import {v4 as uuidv4} from "uuid";
import FIXED_FARE_ROUTES from "@/fixedFareConfig";
import { Client, LatLngLiteral, GeocodeResponse, PlaceInputType } from '@googlemaps/google-maps-services-js'; // Import PlaceInputType
import database from '@/utils/database';
import { getSetting } from '@/lib/settings';
import {RedisCache} from "@/utils/redisCache";

const cache = new RedisCache({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    defaultTtl: 1800 // 30 minutes
});

interface LocationDict {
    [key: string]: number;
}
function checkProperties(obj: LocationDict, x: string): number | undefined {
    for (const prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            if (prop.includes(x) || x.includes(prop)) {
                return obj[prop];
            }
        }
    }
    return undefined;
}

function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371000; // Earth's radius in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

async function checkConfiguredLocations(pickupLat: number, pickupLng: number, dropoffLat: number, dropoffLng: number) {
    try {
        const locations = await database.query(
            'SELECT * FROM locations WHERE is_active = 1'
        );

        for (const location of locations) {
            const pickupDistance = calculateDistance(
                pickupLat, pickupLng,
                location.pickup_lat, location.pickup_lng
            );
            const dropoffDistance = calculateDistance(
                dropoffLat, dropoffLng,
                location.dropoff_lat, location.dropoff_lng
            );

            if (pickupDistance <= location.pickup_radius && dropoffDistance <= location.dropoff_radius) {
                return {
                    matched: true,
                    fixedFare: location.fixed_fare,
                    minimumFare: location.minimum_fare,
                    title: location.title
                };
            }
        }
        return { matched: false };
    } catch (error) {
        console.error('Error checking configured locations:', error);
        return { matched: false };
    }
}

// MODIFIED: calculateRoadDistanceAndDirections to accept place IDs or LatLngs
async function calculateRoadDistanceAndDirections(
    fromLocation: string | LatLngLiteral,
    toLocation: string | LatLngLiteral
): Promise<{distance: number, directions: any}> {
    const apiKey = process.env.NEXT_PRIVATE_GOOGLE_MAP_KEY;

    // Determine the origin and destination format for API calls
    const origin = typeof fromLocation === 'string' ? `place_id:${fromLocation}` : `${fromLocation.lat},${fromLocation.lng}`;
    const destination = typeof toLocation === 'string' ? `place_id:${toLocation}` : `${toLocation.lat},${toLocation.lng}`;

    // Distance Matrix API call
    const distanceUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&units=imperial&destinations=${destination}&key=${apiKey}`;

    // Directions API call
    const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

    try {
        // Make both API calls in parallel
        const [distanceResponse, directionsResponse] = await Promise.all([
            axios.get(distanceUrl),
            axios.get(directionsUrl)
        ]);

        console.log(distanceResponse.data.rows[0].elements[0].distance)
        const distance_meter = distanceResponse.data.rows[0].elements[0].distance.value; // convert to meters
        const directions = directionsResponse.data;
        const distance  = distance_meter/1609.34; // convert to miles

        return { distance, directions };
    } catch (error: any) {
        console.error('Error calculating road distance or getting directions:', error.message);
        throw new Error('Failed to calculate road distance or get directions');
    }
}


// Define the type for the input place ID or latitude/longitude
interface LocationInput {
    lat?: number;
    lng?: number;
    place_id?: string;
}

/**
 * Fetches location information from the Google Maps Geocoding API using the official Node.js SDK.
 * This function is now more flexible and can accept either latlng or place_id.
 *
 * @param locationInput An object with either lat/lng or place_id properties.
 * @returns A Promise that resolves to the first GeocodingResult or undefined if no results are found.
 * @throws An error if the API request fails or returns an error status.
 */
async function getLocationInfo(locationInput: LocationInput): Promise<GeocodeResponse['data']['results'][0] | undefined> {
    const Maps_API_KEY = process.env.NEXT_PRIVATE_GOOGLE_MAP_KEY; // Use NEXT_PRIVATE_GOOGLE_MAP_KEY as it's a backend key

    if (!Maps_API_KEY) {
        console.error('Google Maps API Key not configured in environment variables.');
        throw new Error('Google Maps API Key is missing.');
    }

    const client = new Client({});

    try {
        let params: { key: string; place_id?: string; latlng?: LatLngLiteral; };

        if (locationInput.place_id) {
            params = {
                place_id: locationInput.place_id,
                key: Maps_API_KEY,
            };
        } else if (locationInput.lat && locationInput.lng) {
            params = {
                latlng: { lat: locationInput.lat, lng: locationInput.lng },
                key: Maps_API_KEY,
            };
        } else {
            throw new Error('Invalid location input: must provide either place_id or lat/lng.');
        }

        const response: GeocodeResponse = await client.geocode({ params });

        const data = response.data;

        if (data.status === 'OK' && data.results && data.results.length > 0) {
            return data.results[0];
        } else if (data.status === 'ZERO_RESULTS') {
            console.warn('No results found for the given location.');
            return undefined;
        } else {
            const errorMessage = data.error_message || `Geocoding API returned status: ${data.status}`;
            console.error('Error fetching location info from Google Geocoding API:', errorMessage);
            throw new Error(`Failed to fetch location info: ${errorMessage}`);
        }
    } catch (error: any) {
        if (error.response) {
            console.error('API Error Response:', error.response.data);
            console.error('API Error Status:', error.response.status);
            throw new Error(`Failed to fetch location info: API error (${error.response.status})`);
        } else if (error.request) {
            console.error('Network Error during geocoding:', error.message);
            throw new Error(`Failed to fetch location info: Network error (${error.message})`);
        } else {
            console.error('Unexpected error fetching location info:', error);
            throw new Error(`Failed to fetch location info: ${error.message || 'Unknown error'}`);
        }
    }
}


export async function POST(req: Request) {
    const bookingRepository = new BookingRepository();

    try {
        const body = await req.json();
        // MODIFIED: Destructure place_id from the body
        const { pickupLocation, dropoffLocation, pickupPlaceId, dropoffPlaceId, userId, date, startDate, time, name, phone, payment_mode } = body;


        if (!pickupLocation || !dropoffLocation || !pickupPlaceId || !dropoffPlaceId) {
            return NextResponse.json({ error: 'Missing required fields: pickupLocation, dropoffLocation, pickupPlaceId, or dropoffPlaceId' }, { status: 400 });
        }

        // Use place IDs for distance and directions calculation
        const { distance, directions } = await calculateRoadDistanceAndDirections(pickupPlaceId, dropoffPlaceId);

        // Fetch location info using place IDs
        const fromLocationInfo = await getLocationInfo({ place_id: pickupPlaceId });
        const toLocationInfo = await getLocationInfo({ place_id: dropoffPlaceId });


        if (!fromLocationInfo || !toLocationInfo){
            return NextResponse.json({ error: 'Failed to retrieve detailed location information' }, { status: 500 });
        }

        const pickupAddress = fromLocationInfo.formatted_address;
        // You might want to refine how you get the name from address_components
        // The first component's long_name is often the street number or building name.
        // Consider looking for a 'political' or 'locality' type for a more general name,
        // or simply using the formatted_address for display.
        // @ts-ignore
        const pickupAddressName = fromLocationInfo.name || fromLocationInfo.address_components[0]?.long_name || pickupAddress;

        const dropoffAddress = toLocationInfo.formatted_address;
        // @ts-ignore
        const dropOffAddressName = toLocationInfo.name || toLocationInfo.address_components[0]?.long_name || dropoffAddress;

        // Check configured locations first
        const configuredLocation = await checkConfiguredLocations(
            fromLocationInfo.geometry.location.lat,
            fromLocationInfo.geometry.location.lng,
            toLocationInfo.geometry.location.lat,
            toLocationInfo.geometry.location.lng
        );


        const perMileRate = parseFloat(await getSetting('PER_MILE_RATE') || '5.50');
        let minFare = parseFloat(await getSetting('MIN_FARE') || '25.00');
        let totalFare = distance * perMileRate;
        let appliedFixedFare = null;

        // Apply configured location rates if matched
        if (configuredLocation.matched) {
            if (configuredLocation.fixedFare) {
                appliedFixedFare = configuredLocation.fixedFare;
            }
            if (configuredLocation.minimumFare) {
                minFare = Math.max(minFare, configuredLocation.minimumFare);
            }
        }

        let discount_percent_env = process.env.DISCOUNT_PERCENT || '20';
        let discount_percent = parseFloat(discount_percent_env);
        let discounted_fare = totalFare;
        
        if (appliedFixedFare) {
            discount_percent = 0; // No discount on fixed fares
            totalFare = appliedFixedFare;
            discounted_fare = totalFare;
        } else {
            // calculate discounted fare
            discounted_fare = totalFare - (totalFare * discount_percent) / 100;
        }

        if (totalFare < minFare) {
            totalFare = minFare;
        }
        if (discounted_fare < minFare) {
            discounted_fare = minFare;
        }
        // booking_id will be auto-generated as a numeric string

        let pickupDate = startDate || date;

        //parse date only from pickupDate
        if (pickupDate) {
            pickupDate = pickupDate.split('T')[0];
        }

        // Create a booking with directions
        let bookingInput: CreateBookingInput = {
            user_id: userId || '1',
            // Store coordinates as well, derived from geocoding with place_id if necessary
            pickup_latlng: `${fromLocationInfo.geometry.location.lat},${fromLocationInfo.geometry.location.lng}`,
            drop_off_latlng: `${toLocationInfo.geometry.location.lat},${toLocationInfo.geometry.location.lng}`,
            pickup_address: pickupAddress,
            drop_off_address: dropoffAddress,
            drop_off_address_name: dropOffAddressName,
            pickup_address_name: pickupAddressName,
            fare_charges: totalFare,
            discounted_fare: discounted_fare,
            // booking_id will be set by the database auto-increment
            directions: JSON.stringify(directions),
            name: name || '',
            phone: phone || '',
            email:  '',
            selected_time: time,
            selected_date: pickupDate,
            payment_mode: payment_mode || 'credit_card',
            payment_id: '',
            distance,
            // NEW: Store place IDs in the database as well
            pickup_place_id: pickupPlaceId,
            dropoff_place_id: dropoffPlaceId,
        };

        const booking = await bookingRepository.createBooking(bookingInput);

        try{

                let key = "booking:"+booking.id
                await cache.delete(key);
                await cache.set(key, booking, 3600*24*10); // 10 days TTL
        }
        catch (e){
            console.log(e)
        }

        return NextResponse.json({
            ...booking,
            directions: directions,
            isFixedFare: appliedFixedFare !== null,
            configuredLocation: configuredLocation.matched ? configuredLocation.title : null,
        });
    } catch (error) {
        console.error('Failed to create booking:', error);
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}