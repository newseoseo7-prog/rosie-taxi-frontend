import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import Head from "next/head";
import schemaData from "@/app/schema";
import PageEndLinks from "@/components/PageEndLinks";
import ImageGrid from "@/components/ImageGrid";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";

export async function generateMetadata() {
    return {
        title: "Premium Los Angeles Taxi Service | LAX Transfers & Citywide Transportation | Rosie Taxi Cab",
        description: "Reliable luxury taxi service in Los Angeles for business, tourism & special events. Professional drivers, clean vehicles & 24/7 availability for LAX transfers and citywide rides.",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-los-angeles/',
        },
        openGraph: {
            title: "Premium Los Angeles Taxi Service | LAX Transfers & Citywide Transportation | Rosie Taxi Cab",
            description: "Top-rated taxi service covering all of Los Angeles - from Hollywood to Downtown, LAX to Universal Studios. Book your ride today (310) 555-7890",
            url: 'https://rosietaxicab.com/taxi-cab-los-angeles/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://rosietaxicab.com/wp-content/uploads/2023/05/los-angeles-skyline-taxi-service.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://rosietaxicab.com/wp-content/uploads/2023/05/los-angeles-skyline-taxi-service.jpg',
                    alt: 'Professional Taxi Service in Los Angeles',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Premium Los Angeles Taxi Service | LAX Transfers & Citywide Transportation | Rosie Taxi Cab",
            description: "Top-rated taxi service covering all of Los Angeles - from Hollywood to Downtown, LAX to Universal Studios. Book your ride today (310) 555-7890",
            images: ['https://rosietaxicab.twic.pics/https://rosietaxicab.com/wp-content/uploads/2023/05/los-angeles-skyline-taxi-service.jpg'],
            label1: 'Response Time',
            data1: 'Under 20 minutes'
        },
        other: {
            'og:updated_time': '2024-07-26T11:59:32-07:00',
        }
    };
}

function PageHome() {
    const routes = [
        { name: 'Transportation service from Malibu to LAX', href: '#' },
        { name: 'Transportation service from Malibu to BOB AIRPORT', href: '#' },
        { name: 'Transportation service from Malibu to SBA', href: '#' },
        { name: 'Transportation service from Malibu to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Malibu to Los Angeles', href: '#' },
        { name: 'Transportation service from Malibu to Hollywood', href: '#' },
        { name: 'Transportation service from Malibu to Burbank', href: '#' },
        { name: 'Transportation service from Malibu to Disney Land', href: '#' },
        { name: 'Transportation service from Malibu to Universal Studios', href: '#' },
        { name: 'Transportation service from Malibu to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Malibu to San Diego', href: '#' },
        { name: 'Transportation service from Malibu to Westlake Village', href: '#' },
        { name: 'Transportation service from Malibu to Santa Monica', href: '#' },
        { name: 'Transportation service from Malibu to Holmby Hills', href: '#' },
        { name: 'Transportation service from Malibu to Malibu', href: '#' }
    ]

    const galleryImages = [
        {
            src: '/images/malibu/Malibu-Creek-State-Park.jpg.webp',
            alt: 'MALIBU CREEK STATE PARK',
            caption: 'MALIBU CREEK STATE PARK',
            url: 'http://www.malibucreekstatepark.org/'
        },
        {
            src: '/images/malibu/beachfront-room.webp',
            alt: 'NOBU RYOKAN MALIBU',
            caption: 'NOBU RYOKAN MALIBU',
            url: 'https://malibu.nobuhotels.com/'
        },
        {
            src: '/images/malibu/nobu-malibu-ca-exterior-800x533.webp',
            alt: 'Rosie taxi cab open 24/7 provides airport transportation to and from Malibu CA',
            caption: 'NOBU MALIBU',
            url: 'https://www.noburestaurants.com/malibu/home/?utm_source=google&utm_medium=Yext'
        },
        {
            src: '/images/malibu/point-mugu-state-park-3-1536x1024.webp',
            alt: 'POINT MUGU STATE PARK CA',
            caption: 'POINT MUGU STATE PARK',
            url: 'https://www.tripadvisor.com/Attraction_Review-g32907-d129248-Reviews-Point_Mugu_State_Park-Point_Mugu_California.html'
        },
        {
            src: '/images/malibu/Adamson-House.jpg.webp',
            alt: 'ADAMSON HOUSE MUSEUM',
            caption: 'ADAMSON HOUSE MUSEUM',
            url: 'http://www.adamsonhouse.org/main.php'
        },
        {
            src: '/images/malibu/The-getty-center-LA.jpg.webp',
            alt: 'Rosie taxi cab open 24/7 provides airport transportation to and from the getty center ca',
            caption: 'THE GETTY MUSEUM',
            url: 'https://www.getty.edu/visit/center/'
        },
        {
            src: '/images/malibu/Paradise-cove-beach-Malibu-CA.jpg.webp',
            alt: 'Rosie taxi cab open 24/7 provides airport transportation to and from Malibu CA',
            caption: 'PARADISE COVE BEACH',
            url: 'https://www.tripadvisor.com/Attraction_Review-g32676-d272297-Reviews-Paradise_Cove-Malibu_California.html'
        },
        {
            src: '/images/malibu/neptunes-net.webp',
            alt: 'neptunes net',
            caption: 'NEPTUNE\'S NET',
            url: 'https://neptunesnet.com/'
        }
    ];
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>
            <main className="nc-PageHome relative overflow-hidden">
                {/* GLASSMOPHIN */}
                <BgGlassmorphism/>

                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                    {/* SECTION HERO */}
                    <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16"/>

                    <HashTags text="
#I Need A Ride #Private Car #Reliable Taxi #malibu to LAX
#Santa Monica #Los Angeles #Beverly Hills #Oxnard #Camarillo
#Port Hueneme #Rosietaxicab #Thousand Oaks #Westlake Village #Ventura #Paradise Cove Beach #Transportation To LAX
#open 24/7
                "/>

                    <AirportTransportationList items={[
                        {label: 'Malibu to LAX'},
                        {label: 'Malibu to BOB'},
                        {label: 'Malibu  to SBA'},
                        {label: 'Malibu to Los Angeles'},
                    ]}/>
                    <div className="p-4">
                        <EventsDisplay city="Malibu" />
                    </div>
                    <CitiesInfoSection
                        className="leading-6"
                        heading="Things To Do In Malibu"
                        text={
                            <><p>
                                Malibu offers an array of activities — mostly outdoor ones — that are accessible to
                                everyone. Miles of canyon trails, long stretches of sandy beach, and plenty of dining
                                opportunities make Malibu a great place to spend a day, Malibu’s aura of relaxed chic
                                and the majesty of its State Beaches can be enjoyed by any visitor, on any budget. So
                                get ready for some relaxing fun in the sun in one of the most famous beach locales in
                                the world.
                            </p>
                            </>
                        }
                        image="/images/malibu-1.webp"  // Replace with actual Ojai Mission image URL
                        imagePosition="right"

                    />
                    <ImageGrid
                        gridTitle="MALIBU"
                        gridSubtitle="TAKE A PEEK INSIDE OUR WONDER WORLD"
                        images={galleryImages}
                    />
                    <PageEndLinks routes={routes}/>

                </div>

            </main>
        </>
    );
}

export default PageHome;