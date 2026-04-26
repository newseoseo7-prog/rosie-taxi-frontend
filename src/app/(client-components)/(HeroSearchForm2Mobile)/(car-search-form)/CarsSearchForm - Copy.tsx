"use client";
import converSelectedDateToString from "@/utils/converSelectedDateToString";
import React, { useState } from "react";
import DatesRangeInput from "../DatesRangeInput";
import LocationInput from "../LocationInput";
import {log} from "next/dist/server/typescript/utils";
import StayDatesRangeInput from "../DatesRangeInput";
import {Route} from "next";
import {useRouter} from "next/navigation";

interface LocationResult {
    place_id: string;
    formatted_address: string;
    name: string;
    lat: number;
    lng: number;
}

const CarsSearchForm = () => {
    const [fieldNameShow, setFieldNameShow] = useState<
        "locationPickup" | "locationDropoff" | "dates" | null
    >("locationPickup");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [locationInputPickUp, setLocationInputPickUp] = useState<LocationResult | null>(
        null
    );
    const [locationInputDropOff, setLocationInputDropOff] = useState<LocationResult | null>(
        null
    );

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');

    const [dropOffLocationType, setDropOffLocationType] = useState<"different">(
        "different"
    );

    const submitCarSearchForm = async () => {
        setError(null); // Reset error state
        setIsLoading(true); // Set loading state

        // Ensure necessary data is present
        if (!locationInputPickUp || !locationInputDropOff || !startDate || !endDate) {
            setError("All fields are required!");
            setIsLoading(false);
            return;
        }

        const payload = {
            pickupLocation: {
                place_id: locationInputPickUp.place_id,
                address: locationInputPickUp.name,
                lat: locationInputPickUp.lat,
                lng: locationInputPickUp.lng,
            },
            dropoffLocation: {
                place_id: locationInputDropOff.place_id,
                address: locationInputDropOff.name,
                lat: locationInputDropOff.lat,
                lng: locationInputDropOff.lng,
            },
            startDate: startDate.toISOString(),
            time: selectedTime,
            endDate: endDate.toISOString(),
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
            let booking_id = data.booking_id;
            router.push(`/bookings?id=${data.id}` as Route);
        } catch (err) {
            console.error("Error submitting search:", err);
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    const renderInputLocationPickup = () => {
        const isActive = fieldNameShow === "locationPickup";
        return (
            <div
                className={`w-full bg-white dark:bg-neutral-800 dark:text-white ${
                    isActive
                        ? "rounded-2xl shadow-lg"
                        : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
                }`}
            >
                {!isActive ? (
                    <button
                        className="w-full flex justify-between text-sm font-medium p-4"
                        onClick={() => setFieldNameShow("locationPickup")}
                        aria-label="pick_location"
                        disabled={isLoading}
                    >
                        <span className="text-neutral-400">Pick up</span>
                        <span>{locationInputPickUp?.name || "Location"}</span>
                    </button>
                ) : (
                    <LocationInput
                        headingText="Pick up?"
                        placeholder="Pick up address, hotels, airports"
                        defaultValue={locationInputPickUp?.name || ""}
                        onChange={(value) => {
                            setLocationInputPickUp(value);
                            if (dropOffLocationType === "different") {
                                setFieldNameShow("locationDropoff");
                            } else {
                                setFieldNameShow("dates");
                            }
                        }}
                        disabled={isLoading}
                    />
                )}
            </div>
        );
    };

    const renderInputLocationDropoff = () => {
        const isActive = fieldNameShow === "locationDropoff";
        return (
            <div
                className={`w-full bg-white dark:bg-neutral-800  dark:text-white ${
                    isActive
                        ? "rounded-2xl shadow-lg"
                        : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
                }`}
            >
                {!isActive ? (
                    <button
                        className="w-full flex justify-between text-sm font-medium p-4"
                        onClick={() => setFieldNameShow("locationDropoff")}
                        aria-label="drop off location"
                        disabled={isLoading}
                    >
                        <span className="text-neutral-400">Drop off</span>
                        <span>{locationInputDropOff?.name || "Location"}</span>
                    </button>
                ) : (
                    <LocationInput
                        headingText="Drop off?"
                        defaultValue={locationInputDropOff?.name || ""}
                        onChange={(value) => {
                            setLocationInputDropOff(value);
                            setFieldNameShow("dates");
                        }}
                        disabled={isLoading}
                    />
                )}
            </div>
        );
    };

    const renderInputDates = () => {
        const isActive = fieldNameShow === "dates";
        const [startDate, setStartDate] = useState<Date | null>(new Date());
        const [endDate, setEndDate] = useState<Date | null>(null);
      //  const [selectedTime, setSelectedTime] = useState<string>("");

        const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedTime(e.target.value);
        };

        const generateTimeOptions = () => {
            const options = [];
            const now = new Date();

            for (let i = 0; i <= 16; i++) {
                const optionTime = new Date(now.getTime() + i * 15 * 60 * 1000);
                const hours = optionTime.getHours();
                const minutes = optionTime.getMinutes().toString().padStart(2, "0");
                const period = hours >= 12 ? "PM" : "AM";
                const formattedHours = ((hours + 11) % 12) + 1;
                options.push(`${formattedHours}:${minutes} ${period}`);
            }

            return options;
        };

        return (
            <div
                className={`w-full px- bg-white  dark:text-white dark:bg-neutral-800 flex justify-between items-center ${
                    isActive
                        ? "rounded-2xl shadow-lg"
                        : "rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]"
                }`}
            >
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
                            <select
                                value={selectedTime}
                                onChange={handleTimeChange}
                                className="border p-2 rounded-md pr-8 dark:bg-neutral-800 dark:border-black"
                                disabled={isLoading}
                            >
                                <option value="">Select Time</option>
                                {generateTimeOptions().map((time, idx) => (
                                    <option key={idx} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </button>
                ) : (
                    <div className="p-4 mx-auto space-y-4  bg-white dark:bg-neutral-900 inset-0">
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

    return (
        <div  style={{height:"420px"}}>
            <div className="w-full space-y-5">
                {renderInputLocationPickup()}
                {dropOffLocationType === "different" && renderInputLocationDropoff()}
                {renderInputDates()}
            </div>

            {/* Error message display */}
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