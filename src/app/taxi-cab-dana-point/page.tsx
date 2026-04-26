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
        title: "Dana Point Taxi | Harbor, Beach & SNA Airport Rides | Rosie Taxi Cab",
        description: "Dependable Dana Point taxi service to the Harbor, Doheny State Beach, and John Wayne Airport (SNA). Serving Lantern District, Monarch Beach, and all South OC. 24/7 availability. Book now: (805) 258-8937",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-dana-point/',
        },
        openGraph: {
            title: "Dana Point Taxi | Harbor, Beach & SNA Airport Rides | Rosie Taxi Cab",
            description: "Dependable Dana Point taxi service to the Harbor, Doheny State Beach, and John Wayne Airport (SNA). Serving Lantern District, Monarch Beach, and all South OC. 24/7 availability. Book now: (805) 258-8937",
            url: 'https://new.rosietaxicab.com/taxi-dana-point/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2023-04-15T08:00:00-07:00', // Updated for seasonal relevance
            modifiedTime: '2024-06-20T09:15:42-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/images/dana-point-harbor-taxi.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/images/dana-point-harbor-taxi.jpg',
                    alt: 'Taxi waiting at Dana Point Harbor with boats in background',
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Dana Point Taxi | Harbor, Beach & SNA Airport Rides | Rosie Taxi Cab",
            description: "Coastal taxi service for whale watching, beach trips, and airport transfers. Serving all of Dana Point 24/7. Reliable rides: (805) 258-8937",
            images: ['https://rosietaxicab.twic.pics/images/dana-point-harbor-taxi-social.jpg'],
        },
        other: {
            'og:updated_time': '2024-06-20T09:15:42-07:00',
            'dc.coverage': 'Dana Point, CA',
            'icbm.latitude': '33.466972',
            'icbm.longitude': '-117.698107'
        }
    };
}
function PageHome() {

    const faqItems = [
        {
          question: "How far is  Dana Point from LAX ? ",
          answer: "The drive from  Dana Point to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in  Dana Point ?",
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
          answer: "Yes. We are the best transportation company in Dana Point’s County. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc."
        },
        {
          question: "how to find a good taxi near  Dana Point CA ? ",
          answer: `You see most of the mediocre transportation companies in  Dana Point are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in  Dana Point CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Dana Point’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Dana Point to LAX', href: '#' },
        { name: ' Transportation service from Dana Point to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Dana Point to SBA', href: '#' },
        { name: 'Transportation service from Dana Point to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Dana Point to Los Angeles', href: '#' },
        { name: 'Transportation service from Dana Point to Hollywood', href: '#' },
        { name: 'Transportation service from Dana Point to Burbank', href: '#' },
        { name: 'Transportation service from Dana Point to Disney Land', href: '#' },
        { name: 'Transportation service from Dana Point to Universal Studios', href: '#' },
        { name: 'Transportation service from Dana Point to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Dana Point to San Diego', href: '#' },
        { name: 'Transportation service from Dana Point to Westlake Village', href: '#' },
        { name: 'Transportation service from Dana Point to Santa Monica', href: '#' },
        { name: 'Transportation service from Dana Point to Holmby Hills', href: '#' },
        { name: 'Transportation service from Dana Point to Malibu', href: '#' },
      ]
      

    return (
        <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

                <HashTags text="
#I Need A Ride #Private Car #Reliable Taxi #Reservation To Airport #Dana Point CA #Dana Point Harbord #Ocean Institute #Los Angeles #Glendale #Pasadena #Arcadia #Airport Transportation #Anaheim

                "/>
                <>
                    {/* Camarillo Premium Outlets Section */}
                    <CitiesInfoSection
                        heading="Discover Dana Point And Things To Do"
                        text={
                            <>
                                <p>Dana Point Provides The Best Experience and the ultimate adventure at Dana Point Harbor from Whale watching excursions, sailing, parasailing, stand up paddle boarding, diving, fishing and more await you.</p>

                         
                            </>
                        }
                        image="/images/DanaPointHarborView.jpg"  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                            { url: "https://danapointharbor.com/", text: "Things to do" },
                         
                        ]}
                    />

                    <AirportTransportationList items={ [
                        { label: 'Dana Point to LAX' },
                        { label: 'Dana Point  to BOB' },
                        { label: 'Dana Point  to SBA' },
                        { label: 'Dana Point  to Los Angeles' },
                    ]} />
             

                </>
                <div className="p-4">
                    <EventsDisplay city="Dana Point" />
                </div>
                <TwoColumnFAQ faqItems={faqItems} />
                <PageEndLinks routes={routes} />

                <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">How to Book a Taxi Cab in Dana Point with Rosie Taxi Cab</h1>

                    <p className="text-gray-700 mb-4">
                        Need a reliable and affordable way to get around Dana Point? Rosie Taxi Cab offers dependable transportation whether you're staying local or heading to the airport. From hotel pickups to trips to the harbor, their 24/7 service is designed to fit your schedule.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Dana Point Taxi Services Available 24/7</h2>
                    <p className="text-gray-700 mb-4">
                        If you're looking for a taxi that’s always available in Dana Point, Rosie Taxi Cab is here for you. Unlike rideshare apps, Rosie provides consistent service with flat pricing and experienced local drivers. You can count on timely, comfortable rides any time of day or night.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Taxi Service from Dana Point to LAX, John Wayne & More</h2>
                    <p className="text-gray-700 mb-4">
                        Whether it’s a business trip or a vacation flight, Rosie Taxi Cab makes airport travel easy. They offer fixed-rate transfers from Dana Point to major airports including LAX, John Wayne, and Long Beach. Service is available day and night, ensuring you’re never left waiting.
                    </p>

                    <p className="text-gray-700 mb-3">Common airport routes from Dana Point include:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Dana Point to LAX taxi</li>
                        <li>Taxi from Dana Point to John Wayne Airport</li>
                        <li>Private car Dana Point to Long Beach Airport</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">How to Book with Rosie Taxi Cab</h2>
                    <p className="text-gray-700 mb-3">Booking your ride in Dana Point is quick and convenient. Choose from the following options:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Call Rosie Taxi Cab directly for now or later pickups</li>
                        <li>Use their online booking system to reserve your ride in advance</li>
                        <li>Search online for local taxi services near Dana Point and choose Rosie</li>
                    </ul>

                    <p className="text-gray-700 mb-4">
                        Rosie offers more predictable pricing and service than rideshare platforms like Uber or Lyft. With no surge charges and professional local drivers, it's a smart and stress-free option.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Why Choose Rosie Taxi Cab?</h2>
                    <p className="text-gray-700 mb-4">
                        If you're in Dana Point and need a dependable ride, Rosie Taxi Cab is the trusted choice. Their drivers are licensed, respectful, and committed to punctual service, whether you're heading to LAX or just across town.
                    </p>

                    <p className="text-gray-700 mb-4">
                        From short coastal drives to airport drop-offs, Rosie Taxi Cab delivers reliable transportation backed by local experience. Choose a service known for safety, comfort, and professionalism.
                    </p>

                    <p className="text-gray-800 italic">
                        Ready to ride? Contact Rosie Taxi Cab today for Dana Point’s most dependable and friendly taxi service.
                    </p>
                </article>

            </div>
        </main>
    );
}

export default PageHome;
