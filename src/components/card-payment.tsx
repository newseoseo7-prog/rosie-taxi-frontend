// pages/card-payment.tsx
'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import CardCapture from "@/app/bookings/CardCapture";

interface CardPaymentPageProps {
    bookingId: number;
    customerName?: string;
}

const CardPaymentPage: React.FC<CardPaymentPageProps> = ({ bookingId, customerName }) => {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [acceptLoaded, setAcceptLoaded] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [paymentDetails, setPaymentDetails] = useState<any>(null);

    const fullNameRef = useRef<HTMLInputElement>(null);
    const cardNumberRef = useRef<HTMLInputElement>(null);
    const expiryMonthRef = useRef<HTMLInputElement>(null);
    const expiryYearRef = useRef<HTMLInputElement>(null);
    let AUTHNET_ENVIRONMENT = process.env.NEXT_PUBLIC_AUTHNET_ENVIRONMENT || 'production'


    useEffect(() => {
        const script = document.createElement('script');
        if (AUTHNET_ENVIRONMENT=="test"){
            script.src = 'https://jstest.authorize.net/v1/Accept.js'; // Test environment
        }
        else{
            script.src = 'https://js.authorize.net/v1/Accept.js'; // Test environment
        }
        script.async = true;
        script.onload = () => setAcceptLoaded(true);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Add this function to handle the card data
    const handleCardDataReceived = (data: {
        cardNumber: string;
        expiryMonth: string;
        expiryYear: string;
        fullName: string;
    }) => {
        if (fullNameRef.current) fullNameRef.current.value = data.fullName;
        if (cardNumberRef.current) cardNumberRef.current.value = data.cardNumber;
        if (expiryMonthRef.current) expiryMonthRef.current.value = data.expiryMonth;
        if (expiryYearRef.current) expiryYearRef.current.value = data.expiryYear;

    };


    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setError(null);

        if (!acceptLoaded) {
            setError('Payment system is still loading. Please try again.');
            setIsProcessing(false);
            return;
        }
        try {

            const form = formRef.current!;
            let email = form.email.value.replace(/\s+/g, '')
            let phone = form.phone.value.replace(/\s+/g, '')
            let name = form.fullName.value
            const cardData = {
                cardNumber: form.cardNumber.value.replace(/\s+/g, ''), // Remove spaces
                month: form.expiryMonth.value.padStart(2, '0'), // Ensure 2 digits
                year: form.expiryYear.value,
                cardCode: form.cardCode.value,
                fullName: form.fullName.value,
            };
            let clientkey = process.env.NEXT_PUBLIC_AUTHNET_CLIENT_KEY || 'your_test_client_key'
            let loginId = process.env.NEXT_PUBLIC_AUTHNET_API_LOGIN_ID || 'your_test_api_login'
            console.log("AuthNet Client Key",clientkey)
            console.log("AuthNet loginId",loginId)
            const authData = {
                clientKey: clientkey,
                apiLoginID: loginId,
            };

            window.Accept.dispatchData({ cardData, authData }, (response: any) => {
                if (response.messages.resultCode === 'Error') {
                    setError(`Payment Error: ${response.messages.message[0].text}`);
                    setIsProcessing(false);
                    return;
                }

               // fetch('/api/charge-card/' + bookingId, {
                fetch('/api/pay/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        opaqueData: response.opaqueData,
                        id:bookingId,
                        email:email,
                        phone:phone,
                        name:name
                    }),
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Payment processing failed');
                        }
                        return res.json();
                    })
                    .then(result => {
                        setPaymentDetails(result);
                        setSuccess(true);
                    })
                    .catch(err => {
                        setError(err.message || 'Payment processing failed');
                    })
                    .finally(() => {
                        setIsProcessing(false);
                    });
            });
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred');
            setIsProcessing(false);
        }
    };

    if (success && paymentDetails) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="">
                        <div className="text-center mb-6">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 p-4">
                                <svg
                                    className="h-6 w-6 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            </div>
                            <h2 className="mt-3 text-2xl font-bold text-gray-800">Payment Successful!</h2>
                            <p className="mt-1 text-gray-600">Your booking #{bookingId} is confirmed</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg mb-6 p-4">
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Payment Details</h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                <div>Amount:</div>
                                <div className="text-right font-medium">
                                    ${parseFloat(paymentDetails.amount)?.toFixed(2)}
                                </div>
                                <div>Transaction ID:</div>
                                <div className="text-right font-medium">
                                    {paymentDetails.transactionId || 'N/A'}
                                </div>
                                <div>Status:</div>
                                <div className="text-right font-medium text-green-600">
                                    {paymentDetails.status || 'Approved'}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => router.push(`/bookings?id=${bookingId}`)}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            View Booking Details
                        </button>



                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="p-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">Card Payment</h2>
                        <p className="text-gray-600">Complete your booking #{bookingId}</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-4 bg-red-50 rounded-md">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg
                                        className="h-5 w-5 text-red-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-red-800">{error}</h3>
                                </div>
                            </div>
                        </div>
                    )}



                    <form ref={formRef} onSubmit={handlePayment} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Name on Card
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                required
                                ref={fullNameRef}
                                defaultValue={customerName || ''}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                                Card Number
                            </label>
                            <input
                                id="cardNumber"
                                name="cardNumber"
                                ref={cardNumberRef}
                                type="number"
                                pattern="[0-9]*"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="4242 4242 4242 4242"
                            />
                        </div>

                        <input type="hidden" name="booking_id" value={bookingId} />

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700">
                                    Expiry Month
                                </label>
                                <input
                                    id="expiryMonth"
                                    name="expiryMonth"
                                    type="number"
                                    pattern="[0-9]*"
                                    maxLength={2}
                                    ref={expiryMonthRef}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="MM"
                                />
                            </div>

                            <div>
                                <label htmlFor="expiryYear" className="block text-sm font-medium text-gray-700">
                                    Expiry Year
                                </label>
                                <input
                                    id="expiryYear"
                                    name="expiryYear"
                                    type="number"
                                    pattern="[0-9]*"
                                    ref={expiryYearRef}
                                    maxLength={4}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="YYYY"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="cardCode" className="block text-sm font-medium text-gray-700">
                                CVV
                                <span className="ml-1 text-gray-500 text-xs">(3-4 digits on back of card)</span>
                            </label>
                            <input
                                id="cardCode"
                                name="cardCode"
                                type="number"
                                pattern="[0-9]*"
                                maxLength={4}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="123"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                                <span className="ml-1 text-gray-500 text-xs">(for payment receipt)</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="cardCode" className="block text-sm font-medium text-gray-700">
                                Phone
                                <span className="ml-1 text-gray-500 text-xs">(for contact)</span>
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="+1"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={!acceptLoaded || isProcessing}
                                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${!acceptLoaded || isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'} focus:outline-none focus:ring-2 focus:ring-offset-2`}
                            >
                                {isProcessing ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : acceptLoaded ? (
                                    'Pay Now'
                                ) : (
                                    'Loading Payment...'
                                )}
                            </button>
                        </div>


                    </form>
                    <div className={"mt-4"}>
                        <CardCapture onCardDataReceived={handleCardDataReceived}  />

                    </div>

                    {/* Security Compliance Banner */}
                    <div className="mb-6 mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-blue-800">Secure Payment</h3>
                                <div className="mt-2 text-sm text-blue-700">
                                    <p>
                                        Your payment information is processed securely. We do not store your credit card details.
                                    </p>
                                    <p className="mt-1 flex items-center">
                                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        PCI-DSS compliant
                                    </p>
                                    <p className="mt-1 flex items-center">
                                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        256-bit SSL encryption
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPaymentPage;