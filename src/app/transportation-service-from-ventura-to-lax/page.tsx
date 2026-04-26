import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism"
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import Head from "next/head";
import schemaData from "@/app/schema";
import AirportTransportationList from "@/components/AirportTransportationList";

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
    const faqItems = [
        {
            question: "How far is Ventura from LAX ? ",
            answer: "The drive from Ventura to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
            question: "how to order a cab / private car in Ventura ?",
            answer: "Ordering online has became easier. First, type in your pick up and drop off location within our booking system, choose a date and time. And make a payment on check out and you’re all set."
        },
        {
            question: "How much is the minimun charge to lax ?",
            answer: "Our minimum charge to lax run from $160 to $200 depending on a lot of factors. Date and time of your travel, how many people, etc. We charge per car a flat rate that can accommodate 4 people. Now for a large party of people we usually suggest 2 cars or 1 XL Car that can fit 6 people."
        },
        {
            question: "how long does it take to get a driver ? ",
            answer: "Between 10 to 15 min in the city. Now if you’re outside the city the pick up time will fluctuate depending on the distance the driver to drive to get at your location. If you order online you won’t lose your place."
        },
        {
            question: "Does Rosie Taxi Cab Open 24/7 is the best ? ",
            answer: "Yes. We are the best transportation company in Ventura’s County. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc."
        },
        {
            question: "how to find a good taxi near Ventura CA ? ",
            answer: `You see most of the mediocre transportation companies in Ventura are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Ventura CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
`
        }
        ,
        {
            question: "Do you take card payment ?",
            answer: `Yes. We take all major cards. We are cashless, we work on demand, we help you design the trip you want and more affordable than the conventional taxis.`
        }
        ,
        {
            question: "What Cities do you service ?",
            answer: `We proudly service all over California 24/7 but we always advise you to make a reservation online or over the phone for prompt and reliable service. We still take spontaneous calls of course but we advise you to make a reservation.`
        }
        ,
        {
            question: "Can i call on same day to go to LAX ? ",
            answer: `Yes. But we highly encourage you to make a reservation online or over the phone. When you have a flight to catch you need to prepare yourself ahead of time. Don’t assume last minute call.`
        }
        ,
        {
            question: "What Cities do you service ?",
            answer: `We proudly service all over California 24/7 but we always advise you to make a reservation online or over the phone for prompt and reliable service. We still take spontaneous calls of course but we advise you to make a reservation.`
        }
    ]

    const routes = [
        { name: 'Transportation service from Ventura to LAX', href: '#' },
        { name: 'Transportation service from Ventura to BOB AIRPORT', href: '#' },
        { name: 'Transportation service from Ventura to SBA', href: '#' },
        { name: 'Transportation service from Ventura to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Ventura to Los Angeles', href: '#' },
        { name: 'Transportation service from Ventura to Hollywood', href: '#' },
        { name: 'Transportation service from Ventura to Burbank', href: '#' },
        { name: 'Transportation service from Ventura to Disney Land', href: '#' },
        { name: 'Transportation service from Ventura to Universal Studios', href: '#' },
        { name: 'Transportation service from Ventura to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Ventura to San Diego', href: '#' },
        { name: 'Transportation service from Ventura to Westlake Village', href: '#' },
        { name: 'Transportation service from Ventura to Santa Monica', href: '#' },
        { name: 'Transportation service from Ventura to Holmby Hills', href: '#' },
        { name: 'Transportation service from Ventura to Malibu', href: '#' }
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
                    <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16 " />
                    {/* Ventura Botanical Gardens Section */}
                    <CitiesInfoSection
                        className="leading-6"
                        heading="TAXI SERVICE AND RIDE SHARE VENTURA CA "
                        text={
                            <>



                                <ul className="space-y-2 mt-6 list-disc list-inside  leading-6">
                                    <li className=" items-start space-x-4">
                                        {/* <Badge name="01" className="mt-1" /> */}
                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                        On-demand 24/7 Just One Click Away SAVE 20%
                        </span>
                                    </li>

                                    <li className=" items-start space-x-4">
                                        {/* <Badge name="02" className="mt-1" /> */}
                                        <span className="text-neutral-700 dark:text-neutral-300">
                                        You’ll find us to be the most reliable taxi service provider in Ventura to LAX.
                        </span>
                                    </li>
                                    <li className=" items-start space-x-4">
                                        {/* <Badge name="03" className="mt-1" /> */}
                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                        Save 20% on every online reservation you make.
                        </span>
                                    </li>
                                    <li className=" items-start space-x-4">
                                        {/* <Badge name="04" className="mt-1" /> */}
                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                        Or cars are Environment Friendly, Go Green!
                        </span>
                                    </li>
                                    <li className=" items-start space-x-4">
                                        {/* <Badge name="05" className="mt-1" /> */}
                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                        Polite and considerate drivers to keep our customers well pleased.
                        </span>
                                    </li>
                                    <li className=" items-start space-x-4">
                                        {/* <Badge name="05" className="mt-1" /> */}
                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                        Share your ride, if you feel like it, to save money.
                        </span>
                                    </li>

                                </ul>



                            </>
                        }
                        image={''}
                        // imagePosition="right"

                    />

                    <AirportTransportationList items={ [
                        { label: 'Ventura to LAX' },
                        { label: 'Ventura to BOB' },
                        { label: 'Ventura to SBA' },
                        { label: 'Ventura to Los Angeles' },
                    ]} />

                    <CitiesInfoSection
                        className="leading-6"
                        heading="Ventura"
                        text={
                            <>


                                <p>#I Need A Ride #Private Car #Reliable Taxi #Ventura To LAX #Ventura CA #Oxnard #Camarillo #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Westlake Village #Malibu #Los Angeles #Beverly Hills </p>


                            </>
                        }
                        image={''}

                    />

                    <>
                        {/* Mission San Buenaventura Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Private Car from Ventura to Los Angeles International Airport LAX "
                            text={
                                <>
                                    {/* <p>TRANSPORTATION FROM VENTURA TO LAX </p> */}

                                    <ul className="space-y-2 mt-6 list-disc list-inside  leading-6">
                                        <li className=" items-start space-x-4">
                                            {/* <Badge name="01" className="mt-1" /> */}
                                            <span className=" text-neutral-700 dark:text-neutral-300">
                                        Want a ride to or from LAX (Los Angeles International Airport), BOB (Burbank Hope Airport), or SBA (Santa Barbra Airport), we’ll take you there !
                        </span>
                                        </li>

                                        <li className=" items-start space-x-4">
                                            {/* <Badge name="02" className="mt-1" /> */}
                                            <span className="text-neutral-700 dark:text-neutral-300">
                                        We’ll make sure we pick you up from the airport on time so no more waiting.
                        </span>
                                        </li>
                                        <li className=" items-start space-x-4">
                                            {/* <Badge name="03" className="mt-1" /> */}
                                            <span className=" text-neutral-700 dark:text-neutral-300">
                                        We’ll make sure to take you to LAX  in time to make it to
                                        your flight with ease.
                        </span>
                                        </li>
                                        <li className=" items-start space-x-4">
                                            {/* <Badge name="04" className="mt-1" /> */}
                                            <span className=" text-neutral-700 dark:text-neutral-300">
                                        Don’t worry about your luggage our transportation service can handle it
                        </span>
                                        </li>
                                        <li className=" items-start space-x-4">
                                            {/* <Badge name="05" className="mt-1" /> */}
                                            <span className=" text-neutral-700 dark:text-neutral-300">
                                        You can count on us!
                        </span>
                                        </li>

                                    </ul>

                                </>
                            }
                            image="https://wallpapers.com/images/hd/lax-terminal-pinkish-sky-h2mkokhezigrcood.jpg"
                            imagePosition="right"

                        />

                        {/* Ventura Pier Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Private Car from Ventura to Burbank Hope Airport BOB "
                            text={
                                <>
                                    <p>PLANNING YOUR NEXT LAX TRIP LET US ANSWER YOUR QUESTIONS!</p>
                                    <p className="mt-4">Finding A Reliable Taxi Cab Transportation From Ventura to LAX Goes Through A set Of Questions As Follows : </p>

                                    <ul className="space-y-2 mt-4 list-inside list-disc">
                                        <li className=" items-start space-x-4">

                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                        Availability Of the Driver (s)
                        </span>
                                        </li>
                                        <li className=" items-start space-x-4">

                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                        Your Flight’s Departure
                        </span>
                                        </li>
                                        <li className=" items-start space-x-4">

                                        <span className="text-neutral-700 dark:text-neutral-300">
                                        Day / Time Of The Travel
                        </span>
                                        </li>

                                    </ul>
                                    <p className="mt-5">
                                        Rosie Taxi Cab Can Help You Schedule Your Next LAX Trip Ahead of Time And We Make Sure To Provide You A Reliable Taxi Service In Ventura And Surrounding Areas. Let Our Expert Dispatch To Help You Navigate This Process. Give Us A Call For More Details.
                                    </p>
                                </>
                            }
                            image="https://ih1.redbubble.net/image.1930918086.2088/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                            imagePosition="left"


                        />

                        {/* Channel Islands National Park Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Private Car from Ventura to Santa Barbara Airport SBA"
                            text={
                                <>
                                    <p >
                                        Rosie Taxi Cab Can Help You Schedule Your Next Burbank Airport Trip Ahead of Time. Using Our Taxi Cab Service Is Guaranteed adn We Encourage Our Customers To Reserve A Cab Rather Calling Last Minute To The Airport. From Our End, We Make Sure To Provide You A Reliable Taxi Service In Ventura And Surrounding Areas.  Give Us A Call And Let Our Expert Dispatch To Help You Navigate This Process.
                                    </p>





                                </>
                            }
                            image="/images/MNLA_FilePhotos_PasadenaValley_0013_16-9.webp"
                            imagePosition="right"

                        />

                        {/* Downtown Ventura Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Taxi Service from Ventura to LAX Airport "
                            text={
                                <>
                                    <p>


                                        Rosie Taxi Cab Can Help You Schedule Your Next Santa Barbara Airport Trip Ahead of Time And We Make Sure To Provide You A Reliable Taxi Service In Ventura And Surrounding Areas. Let Our Expert Dispatch To Help You Navigate This Process. Give  Us A Call For More Details.

                                    </p>
                                    <p>

                                        Rosie Taxi Cab Provides local taxis and private car with UBER/ LYFT CONCIERGE to and from Ventura to LAX Airport.
                                        Our current Pick Up Time is between 10 to 15 min guaranteed on reservation basis
                                        Our reservation approach is very simple as follows : date/time and pick up location and drop off, and a credit / debit card on file.
                                        Keep in mind you have to be at the airport at least 2hrs prior to your flight’s departure, and 3hrs ahead of time for international flights.
                                        Our reservation system goes as first call first serve, and with a priority to Airports.
                                        We’ve a wide selection of regular cars and XL cars 6 people on demand.
                                    </p>





                                    </>
                            }
                            image="/images/SBA-5362.webp"
                            imagePosition="left"

                        />

                        {/* Ventura Botanical Gardens Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Discover Ventura And Things To Do "
                            text={
                                <>
                                    <p>
                                        Ventura is a vibrant town that checks stress and pretense at the door. Its artistic culture, enduring history, and privileged locale is crazy-inviting, very much alive, and refreshingly human.
                                    </p>







                                </>
                            }
                            image="/images/1558C733-25D7-464E-9928-8EF8A1735219.webp"
                            imagePosition="right"
                            buttons={[
                                { url: "https://visitventuraca.com/to-do/", text: "Things To Do" },

                            ]}
                        />

                        <CitiesInfoSection
                            className="leading-6"
                            heading="ALL OUR SERVICES IN ONE PLACE AND ON DEMAD 24/7. OFFERING YOU A GREAT OPTION TO CHOOSE FROM : TAXI SERVICE, AIRPORT SHUTTLE, AND MEDICAL RIDES"
                            text={
                                <>


                                    <p>Rosie Taxi Cab Offers To Book Taxi Rides from Ventura And Surrounding Areas 24/7. We strive to provide top notch customer service all the time. Our priority number one is to provide a reliable taxi service anywhere and anytime in Ventura CA. Find Out Below More Of Our Services </p>


                                </>
                            }
                            image={''}

                        />

                    </>

                    <TwoColumnFAQ faqItems={faqItems} />
                    <PageEndLinks routes={routes} />

                    <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">
                            How to Book a Taxi Cab in Ventura City with Rosie Taxi Cab
                        </h1>

                        <p className="text-gray-700 mb-4">
                            Looking for fast, reliable, and affordable transportation in Ventura? Rosie Taxi Cab is the go-to choice for locals and travelers alike. Whether you're catching a flight or exploring the city, booking a ride with Rosie Taxi Cab ensures a stress-free experience with professional service available 24/7.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            Ventura Taxi Services Available 24/7
                        </h2>
                        <p className="text-gray-700 mb-4">
                            If you're searching for a taxi near me open or taxi near my location, Rosie Taxi Cab has drivers available around the clock. Unlike rideshare apps that surge prices or limit availability, Rosie Taxi Cab provides consistent and dependable service whenever you need it. As a trusted Ventura taxi service and leading cab company in Ventura, Rosie ensures safe, timely, and clean transportation across the city and beyond.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            Rosie Taxi Cab to LAX, Burbank & Santa Barbara Airports
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Need Ventura transportation to LAX? Rosie Taxi Cab offers flat-rate airport transfers for a smooth and on-time journey. Whether it’s a Ventura to LAX by taxi ride, a Taxi Ventura to Burbank trip, or a ride to Santa Barbara, Rosie has you covered. Their private car Ventura to airport open 24/7 service is perfect for early morning or late-night flights.
                        </p>

                        <p className="text-gray-700 mb-3">
                            Traveling from Ventura? Choose Rosie Taxi Cab for routes like:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Taxi Ventura to Burbank airport</li>
                            <li>Ventura taxi cab to Santa Barbara airport</li>
                            <li>Private transportation Ventura to airport</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            How to Book with Rosie Taxi Cab
                        </h2>
                        <p className="text-gray-700 mb-3">Booking your ride is simple. You can:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Call Rosie Taxi Cab directly for instant or scheduled pickups</li>
                            <li>Visit their website to reserve a Ventura taxi cab online</li>
                            <li>Search for taxi cab near Ventura or taxi near me and look for Rosie in your results</li>
                        </ul>

                        <p className="text-gray-700 mb-4">
                            Unlike Uber Ventura or Lyft Ventura, Rosie provides fixed pricing, trained local drivers, and no hidden fees. It’s the smarter choice for quality and comfort.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            Why Choose Rosie Taxi Cab?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            When you say, "I need a taxi to LAX", think Rosie. Every taxi driver Ventura with Rosie is licensed, courteous, and committed to getting you where you need to go—on time and with care.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Whether you’re taking a short trip across town or need long-distance travel to an airport, Rosie offers the best cab service in Ventura. Don’t risk it with unknown companies—go with the name Ventura trusts: Rosie Taxi Cab.
                        </p>

                        <p className="text-gray-800 italic">
                            Need a ride now? Book your Rosie Taxi Cab today for Ventura's most trusted taxi experience.
                        </p>
                    </article>


                </div>
            </main>

        </>

    );
}

export default PageHome;
