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
        title: "Westlake Taxi Service | 24/7 Rides to Downtown LA & Hospitals | Rosie Taxi Cab",
        description: "Reliable Westlake taxi service for MacArthur Park, DTLA, Kaiser Permanente & USC. Fast rides to LAX, BUR & Union Station. Call (805) 258-8937 - 24/7 service.",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-westlake/',
        },
        openGraph: {
            title: "Westlake Taxi Service | 24/7 Rides to Downtown LA & Hospitals | Rosie Taxi Cab",
            description: "Reliable Westlake taxi service for MacArthur Park, DTLA, Kaiser Permanente & USC. Fast rides to LAX, BUR & Union Station. Call (805) 258-8937 - 24/7 service.",
            url: 'https://new.rosietaxicab.com/taxi-westlake/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/westlake-taxi-service.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/westlake-taxi-service.jpg',
                    alt: 'Westlake Taxi Service near MacArthur Park',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Westlake Taxi Service | 24/7 Rides to Downtown LA & Hospitals | Rosie Taxi Cab",
            description: "Reliable Westlake taxi service for MacArthur Park, DTLA, Kaiser Permanente & USC. Fast rides to LAX, BUR & Union Station. Call (805) 258-8937",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/westlake-taxi-service.jpg'],
            label1: 'Time to read',
            data1: '5 minutes'
        },
        other: {
            'og:updated_time': '2024-07-26T11:59:32-07:00',
        }
    };
}

function PageHome() {

    const faqItems = [
        {
          question: "How far is Westlake from LAX ? ",
          answer: "The drive from Westlake to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in Westlake ?",
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
          question: "how to find a good taxi near Westlake CA ? ",
          answer: `You see most of the mediocre transportation companies in Westlake are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Westlake CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Westlake to LAX', href: '#' },
        { name: ' Transportation service from Westlake to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Westlake to SBA', href: '#' },
        { name: 'Transportation service from Westlake to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Westlake to Los Angeles', href: '#' },
        { name: 'Transportation service from Westlake to Hollywood', href: '#' },
        { name: 'Transportation service from Westlake to Burbank', href: '#' },
        { name: 'Transportation service from Westlake to Disney Land', href: '#' },
        { name: 'Transportation service from Westlake to Universal Studios', href: '#' },
        { name: 'Transportation service from Westlake to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Westlake to San Diego', href: '#' },
        { name: 'Transportation service from Westlake to Westlake Village', href: '#' },
        { name: 'Transportation service from Westlake to Santa Monica', href: '#' },
        { name: 'Transportation service from Westlake to Holmby Hills', href: '#' },
        { name: 'Transportation service from Westlake to Malibu', href: '#' },
      ]
    return (
        <main className="nc-PageHome relative overflow-hidden">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />


                <HashTags text="
                #I Need A Ride #Private Car #Reliable Taxi #Westlake Village To LAX #Westlake Village #Ventura CA #Oxnard #Camarillo #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Woodland Hills #Malibu #Los Angeles #Beverly Hills

                "/>
                    {/* Camarillo Premium Outlets Section */}
                    <CitiesInfoSection
                        heading="Things To Do In
Westlake Village"
                        text={
                            <>
                                <p>

Westlake Village is a modern city and premier planned community situated between Ventura’s County and Los Angeles County. It  offers an upscale shopping center and delicious eateries. Discover a list of things to do curated by top travelers. 
</p>

                            </>
                        }
                        image="/images/82179f4f-5ba3-4a68-b4db-e184194190e4.webp"  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                            { url: "https://www.tripadvisor.com/Attractions-g33258-Activities-Westlake_Village_California.html", text: "THINGS TO DO" },
                        
                        ]}
                    />
                <div className="p-4">
                    <EventsDisplay city="westlake village" />
                </div>
                <AirportTransportationList items={ [
                    { label: 'West Lake to LAX' },
                    { label: 'West Lake  to BOB' },
                    { label: 'West Lake  to SBA' },
                    { label: 'West Lake  to Los Angeles' },
                ]} />


                <TwoColumnFAQ faqItems={faqItems} />
                <PageEndLinks routes={routes} />

                <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        How to Book a Taxi Cab in Westlake with Rosie Taxi Cab
                    </h1>

                    <p className="text-gray-700 mb-4">
                        Looking for fast, reliable, and affordable transportation in Westlake? Rosie Taxi Cab is the go-to service for both locals and visitors. Whether you're commuting to work, heading to an event, or catching a flight, Rosie Taxi Cab offers stress-free rides with professional drivers available 24/7.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                        Westlake Taxi Services Available 24/7
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Searching for a taxi near me open or taxi near my location? Rosie Taxi Cab operates around the clock in Westlake and nearby areas. Unlike rideshare apps that raise prices during peak hours, Rosie Taxi Cab offers dependable, flat-rate service at any hour. As a trusted Westlake taxi service and leading cab company in Westlake, Rosie ensures timely, safe, and clean transportation every time.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                        Rosie Taxi Cab to LAX, Burbank & Nearby Airports
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Need Westlake transportation to LAX? Rosie Taxi Cab provides reliable, flat-rate airport transfers. Whether you’re booking a Westlake to LAX by taxi ride, heading to Burbank Airport, or catching a flight out of Santa Barbara, Rosie has you covered with private car service 24/7.
                    </p>

                    <p className="text-gray-700 mb-3">Popular routes from Westlake include:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Taxi Westlake to LAX airport</li>
                        <li>Westlake taxi cab to Burbank airport</li>
                        <li>Private transportation Westlake to Santa Barbara airport</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                        How to Book with Rosie Taxi Cab
                    </h2>
                    <p className="text-gray-700 mb-3">Booking your ride with Rosie is quick and easy. You can:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Call Rosie Taxi Cab directly for immediate or scheduled pickups</li>
                        <li>Visit their website to reserve a Westlake taxi cab online</li>
                        <li>Search taxi cab near Westlake or taxi near me and choose Rosie from the results</li>
                    </ul>

                    <p className="text-gray-700 mb-4">
                        Unlike Uber Westlake or Lyft Westlake, Rosie offers upfront pricing, experienced local drivers, and no surprise charges. Choose Rosie for quality service and peace of mind.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                        Why Choose Rosie Taxi Cab?
                    </h2>
                    <p className="text-gray-700 mb-4">
                        When you say, "I need a taxi to LAX", think of Rosie. Every taxi driver in Westlake is trained, courteous, and dedicated to providing a safe, on-time experience.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Whether it's a short trip around town or a long-distance airport ride, Rosie delivers the most dependable cab service in Westlake. Don’t take chances with unknown services—trust the name Westlake counts on: Rosie Taxi Cab.
                    </p>

                    <p className="text-gray-800 italic">
                        Ready to ride? Book your Rosie Taxi Cab today for Westlake's most trusted and professional taxi experience.
                    </p>
                </article>

            </div>
        </main>
    );
}

export default PageHome;
