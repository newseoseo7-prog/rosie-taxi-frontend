import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import Head from "next/head";
import schemaData from "@/app/schema";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";

export async function generateMetadata() {
    return {
        title: "San Diego Taxi Service | 24/7 Airport & Local Rides | Rosie Taxi Cab",
        description: "Fast, reliable San Diego taxi service to SAN Airport, downtown, and surrounding neighborhoods. Available 24/7 for locals, tourists, and business travelers.",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-san-diego/',
        },
        openGraph: {
            title: "San Diego Taxi Service | 24/7 Airport & Local Rides | Rosie Taxi Cab",
            description: "Dependable San Diego taxi to SAN, Gaslamp, beaches & beyond. 24/7 service for travelers, events, and local transport. Book your ride today.",
            url: 'https://new.rosietaxicab.com/taxi-cab-san-diego/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/san-diego-airport-terminal.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/san-diego-airport-terminal.jpg',
                    alt: 'Rosie Taxi Cab at San Diego Airport',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "San Diego Taxi Service | 24/7 Airport & Local Rides | Rosie Taxi Cab",
            description: "Reliable San Diego taxi to SAN Airport, beaches, events & more. Available 24/7 with professional drivers and affordable rates.",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/san-diego-airport-terminal.jpg'],
            label1: 'Time to read',
            data1: '6 minutes'
        },
        other: {
            'og:updated_time': '2024-07-26T11:59:32-07:00',
        }
    };
}

function PageHome() {

    const faqItems = [
        {
            question: "How far is San Diego from LAX?",
            answer: "The drive from San Diego to LAX typically takes around 2 to 2.5 hours, depending on traffic and time of day."
        },
        {
            question: "How do I book a cab or private car in San Diego?",
            answer: "Booking is easy! Simply enter your pickup and drop-off locations in our online booking system, select a date and time, and complete your payment at checkout. You're all set!"
        },
        {
            question: "What is the minimum charge to LAX from San Diego?",
            answer: "Our minimum flat rate to LAX ranges from $250 to $300, depending on travel time, number of passengers, and vehicle type. We charge per car, not per person. For larger groups, we recommend booking an XL car or two standard vehicles."
        },
        {
            question: "How long does it take to get a driver in San Diego?",
            answer: "In most areas of San Diego, you can expect a driver within 10 to 15 minutes. If you're outside the city center, wait times may vary based on distance. Booking online secures your spot in the queue."
        },
        {
            question: "Is Rosie Taxi Cab really available 24/7?",
            answer: "Yes, we operate 24/7 and pride ourselves on fast, reliable service. Unlike traditional taxis that can take 30 minutes or more, we typically arrive within 10–15 minutes. We're also a trusted partner of Lyft Concierge throughout California."
        },
        {
            question: "How can I find a reliable taxi in San Diego?",
            answer: "Look for verified ratings on platforms like TripAdvisor and check real reviews. Many companies claim 5-star service but have limited vehicles. Rosie Taxi Cab has the fleet, experience, and technology to deliver consistent 24/7 service across San Diego."
        },
        {
            question: "Do you accept card payments?",
            answer: "Yes, we accept all major credit and debit cards. Our service is fully cashless for your convenience and security."
        },
        {
            question: "Which cities do you service?",
            answer: "We provide transportation all across California. While we accept last-minute calls, we recommend booking online or by phone for the most reliable experience."
        },
        {
            question: "Can I call the same day for a ride to LAX?",
            answer: "Yes, but we strongly recommend reserving your ride in advance—especially for airport trips. Don’t risk missing your flight with a last-minute booking."
        }
    ];

    const routes = [
        { name: 'Transportation service from San Diego to LAX', href: '#' },
        { name: 'Transportation service from San Diego to Burbank Airport (BUR)', href: '#' },
        { name: 'Transportation service from San Diego to Santa Barbara Airport (SBA)', href: '#' },
        { name: 'Transportation service from San Diego to John Wayne Airport (SNA)', href: '#' },
        { name: 'Transportation service from San Diego to Downtown Los Angeles', href: '#' },
        { name: 'Transportation service from San Diego to Hollywood', href: '#' },
        { name: 'Transportation service from San Diego to Burbank', href: '#' },
        { name: 'Transportation service from San Diego to Disneyland', href: '#' },
        { name: 'Transportation service from San Diego to Universal Studios', href: '#' },
        { name: 'Transportation service from San Diego to Rodeo Drive, Beverly Hills', href: '#' },
        { name: 'Transportation service from San Diego to Westlake Village', href: '#' },
        { name: 'Transportation service from San Diego to Santa Monica', href: '#' },
        { name: 'Transportation service from San Diego to Holmby Hills', href: '#' },
        { name: 'Transportation service from San Diego to Malibu', href: '#' },
        { name: 'Transportation service from San Diego to San Francisco', href: '#' }
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
                {/* GLASSMOPHIN */}
                <BgGlassmorphism />

                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
                    {/* SECTION HERO */}
                    <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16"/>


                    <HashTags
                        title="#San Diego International Airport"
                        text="
#I Need A Ride #Private Car #Reliable Taxi #Transportation To SAN
#open 24/7 #San Diego
#Carlsbad #Airport #Glendale #Burbank #South Pasadena #Montebello #Fullerton
#Malibu #Beverly Hills
                    "/>

                    <>
                        {/* California Oil Museum Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="San Diego International Airport SNA"
                            text={
                                <>
                                    <p>PLANNING YOUR NEXT SAN TRIP LET US ANSWER YOUR QUESTIONS  !

                                        Finding A Reliable Taxi Cab Transportation From Pasadena to SAN Goes Through A set Of Questions As Follows :

                                        – Availability Of the Driver (s)

                                        – Your Flight’s Departure

                                        – Day / Time Of The Travel

                                        Rosie Taxi Cab Can Help You Schedule Your Next SAN Trip Ahead of Time And We Make Sure To Provide You A Reliable Taxi Service In San Diego CA And Surrounding Areas. Let Our Expert Dispatch To Help You Navigate This Process. Give Us A Call For More Details.
                                    </p>

                                </>
                            }
                            image="/images/San-Diego-1.webp"  // Replace with actual California Oil Museum image URL
                            imagePosition="right"
                            buttons={[
                                {
                                    url: "https://www.tripadvisor.com/Attractions-g33053-Activities-Santa_Paula_California.html",
                                    text: "Things To Do"
                                },

                            ]}
                        />
                        <div className="p-4">
                            <EventsDisplay city="San Diego" />
                        </div>
                        <AirportTransportationList items={ [
                            { label: 'San Diego to LAX' },
                            { label: 'San Diego to BOB' },
                            { label: 'San Diego to SBA' },
                            { label: 'San Diego to Los Angeles' },
                        ]} />

                        {/* Santa Paula Train Depot Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Long Beach Airport LGB"
                            text={
                                <>
                                    <p>PLANNING YOUR NEXT SAN TRIP LET US ANSWER YOUR QUESTIONS  !

                                        Finding A Reliable Taxi Cab Transportation From Pasadena to SAN Goes Through A set Of Questions As Follows :

                                        – Availability Of the Driver (s)

                                        – Your Flight’s Departure

                                        – Day / Time Of The Travel

                                        Rosie Taxi Cab Can Help You Schedule Your Next SAN Trip Ahead of Time And We Make Sure To Provide You A Reliable Taxi Service In San Diego CA And Surrounding Areas. Let Our Expert Dispatch To Help You Navigate This Process. Give Us A Call For More Details.

                                    </p>

                                </>
                            }
                            image={"/images/LGB-Monument-Sign.jpg"}
                            imagePosition="left"
                            buttons={[
                                {
                                    url: "https://www.tripadvisor.com/Attractions-g33053-Activities-Santa_Paula_California.html",
                                    text: "Things To Do"
                                },

                            ]}
                        />
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Things To Do In San Diego"
                            text={
                                <>
                                    <p>
                                        There are plenty of passions to pursue in San Diego. We invite you to step outside of your comfort zone and explore new activities while you’re here. You might just find that discovering a new pursuit is an adventure in itself.
                                    </p>

                                </>
                            }
                            image={"/images/San-Diego-CA-768x768.jpg"}
                            imagePosition="right"
                            buttons={[
                                {
                                    url: "https://www.tripadvisor.com/Attractions-g60750-Activities-San_Diego_California.html",
                                    text: "Things To Do"
                                },

                            ]}
                        />
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Places To Stay In San Diego"
                            text={
                                <>
                                    <p>
                                        No matter where you choose to lay your head in San Diego, you’ll find a beautiful and friendly city ready to welcome you to a true Southern California experience. There is a wide diversity of accommodations to consider depending on your trip type and your budget. You can search and filter lodging options on this site by neighborhood and by style – from La Jolla to North Inland and from lavish resorts, to budget-friendly hotels and everything in between.s
                                    </p>

                                </>
                            }
                            image={"/images/san_diago.jpg"}
                            imagePosition="left"
                            buttons={[
                                {
                                    url: "https://www.tripadvisor.com/Hotels-g60750-San_Diego_California-Hotels.html",
                                    text: "Things To Do"
                                },

                            ]}
                        />


                    </>

                    <TwoColumnFAQ faqItems={faqItems}/>
                    <PageEndLinks routes={routes}/>


                </div>
            </main>

        </>
    );
 }

export default PageHome;
