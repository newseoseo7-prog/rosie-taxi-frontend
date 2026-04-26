"use client";
import converSelectedDateToString from "@/utils/converSelectedDateToString";
import React, { useState, useRef, useEffect } from "react";
import StayDatesRangeInput from "../DatesRangeInput";
import { Route } from "next";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import LocationSearch from "@/components/LocationSearch";
import TimeSelect from "@/components/TimeSelect";
import { useGoogleMaps } from "@/components/GoogleMapsProvider";

declare global {
    interface Window {
        google: any;
    }
}

const CarsSearchForm = () => {
    const [fieldNameShow, setFieldNameShow] = useState<
        "locationPickup" | "locationDropoff" | "dates" | null
    >("locationPickup");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // State to store the Google Maps LatLng object for pickup and dropoff
    const [locationInputPickUp, setLocationInputPickUp] = useState<google.maps.LatLng | null>(null);
    const [locationInputDropOff, setLocationInputDropOff] = useState<google.maps.LatLng | null>(null);

    // NEW: State to store the place_id for pickup and dropoff
    const [pickupPlaceId, setPickupPlaceId] = useState<string | null>(null);
    const [dropoffPlaceId, setDropoffPlaceId] = useState<string | null>(null);

    // UPDATED: State to store the combined display string (name + address)
    const [pickupLocationDisplay, setPickupLocationDisplay] = useState<string>("");
    const [pickupAddress, setPickupAddress] = useState<string>("");
    const [dropoffLocationDisplay, setDropoffLocationDisplay] = useState<string>("");
    const [dropoffAddress, setDropoffAddress] = useState<string>("");

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [dropOffLocationType] = useState<"different">("different");

    const handlePlaceSelected = (place: any, isPickup: boolean) => {
         // Construct the display string using both displayName and formattedAddress
         let address = place.formatted_address;

        let displayString = place.name  ;

         if (isPickup) {

            setLocationInputPickUp(place.geometry.location);
            setPickupPlaceId(place.place_id);
            setPickupLocationDisplay(displayString || place.name || "");
            setPickupAddress(address || "");
            setFieldNameShow(dropOffLocationType === "different" ? "locationDropoff" : "dates");
        } else {

            setLocationInputDropOff(place.geometry.location);
            setDropoffPlaceId(place.place_id);
            setDropoffLocationDisplay(displayString || place.name || "");
            setDropoffAddress(address || "");
            setFieldNameShow("dates");
        }
    };

    const renderInputLocationPickup = () => {
        const isActive = fieldNameShow === "locationPickup";
        return (
            <div className={`w-full bg-white dark:bg-neutral-800 dark:text-white ${
                isActive ? "rounded-2xl shadow-lg" : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
            }`}>
                {!isActive ? (
                    <button
                        className="w-full flex justify-between text-sm font-medium p-4"
                        onClick={() => setFieldNameShow("locationPickup")}
                        aria-label="pick_location"
                        disabled={isLoading}
                    >
                        <span className="text-neutral-400">Pick up</span>
                        {/* Display selected pickup location name/address */}
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                            {pickupLocationDisplay || "Select a location"} <br />
                             {pickupAddress  }
                        </span>

                    </button>
                ) : (
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Pick up?</h2>
                        <LocationSearch onPlaceSelect={(place) => handlePlaceSelected(place, true)} />
                    </div>
                )}
            </div>
        );
    };

    const renderInputLocationDropoff = () => {
        const isActive = fieldNameShow === "locationDropoff";
        return (
            <div className={`w-full  bg-white dark:bg-neutral-800 dark:text-white ${
                isActive ? "rounded-2xl shadow-lg" : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
            }`}>
                {!isActive ? (
                    <button
                        className="w-full flex justify-between text-sm font-medium p-4"
                        onClick={() => setFieldNameShow("locationDropoff")}
                        aria-label="drop off location"
                        disabled={isLoading}
                    >
                        <span className="text-neutral-400">Drop off</span>
                        {/* Display selected dropoff location name/address */}
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                            {dropoffLocationDisplay || "Select a location"} <br />
                            {dropoffAddress}
                        </span>
                    </button>
                ) : (
                    <div className="p-4 text-black">
                        <h2 className="text-xl font-semibold mb-4">Drop off?</h2>
                        <LocationSearch onPlaceSelect={(place) => handlePlaceSelected(place, false)} />
                    </div>
                )}
            </div>
        );
    };

    const renderInputDates = () => {
        const isActive = fieldNameShow === "dates";

        const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedTime(e.target.value);
        };

        const generateTimeOptions = () => {
            const options = [];
            const now = new Date();
            const selectedDate = startDate;

            // Check if selected date is today
            const isToday = selectedDate &&
                selectedDate.getDate() === now.getDate() &&
                selectedDate.getMonth() === now.getMonth() &&
                selectedDate.getFullYear() === now.getFullYear();

            if (isToday) {
                // For today - only show times from current hour onwards
                const currentHour = now.getHours();
                const currentMinutes = now.getMinutes();

                // Start from the next quarter hour if current minutes > 45
                let startHour = currentHour;
                let startMinute = Math.ceil(currentMinutes / 15) * 15;
                if (startMinute >= 60) {
                    startHour += 1;
                    startMinute = 0;
                }

                // Generate options for today
                for (let hour = startHour; hour < 24; hour++) {
                    // For the current hour, only include minutes that are in the future
                    const minStart = hour === startHour ? startMinute : 0;

                    for (let minute = minStart; minute < 60; minute += 15) {
                        const period = hour >= 12 ? "PM" : "AM";
                        const displayHour = ((hour + 11) % 12) + 1;
                        const displayMinute = minute.toString().padStart(2, "0");
                        options.push(`${displayHour}:${displayMinute} ${period}`);
                    }
                }
            } else {
                // For future dates - show all possible times (every 15 minutes)
                for (let hour = 0; hour < 24; hour++) {
                    for (let minute = 0; minute < 60; minute += 15) {
                        const period = hour >= 12 ? "PM" : "AM";
                        const displayHour = ((hour + 11) % 12) + 1;
                        const displayMinute = minute.toString().padStart(2, "0");
                        options.push(`${displayHour}:${displayMinute} ${period}`);
                    }
                }
            }

            return options;
        };
        return (
            <div className={`w-full px- bg-white dark:text-white dark:bg-neutral-800 flex justify-between items-center ${
                isActive ? "rounded-2xl shadow-lg" : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
            }`}>
                {!isActive ? (
                    <button
                        className="w-full flex justify-between items-center text-sm font-medium p-4"
                        aria-label="date selection"
                        disabled={isLoading}
                    >
                        <span className="text-neutral-400">When</span>
                        <div className="flex items-center gap-4">
                            <span
                                onClick={() => setFieldNameShow("dates")}
                                className="border py-2.5 px-6 rounded-md border-black"
                            >
                                {startDate
                                    ? converSelectedDateToString([startDate, endDate])
                                    : "Select Date"}
                            </span>
                            <TimeSelect
                                value={selectedTime}
                                onChange={(time) => setSelectedTime(time)}
                                options={generateTimeOptions()}
                                disabled={isLoading || !startDate}
                            />

                        </div>
                    </button>
                ) : (
                    <div className="z-50 p-4 mx-auto space-y-4 bg-white dark:bg-neutral-900 inset-0">
                        <StayDatesRangeInput
                            isRange={false}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(startDate, endDate) => {
                                setStartDate(startDate);
                                setEndDate(endDate);
                            }}
                            disabled={isLoading}
                        />
                        <button
                            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl"
                            onClick={() => setFieldNameShow(null)}
                            aria-label="Confirm Button"
                            disabled={isLoading}
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        );
    };

    // Google Maps is now loaded through the GoogleMapsProvider in the layout

    const submitCarSearchForm = async () => {
        setError(null);
        setIsLoading(true);


        // NEW: Check for place IDs as well
        if (!locationInputPickUp || !locationInputDropOff || !pickupPlaceId || !dropoffPlaceId || !startDate  ) {

            console.log(locationInputPickUp)
            console.log(locationInputDropOff)
            console.log(pickupPlaceId)
            console.log(dropoffPlaceId)
            console.log(startDate)

            setError("All fields are required!");
            setIsLoading(false);
            return;
        }

        const payload = {
            pickupLocation: {
                lat: locationInputPickUp.lat(),
                lng: locationInputPickUp.lng(),
            },
            // NEW: Include place_id in the payload
            pickupPlaceId: pickupPlaceId,
            dropoffLocation: {
                lat: locationInputDropOff.lat(),
                lng: locationInputDropOff.lng(),
            },
            // NEW: Include place_id in the payload
            dropoffPlaceId: dropoffPlaceId,
            startDate: startDate.toISOString(),
            time: selectedTime,
            endDate: endDate?.toISOString(),
            dropOffLocationType,
        };

        try {
            const response = await fetch(`/api/get_summary`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Failed to submit search");
            }

            const data = await response.json();
            router.push(`/bookings?id=${data.id}` as Route);
        } catch (err) {
            console.error("Error submitting search:", err);
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ height: "360px" }}>
            <div className="w-full space-y-5">
                {renderInputLocationPickup()}
                {dropOffLocationType === "different" && renderInputLocationDropoff()}
                {renderInputDates()}
            </div>

            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            <button
                className={`w-full py-3 mt-5 bg-blue-600 text-white rounded-xl flex justify-center items-center ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                onClick={submitCarSearchForm}
                aria-label="search"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        Processing...
                    </>
                ) : (
                    "Submit"
                )}
            </button>
        </div>
    );
};
export default CarsSearchForm;