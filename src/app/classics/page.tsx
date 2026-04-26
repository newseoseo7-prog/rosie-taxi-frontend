import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism"
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import Head from "next/head";
import schemaData from "@/app/schema";
import ThreeColumnText from "@/components/ThreeColumnText";
import {FaCar, FaClock, FaPlaneDeparture} from "react-icons/fa";
import ImageGrid from "@/components/ImageGrid";
import { IconType } from 'react-icons';

export async function generateMetadata() {
    return {
        title: "Transportation service from ventura to LAX | Rosie Taxi Cab",
        description: "Reliable Ventura taxi service to LAX, Burbank & SBA airports. Local Ventura County rides available 24/7. Save 20% - Book online or call (805) 258-8937!",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-ventura/',
        },
        openGraph: {
            title: "Ventura Taxi Service 24/7 | Fast LAX & Santa Barbara Airport Rides | Rosie Taxi Cab",
            description: "Top-rated Ventura taxi for airport transfers to LAX, Burbank (BOB) & Santa Barbara (SBA). Serving Ventura County 24/7. Call (805) 258-8937 now!",
            url: 'https://new.rosietaxicab.com/taxi-cab-ventura/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
                    alt: 'Ventura Taxi Cab at LAX Airport',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Ventura Taxi Service 24/7 | Fast LAX & Santa Barbara Airport Rides | Rosie Taxi Cab",
            description: "Top-rated Ventura taxi for airport transfers to LAX, Burbank (BOB) & Santa Barbara (SBA). Serving Ventura County 24/7. Call (805) 258-8937 now!",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg'],
            label1: 'Time to read',
            data1: '7 minutes'
        },
        other: {
            'og:updated_time': '2024-07-26T11:59:32-07:00',
        }
    };
}

function PageHome() {
     const galleryImages = [
        {
            src: '/images/classics_1.webp',
            alt: 'LOS ANGELES',
            caption: 'LOS ANGELES',
            url: '/losangeles'
        },
        {
            src: '/images/hollywood.webp',
            caption: 'HOLLYWOOD',
            url: '/taxi-cab-hollywood'
        },
        {
            src: '/images/santa_monica.webp',
            caption: 'SANTA MONICA',
            url: 'https://www.tripadvisor.com/Attractions-g33052-Activities-Santa_Monica_California.html'
        },
        {
            src: '/images/TheGettyCenter.webp',
            caption: 'THE GETTY MUSEUM',
            url: 'https://www.getty.edu/visit/center/'
        },
        {
            src: '/images/Malibu.webp',
            caption: 'MALIBU',
            url: '/taxi-cab-malibu'
        },
        {
            src: '/images/Sandiego-CA.webp',
            caption: 'SAN DIEGO',
            url: 'https://www.tripadvisor.com/Attractions-g60750-Activities-San_Diego_California.html'
        },
        // Add more images as needed
    ];
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <main className="nc-PageHome relative overflow-hidden  dark:bg-neutral-900 dark:text-white">
                {/* GLASSMOPHIN */}
                <BgGlassmorphism />

                <div className="container relative space-y-16 mb-24 lg:space-y-28 lg:mb-28">
                    {/* SECTION HERO */}
                    <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16 "/>
                    <ImageGrid
                        gridTitle="THE CLASSICS "
                        gridSubtitle="Discover the most classic places to visit in California "
                        images={galleryImages}
                    />
                    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                Our Services
                            </h2>
                            <p className="mt-3 text-xl text-gray-500">
                                Premium transportation solutions tailored to your needs
                            </p>
                        </div>

                        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                    Our Services
                                </h2>
                                <p className="mt-3 text-xl text-gray-500">
                                    Premium transportation solutions tailored to your needs
                                </p>
                            </div>


                            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        AIRPORT TRANSFERS
                                    </h3>
                                    <p className="text-base text-gray-500">
                                        We offer comprehensive airport transportation options.
                                    </p>
                                </div>


                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M19 17h2c.55 0 1 .45 1 1s-.45 1-1 1h-2v-2zm-8 0h2v2h-2v-2zm-4 0h2v2H7v-2zm-4 0h2v2H3v-2zm0-2h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1s.45 1 1 1zm1-6h2v2H4V9zm0-4h2v2H4V5zm0 8h2v2H4v-2zm4-8h2v2H8V5zm0 4h2v2H8V9zm0 8h2v2H8v-2zm4-12h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V9zm0-4h2v2h-2V5zm0 8h2v2h-2v-2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        PREMIUM VEHICLES
                                    </h3>
                                    <p className="text-base text-gray-500">
                                        Our eco-friendly vehicles are maintained to the highest standards.
                                    </p>
                                </div>


                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className="flex items-center justify-center h-12 w-12 rounded-md text-indigo-500 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                                             viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        TIME MAINTENANCE
                                    </h3>
                                    <p className="text-base text-gray-500">
                                        We prioritize punctuality for all your transportation needs.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 font-sans">
                        <a href="https://www.lapl.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Los Angeles Public Library
                        </a>
                        <a href="https://sfpl.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            San Francisco Public Library
                        </a>
                        <a href="https://www.sandiego.gov/public-library" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            San Diego Public Library
                        </a>
                        <a href="https://www.saclibrary.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Sacramento Public Library
                        </a>
                        <a href="https://oaklandlibrary.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Oakland Public Library
                        </a>
                        <a href="https://www.fresnolibrary.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Fresno County Public Library
                        </a>
                        <a href="https://www.sjpl.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            San Jose Public Library
                        </a>
                        <a href="https://www.longbeach.gov/library" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Long Beach Public Library
                        </a>
                        <a href="https://sccld.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Santa Clara County Library District
                        </a>
                        <a href="https://www.cityofpasadena.net/library/" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                        Pasadena Public Library
                        </a>
                        <a href="https://www.berkeleypubliclibrary.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Berkeley Public Library
                        </a>
                        <a href="https://www.riversideca.gov/library/" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Riverside Public Library
                        </a>
                        <a href="https://ocpl.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Orange County Public Libraries
                        </a>
                        <a href="https://www.vencolibrary.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            Ventura County Library
                        </a>
                        <a href="https://smcl.org" target="_blank"
                           className="block bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-gray-800 no-underline">
                            San Mateo County Libraries
                        </a>
                    </div>

                </div>
            </main>

        </>

    );
}

export default PageHome;
