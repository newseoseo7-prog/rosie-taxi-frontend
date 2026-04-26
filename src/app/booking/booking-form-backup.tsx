import React, { FC, useState, useCallback, useEffect } from "react";
import LocationInput from "@/new_sections/LocationInput";
import SearchSubmitButton from "./SearchSubmitButton";
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useGoogleMaps } from "@/components/GoogleMapsProvider";
import DateSingleInput from "@/new_sections/DateSingleInput";

export interface RentalCarSearchFormProps {}

const mapContainerStyle = { width: '100%', height: '400px' };
const defaultCenter = { lat: 0, lng: 0 };
const libraries = ['places'];
const FARE_PER_KM = 2;

interface Route {
    start_address: string;
    end_address: string;
    distance: { text: string };
    duration: { text: string };
}

const RentalCarSearchForm: FC<RentalCarSearchFormProps> = () => {
    const [dropOffLocationType, setDropOffLocationType] = useState<"different">("different");
    const [pickUpLocation, setPickUpLocation] = useState<string | null>(null);
    const [dropOffLocation, setDropOffLocation] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [center, setCenter] = useState(defaultCenter);
    const [userLocation, setUserLocation] = useState(null);
    const [route, setRoute] = useState<Route | null>(null);  // Updated type here
    const [directions, setDirections] = useState(null);
    const [distance, setDistance] = useState<string | null>(null);
    const [duration, setDuration] = useState<string | null>(null);
    const [fare, setFare] = useState<number | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [pickupMarker, setPickupMarker] = useState<google.maps.LatLng | null>(null);
    const [dropoffMarker, setDropoffMarker] = useState<google.maps.LatLng | null>(null);

    const [activeLocationInput, setActiveLocationInput] = useState<"pickup" | "dropoff" | null>(null);

    const zoom = 13;

    const { isLoaded, loadError } = useGoogleMaps();

    const onLoad = useCallback(function callback(mapInstance:any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        mapInstance.fitBounds(bounds);
        setMap(mapInstance);
    }, [center]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userPos = { lat: position.coords.latitude, lng: position.coords.longitude };
                setCenter(userPos);
                // @ts-ignore
                setUserLocation(userPos);
            }, (e) => {
                console.log(e)
                console.log("Error: The Geolocation service failed.");
            });
        } else { console.log("Error: Your browser doesn't support geolocation."); }
    }, []);

    useEffect(() => {
        if (pickupMarker && dropoffMarker) {
            handleSearchClick();
        }
    }, [pickupMarker, dropoffMarker]);

    const handleMapClick = (event: google.maps.MapMouseEvent) => {
        const clickedLocation = event.latLng;

        if (clickedLocation) {
            const latLngString = `${clickedLocation.lat()}, ${clickedLocation.lng()}`;
            if (activeLocationInput === "pickup") {
                setPickupMarker(clickedLocation);
                setPickUpLocation(latLngString);
            } else if (activeLocationInput === "dropoff") {
                setDropoffMarker(clickedLocation);
                setDropOffLocation(latLngString);
            }
            setActiveLocationInput(null);
        }
    };

    const handleSearchClick = () => {
        if (isLoaded && (pickupMarker || pickUpLocation) && (dropoffMarker || dropOffLocation)) {
            const directionsService = new google.maps.DirectionsService();
            directionsService.route({
                // @ts-ignore
                origin: pickupMarker ? pickupMarker : pickUpLocation,
                // @ts-ignore
                destination: dropoffMarker ? dropoffMarker : dropOffLocation,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK && result) {
                    // @ts-ignore
                    setDirections(result);
                    const route = result.routes[0].legs[0];
                    // @ts-ignore
                    setRoute(route);
                    setDistance(route.distance?.text || null);
                    setDuration(route.duration?.text || null);
                    const distanceInKm = route.distance?.value ? route.distance.value / 1000 : 0;
                    const calculatedFare = distanceInKm * FARE_PER_KM;
                    setFare(calculatedFare);
                    const bounds = new google.maps.LatLngBounds();
                    bounds.extend(route.start_location);
                    bounds.extend(route.end_location);
                    map?.fitBounds(bounds);
                } else {
                    console.error(`Error fetching directions: ${result}`);
                }
            });
        }
    };

    const handleConfirmBooking = () => {
        alert(`Booking confirmed from ${pickUpLocation} to ${dropOffLocation}. Fare: $${fare?.toFixed(2)}`);
    };

    const handleClearMarkers = () => {
        setPickupMarker(null);
        setDropoffMarker(null);
        setPickUpLocation("");
        setDropOffLocation("");
        setDirections(null);
        setDistance(null);
        setDuration(null);
        setFare(null);
    };

    const startIcon = "https://maps.google.com/mapfiles/kml/paddle/grn-circle.png";
    const endIcon = "https://maps.google.com/mapfiles/kml/paddle/red-circle.png";
    const clearIcon = "https://maps.google.com/mapfiles/kml/paddle/wht-circle.png";

    return (
        <div className="w-full relative mt-8 space-y-8">
            <form className="rounded-[40px] xl:rounded-[49px] rounded-t-2xl xl:rounded-t-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 p-4 lg:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                    {/* Pickup Location Input and Button */}
                    <div className="flex items-center flex-1 space-x-2">
                        <LocationInput
                            placeHolder="City or Airport"
                            desc="Pick up location"
                            className="flex-1"
                            onChange={(value) => setPickUpLocation(value?.formatted_address || null)}
                        />
                        <button
                            type="button"
                            aria-label="Mark Location"
                            onClick={() => setActiveLocationInput("pickup")}
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Mark on Map
                        </button>
                    </div>

                    {/* Drop-off Location Input and Button (if applicable) */}
                    {dropOffLocationType === "different" && (
                        <div className="flex items-center flex-1 space-x-2">
                            <div className="hidden lg:block border-r border-slate-200 dark:border-slate-700 h-8"></div>
                            <LocationInput
                                placeHolder="City or Airport"
                                desc="Drop off location"
                                className="flex-1"
                                divHideVerticalLineClass="-inset-x-0.5"
                                onChange={(value) => setDropOffLocation(value?.formatted_address || null)}
                            />
                            <button
                                type="button"
                                aria-label="Mark On Map"
                                onClick={() => setActiveLocationInput("dropoff")}
                                className="bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                Mark on Map
                            </button>
                        </div>
                    )}

                    {/* Date Input */}
                    <DateSingleInput
                        onChange={(dateRange) => setSelectedDate(dateRange.startDate || null)}
                    />

                    {/* Submit Button */}
                    <SearchSubmitButton className="mt-2 lg:mt-0" onClick={handleSearchClick} />
                </div>
            </form>

            {isLoaded ? (
                <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
                    {/* Map Section */}
                    <div className="flex-1 bg-white dark:bg-neutral-800 p-4 lg:p-6 rounded-[40px] shadow-xl dark:shadow-2xl">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={zoom}
                            onLoad={onLoad}
                            onClick={handleMapClick}
                        >
                            {userLocation && <Marker position={userLocation} title="Your location" />}
                            {pickupMarker && <Marker position={pickupMarker} icon={startIcon} title="Pick-up Location" />}
                            {dropoffMarker && <Marker position={dropoffMarker} icon={endIcon} title="Drop-off Location" />}
                            {directions && <DirectionsRenderer directions={directions} />}
                        </GoogleMap>
                    </div>

                    {/* Route Details Section */}
                    <div className="w-full lg:w-[270px] max-w-full bg-white dark:bg-neutral-700 p-4 lg:p-6 rounded-[40px] shadow-xl dark:shadow-2xl">
                        <h3 className="text-xl">Route Details</h3>
                        {route && (
                            <>
                                <p>Start Address: {route.start_address}</p>
                                <p>End Address: {route.end_address}</p>
                                <p>Distance: {distance}</p>
                                <p>Duration: {duration}</p>
                                <p>Estimated Fare: ${fare?.toFixed(2)}</p>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );

};

export default RentalCarSearchForm;
