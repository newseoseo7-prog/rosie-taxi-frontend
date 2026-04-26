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
        title: "Irvine Taxi Service | Reliable Rides to SNA, UCI & Business Parks | Rosie Taxi Cab",
        description: "Premium Irvine taxi service for John Wayne Airport (SNA), UCI campus, Irvine Spectrum, and all major business parks. Corporate accounts available. 24/7 service. Call (805) 258-8937",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-irvine/',
        },
        openGraph: {
            title: "Irvine Taxi Service | Reliable Rides to SNA, UCI & Business Parks | Rosie Taxi Cab",
            description: "Premium Irvine taxi service for John Wayne Airport (SNA), UCI campus, Irvine Spectrum, and all major business parks. Corporate accounts available. 24/7 service. Call (805) 258-8937",
            url: 'https://new.rosietaxicab.com/taxi-irvine/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2023-08-01T07:00:00-07:00', // Back-to-school timing
            modifiedTime: '2024-06-15T08:30:15-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/images/irvine-business-park-taxi.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/images/irvine-business-park-taxi.jpg',
                    alt: 'Professional taxi service in Irvine Business Complex',
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Irvine Taxi Service | SNA & Corporate Transportation | Rosie Taxi Cab",
            description: "Efficient rides to John Wayne Airport, UCI, and Irvine Company business parks. Serving tech professionals and students. Book: (805) 258-8937",
            images: ['https://rosietaxicab.twic.pics/images/irvine-taxi-social.jpg'],
        },
        other: {
            'og:updated_time': '2024-06-15T08:30:15-07:00',
            'dc.coverage': 'Irvine, CA',
            'icbm.latitude': '33.684567',
            'icbm.longitude': '-117.826508'
        }
    };
}
function PageHome() {

    const faqItems = [
        {
          question: "How far is  Irvine from LAX ? ",
          answer: "The drive from  Irvine to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in  Irvine ?",
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
          answer: "Yes. We are the best transportation company in Irvine’s County. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc."
        },
        {
          question: "how to find a good taxi near  Irvine CA ? ",
          answer: `You see most of the mediocre transportation companies in  Irvine are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in  Irvine CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Irvine’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Irvine to LAX', href: '#' },
        { name: ' Transportation service from Irvine to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Irvine to SBA', href: '#' },
        { name: 'Transportation service from Irvine to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Irvine to Los Angeles', href: '#' },
        { name: 'Transportation service from Irvine to Hollywood', href: '#' },
        { name: 'Transportation service from Irvine to Burbank', href: '#' },
        { name: 'Transportation service from Irvine to Disney Land', href: '#' },
        { name: 'Transportation service from Irvine to Universal Studios', href: '#' },
        { name: 'Transportation service from Irvine to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Irvine to San Diego', href: '#' },
        { name: 'Transportation service from Irvine to Westlake Village', href: '#' },
        { name: 'Transportation service from Irvine to Santa Monica', href: '#' },
        { name: 'Transportation service from Irvine to Holmby Hills', href: '#' },
        { name: 'Transportation service from Irvine to Malibu', href: '#' },
      ]

    return (
        <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />


                <HashTags text="#IrvineCarService #PrivateRideIrvine #LAXtoIrvine #OCReliableTaxi #IrvineToLAX #NewportBeach #CostaMesa #Tustin #LakeForest #LagunaHills #OrangeCountyAirport #SNArides #UCItransport #SouthOCrides #BusinessTravelOC #LuxuryRideIrvine" />


                <>
                    {/* Camarillo Premium Outlets Section */}
                    <CitiesInfoSection
                        heading="Things To Do In Irvine"
                        text={
                            <>
                                <p>One of the important priorities for Irvine’s development was to create a community where business and nature co-exist in harmony. As a result, you will find beautifully manicured office parks surrounded by more than 16,500 acres of dedicated open space, parks and sports fields.</p>

                            
                            </>
                        }
                        image="/images/OurStoryFEB2015LAMB-068-Rev-v2-800x533.jpg"  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                            { url: "https://www.destinationirvine.com/things-to-do/", text: "Things To Do" },
                          
                        ]}
                    />
                    <AirportTransportationList items={ [
                        { label: 'Irvine to LAX' },
                        { label: 'Irvine to BOB' },
                        { label: 'Irvine  to SBA' },
                        { label: 'Irvine to Los Angeles' },
                    ]} />

                    <div className="p-4">
                        <EventsDisplay city="Irvine" />
                    </div>
                    {/* Camarillo Ranch Section */}
                    <CitiesInfoSection
                        heading="Taxi Service from Irvine to John Wayne Airport (SNA)"
                        text={
                            <>
                                <p>Camarillo Ranch is a historic property with a charming old-world feel, featuring beautiful gardens, a historic barn, and family-friendly activities.</p>

                                <ul className="space-y-2 mt-5 list-disc list-inside">
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="01" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Rosie Taxi Cab Provides local taxis and private car with UBER/ LYFT CONCIERGE to and from Irvine to John Wayne Airport.
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="02" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our current Pick Up Time is between 10 to 15 min guaranteed on reservation basis  
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our reservation approach is very simple as follows : date/time and pick up location and drop off, and a credit / debit card on file.
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Keep in mind you have to be at the airport at least 2hrs prior to your flight’s departure, and 3hrs ahead of time for international flights.  
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our reservation system goes as first call first serve, and with a priority to Airports.
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        We’ve a wide selection of regular cars and XL cars 6 people on demand. 
                        </span>
                                    </li>
                                </ul>
                               
                            </>
                        }
                        image=""  // Replace with actual Camarillo Ranch image URL
                        imagePosition="left"
                        
                    />

                    {/* Adolfo Camarillo High School Section */}
                    <CitiesInfoSection
                        heading="Taxi Service from Irvine to Los Angeles International Airport (LAX)"
                        text={
                            <>
                                <p>Rosie Taxi Cab Provides local taxis and private car with UBER/ LYFT CONCIERGE to and from Irvine to LAX.</p>

                                <ul className="space-y-2 mt-5 list-inside list-disc">
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="01" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Rosie Taxi Cab Provides local taxis and private car with UBER/ LYFT CONCIERGE to and from Irvine to LAX.
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="02" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our current Pick Up Time is between 10 to 15 min guaranteed on reservation basis  
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our current Pick Up Time is between 10 to 15 min guaranteed on reservation basis 
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our reservation approach is very simple as follows : date/time and pick up location and drop off, and a credit / debit card on file.
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Keep in mind you have to be at the airport at least 2hrs prior to your flight’s departure, and 3hrs ahead of time for international flights.  
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our reservation system goes as first call first serve, and with a priority to Airports.
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        We’ve a wide selection of regular cars and XL cars 6 people on demand. 
                        </span>
                                    </li>
                                </ul>
                         
                            </>
                        }
                        image="/images/lax-irvine.jpg"  // Replace with actual Adolfo Camarillo High image URL
                        imagePosition="right"
                       
                    />

                

                    {/* Camarillo Community Center Section */}
                    <CitiesInfoSection
                        heading="Taxi Service from Irvine to Burbank Airport (BOB)"
                        text={
                            <>
                             

                                <ul className="space-y-2 mt-5 list-disc list-inside">
                                    <li className="flex items-center space-x-4">
                                        {/* <Badge name="01" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Rosie Taxi Cab Provides local taxis and private car with UBER/ LYFT CONCIERGE to and from Irvine to Burbank Airport.
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="02" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our reservation approach is very simple as follows : date/time and pick up location and drop off, and a credit / debit card on file.
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Keep in mind you have to be at the airport at least 2hrs prior to your flight’s departure, and 3hrs ahead of time for international flights. 
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our reservation system goes as first call first serve, and with a priority to Airports. 
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        We’ve a wide selection of regular cars and XL cars 6 people on demand. 
                        </span>
                                    </li>
                                </ul>
                                
                            </>
                        }
                        image="/images/jhon-wyne-airport.jpg"  // Replace with actual Camarillo Community Center image URL
                        imagePosition="right"
                     
                    />

                        {/* Pleasant Valley Historical Society Section */}
                        <CitiesInfoSection
                        heading="Taxi Service from Irvine to Ontario International Airport (ONT)"
                        text={
                            <>
                               

                                <ul className="space-y-2 mt-5 list-inside list-disc">
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="01" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Rosie Taxi Cab Provides local taxis and private car with UBER/ LYFT CONCIERGE to and from Irvine to Ontario International Airport. 
                        </span>
                                    </li>
                                    <li className=" items-center space-x-4">
                                        {/* <Badge name="02" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our current Pick Up Time is between 10 to 15 min guaranteed on reservation basis 
                        </span>
                                    </li>
                                    <li className="items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our reservation approach is very simple as follows : date/time and pick up location and drop off, and a credit / debit card on file.
                        </span>
                                    </li>
                                    <li className="items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Keep in mind you have to be at the airport at least 2hrs prior to your flight’s departure, and 3hrs ahead of time for international flights. 
                        </span>
                                    </li>
                                    <li className="items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Our reservation system goes as first call first serve, and with a priority to Airports.
                        </span>
                                    </li>
                                    <li className="items-center space-x-4">
                                        {/* <Badge name="03" /> */}
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        We’ve a wide selection of regular cars and XL cars 6 people on demand. 
                        </span>
                                    </li>
                                </ul>
                              
                            </>
                        }
                        image="/images/ont.jpg"  // Replace with actual Pleasant Valley Historical Society image URL
                        imagePosition="left"
                      
                    />
                </>

                <TwoColumnFAQ faqItems={faqItems} />
                <PageEndLinks routes={routes} />

                <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        How to Book a Taxi Cab in Irvine with Rosie Taxi Cab
                    </h1>

                    <p className="text-gray-700 mb-4">
                        Looking for reliable and comfortable transportation in Irvine? Rosie Taxi Cab is your go-to choice for local rides, airport transfers, and 24/7 availability. Whether you’re commuting to work, attending an event, or catching a flight, Rosie provides prompt and professional service every time.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                        Irvine Taxi Services Available Around the Clock
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Searching for a taxi near me open now or taxi near my location in Irvine? Rosie Taxi Cab offers licensed drivers ready to serve you day or night. Unlike rideshare apps with surge pricing, Rosie delivers fixed rates, clean vehicles, and courteous drivers. As a trusted Irvine taxi service, Rosie ensures safe and efficient rides all over the city.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                        Taxi Service from Irvine to Major Airports
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Whether you need a ride to LAX, John Wayne, or Long Beach Airport, Rosie Taxi Cab offers 24/7 flat-rate airport transfers. Their private car service from Irvine is perfect for early departures, late arrivals, or business trips.
                    </p>

                    <p className="text-gray-700 mb-3">Popular routes from Irvine include:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Taxi Irvine to LAX Airport</li>
                        <li>Taxi from Irvine to John Wayne Airport (SNA)</li>
                        <li>Private transportation Irvine to Long Beach Airport</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                        How to Book with Rosie Taxi Cab
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Booking your ride in Irvine is simple and convenient. You can:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Call Rosie Taxi Cab directly for immediate or scheduled rides</li>
                        <li>Reserve your taxi online via their easy-to-use website</li>
                        <li>Search taxi near Irvine or cab near me and select Rosie from the options</li>
                    </ul>

                    <p className="text-gray-700 mb-4">
                        Unlike Uber Irvine or Lyft Irvine, Rosie Taxi Cab offers fixed pricing, local drivers, and no hidden fees—giving you transparent and reliable service.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                        Why Choose Rosie Taxi Cab?
                    </h2>
                    <p className="text-gray-700 mb-4">
                        When you say, "I need a taxi to LAX from Irvine", think Rosie. Every Irvine taxi driver on our team is professional, courteous, and experienced.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Whether you’re taking a quick ride across town or a longer trip to the airport, Rosie Taxi Cab delivers the best taxi service in Irvine. Trust the name locals count on—Rosie Taxi Cab.
                    </p>

                    <p className="text-gray-800 italic">
                        Need a ride now? Book your Rosie Taxi Cab today and enjoy Irvine’s most trusted and professional taxi service.
                    </p>
                </article>


            </div>
        </main>
    );
}

export default PageHome;
