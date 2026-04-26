'use client'

import React, { useEffect, useState } from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";

// Define Flight interface
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

function BurbankAirportPage() {
    const [arrivals, setArrivals] = useState<Flight[]>([]);
    const [departures, setDepartures] = useState<Flight[]>([]);
    const [activeTab, setActiveTab] = useState("arrivals");
    const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
                const arrivalsResponse = await fetch(`/api/flights/burbank?query=arrivals`);
                const arrivalsData = await arrivalsResponse.json();
                setArrivals(arrivalsData.data);

                const departuresResponse = await fetch(`/api/flights/burbank?query=departures`);
                const departuresData = await departuresResponse.json();
                setDepartures(departuresData.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "ArrivedRecovery":
                return "text-green-700 bg-green-100";
            case "Arrived":
                return "text-green-600 bg-green-50";
            case "In Air":
                return "text-blue-600 bg-blue-50";
            case "Delayed":
                return "text-red-600 bg-red-50";
            case "Departed":
                return "text-orange-600 bg-orange-50";
            case "Scheduled":
                return "text-gray-600 bg-gray-50";
            default:
                return "text-gray-800 bg-gray-100";
        }
    };

    const renderTableRows = (flights: Flight[]) => {
        return flights.map((flight, index) => (
            <tr
                key={index}
                className={`cursor-pointer hover:bg-gray-100 transition-all duration-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
                onClick={() => setSelectedFlight(flight)}
            >
                {/* Mobile Columns */}
                <td className="p-3 border text-center lg:hidden text-sm font-medium text-gray-800">
                    {flight.airlineName}
                </td>
                <td className="p-3 border text-center lg:hidden text-sm font-medium text-gray-800">
                    {flight.flightNumber}
                </td>
                <td
                    className={`p-3 border text-center lg:hidden text-sm font-medium rounded ${getStatusColor(
                        flight.flightStatus
                    )}`}
                >
                    {flight.flightStatus}
                </td>
                <td className="p-3 border text-center lg:hidden">
                    <div className="flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600 transition-transform duration-200 group-hover:translate-x-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </td>

                {/* Full Table Columns for Desktop */}
                <td className="hidden lg:table-cell p-3 border text-center">
                    <img src={flight.airlineLogo} alt={flight.airlineName} className="w-12 h-8 mx-auto" />
                    <span className="text-sm font-medium text-gray-800">{flight.airlineName}</span>
                </td>
                <td className="hidden lg:table-cell p-3 border text-center text-sm font-medium text-gray-800">
                    {flight.flightNumber}
                </td>
                <td className="hidden lg:table-cell p-3 border text-center text-sm font-medium text-gray-800">
                    {flight.city}
                </td>
                <td
                    className={`hidden lg:table-cell p-3 border text-center text-sm font-medium rounded ${getStatusColor(
                        flight.flightStatus
                    )}`}
                >
                    {flight.flightStatus}
                </td>
                <td className="hidden lg:table-cell p-3 border text-center text-sm font-medium text-gray-800">
                    {flight.scheduled}
                </td>
                <td className="hidden lg:table-cell p-3 border text-center text-sm font-medium text-gray-800">
                    {flight.arrivalTime}
                </td>
            </tr>
        ));
    };

    return (
        <main className="nc-PageHome relative overflow-hidden">
            <BgGlassmorphism />
            <div className="container relative space-y-5 mt-8 mb-24 lg:space-y-8 lg:mb-8">
                <h1 className="text-3xl font-bold">SOL Flights Schedule</h1>

                {/* Tab Navigation */}
                <div className="tabs mb-4 sm:mb-6 flex border-b border-gray-300">
                    <button
                        aria-label="submit"
                        onClick={() => setActiveTab("arrivals")}
                        className={`flex-1 px-4 py-2 text-lg font-medium transition-all duration-200 rounded-t-lg ${
                            activeTab === "arrivals"
                                ? "bg-blue-400 text-white border-b-4 border-blue-700"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        Arrivals
                    </button>
                    <button
                        aria-label="submit"
                        onClick={() => setActiveTab("departures")}
                        className={`flex-1 px-4 py-2 text-lg font-medium transition-all duration-200 rounded-t-lg ${
                            activeTab === "departures"
                                ? "bg-blue-400 text-white border-b-4 border-blue-600"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        Departures
                    </button>
                </div>

                {/* Table */}
                <div className="tab-content">
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto border border-gray-300">
                            <thead>
                            <tr>
                                {/* Mobile Columns */}
                                <th className="p-2 border text-center lg:hidden text-sm">Airline</th>
                                <th className="p-2 border text-center lg:hidden text-sm">Flight No.</th>
                                <th className="p-2 border text-center lg:hidden text-sm">Status</th>

                                {/* Full Table Columns for Desktop */}
                                <th className="hidden lg:table-cell p-2 border text-center text-sm">Airline</th>
                                <th className="hidden lg:table-cell p-2 border text-center text-sm">Flight No.</th>
                                <th className="hidden lg:table-cell p-2 border text-center text-sm">City</th>
                                <th className="hidden lg:table-cell p-2 border text-center text-sm">Status</th>
                                <th className="hidden lg:table-cell p-2 border text-center text-sm">Scheduled</th>
                                <th className="hidden lg:table-cell p-2 border text-center text-sm">Arrival Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {activeTab === "arrivals"
                                ? renderTableRows(arrivals)
                                : renderTableRows(departures)}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Flight Details Dialog */}
                {selectedFlight && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                            <h2 className="text-xl font-semibold mb-4">Flight Details</h2>
                            <div className="space-y-2">

                                <p>
                                    <strong>Airline:</strong> {selectedFlight.airlineName}
                                </p>
                                <p className="space-y-4">
                                    <strong>Flight Number:</strong> {selectedFlight.flightNumber}
                                </p>
                                <p className="space-y-4">
                                    <strong>Flight Code:</strong> {selectedFlight.flightCode}
                                </p>
                                <p>
                                <strong>City:</strong> {selectedFlight.city}
                                </p>
                                <p>
                                    <strong>Status:</strong> {selectedFlight.flightStatus}
                                </p>
                                <p>
                                    <strong>Scheduled:</strong> {selectedFlight.scheduled}
                                </p>
                                <p>
                                    <strong>Arrival Time:</strong> {selectedFlight.arrivalTime}
                                </p>
                            </div>
                            <button
                                aria-label="submit"
                                onClick={() => setSelectedFlight(null)}
                                className="mt-4 px-8 py-2 rounded-full text-white bg-sky-500 hover:bg-sky-700"

                        >
                            Close
                        </button>
                    </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default BurbankAirportPage;
