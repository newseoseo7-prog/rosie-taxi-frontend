'use client'
import {useRouter, useSearchParams} from 'next/navigation'
import React, {Suspense, useEffect, useState} from 'react';
import BgGlassmorphism from "@/components/BgGlassmorphism";
import CardPaymentPage from "@/components/card-payment";

interface BookingDetails {
    id: number;
    name: string;
    phone: string;
    email: string;
    fare_charges: string;
    discounted_fare: string;
    booking_id: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    payment_mode: string | null;
    payment_id: string | null;
    created_at: string;
}


function SingleBookingPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get("id");
    const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchBookingDetails();
    }, [id]);



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
                            <h1 className="text-3xl font-bold tracking-tight">Payment - Booking #{bookingDetails.id}</h1>
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
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                Payment Summary
                            </h2>
                            <div className="space-y-4">
                                <div className="space-y-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">Fare Charges</span>
                                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                                            ${parseFloat(bookingDetails.fare_charges).toFixed(2)}
                                        </span>
                                    </div>

                                    {parseFloat(bookingDetails.fare_charges).toFixed(2) !==
                                        parseFloat(bookingDetails.discounted_fare).toFixed(2) && (
                                            <>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">Discounted Fare</span>
                                                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                                                        ${parseFloat(bookingDetails.discounted_fare).toFixed(2)}
                                                    </span>
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
                                    <CardPaymentPage bookingId={bookingDetails.id} customerName={bookingDetails.name || 'Guest'} />
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