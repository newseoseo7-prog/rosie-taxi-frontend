"use client"
import React, { Suspense, useEffect } from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BookingForm from "./booking-form";
import Head from "next/head";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
};

const defaultCenter = {
    lat: 0,
    lng: 0,
};

export default function PageHome() {
    useEffect(() => {
        document.title = "Booking Summary ";
    }, []);

    return (
        <>
            <Head>
                <title>Booking Summary</title>
            </Head>
            <main className="nc-PageHome relative overflow-hidden">
                <BgGlassmorphism />
                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    {/* Wrap the BookingForm component with Suspense */}
                    <Suspense fallback={<div>Loading...</div>}>
                        <BookingForm />
                    </Suspense>
                </div>
            </main>
        </>
    );
}
