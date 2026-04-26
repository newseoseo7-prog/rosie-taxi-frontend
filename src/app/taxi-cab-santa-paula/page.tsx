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
        title: "Santa Paula Taxi Service | 24/7 Farm-to-Airport Rides | Rosie Taxi Cab",
        description: "Reliable Santa Paula taxi service to LAX, Burbank & Santa Barbara airports. Serving agricultural communities & oil fields 24/7.",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-santa-paula/',
        },
        openGraph: {
            title: "Santa Paula Taxi Service | 24/7 Farm-to-Airport Rides | Rosie Taxi Cab",
            description: "Trusted Santa Paula taxi for airport runs to LAX/BOB/SBA, oil field commutes, and farm community transportation. 24/7 service with agricultural discounts.",
            url: 'https://new.rosietaxicab.com/taxi-cab-santa-paula/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
                    alt: 'Santa Paula Taxi at Citrus Farms',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Santa Paula Taxi Service | 24/7 Farm-to-Airport Rides | Rosie Taxi Cab",
            description: "Trusted Santa Paula taxi for airport runs to LAX/BOB/SBA, oil field commutes, and farm community transportation. 24/7 service with agricultural discounts.",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg'],
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
          question: "How far is Santa Paula from LAX ? ",
          answer: "The drive from Santa Paula to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in Santa Paula ?",
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
          question: "how to find a good taxi near Santa Paula CA ? ",
          answer: `You see most of the mediocre transportation companies in Santa Paula are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Santa Paula CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Santa Paula to LAX', href: '#' },
        { name: ' Transportation service from Santa Paula to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Santa Paula to SBA', href: '#' },
        { name: 'Transportation service from Santa Paula to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Santa Paula to Los Angeles', href: '#' },
        { name: 'Transportation service from Santa Paula to Hollywood', href: '#' },
        { name: 'Transportation service from Santa Paula to Burbank', href: '#' },
        { name: 'Transportation service from Santa Paula to Disney Land', href: '#' },
        { name: 'Transportation service from Santa Paula to Universal Studios', href: '#' },
        { name: 'Transportation service from Santa Paula to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Santa Paula to San Diego', href: '#' },
        { name: 'Transportation service from Santa Paula to Westlake Village', href: '#' },
        { name: 'Transportation service from Santa Paula to Santa Monica', href: '#' },
        { name: 'Transportation service from Santa Paula to Holmby Hills', href: '#' },
        { name: 'Transportation service from Santa Paula to Malibu', href: '#' },
      ]


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


                    <HashTags text="
                    #I Need A Ride #Private Car #Reliable Taxi #Santa Paula To LAX #Santa Paula Taxi #Ventura CA #Oxnard #Camarillo #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Woodland Hills #Malibu #Los Angeles #Beverly Hills

                    "/>
                    <>
                        {/* California Oil Museum Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Discover Things To Do In Santa Paula"
                            text={
                                <>
                                    <p>Top attractions include the California Oil Museum, the Santa Paula Theater
                                        Center, the Floating Granite Ball, and the Aviation Museum of Santa Paula, along
                                        with recreational pursuits such as a round of golf at the Mountain View Golf
                                        Course or a visit to Faulkner Farm.</p>

                                </>
                            }
                            image="/images/90E186EE-6A03-40C4-B6EB-DB21B29FE454.webp"  // Replace with actual California Oil Museum image URL
                            imagePosition="right"
                            buttons={[
                                {
                                    url: "https://www.tripadvisor.com/Attractions-g33053-Activities-Santa_Paula_California.html",
                                    text: "Things To Do"
                                },

                            ]}
                        />
                        <AirportTransportationList items={ [
                            { label: 'Santa Paula to LAX' },
                            { label: 'Santa Paula to BOB' },
                            { label: 'Santa Paula to SBA' },
                            { label: 'Santa Paula to Los Angeles' },
                        ]} />

                        {/* Santa Paula Train Depot Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="BENEFITS OF CHOOSING TAXI CAB SANTA PAULA "
                            text={
                                <>
                                    <p>AIRPORT TRANSPORTATION FROM SANTA PAULA TO LAX, BOB, SBA</p>

                                    <ul className="space-y-4 mt-10 list-inside list-disc">
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="01" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        YES. Rosie Taxi Cab is very Reliable for Airport transportation from Santa Paula or any other City to LAX, BOB, SBA, or any other Airport in California. We do understand that your trip is crucial and our taxi cabs are here to help you to get on time and style to your destination. Note! Allow always 2 hrs at least before your flight departure.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="02" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        YES, WE ACCEPT ALL MAJOR CREDIT/DEBIT CARDS
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="03" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        SAVE MONEY AND TIME. All Passengers in our taxi cab Santa Paula ride for the price of one.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="04" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        YES, WE MATCH OR BEAT ANY LOCAL CAB PRICES. We have competitive flat rates in local areas in Santa Paula, Ojai, Oxnard, Camarillo, Port Hueneme, Santa Paula,  Somis, Moorpark, Newbury Park, And Thousand Oaks and to Major Airports.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="05" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        YES, WE USE ONLY ECO-FRIENDLY CABS. We use Clean Eco Prius Cabs. Environmentally friendly to reduce our Carbon Footprint From Driving.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="06" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        BE CAREFUL AVOID A DUI! Taxi Cab Santa Paula help drunk people to be safe. Rosie Taxi Cab stays at your demand 24/7 going to or from any local bars in any city. Don’t Drink And Drive Call Rosie Taxi Cab and a Driver will there promptly to ensure your safety while going home.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="07" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        SAFETY IS CRUCIAL AT ROSIE TAXI CAB.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="08" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        All vehicles undergo safety and meter inspections. Drivers are required to take extensive training, including street navigation, and are subject to background checks, drug and alcohol checks. Our taxis are insured and inspected.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="09" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        INSURED CABS. Taxi Cab Santa Paula carries a premium general liability with 1 million endorsements to make sure our clienteles are safe and insured riding with us locally in Santa Paula and outside any City.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="10" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        MEDICAL APPOINTMENTS. NEMT TRANSPORTATION.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="11" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Arrive at the doctor on time and relaxed with Rosie Taxi Cab. Our reliable drivers take you to and from any medical facilities for your appointments within Ventura’s County.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="12" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        MAKING SANTA PAULA MOBILITY EVEN BETTER. YES. Rosie Taxi Cab ensures to make mobility between each city way better. We do understand that not every customer lives close to a Train Station or a Bus Station in general or close to his work’s place especially. Indeed, Rosie Taxi Cab has been helping thousand and thousand of customers and commuters to better work and better health transportation overall.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="13" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        CORPORATE ACCOUNTS. Interested to establish an account for your company with Rosie Taxi Cab? We have a fleet and drivers that can help your business to excel in Ventura’s County. Call Customer Service (805) 258-8937 for more details.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="14" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        You are supporting your local taxi drivers by using their service.
                        </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="15" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        If you lose an item in the cab, you may quickly recovery it by calling us.
                        </span>
                                        </li>
                                    </ul>

                                </>
                            }
                            image={""}
                            imagePosition="left"
                            buttons={[
                                {
                                    url: "https://www.tripadvisor.com/Attractions-g33053-Activities-Santa_Paula_California.html",
                                    text: "Things To Do"
                                },

                            ]}
                        />


                    </>
                    <div className="p-4">
                        <EventsDisplay city="Santa Paula" />
                    </div>
                    <TwoColumnFAQ faqItems={faqItems}/>
                    <PageEndLinks routes={routes}/>


                    <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">
                            Book a Taxi Cab in Santa Paula – Ride with Rosie Taxi Cab 24/7
                        </h1>

                        <p className="text-gray-700 mb-4">
                            Need a fast and reliable Santa Paula taxi service? Rosie Taxi Cab offers professional, around-the-clock transportation across Santa Paula and surrounding areas. Whether you're commuting locally or heading to the airport, Rosie ensures safe, timely, and affordable rides—day or night.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            24/7 Taxi Cab Services in Santa Paula
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Searching for a taxi near Santa Paula or wondering if there’s a cab near me open now? Rosie Taxi Cab operates 24/7 with friendly drivers and well-maintained vehicles. Unlike Uber or Lyft, there are no surge prices, and we know Santa Paula’s neighborhoods—from downtown to the citrus groves.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            Airport Transportation from Santa Paula
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Traveling to or from the airport? Rosie Taxi Cab offers dependable, flat-rate service to major airports like LAX, Burbank, and Santa Barbara. Whether you need early morning pickup or a late-night drop-off, our Santa Paula to airport taxi service has you covered.
                        </p>

                        <p className="text-gray-700 mb-3">Our most requested airport routes include:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Taxi Santa Paula to LAX</li>
                            <li>Santa Paula cab to Burbank Airport</li>
                            <li>Santa Paula to Santa Barbara Airport transportation</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            How to Book with Rosie Taxi Cab
                        </h2>
                        <p className="text-gray-700 mb-3">Booking a ride in Santa Paula is easy. Just:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Call Rosie Taxi Cab for on-demand or scheduled rides</li>
                            <li>Visit our website to reserve your ride online</li>
                            <li>Search Santa Paula taxi near me and select Rosie from the results</li>
                        </ul>

                        <p className="text-gray-700 mb-4">
                            Unlike Uber Santa Paula or Lyft Santa Paula, Rosie offers transparent pricing and local drivers who know the area well—ensuring smooth, safe rides every time.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            Why Choose Rosie Taxi Cab?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Rosie Taxi Cab is the trusted choice for cab service in Santa Paula. We take pride in our customer-first approach, offering reliable service whether you're heading to a doctor's appointment, commuting to work, or catching a flight.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Our experienced drivers are courteous, professional, and familiar with the city and surrounding areas—so you can relax and enjoy the ride.
                        </p>

                        <p className="text-gray-800 italic">
                            Don’t wait—book your ride with Rosie Taxi Cab today for the best taxi service in Santa Paula. Reliable. Local. 24/7.
                        </p>
                    </article>


                </div>
            </main>

        </>
    );
 }

export default PageHome;
