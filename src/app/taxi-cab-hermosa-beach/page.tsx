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
        title: "Hermosa Beach Taxi | 24/7 Beach Rides & LAX Airport Service | Rosie Taxi Cab",
        description: "Reliable Hermosa Beach taxi service to LAX, Pier Avenue, The Strand & all South Bay areas. Quick pickups for beachgoers & nightlife. Call (805) 258-8937 - 24/7 service.",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-hermosa-beach/',
        },
        openGraph: {
            title: "Hermosa Beach Taxi | 24/7 Beach Rides & LAX Airport Service | Rosie Taxi Cab",
            description: "Reliable Hermosa Beach taxi service to LAX, Pier Avenue, The Strand & all South Bay areas. Quick pickups for beachgoers & nightlife. Call (805) 258-8937 - 24/7 service.",
            url: 'https://new.rosietaxicab.com/taxi-hermosa-beach/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/hermosa-beach-taxi.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/hermosa-beach-taxi.jpg',
                    alt: 'Hermosa Beach Taxi near the Pier and The Strand',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Hermosa Beach Taxi | 24/7 Beach Rides & LAX Airport Service | Rosie Taxi Cab",
            description: "Reliable Hermosa Beach taxi service to LAX, Pier Avenue, The Strand & all South Bay areas. Quick pickups for beachgoers & nightlife. Call (805) 258-8937",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/hermosa-beach-taxi.jpg'],
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
          question: "How far is Hermosa Beach from LAX ? ",
          answer: "The drive from Hermosa Beach to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in Hermosa Beach ?",
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
          question: "how to find a good taxi near Hermosa Beach CA ? ",
          answer: `You see most of the mediocre transportation companies in Hermosa Beach are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Hermosa Beach CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Hermosa Beach to LAX', href: '#' },
        { name: ' Transportation service from Hermosa Beach to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Hermosa Beach to SBA', href: '#' },
        { name: 'Transportation service from Hermosa Beach to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Los Angeles', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Hollywood', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Burbank', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Disney Land', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Universal Studios', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Hermosa Beach to San Diego', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Westlake Village', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Santa Monica', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Holmby Hills', href: '#' },
        { name: 'Transportation service from Hermosa Beach to Malibu', href: '#' },
      ]
    return (
        <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

                <HashTags text="
                #I Need A Ride #Private Car #Reliable Taxi #Reservation To LAX #Hermosa Beach CA #Take me to Hermosa Beach CA #Los Angeles #Manhattan Beach CA #Redendo Beach #John Wayne Airport #Long Beach Airport #los Angeles Airport #Malibu #Anaheim

"/>

                <>
                    {/* Camarillo Premium Outlets Section */}
                    <CitiesInfoSection
                    className="leading-6"
                        heading="Discover Hermosa Beach And Things To Do "
                        text={
                            <>
                                <p>Visitors to Hermosa can enjoy plenty of things to do, including swimming, sunbathing, fishing, surfing, and paddle boarding. The city is also home to a number of shops, restaurants, and bars. Hermosa Beach is just a short drive from Los Angeles, making it the perfect place to enjoy a beach getaway.</p>

                           
                            </>
                        }
                        image={`/images/hermosa_beach.jpg`}  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                          { url: "https://www.travellens.co/best-things-to-do-in-hermosa-beach-ca/", text: "Things To Do" },
                        
                      ]}
                    />


                    <AirportTransportationList items={ [
                        { label: 'Hermosa Beach to LAX' },
                        { label: 'Hermosa Beach to BOB' },
                        { label: 'Hermosa Beach to SBA' },
                        { label: 'Hermosa Beach to Los Angeles' },
                    ]} />

                </>
                <div className="p-4">
                    <EventsDisplay city="Hermosa Beach" />
                </div>

                <PageEndLinks routes={routes} />
                <TwoColumnFAQ faqItems={faqItems} />
            </div>

            <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Book a Taxi Cab in Hermosa Beach with Rosie Taxi Cab
                </h1>

                <p className="text-gray-700 mb-4">
                    Need fast, affordable, and dependable transportation in Hermosa Beach? Rosie Taxi Cab is the go-to choice for locals and visitors alike. Whether you're heading to the beach, an event, or the airport, count on Rosie for a smooth, professional ride—available 24/7.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">24/7 Taxi Service in Hermosa Beach</h2>
                <p className="text-gray-700 mb-4">
                    Searching for a taxi near me open or taxi near my location? Rosie Taxi Cab is here any time, day or night. Unlike rideshare apps with fluctuating prices and delays, Rosie offers reliable, fixed-rate service. With a reputation as a trusted Hermosa Beach taxi service, we ensure every ride is safe, clean, and prompt.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Airport Transportation to LAX, Long Beach & More</h2>
                <p className="text-gray-700 mb-4">
                    Traveling to the airport? Rosie Taxi Cab offers flat-rate, on-time airport transportation from Hermosa Beach to major hubs like LAX and Long Beach. Whether you need a Hermosa Beach to LAX taxi, a ride to Long Beach Airport, or private service to downtown Los Angeles, we’ve got you covered—anytime, anywhere.
                </p>

                <p className="text-gray-700 mb-3">Popular routes from Hermosa Beach include:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Taxi Hermosa Beach to LAX</li>
                    <li>Hermosa Beach taxi cab to Long Beach Airport</li>
                    <li>Private transportation Hermosa Beach to downtown LA</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Easy Booking Options</h2>
                <p className="text-gray-700 mb-3">Booking a taxi in Hermosa Beach is quick and convenient with Rosie. You can:</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Call Rosie Taxi Cab directly for on-demand or scheduled rides</li>
                    <li>Use our website to book your ride online</li>
                    <li>Search taxi cab near Hermosa Beach or taxi near me and choose Rosie from the results</li>
                </ul>

                <p className="text-gray-700 mb-4">
                    Unlike Uber Hermosa Beach or Lyft Hermosa Beach, Rosie provides clear, consistent pricing—no surge charges, no surprises. Our drivers are local, professional, and ready to assist.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Why Ride with Rosie Taxi Cab?</h2>
                <p className="text-gray-700 mb-4">
                    Thinking "I need a taxi to LAX"? Think Rosie. Each taxi driver in Hermosa Beach is licensed, experienced, and committed to getting you where you need to go—safely and on time.
                </p>

                <p className="text-gray-700 mb-4">
                    Whether it's a short trip within Hermosa Beach or a longer airport transfer, Rosie is the name residents trust for reliable cab service in Hermosa Beach. Skip the stress—ride with Rosie.
                </p>

                <p className="text-gray-800 italic">
                    Need a ride now? Book with Rosie Taxi Cab today and enjoy Hermosa Beach’s most trusted and comfortable taxi experience.
                </p>
            </article>


        </main>
    );
}

export default PageHome;
