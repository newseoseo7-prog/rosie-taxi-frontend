import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import PageEndLinks from "@/components/PageEndLinks";
import TwoColumnFAQ from "@/components/Faq";
import Head from "next/head";
import schemaData from "@/app/schema";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import LaxArrivalGuide from "@/app/lax/LaxArrivalGuide";
export async function generateMetadata() {
    return {
        title: "All you need to know LAX - Rosie Taxi Cab Open 24/7 Order Online Save 20%",
        description: "1. After you've grabbed your luggage go outside the terminal. 2. Look for the complementary free Shuttle Bus marked \"LAX IT\" to take you to zone 31 a",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://rosietaxicab.com'),
        alternates: {
            canonical: '/lax/',
        },
        openGraph: {
            title: "All you need to know LAX - Rosie Taxi Cab Open 24/7 Order Online Save 20%",
            description: "1. After you've grabbed your luggage go outside the terminal. 2. Look for the complementary free Shuttle Bus marked \"LAX IT\" to take you to zone 31 a",
            url: 'https://rosietaxicab.com/lax/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            updatedTime: '2024-09-09T19:06:20-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.com/wp-content/uploads/2023/10/f175e4bb-vector-3.png',
                    secureUrl: 'https://rosietaxicab.com/wp-content/uploads/2023/10/f175e4bb-vector-3.png',
                    width: 333,
                    height: 278,
                    alt: 'Rosie Taxi Cab open 24/7 for any airport transportation',
                    type: 'image/webp'
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "All you need to know LAX - Rosie Taxi Cab Open 24/7 Order Online Save 20%",
            description: "1. After you've grabbed your luggage go outside the terminal. 2. Look for the complementary free Shuttle Bus marked \"LAX IT\" to take you to zone 31 a",
            images: ['https://rosietaxicab.com/wp-content/uploads/2023/10/f175e4bb-vector-3.png'],
            label1: 'Time to read',
            data1: 'Less than a minute'
        },
        other: {
            'og:updated_time': '2024-09-09T19:06:20-07:00',
        }
    };
}

 function PageHome() {
    const faqItems = [
        {
            question: "How far is Los Angeles from LAX?",
            answer: "The drive from Los Angeles to LAX takes about 30-40 minutes depending on traffic."
        },
        {
            question: "How do I order a cab/private car in Los Angeles?",
            answer: "Ordering is simple. Enter your pickup and drop-off location, choose a date and time, and complete your payment online."
        },
        {
            question: "What is the minimum charge to LAX?",
            answer: "The minimum fare to LAX ranges from $40 to $60 depending on traffic and time of day."
        },
        {
            question: "How long does it take to get a driver?",
            answer: "Typically, it takes about 10-15 minutes for a driver to arrive within the city. For locations outside the city, it may take longer."
        },
        {
            question: "Is Rosie Taxi Cab Open 24/7 in Los Angeles?",
            answer: "Yes. We are available 24/7 for your transportation needs, offering reliable and quick service."
        },
        {
            question: "How do I find a good taxi near Los Angeles?",
            answer: "To find a reliable taxi service, check online reviews, the company's ratings, and ensure they have a local presence. Rosie Taxi Cab is well-rated and dependable."
        },
        {
            question: "Do you accept card payments?",
            answer: "Yes, we accept all major credit cards. We are a cashless service for your convenience."
        },
        {
            question: "What cities do you service?",
            answer: "We proudly serve Los Angeles and surrounding areas, as well as other destinations across California."
        },
        {
            question: "Can I call on the same day to go to LAX?",
            answer: "Yes, but we recommend making a reservation for a guaranteed pickup and timely arrival."
        }
    ];

    const routes = [
        { name: 'Transportation service from Los Angeles to LAX', href: '#' },
        { name: 'Transportation service from Los Angeles to Burbank', href: '#' },
        { name: 'Transportation service from Los Angeles to Santa Barbara', href: '#' },
        { name: 'Transportation service from Los Angeles to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Los Angeles to Hollywood', href: '#' },
        { name: 'Transportation service from Los Angeles to Disneyland', href: '#' },
        { name: 'Transportation service from Los Angeles to Universal Studios', href: '#' },
        { name: 'Transportation service from Los Angeles to Rodeo Drive, Beverly Hills', href: '#' },
        { name: 'Transportation service from Los Angeles to Malibu', href: '#' },
    ];

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
                <BgGlassmorphism />


                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
                    <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16"/>

                    <LaxArrivalGuide/>
                </div>
            </main>
        </>
    );
 }

export default PageHome;
