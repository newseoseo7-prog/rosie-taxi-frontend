import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import PageEndLinks from "@/components/PageEndLinks";
import TwoColumnFAQ from "@/components/Faq";
import Head from "next/head";
import schemaData from "@/app/schema";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";
 export async function generateMetadata() {
    return {
        title: "Taxi cab Los Angeles Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
        description: "Fast, reliable, and affordable taxi service in Los Angeles, CA. 24/7 local and airport transportation to LAX, Burbank, and Ventura County. Book your ride now!",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-los-angeles/',
        },
        openGraph: {
            title: "Taxi cab Los Angeles Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
            description: "Going From Los Angeles To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Los Angeles, CA. Call Now (805) 258-8937 For The Best Airport Transportation Service Now And Guaranteed. We Are The Best",
            url: 'https://new.rosietaxicab.com/taxi-cab-los-angeles/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
                    alt: 'Taxi cab Los Angeles',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Taxi cab Los Angeles Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
            description: "Going From Los Angeles To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Los Angeles, CA. Call Now (805) 258-8937 For The Best Airport Transportation Service Now And Guaranteed. We Are The Best",
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
            question: "How far is Los Angeles from LAX?",
            answer: "The drive from Los Angeles to LAX takes about 30-40 minutes depending on traffic."
        },
        {
            question: "How do I order a cab/private car in Los Angeles?",
            answer: "Ordering is simple. Enter your pickup and drop-off location, choose a date and time, and complete your payment online."
        },
        {
            question: "What is the minimum charge to LAX?",
            answer: "The minimum fare to LAX ranges from $40 to $60 depending on traffic and time of day."
        },
        {
            question: "How long does it take to get a driver?",
            answer: "Typically, it takes about 10-15 minutes for a driver to arrive within the city. For locations outside the city, it may take longer."
        },
        {
            question: "Is Rosie Taxi Cab Open 24/7 in Los Angeles?",
            answer: "Yes. We are available 24/7 for your transportation needs, offering reliable and quick service."
        },
        {
            question: "How do I find a good taxi near Los Angeles?",
            answer: "To find a reliable taxi service, check online reviews, the company's ratings, and ensure they have a local presence. Rosie Taxi Cab is well-rated and dependable."
        },
        {
            question: "Do you accept card payments?",
            answer: "Yes, we accept all major credit cards. We are a cashless service for your convenience."
        },
        {
            question: "What cities do you service?",
            answer: "We proudly serve Los Angeles and surrounding areas, as well as other destinations across California."
        },
        {
            question: "Can I call on the same day to go to LAX?",
            answer: "Yes, but we recommend making a reservation for a guaranteed pickup and timely arrival."
        }
    ];

    const routes = [
        { name: 'Transportation service from Los Angeles to LAX', href: '#' },
        { name: 'Transportation service from Los Angeles to Burbank', href: '#' },
        { name: 'Transportation service from Los Angeles to Santa Barbara', href: '#' },
        { name: 'Transportation service from Los Angeles to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Los Angeles to Hollywood', href: '#' },
        { name: 'Transportation service from Los Angeles to Disneyland', href: '#' },
        { name: 'Transportation service from Los Angeles to Universal Studios', href: '#' },
        { name: 'Transportation service from Los Angeles to Rodeo Drive, Beverly Hills', href: '#' },
        { name: 'Transportation service from Los Angeles to Malibu', href: '#' },
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
                <BgGlassmorphism />


                <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
                    <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16"/>
                    <HashTags text="#LA Car Service #Private Ride LA #LAX rides #DT LA taxi #Hollywood Car #Santa Monica Rides #Westside Transport #SF Valley Rides #Long Beach Taxi #Burbank Airport #Universal Studios Ride #LAexecutive car #Pasadena To LAX #LA black car #Ride share LA" />

                    <CitiesInfoSection
                        className="leading-6"
                        heading="ROSIE TAXI CAB LOS ANGELES OPEN 24/7"
                        text={
                            <>
                                <ul className="space-y-4 mt-10 list-inside list-disc">
                                    <li className="items-center space-x-4">
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">MOST RELIABLE LOS ANGELES TAXI SERVICE</span>
                                    </li>
                                    <li className="items-center space-x-4">
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">COURTEOUS DRIVER</span>
                                    </li>
                                    <li className="items-center space-x-4">
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">ON DEMAND 24/7 LOCAL TAXIS LOS ANGELES</span>
                                    </li>
                                </ul>
                                <p className="mt-5">
                                    At Rosie Taxi Cab Los Angeles, we are open 24/7 to meet your travel needs. Whether
                                    you need a quick ride across the city, a late-night pickup, or an early morning
                                    airport transfer, count on us for prompt and friendly service every time!
                                </p>
                            </>
                        }
                        image={laxImg}
                        imagePosition="right"
                    />
                    <AirportTransportationList items={[
                        {label: 'LAX to Malibu'},
                        {label: 'LAX to BOB'},
                        {label: 'LAX to SBA'},
                        {label: 'LAX to Oxnard'},
                    ]}/>
                    <div className="p-4">
                        <EventsDisplay city="Los Angeles" />
                    </div>
                    <CitiesInfoSection
                        className="leading-6"
                        heading="Everything You Need To Know About Los Angeles"
                        text={
                            <>
                                <p>Los Angeles is the entertainment capital of the world, offering world-class
                                    attractions, beautiful beaches, and endless dining and shopping options. It's easy
                                    to get around with Rosie Taxi Cab, available 24/7 for all your transportation
                                    needs.</p>
                            </>
                        }
                        image={"/images/Skyline-Los-Angeles-California.webp"}
                        imagePosition="left"
                        buttons={[{url: "https://www.discoverlosangeles.com/", text: "Read More"}]}
                    />


                    <section className="max-w-6xl mx-auto px-4 py-12">
                        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Things to Do in Los Angeles
                            (LAX)</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <img src="https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2024-09/05ffa2d9-31e9-473e-ba5a-98a9045e6d70.jpeg?h=b30542b8&itok=zw0uhlE8"
                                     alt="Venice Beach" className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Venice Beach</h3>
                                    <p className="text-gray-600 mb-4">Explore the iconic boardwalk, street performers,
                                        and Muscle Beach gym.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span>2 miles from LAX</span>
                                    </div>
                                </div>
                            </div>


                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <img src="https://images.adsttc.com/media/images/5037/f9ad/28ba/0d59/9b00/073f/large_jpg/stringio.jpg?1414206602"
                                     alt="Getty Center" className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">The Getty Center</h3>
                                    <p className="text-gray-600 mb-4">World-class art collection with stunning
                                        architecture and gardens.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span>12 miles from LAX</span>
                                    </div>
                                </div>
                            </div>


                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <img src="https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2025-01/VC_Santa-Monica-Pier-and-Beach_gty-672889940-RF_1280x640.jpg.webp?itok=A38RHXCt"
                                     alt="Santa Monica Pier" className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Santa Monica Pier</h3>
                                    <p className="text-gray-600 mb-4">Iconic pier with Pacific Park amusement park and
                                        ocean views.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span>5 miles from LAX</span>
                                    </div>
                                </div>
                            </div>


                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <img src="https://cdn.prod.website-files.com/660332e04a42ee42011d9a2b/660332e04a42ee42011d9ebe_072123.1.jpg"
                                     alt="Hollywood Walk of Fame" className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Hollywood Walk of Fame</h3>
                                    <p className="text-gray-600 mb-4">See the stars on the sidewalk honoring
                                        entertainment celebrities.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span>18 miles from LAX</span>
                                    </div>
                                </div>
                            </div>


                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <img src="https://griffithobservatory.org/wp-content/uploads/2021/03/cameron-venti-c5GkEd-j5vI-unsplash_noCautionTape-1600x800-1638571089.jpg"
                                     alt="Griffith Observatory" className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Griffith Observatory</h3>
                                    <p className="text-gray-600 mb-4">Stunning views of LA and the Hollywood sign, plus
                                        astronomy exhibits.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span>25 miles from LAX</span>
                                    </div>
                                </div>
                            </div>


                            <div
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <img src="https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/2021-01/VC-Original-Farmers-Market-gty-917043346-EditRF_1280x640.jpg.webp?itok=ANlNjaiT"
                                     alt="The Original Farmers Market" className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">The Original Farmers
                                        Market</h3>
                                    <p className="text-gray-600 mb-4">Historic market with diverse food stalls and
                                        unique shopping.</p>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span>10 miles from LAX</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <a href="https://www.tripadvisor.com/Attractions-g32655-Activities-Los_Angeles_California.html"
                               className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                                View More Activities
                            </a>
                        </div>
                    </section>

                    <TwoColumnFAQ faqItems={faqItems}/>
                    <PageEndLinks routes={routes}/>
                </div>
            </main>
        </>
    );
 }

export default PageHome;
