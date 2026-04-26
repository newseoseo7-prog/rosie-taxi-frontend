"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import { useGoogleMaps } from "@/components/GoogleMapsProvider";
import { useRouter } from 'next/navigation'

const mapContainerStyle = { width: "100%", height: "400px" };
const defaultCenter = { lat: 0, lng: 0 };
const libraries = ["places"];
const FARE_PER_KM = 2;

export default function RentalCarSearchForm() {
    const [isClient, setIsClient] = useState(false); // To ensure client-side rendering
    const searchParams = useSearchParams();
    const router = useRouter();

    const [pickUpLocation, setPickUpLocation] = useState<any | null>(null);
    const [dropOffLocation, setDropOffLocation] = useState<any | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [center, setCenter] = useState(defaultCenter);
    const [pickupMarker, setPickupMarker] = useState<google.maps.LatLng | null>(null);
    const [dropoffMarker, setDropoffMarker] = useState<google.maps.LatLng | null>(null);
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const [distance, setDistance] = useState<string | null>(null);
    const [fare, setFare] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const { isLoaded } = useGoogleMaps();

    const fetchLocationFromCoordinates = async (lat: number, lng: number) => {
        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const location = data.results[0];
                return {
                    locationId: location.place_id,
                    address: location.formatted_address,
                    lat,
                    lng,
                };
            }
        } catch (error) {
            console.error("Error fetching location data:", error);
        }
        return null;
    };

    const calculateRoute = useCallback(() => {
        if (pickupMarker && dropoffMarker && isLoaded) {
            const directionsService = new google.maps.DirectionsService();
            directionsService.route(
                {
                    origin: pickupMarker,
                    destination: dropoffMarker,
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK && result) {
                        setDirections(result);
                        const routeLeg = result.routes[0]?.legs[0];
                        if (routeLeg) {
                            setDistance(routeLeg.distance?.text || null);
                            const distanceInKm = (routeLeg.distance?.value || 0) / 1000;
                            setFare(distanceInKm * FARE_PER_KM);
                        }
                    } else {
                        console.error("Failed to fetch directions:", status);
                    }
                }
            );
        }
    }, [pickupMarker, dropoffMarker, isLoaded]);

    useEffect(() => {
        setIsClient(true);

        const fetchLocationsForParams = async () => {
            const fromParam = searchParams.get("from");
            const toParam = searchParams.get("to");
            const dateParam = searchParams.get("date");

            if (fromParam) {
                const [fromLat, fromLng] = fromParam.split(",").map(Number);
                const pickupData = await fetchLocationFromCoordinates(fromLat, fromLng);
                if (pickupData) {
                    setPickUpLocation(pickupData);
                    setPickupMarker(new google.maps.LatLng(fromLat, fromLng));
                    setCenter({ lat: fromLat, lng: fromLng });
                }
            }

            if (toParam) {
                const [toLat, toLng] = toParam.split(",").map(Number);
                const dropoffData = await fetchLocationFromCoordinates(toLat, toLng);
                if (dropoffData) {
                    setDropOffLocation(dropoffData);
                    setDropoffMarker(new google.maps.LatLng(toLat, toLng));
                }
            }

            if (dateParam) {
                setSelectedDate(decodeURIComponent(dateParam));
            }
        };

        fetchLocationsForParams();
    }, [searchParams]);

    useEffect(() => {
        calculateRoute();
    }, [pickupMarker, dropoffMarker, calculateRoute]);

    const handleConfirmBooking2 = async () => {
        if (!pickUpLocation || !dropOffLocation || !selectedDate || !distance || !fare) {
            alert("Please wait for all data to load.");
            return;
        }

        const query = new URLSearchParams({
            fromAddress: pickUpLocation.address,
            toAddress: dropOffLocation.address,
            date: selectedDate,
            distance,
            fare: fare.toFixed(2)
        }).toString();
        // Navigate to the payment page, passing the necessary data
       // router.push(`/booking-payment?${query}`);
    };
    const handleConfirmBooking = async () => {
        if (!pickUpLocation || !dropOffLocation || !selectedDate || !distance || !fare) {
            alert("Please wait for all data to load.");
            return;
        }

        setLoading(true);

        const bookingDetails = {
            pickupLocation: pickUpLocation,
            dropoffLocation: dropOffLocation,
            date: selectedDate,
            distance,
            fare,
        };

        try {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

            const response = await fetch(`${backendUrl}/confirm_booking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingDetails),
            });

            if (response.ok) {
                const data = await response.json();
                let booking_id = data.bookingId
                 router.push(`#`);
            } else {
                console.error("Failed to confirm booking", response.statusText);
                alert("Failed to confirm booking. Please try again.");
            }
        } catch (error) {
            console.error("Error confirming booking:", error);
            alert("An error occurred while confirming your booking.");
        } finally {
            setLoading(false);
        }
    };

    if (!isClient) {
        return null; // Ensure server-side does not try to render client-dependent elements
    }

    return (
        <div className="w-full space-y-8 mt-8">
            <form className="rounded-lg shadow-md bg-white p-4">
                <div className="flex flex-col space-y-4">
                    <div>
                        <p className="font-semibold">Pickup Location:</p>
                        <p>{pickUpLocation?.address || "Loading..."}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Dropoff Location:</p>
                        <p>{dropOffLocation?.address || "Loading..."}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Date:</p>
                        <p>{selectedDate || "Loading..."}</p>
                    </div>
                    {distance && (
                        <div>
                            <p className="font-semibold">Distance:</p>
                            <p>{distance}</p>
                        </div>
                    )}
                    {fare && (
                        <div>
                            <p className="font-semibold">Fare:</p>
                            <p>${fare.toFixed(2)}</p>
                        </div>
                    )}
                </div>
                <div className="mt-4">
                    <button
                        type="button"
                        aria-label="Confirm"
                        onClick={handleConfirmBooking}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                        disabled={loading}
                    >
                        {loading ? "Confirming..." : "Confirm Booking"}
                    </button>
                </div>
            </form>

            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={10}
                >
                    {pickupMarker && <Marker position={pickupMarker} />}
                    {dropoffMarker && <Marker position={dropoffMarker} />}
                    {directions && <DirectionsRenderer directions={directions} />}
                </GoogleMap>
            )}
        </div>
    );
}
