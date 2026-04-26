import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";

export async function generateMetadata() {
    return {
        title: "Newport Beach Taxi | Luxury Rides to SNA, Balboa & Fashion Island | Rosie Taxi Cab",
        description: "Premium Newport Beach taxi service to John Wayne Airport (SNA), Balboa Peninsula, Fashion Island & all OC coastal areas. 24/7 reliable rides. Call (805) 258-8937 for executive transportation.",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-newport-beach/',
        },
        openGraph: {
            title: "Newport Beach Taxi | Luxury Rides to SNA, Balboa & Fashion Island | Rosie Taxi Cab",
            description: "Premium Newport Beach taxi service to John Wayne Airport (SNA), Balboa Peninsula, Fashion Island & all OC coastal areas. 24/7 reliable rides. Call (805) 258-8937 for executive transportation.",
            url: 'https://new.rosietaxicab.com/taxi-newport-beach/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/newport-beach-taxi.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/newport-beach-taxi.jpg',
                    alt: 'Luxury Newport Beach Taxi near Balboa Pier',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Newport Beach Taxi | Luxury Rides to SNA, Balboa & Fashion Island | Rosie Taxi Cab",
            description: "Premium Newport Beach taxi service to John Wayne Airport (SNA), Balboa Peninsula, Fashion Island & all OC coastal areas. 24/7 reliable rides. Call (805) 258-8937",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/newport-beach-taxi.jpg'],
            label1: 'Time to read',
            data1: '4 minutes'
        },
        other: {
            'og:updated_time': '2024-07-26T11:59:32-07:00',
        }
    };
}
function PageHome() {

    const faqItems = [
        {
          question: "How far is New Port from LAX ? ",
          answer: "The drive from New Port to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in New Port ?",
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
          answer: "Yes. We are the best transportation company in New Port’s Beach. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc."
        },
        {
          question: "how to find a good taxi near New Port CA ? ",
          answer: `You see most of the mediocre transportation companies in New Port are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in New Port CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in New Port’s Beach and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Ojai to LAX', href: '#' },
        { name: ' Transportation service from Ojai to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from New Port to SBA', href: '#' },
        { name: 'Transportation service from New Port to John Wayne Airport', href: '#' },
        { name: 'Transportation service from New Port to Los Angeles', href: '#' },
        { name: 'Transportation service from New Port to Hollywood', href: '#' },
        { name: 'Transportation service from New Port to Burbank', href: '#' },
        { name: 'Transportation service from New Port to Disney Land', href: '#' },
        { name: 'Transportation service from New Port to Universal Studios', href: '#' },
        { name: 'Transportation service from New Port to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from New Port to San Diego', href: '#' },
        { name: 'Transportation service from New Port to Westlake Village', href: '#' },
        { name: 'Transportation service from New Port to Santa Monica', href: '#' },
        { name: 'Transportation service from New Port to Holmby Hills', href: '#' },
        { name: 'Transportation service from New Port to Malibu', href: '#' },
      ]
    return (
        <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

                <HashTags text="#NewportBeachRides #NBCarService #PrivateRideNB #LAXtoNewport #OCLuxuryTransport #BalboaIslandTaxi #FashionIslandRides #CDMshuttle #NewportCoastCar #JohnWayneAirportRides #CoronaDelMarTaxi #OCexecutivecar #LidoVillageRides #NewportHarborTransport #OCwinecountryrides #CoastalLimo" />

                    {/* Camarillo Premium Outlets Section */}
                    <CitiesInfoSection
                    className="leading-6"
                        heading="Discover NewPort Beach And Things To Do "
                        text={
                            <>
                                <p>Beyond the radiant sun, sand and surf, discover the sophisticated charm of Newport Beach, California. A place so intoxicating, one taste of the perfect life will keep you coming back for more. </p>

                             
                      
                            </>
                        }
                        image="/images/fashion-sland.webp"  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                            { url: "https://www.visitnewportbeach.com/", text: "Things To Do" },
                          
                        ]}
                    />
                <AirportTransportationList items={ [
                    { label: 'New Port Beach to LAX' },
                    { label: 'New Port Beach to BOB' },
                    { label: 'New Port Beach to Fashion Island' },
                    { label: 'New Port Beach to Los Angeles' },
                ]} />


                <TwoColumnFAQ faqItems={faqItems} />
                <PageEndLinks routes={routes} />
            </div>
            <div className="p-4">
                <EventsDisplay city="New Port Beach" />
            </div>

            <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    How to Book a Taxi Cab in Newport Beach with Rosie Taxi Cab
                </h1>

                <p className="text-gray-700 mb-4">
                    Need reliable, prompt, and affordable transportation in Newport Beach? Rosie Taxi Cab is your trusted local provider. Whether you’re heading to the airport, exploring the coastline, or running errands, Rosie Taxi Cab ensures a smooth ride with 24/7 availability and professional service.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Taxi Services in Newport Beach Available 24/7
                </h2>
                <p className="text-gray-700 mb-4">
                    Searching for a taxi near me open or taxi near my location? Rosie Taxi Cab is available around the clock throughout Newport Beach. Unlike rideshare services with unpredictable pricing or limited availability, Rosie delivers dependable, affordable transportation whenever you need it. As a leading Newport Beach taxi service, Rosie is known for clean vehicles, experienced drivers, and safe travel.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Rosie Taxi Cab to LAX, John Wayne & Long Beach Airports
                </h2>
                <p className="text-gray-700 mb-4">
                    Traveling soon? Book a Newport Beach to LAX taxi or a flat-rate ride to John Wayne or Long Beach Airport with Rosie Taxi Cab. Their private car service to airports from Newport Beach is available 24/7, ideal for both early morning and late-night flights.
                </p>

                <p className="text-gray-700 mb-3">Common airport routes include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Taxi Newport Beach to LAX</li>
                    <li>Taxi to John Wayne Airport from Newport Beach</li>
                    <li>Private car Newport Beach to Long Beach Airport</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    How to Book with Rosie Taxi Cab
                </h2>
                <p className="text-gray-700 mb-3">Booking a ride is easy. Choose your preferred method:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Call Rosie Taxi Cab directly for instant or scheduled rides</li>
                    <li>Visit their website to reserve a Newport Beach taxi cab online</li>
                    <li>Search for taxi near Newport Beach or taxi cab near me and look for Rosie in your search results</li>
                </ul>

                <p className="text-gray-700 mb-4">
                    Compared to Uber Newport Beach or Lyft Newport Beach, Rosie offers flat rates, local drivers who know the area, and no surprise fees.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Why Choose Rosie Taxi Cab?
                </h2>
                <p className="text-gray-700 mb-4">
                    When you say, "I need a taxi to LAX", think Rosie. Each taxi driver in Newport Beach is professional, licensed, and focused on customer satisfaction.
                </p>

                <p className="text-gray-700 mb-4">
                    Whether it’s a quick trip along the coast or a longer journey to the airport, Rosie Taxi Cab is the top-rated taxi service in Newport Beach. Trust the name that locals rely on for clean, prompt, and affordable rides.
                </p>

                <p className="text-gray-800 italic">
                    Need a ride now? Book your Rosie Taxi Cab today for the most reliable taxi experience in Newport Beach.
                </p>
            </article>


        </main>
    );
}

export default PageHome;
