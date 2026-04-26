'use client'
import {useRouter, useSearchParams} from 'next/navigation'
import React, {Suspense, useCallback, useEffect, useState} from 'react';
import BgGlassmorphism from "@/components/BgGlassmorphism";
import {DirectionsRenderer, GoogleMap, Marker} from '@react-google-maps/api';

import CardCapture from "@/app/bookings/CardCapture";
import { useGoogleMaps } from "@/components/GoogleMapsProvider";

// Define types more safely
type DirectionsResult = google.maps.DirectionsResult;
type LatLng = google.maps.LatLng;
type Map = google.maps.Map;

interface BookingDetails {
    id: number;
    user_id: string;
    name: string;
    phone: string;
    email: string;
    directions: DirectionsResult;
    pickup_latlng: string;
    drop_off_latlng: string;
    pickup_address: string;
    pickup_address_name: string;
    drop_off_address: string;
    drop_off_address_name: string;
    fare_charges: string;
    discounted_fare: string;
    booking_id: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    payment_mode: string | null;
    payment_id: string | null;
    selected_time: string;
    selected_date: string;
    payment_time: string | null;
    distance: number | null;
    created_at: string;
    updated_at: string;
    aqi:any,
}

// Map configuration
const mapContainerStyle = { width: '100%', height: '400px' };
const defaultCenter = { lat: 34.0522, lng: -118.2437 }; // Default to LA coordinates


function SingleBookingPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get("id");
    const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);
    const [showEditSection, setShowEditSection] = useState(false);
    const [editForm, setEditForm] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        phone: '',
        email: ''
    });

    // Google Maps state
    const [pickUpLocation, setPickUpLocation] = useState<LatLng | null>(null);
    const [dropOffLocation, setDropOffLocation] = useState<LatLng | null>(null);
    const [directions, setDirections] = useState<DirectionsResult | null>(null);
    const [map, setMap] = useState<Map | null>(null);
    const [distance, setDistance] = useState<string | null>(null);
    const [fare, setFare] = useState<number | null>(null);

    const { isLoaded, loadError } = useGoogleMaps();

    useEffect(() => {
        if (!id) return;
        const fetchBookingDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/booking_info/${id}`,{cache:'no-store'});

                if (!response.ok) {
                    throw new Error('Failed to fetch booking details');
                }

                const data = await response.json();
                setBookingDetails(data);
                setEditForm({
                    name: data.name || '',
                    phone: data.phone || '',
                    email: data.email || ''
                });

                if (data.name && data.phone && data.email){
                    setShowEditSection(false)
                }
                else{
                    console.log("No contact details found in")
                    console.log(data)
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchBookingDetails();
    }, [id]);

    useEffect(() => {
        if (bookingDetails && isLoaded && typeof google !== 'undefined') {
            try {
                // Parse pickup location
                const pickupCoords = bookingDetails.pickup_latlng.split(',');
                const pickupLatLng = new google.maps.LatLng(
                    parseFloat(pickupCoords[0]),
                    parseFloat(pickupCoords[1])
                );
                setPickUpLocation(pickupLatLng);

                // Parse dropoff location
                const dropoffCoords = bookingDetails.drop_off_latlng.split(',');
                const dropoffLatLng = new google.maps.LatLng(
                    parseFloat(dropoffCoords[0]),
                    parseFloat(dropoffCoords[1])
                );
                setDropOffLocation(dropoffLatLng);
                setDirections(bookingDetails.directions);

                // Calculate route
                calculateRoute(pickupLatLng, dropoffLatLng);
            } catch (err) {
                console.error("Error parsing location data:", err);
            }
        }
    }, [bookingDetails, isLoaded]);

    const calculateRoute = useCallback((origin: LatLng, destination: LatLng) => {
        if (!isLoaded || typeof google === 'undefined') return;

        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.IMPERIAL
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK && result) {
                    setDirections(result);
                    const route = result.routes[0]?.legs[0];
                    setDistance(route?.distance?.text || null);


                } else {
                    console.error("Error fetching directions", status);
                }
            }
        );
    }, [isLoaded]);

    const onMapLoad = useCallback((mapInstance: Map) => {
        setMap(mapInstance);
        if (pickUpLocation) {
            mapInstance.setCenter(pickUpLocation.toJSON());
        } else {
            mapInstance.setCenter(defaultCenter);
        }
    }, [pickUpLocation]);

    const handlePrintReceipt = () => {
        const printContent = document.getElementById('printable-receipt');
        if (!printContent) return;

        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Receipt for Booking #${bookingDetails?.id}</title>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
                        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #eee; padding-bottom: 20px; }
                        .header h1 { margin: 0; color: #4f46e5; }
                        .header p { margin: 5px 0 0; color: #666; }
                        .details { margin-bottom: 30px; }
                        .detail-row { display: flex; margin-bottom: 10px; }
                        .detail-label { font-weight: bold; width: 150px; }
                        .divider { border-top: 1px dashed #ddd; margin: 20px 0; }
                        .total { font-size: 1.2em; font-weight: bold; text-align: right; }
                        .footer { text-align: center; margin-top: 40px; color: #777; font-size: 0.9em; }
                        @media print {
                            body { padding: 0; }
                            .no-print { display: none; }
                        }
                    </style>
                </head>
                <body>
                    ${printContent.innerHTML}
                </body>
            </html>
        `);

        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    };

    const formatDateTime = (isoString: string | null) => {
        if (!isoString) return 'N/A';
        const date = new Date(isoString);
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatShortDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatTime = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handlePaymentMethodSelect = (method: string) => {
        setSelectedPaymentMethod(method);
        setPaymentError(null);
    };

    // Check if all required contact details are present
    const isContactDetailsComplete = () => {
        return bookingDetails?.name?.trim() && 
               bookingDetails?.phone?.trim() && 
               bookingDetails?.email?.trim();
    };

    // Check if any contact information exists
    const hasAnyContactInfo = () => {
        return bookingDetails?.name?.trim() || 
               bookingDetails?.phone?.trim() || 
               bookingDetails?.email?.trim();
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            phone: '',
            email: ''
        };

        if (!editForm.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!editForm.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            valid = false;
        } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(editForm.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
            valid = false;
        }

        if (!editForm.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editForm.email)) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleEditSubmit = async () => {
        if (!validateForm()) return;

        try {
            setLoading(true);
            const response = await fetch(`/api/booking_info/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    booking_id: id,
                    name: editForm.name,
                    phone: editForm.phone,
                    email: editForm.email
                })
            });

            if (!response.ok) {
                throw new Error('Failed to update booking details');
            }

            const updatedData = await response.json();
            setBookingDetails(updatedData);
            setShowEditSection(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update details');
        } finally {
            setLoading(false);
        }
    };

    const initiatePayment = async () => {
        if (!selectedPaymentMethod || !bookingDetails) return;
        window.location.href = "/pay?id=" + bookingDetails.booking_id;
    };

    if (loading) {
        return (
            <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white min-h-screen flex items-center justify-center">
                <BgGlassmorphism />
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
                    <p className="mt-4 text-lg">Loading booking details...</p>
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white min-h-screen flex items-center justify-center">
                <BgGlassmorphism />
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h3 className="mt-2 text-lg font-medium">Error loading booking</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{error}</p>
                    <div className="mt-6">
                        <button
                            onClick={() => router.push('/')}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Back to Homepage
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    if (!bookingDetails) {
        return (
            <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white min-h-screen flex items-center justify-center">
                <BgGlassmorphism />
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-neutral-700">
                        <svg className="h-6 w-6 text-gray-400 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="mt-2 text-lg font-medium">Booking not found</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">No booking found with ID: {id}</p>
                    <div className="mt-6">
                        <button
                            onClick={() => router.push('/')}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Back to bookings
                        </button>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <>
            <title>Cab Booking Information</title>
            {/* Printable Receipt Content - Hidden in normal view */}
            <div id="printable-receipt" className="hidden">
                <div className="header">
                    <h1>Booking Receipt</h1>
                    <p>Thank you for choosing our service</p>
                </div>

                <div className="details">
                    <div className="detail-row">
                        <div className="detail-label">Booking Number:</div>
                        <div>#{bookingDetails.id}</div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-label">Booking Id:</div>
                        <div>{bookingDetails.id}</div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-label">Date:</div>
                        <div>{formatDateTime(bookingDetails.created_at)}</div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-label">Status:</div>
                        <div className="capitalize">{bookingDetails.status}</div>
                    </div>
                </div>

                <div className="divider"></div>

                <h3>Trip Details</h3>
                <div className="details">
                    <div className="detail-row">
                        <div className="detail-label">Pickup:</div>
                        <div>{bookingDetails.pickup_address}</div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-label">Drop-off:</div>
                        <div>{bookingDetails.drop_off_address}</div>
                    </div>
                    <div className="detail-row">
                        <div className="detail-label">Scheduled Time:</div>
                        <div>{formatDateTime(bookingDetails.selected_time)}</div>
                    </div>
                </div>

                <div className="divider"></div>

                <h3>Payment Information</h3>
                <div className="details">
                    {bookingDetails.payment_mode && (
                        <div className="detail-row">
                            <div className="detail-label">Payment Method:</div>
                            <div className="capitalize">{bookingDetails.payment_mode.replace('_', ' ')}</div>
                        </div>
                    )}
                    {bookingDetails.payment_id && (
                        <div className="detail-row">
                            <div className="detail-label">Transaction ID:</div>
                            <div>{bookingDetails.payment_id}</div>
                        </div>
                    )}
                    {bookingDetails.payment_time && (
                        <div className="detail-row">
                            <div className="detail-label">Paid At:</div>
                            <div>{formatDateTime(bookingDetails.payment_time)}</div>
                        </div>
                    )}
                    <div className="detail-row">
                        <div className="detail-label">Fare:</div>
                        <div>${ parseFloat(bookingDetails.fare_charges).toFixed(2)}</div>
                        <div className="detail-label">Discounted Fare:</div>
                        <div>${ parseFloat(bookingDetails.discounted_fare).toFixed(2)}</div>
                    </div>
                </div>

                <div className="total">
                    Total Paid: ${parseFloat(bookingDetails.discounted_fare).toFixed(2)}
                </div>

                <div className="footer">
                    <p>Thank you for your business!</p>
                    <p>For any questions, please contact our customer support</p>
                </div>
            </div>
            <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white min-h-screen">
                <BgGlassmorphism />



                <div className="container relative py-12 lg:py-16">
                    <div className="flex items-center mb-8">
                        <button
                            onClick={() => router.push('/')}
                            className="flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight">Booking #{bookingDetails.id}</h1>
                            <div className="flex items-center mt-2">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    bookingDetails.status === 'confirmed'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400'
                                        : bookingDetails.status === 'pending'
                                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400'
                                            : bookingDetails.status === 'cancelled'
                                                ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400'
                                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400'
                                }`}>
                                    {bookingDetails.status.charAt(0).toUpperCase() + bookingDetails.status.slice(1)}
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 md:mt-0">
                            {bookingDetails.status === 'confirmed' && (
                                <button
                                    onClick={handlePrintReceipt}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors"
                                >
                                    Print Receipt
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 6l5 5m0 0l-5 5m5-5H4" />
                                    </svg>
                                    Trip Details
                                </h2>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Pickup Date</p>
                                            <p className="font-medium">{formatShortDate(bookingDetails.selected_date)}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Pickup Time</p>
                                            <p className="font-medium">{bookingDetails.selected_time}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Distance</p>
                                            <p className="font-medium">{ bookingDetails.distance } miles</p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Pickup Location</p>
                                                <p className="font-medium">{bookingDetails.pickup_address_name}</p>
                                                <p className="font-medium">{bookingDetails.pickup_address}</p>
                                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                                    Coordinates: {bookingDetails.pickup_latlng}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Drop-off Location</p>
                                                <p className="font-medium">{bookingDetails.drop_off_address_name}</p>
                                                <p className="font-medium">{bookingDetails.drop_off_address}</p>
                                                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                                    Coordinates: {bookingDetails.drop_off_latlng}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Route Map
                                </h2>
                                {loadError ? (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                                        Error loading Google Maps. Please try again later.
                                    </div>
                                ) : !isLoaded ? (
                                    <div className="bg-gray-100 dark:bg-neutral-700 rounded-lg h-64 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
                                            <p className="mt-4 text-gray-500 dark:text-gray-400">Loading map...</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="rounded-lg overflow-hidden">
                                        <GoogleMap
                                            mapContainerStyle={mapContainerStyle}
                                            center={pickUpLocation?.toJSON() || defaultCenter}
                                            zoom={13}
                                            onLoad={onMapLoad}
                                        >
                                            {pickUpLocation && typeof google !== 'undefined' && (
                                                <Marker
                                                    position={pickUpLocation}
                                                    title="Pick-up Location"
                                                    icon={{
                                                        path: google.maps.SymbolPath.CIRCLE,
                                                        scale: 8,
                                                        fillColor: "#34D399",
                                                        fillOpacity: 1,
                                                        strokeWeight: 2,
                                                        strokeColor: "#FFFFFF"
                                                    }}
                                                />
                                            )}
                                            {dropOffLocation && typeof google !== 'undefined' && (
                                                <Marker
                                                    position={dropOffLocation}
                                                    title="Drop-off Location"
                                                    icon={{
                                                        path: google.maps.SymbolPath.CIRCLE,
                                                        scale: 8,
                                                        fillColor: "#EF4444",
                                                        fillOpacity: 1,
                                                        strokeWeight: 2,
                                                        strokeColor: "#FFFFFF"
                                                    }}
                                                />
                                            )}
                                            {directions && <DirectionsRenderer directions={directions} />}
                                        </GoogleMap>
                                    </div>
                                )}

                                {distance && fare && (
                                    <div className="mt-4 grid grid-cols-2 gap-4">
                                        <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Distance</p>
                                            <p className="font-medium">{bookingDetails.distance}</p>
                                        </div>
                                        <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg">
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Fare</p>
                                            <p className="font-medium">${bookingDetails.fare_charges}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {(hasAnyContactInfo() || showEditSection) && (
                                <div data-section="customer-info" className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-semibold flex items-center">
                                            <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                            Customer Information
                                        </h2>
                                        <button
                                            onClick={() => {
                                                if (showEditSection) {
                                                    setEditForm({
                                                        name: bookingDetails.name || '',
                                                        phone: bookingDetails.phone || '',
                                                        email: bookingDetails.email || ''
                                                    });
                                                    setFormErrors({ name: '', phone: '', email: '' });
                                                }
                                                setShowEditSection(!showEditSection);
                                            }}
                                            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                                        >
                                            {showEditSection ? 'Cancel' : 'Edit'}
                                        </button>
                                    </div>
                                    
                                    {!showEditSection && hasAnyContactInfo() ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {bookingDetails.name && (
                                                <div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                                                    <p className="font-medium">{bookingDetails.name}</p>
                                                </div>
                                            )}
                                            {bookingDetails.phone && (
                                                <div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                                    <p className="font-medium">{bookingDetails.phone}</p>
                                                </div>
                                            )}
                                            {bookingDetails.email && (
                                                <div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                                    <p className="font-medium">{bookingDetails.email}</p>
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Booking ID</p>
                                                <p className="font-medium">{bookingDetails.id || 'Not generated'}</p>
                                            </div>
                                        </div>
                                    ) : showEditSection ? (
                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={editForm.name}
                                                    onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                                                    className={`w-full px-3 py-2 border rounded-md ${formErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'}`}
                                                    placeholder="John Doe"
                                                />
                                                {formErrors.name && (
                                                    <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    value={editForm.phone}
                                                    onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                                                    className={`w-full px-3 py-2 border rounded-md ${formErrors.phone ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'}`}
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                                {formErrors.phone && (
                                                    <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={editForm.email}
                                                    onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                                                    className={`w-full px-3 py-2 border rounded-md ${formErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-neutral-600'}`}
                                                    placeholder="john@example.com"
                                                />
                                                {formErrors.email && (
                                                    <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                                                )}
                                            </div>

                                            <div className="flex justify-end space-x-3 pt-4">
                                                <button
                                                    onClick={handleEditSubmit}
                                                    disabled={loading}
                                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-sm disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                                                >
                                                    {loading ? 'Saving...' : 'Save Details'}
                                                </button>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            )}
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    Payment Information
                                </h2>
                                <div className="space-y-4">
                                    <div className="space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Fare Charges</span>
                                            <span className="text-1xl font-bold text-gray-900 dark:text-white">
      ${parseFloat(bookingDetails.fare_charges).toFixed(2)}
    </span>
                                        </div>

                                        {parseFloat(bookingDetails.fare_charges).toFixed(2) !==
                                            parseFloat(bookingDetails.discounted_fare).toFixed(2) && (
                                                <>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">Discounted Fare</span>
                                                        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-600 dark:text-green-400">
            ${parseFloat(bookingDetails.discounted_fare).toFixed(2)}
          </span>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
        <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">
          You saved ${(parseFloat(bookingDetails.fare_charges) - parseFloat(bookingDetails.discounted_fare)).toFixed(2)}
        </span>
                                                    </div>
                                                </>
                                            )}
                                    </div>
                                    {(bookingDetails.status === 'confirmed' || bookingDetails.status === 'pending') && (
                                        <>
                                            {isContactDetailsComplete() ? (
                                                <a 
                                                    href={`/pay?id=${bookingDetails.booking_id}`}
                                                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-colors text-center block font-medium"
                                                >
                                                    Proceed to Payment
                                                </a>
                                            ) : (
                                                <div className="text-center py-6 px-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                                                    <div className="flex items-center justify-center mb-4">

                                                    </div>
                                                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">
                                                        Contact Details Required
                                                    </h3>
                                                    <p className="text-amber-700 dark:text-amber-300 mb-4">
                                                        Please provide your name, phone number, and email address before proceeding with payment.
                                                    </p>
                                                    <button
                                                        onClick={() => {
                                                            setShowEditSection(true);
                                                            setTimeout(() => {
                                                                const element = document.querySelector('[data-section="customer-info"]');
                                                                if (element) {
                                                                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                                }
                                                            }, 100);
                                                        }}
                                                        className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow-sm transition-colors"
                                                    >
                                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                        Add Contact Details
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {bookingDetails.status === 'cancelled' && (
                                        <div className="text-center py-6 px-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                                            <div className="flex items-center justify-center mb-4">
                                                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                                                Booking Cancelled
                                            </h3>
                                            <p className="text-red-700 dark:text-red-300">
                                                This booking has been cancelled.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>


                            <div className="space-y-6">
                                {/* AQI Section */}
                                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 p-6">
                                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                        Air Quality Index
                                    </h2>
                                    {bookingDetails.aqi ? (
                                        <div className="space-y-4">
                                            {/* Main AQI Display */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Current AQI</span>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="w-4 h-4 rounded-full"
                                                        style={{
                                                            backgroundColor: `rgb(${Math.round(bookingDetails.aqi.indexes[0].color.red * 255)}, 
                                                ${Math.round(bookingDetails.aqi.indexes[0].color.green * 255)}, 
                                                ${Math.round(bookingDetails.aqi.indexes[0].color.blue * 255)})`
                                                        }}
                                                    ></div>
                                                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                        bookingDetails.aqi.indexes[0].aqi <= 50 ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400' :
                                                            bookingDetails.aqi.indexes[0].aqi <= 100 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400' :
                                                                bookingDetails.aqi.indexes[0].aqi <= 150 ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-400' :
                                                                    bookingDetails.aqi.indexes[0].aqi <= 200 ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400' :
                                                                        'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-400'
                                                    }`}>
                                                        {bookingDetails.aqi.indexes[0].aqiDisplay} - {bookingDetails.aqi.indexes[0].category}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Visual AQI Bar */}
                                            <div className="mt-2">
                                                <div className="h-4 w-full rounded-full overflow-hidden bg-gradient-to-r from-green-500 via-yellow-500 to-red-500">
                                                    <div
                                                        className="h-full bg-gray-200 dark:bg-gray-600 relative"
                                                        style={{
                                                            width: `${Math.min(100, (bookingDetails.aqi.indexes[0].aqi / 300) * 100)}%`,
                                                            left: 0
                                                        }}
                                                    >
                                                        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-gray-400"></div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                    <span>0</span>
                                                    <span>50</span>
                                                    <span>100</span>
                                                    <span>150</span>
                                                    <span>200</span>
                                                    <span>300+</span>
                                                </div>
                                            </div>

                                            {/* Pollutant Information */}
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg">
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">Dominant Pollutant</p>
                                                    <p className="font-medium">
                                                        {bookingDetails.aqi.indexes[0].dominantPollutant === 'pm10' ? 'PM10' :
                                                            bookingDetails.aqi.indexes[0].dominantPollutant === 'pm25' ? 'PM2.5' :
                                                                bookingDetails.aqi.indexes[0].dominantPollutant.toUpperCase()}
                                                    </p>
                                                </div>

                                                {bookingDetails.aqi.pollutants && bookingDetails.aqi.pollutants.length > 0 && (
                                                    <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg">
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">Concentration</p>
                                                        <p className="font-medium">
                                                            {bookingDetails.aqi.pollutants[0].concentration.value} µg/m³
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Additional Info */}
                                            <div className="bg-gray-50 dark:bg-neutral-700 p-3 rounded-lg">
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Last updated</p>
                                                <p className="font-medium">{new Date(bookingDetails.aqi.dateTime).toLocaleString()}</p>
                                            </div>

                                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                                <p>The Air Quality Index (AQI) indicates how clean or polluted the air is in your route area.</p>
                                                <p className="mt-1">Scale: {bookingDetails.aqi.indexes[0].displayName}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                                            Air quality data not available for this location
                                        </div>
                                    )}
                                </div>
                            </div>


                            {(bookingDetails.status === 'confirmed' || bookingDetails.status === 'pending') && hasAnyContactInfo() && (
                                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 p-6">
                                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 002.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 00-1.065 2.572c-1.756.426-1.756 2.924 0 3.35a1.724 1.724 0 001.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Actions
                                    </h2>
                                    <div className="space-y-3">

                                        <button
                                            onClick={() => setShowEditSection(true)}
                                            className="w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-gray-800 dark:text-white rounded-lg shadow-sm transition-colors"
                                        >
                                            Edit Contact Details
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default function BookingDetailPage() {
    return (
        <Suspense
            fallback={
                <div className="w-full text-center py-10">
                    Loading booking form...
                </div>
            }
        >
            <SingleBookingPage />
        </Suspense>
    )
}