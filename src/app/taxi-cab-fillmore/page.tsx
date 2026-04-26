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
        title: "Fillmore Taxi Service 24/7 | Fast Airport Rides to LAX & Burbank | Rosie Taxi Cab",
        description: "Reliable Fillmore taxi service to LAX, BOB & SBA airports. Local & long-distance rides available 24/7. Save 20% on your first booking!",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-fillmore/',
        },
        openGraph: {
            title: "Fillmore Taxi Service 24/7 | Fast Airport Rides to LAX & Burbank | Rosie Taxi Cab",
            description: "Most trusted taxi in Fillmore for airport transfers. Serving LAX, Burbank (BOB) & Santa Barbara (SBA) 24/7. Call (805) 258-8937 today!",
            url: 'https://new.rosietaxicab.com/taxi-cab-fillmore/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
                    alt: 'Fillmore Taxi Cab Airport Service',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Fillmore Taxi Service 24/7 | Fast Airport Rides to LAX & Burbank | Rosie Taxi Cab",
            description: "Most trusted taxi in Fillmore for airport transfers. Serving LAX, Burbank (BOB) & Santa Barbara (SBA) 24/7. Call (805) 258-8937 today!",
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
          question: "How far is Fillmore from LAX ? ",
          answer: "The drive from Fillmore to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in Fillmore ?",
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
          question: "how to find a good taxi near Fillmore CA ? ",
          answer: `You see most of the mediocre transportation companies in Fillmore are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Fillmore CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Fillmore to LAX', href: '#' },
        { name: ' Transportation service from Fillmore to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Fillmore to SBA', href: '#' },
        { name: 'Transportation service from Fillmore to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Fillmore to Los Angeles', href: '#' },
        { name: 'Transportation service from Fillmore to Hollywood', href: '#' },
        { name: 'Transportation service from Fillmore to Burbank', href: '#' },
        { name: 'Transportation service from Fillmore to Disney Land', href: '#' },
        { name: 'Transportation service from Fillmore to Universal Studios', href: '#' },
        { name: 'Transportation service from Fillmore to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Fillmore to San Diego', href: '#' },
        { name: 'Transportation service from Fillmore to Westlake Village', href: '#' },
        { name: 'Transportation service from Fillmore to Santa Monica', href: '#' },
        { name: 'Transportation service from Fillmore to Holmby Hills', href: '#' },
        { name: 'Transportation service from Fillmore to Malibu', href: '#' },
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
#I Need A Ride #Private Car #Reliable Taxi #Transportation To SAN
#open 24/7 #San Diego
#Carlsbad #Airport #Glendale #Burbank #South Pasadena #Montebello #Fullerton
#Malibu #Beverly Hills
                "/>


                    <AirportTransportationList items={ [
                        { label: 'Fillmore to LAX' },
                        { label: 'Fillmore to BOB' },
                        { label: 'Fillmore  to SBA' },
                        { label: 'Fillmore to Los Angeles' },
                    ]} />
                    <div className="p-4">
                        <EventsDisplay city="Fillmore" />
                    </div>

                    <PageEndLinks routes={routes}/>
                    <TwoColumnFAQ faqItems={faqItems}/>


                    <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">
                            Book a Taxi Cab in Fillmore with Rosie Taxi Cab – Fast, Safe & 24/7 Service
                        </h1>

                        <p className="text-gray-700 mb-4">
                            Looking for a fast, affordable, and reliable taxi service in Fillmore? <strong>Rosie Taxi Cab</strong> is your trusted choice for transportation—whether you’re commuting locally, attending an event, or heading to the airport. Enjoy a seamless ride experience with our <strong>24/7 availability</strong> and professional drivers.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Fillmore Taxi Services Available Around the Clock</h2>
                        <p className="text-gray-700 mb-4">
                            Searching for a <strong>taxi near me open</strong> or <strong>Fillmore taxi cab near my location</strong>? <strong>Rosie Taxi Cab</strong> is always ready to pick you up—day or night. With flat-rate pricing, reliable service, and clean vehicles, we’re a trusted alternative to rideshare apps. Choose the <strong>best taxi service in Fillmore</strong> for a stress-free journey.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Airport Taxi from Fillmore to LAX, Burbank, and Santa Barbara</h2>
                        <p className="text-gray-700 mb-4">
                            Need dependable airport transportation from Fillmore? <strong>Rosie Taxi Cab</strong> offers flat-rate rides to LAX, Burbank Airport, and Santa Barbara Airport. Whether you’re traveling for business or vacation, we provide on-time pickups and drop-offs with 24/7 availability.
                        </p>

                        <p className="text-gray-700 mb-3">Our most popular airport routes include:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li><strong>Taxi from Fillmore to Burbank Airport</strong></li>
                            <li><strong>Fillmore to Santa Barbara Airport by taxi</strong></li>
                            <li><strong>Private airport transportation from Fillmore</strong></li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Easy Ways to Book Your Taxi</h2>
                        <p className="text-gray-700 mb-3">Booking your ride with Rosie Taxi Cab is quick and flexible. You can:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Call <strong>Rosie Taxi Cab</strong> directly for instant or scheduled rides</li>
                            <li>Visit our website to book your <strong>Fillmore taxi cab</strong> online</li>
                            <li>Search for <strong>taxi near Fillmore</strong> or <strong>taxi near me</strong> and choose Rosie from the list</li>
                        </ul>

                        <p className="text-gray-700 mb-4">
                            Unlike <strong>Uber Fillmore</strong> or <strong>Lyft Fillmore</strong>, Rosie Taxi Cab offers consistent rates, knowledgeable local drivers, and personalized service—without hidden fees or surge pricing.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Why Choose Rosie Taxi Cab?</h2>
                        <p className="text-gray-700 mb-4">
                            When you think, "<strong>I need a taxi to LAX</strong>", think Rosie. Every <strong>Fillmore taxi driver</strong> we employ is courteous, experienced, and dedicated to getting you to your destination safely and on time.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Whether you need a local ride across town or a long-distance airport trip, <strong>Rosie Taxi Cab</strong> offers the most reliable <strong>cab service in Fillmore</strong>. Don’t settle for less—ride with the taxi company Fillmore trusts.
                        </p>

                        <p className="text-gray-800 italic">
                            Need a ride now? Book with Rosie Taxi Cab today for Fillmore’s most dependable and friendly transportation experience.
                        </p>
                    </article>


                </div>
            </main>

        </>
    );
 }

export default PageHome;
