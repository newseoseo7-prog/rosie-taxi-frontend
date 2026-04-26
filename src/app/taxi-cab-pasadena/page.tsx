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
export async function generateMetadata() {
    return {
        title: "Pasadena Luxury Taxi & Car Service | Rose Parade & LAX Transfers | Rosie Taxi Cab",
        description: "Premium Pasadena taxi service for JPL, Caltech, Rose Parade events & LAX/Burbank airports. Corporate accounts & luxury fleet available. (626) 555-1234",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-pasadena/',
        },
        openGraph: {
            title: "Pasadena Luxury Taxi & Car Service | Rose Parade & LAX Transfers | Rosie Taxi Cab",
            description: "Executive transportation serving Old Pasadena, JPL, Huntington Hospital and major events. Black car service available 24/7. Book now: (626) 555-1234",
            url: 'https://new.rosietaxicab.com/taxi-cab-pasadena/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/06/pasadena-rose-bowl-transportation.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/06/pasadena-rose-bowl-transportation.jpg',
                    alt: 'Luxury Taxi Service in Pasadena with Rose Bowl backdrop',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Pasadena Luxury Taxi & Car Service | Rose Parade & LAX Transfers | Rosie Taxi Cab",
            description: "Executive transportation serving Old Pasadena, JPL, Huntington Hospital and major events. Black car service available 24/7. Book now: (626) 555-1234",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/06/pasadena-rose-bowl-transportation.jpg'],
            label1: 'Response Time',
            data1: 'Under 25 minutes'
        },
        other: {
            'og:updated_time': '2024-07-26T11:59:32-07:00',
        }
    };
}

function PageHome() {


    const faqItems = [
        {
            question: "How far is Pasadena from LAX ? ",
            answer: "The drive from Pasadena to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
            question: "how to order a cab / private car in Pasadena ?",
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
            question: "how to find a good taxi near Pasadena CA ? ",
            answer: `You see most of the mediocre transportation companies in Pasadena are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Pasadena CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Pasadena to LAX', href: '#' },
        { name: ' Transportation service from Pasadena to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Pasadena to SBA', href: '#' },
        { name: 'Transportation service from Pasadena to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Pasadena to Los Angeles', href: '#' },
        { name: 'Transportation service from Pasadena to Hollywood', href: '#' },
        { name: 'Transportation service from Pasadena to Burbank', href: '#' },
        { name: 'Transportation service from Pasadena to Disney Land', href: '#' },
        { name: 'Transportation service from Pasadena to Universal Studios', href: '#' },
        { name: 'Transportation service from Pasadena to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Pasadena to San Diego', href: '#' },
        { name: 'Transportation service from Pasadena to Westlake Village', href: '#' },
        { name: 'Transportation service from Pasadena to Santa Monica', href: '#' },
        { name: 'Transportation service from Pasadena to Holmby Hills', href: '#' },
        { name: 'Transportation service from Pasadena to Malibu', href: '#' },
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
                    <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />


                    <HashTags text="
                    #I Need A Ride #Private Car #Reliable Taxi #Transportation To LAX
#open 24/7 #Pasadena
#Los Angeles #LAX #Glendale #Burbank #South Pasadena #Montebello #Fullerton
#Malibu #Beverly Hills
                    "/>
                    <>
                        {/* Camarillo Premium Outlets Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Los Angeles International Airport LAX "
                            text={
                                <>
                                    <p>PLANNING YOUR NEXT LAX TRIP LET US ANSWER YOUR QUESTIONS !</p>
                                    <p className="mt-2">Finding A Reliable Taxi Cab Transportation From Pasadena to LAX
                                        Goes Through A set Of Questions As Follows :</p>

                                    <ul className="space-y-2 mt-5 list-inside list-disc">
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="01" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                                Availability Of the Driver (s)
                                            </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="02" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                                Your Flight’s Departure
                                            </span>
                                        </li>
                                        <li className=" items-center space-x-4">
                                            {/* <Badge name="03" /> */}
                                            <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                                Day / Time Of The Travel
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-5">
                                        Rosie Taxi Cab Can Help You Schedule Your Next LAX Trip Ahead of Time And We
                                        Make Sure To Provide You A Reliable Taxi Service In Pasadena CA And Surrounding
                                        Areas. Let Our Expert Dispatch To Help You Navigate This Process. Give Us A Call
                                        For More Details.
                                    </p>
                                </>
                            }
                            image="/images/lax-airport-LAXBATHROOM0318.webp"  // Replace with actual Camarillo Premium Outlets image URL
                            imagePosition="right"

                        />
                        <AirportTransportationList items={[
                            { label: 'Pasadena to LAX' },
                            { label: 'Pasadena to BOB' },
                            { label: 'Pasadena to LGB' },
                            { label: 'Pasadena to Los Angeles' },
                            { label: 'Pasadena to Rose Bowl' },
                        ]} />
                        {/* Camarillo Ranch Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Burbank Hope Airport BOB "
                            text={
                                <>
                                    <p>Rosie Taxi Cab Can Help You Schedule Your Next Burbank Airport Trip Ahead of
                                        Time. Using Our Taxi Cab Service Is Guaranteed and We Encourage Our Customers To
                                        Reserve A Cab Rather Calling Last Minute To The Airport. From Our End, We Make
                                        Sure To Provide You A Reliable Taxi Service In Pasadena CA And Surrounding
                                        Areas. Give Us A Call And Let Our Expert Dispatch To Help You Navigate This
                                        Process. </p>


                                </>
                            }
                            image="/images/MNLA_FilePhotos_PasadenaValley_0013_16-9.webp"  // Replace with actual Camarillo Ranch image URL
                            imagePosition="left"

                        />

                        {/* Adolfo Camarillo High School Section */}
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Long Beach Airport LGB"
                            text={
                                <>
                                    <p>
                                        Rosie Taxi Cab Can Help You Schedule Your Next Long Beach Airport Trip Ahead of
                                        Time And We Make Sure To Provide You A Reliable Taxi Service In Pasadena CA And
                                        Surrounding Areas. Let Our Expert Dispatch To Help You Navigate This Process.
                                        Give Us A Call For More Details.
                                    </p>


                                </>
                            }
                            image="/images/SBA-5362.webp"  // Replace with actual Adolfo Camarillo High image URL
                            imagePosition="right"

                        />
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Things To Do In Pasadena"
                            text={
                                <>
                                    <p>
                                        With historic buildings, luscious landscapes, and California sunshine that
                                        provides a plethora of light, Pasadena is the perfect place to escape to.
                                        Nestled at the base of the San Gabriel Mountains, the city is an oasis from the
                                        hustle and bustle of downtown Los Angeles, located a mere 10 miles away.
                                    </p>


                                </>
                            }
                            image="/Pasadena-California-Colorado-Street-Bridge-5-scaled-1-1024x684.jpg.webp"  // Replace with actual Adolfo Camarillo High image URL
                            imagePosition="right"
                            buttons={[
                                { url: "https://www.visitpasadena.com/", text: "Things To Do" },

                            ]}
                        />
                        <CitiesInfoSection
                            className="leading-6"
                            heading="Places To Stay In Pasadena"
                            text={
                                <>
                                    <p>
                                        Choosing Pasadena as your home base for any trip to the Los Angeles area is a
                                        smart strategy. From here, you’ll have fast, easy access to downtown and other
                                        landmark locations such as Hollywood, Beverly Hills, and local beaches. Stay in
                                        one of our relaxing luxury hotels just a short walk from shopping, dining,
                                        museums, and theaters, or book your room at one of our intimate, affordable inns
                                        or bed & breakfasts, many of which are situated on the route of the famous Rose
                                        Parade®. Immersed in Pasadena’s urbane atmosphere, you’ll relish scenic views of
                                        the surrounding mountains and stroll among artfully maintained architectural
                                        treasures.

                                    </p>


                                </>
                            }
                            image="/images/Pasadena-2.jpg"  // Replace with actual Adolfo Camarillo High image URL
                            imagePosition="right"
                            buttons={[
                                { url: "https://www.visitpasadena.com/places-to-stay/", text: "PLACES TO STAY" },

                            ]}
                        />


                    </>


                    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                                Things to Do in Pasadena
                            </h2>
                            <p className="text-lg text-gray-600 mb-10">
                                Experience the elegance, culture, and history of Pasadena, a vibrant city nestled at the base of the San Gabriel Mountains.
                            </p>

                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <a href="https://www.huntington.org/">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <img
                                            src="https://www.visitpasadena.com/imager/assets_simpleviewinc_com/simpleview/image/upload/c_fit,w_800,h_600/crm/pasadenaca/The-Huntington-Chinese-Garden-Lake-View-PC-The-Huntington-Library-Art-Museum-and-Botanical-Gardens_c3cc3d3e99a0496ea9909ca43528d03d_da955446-fd4d-1106-73b65c148aedadb1_26e0b9aeeaf756a39a565edb1a58484e.jpg"
                                            alt="The Huntington Library"
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">The Huntington Library</h3>
                                            <p className="text-gray-600">
                                                Explore stunning gardens, rare books, and art collections at this world-renowned cultural destination.
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://www.cityofpasadena.net/parks-and-rec/parks/descanso-gardens/">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCR5IvVzVfyDWLv0g1euMATFq7mO6UQlq1NQ&s"
                                            alt="Descanso Gardens"
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">Descanso Gardens</h3>
                                            <p className="text-gray-600">
                                                Stroll through peaceful landscapes filled with roses, camellias, and seasonal blooms.
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://www.nortonsimon.org/">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <img
                                            src="https://travelswithmaitaitom.com/wp-content/uploads/2024/01/11Norton-Simon-Museum-Pasadena-Travels-With-Mai-Tai-Tom-1.jpeg"
                                            alt="Norton Simon Museum"
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">Norton Simon Museum</h3>
                                            <p className="text-gray-600">
                                                Discover European masterpieces and Asian sculptures in this intimate and renowned art museum.
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://www.visitpasadena.com/directory/old-pasadena/">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQHEvRoA7fmhgW1dfewLvuZSLofCg7xvgaw&s"
                                            alt="Old Pasadena"
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">Old Pasadena</h3>
                                            <p className="text-gray-600">
                                                Shop, dine, and stroll through Pasadena’s historic and lively downtown district.
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://www.rosebowlstadium.com/">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xK-a1EjhgXPvxo1G4fd8JBe9KuxMsV2TXA&s"
                                            alt="Rose Bowl Stadium"
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">Rose Bowl Stadium</h3>
                                            <p className="text-gray-600">
                                                Catch a game, concert, or flea market at this iconic national historic landmark.
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://www.kidspacemuseum.org/">
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                        <img
                                            src="https://kidspacemuseum.org/wp-content/uploads/2025/01/A_Forest_Under_the_Sea_Wide.jpg"
                                            alt="Kidspace Children's Museum"
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">Kidspace Children's Museum</h3>
                                            <p className="text-gray-600">
                                                A hands-on museum offering interactive exhibits and outdoor play for young explorers.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>




                    <PageEndLinks routes={routes} />
                    <TwoColumnFAQ faqItems={faqItems} />

                    <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">
                            How to Book a Taxi Cab in Pasadena with Rosie Taxi Cab
                        </h1>

                        <p className="text-gray-700 mb-4">
                            Need fast and reliable transportation in Pasadena? Rosie Taxi Cab is your go-to for affordable, professional service available 24/7. Whether you're headed to the Rose Bowl, Old Pasadena, or the airport, Rosie makes booking a taxi easy and stress-free.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            Pasadena Taxi Services Available 24/7
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Searching for a taxi near Pasadena or taxi near me open? With Rosie Taxi Cab, help is always just a call or click away. Unlike rideshare apps that fluctuate pricing, Rosie offers fixed rates, clean vehicles, and courteous local drivers. As a trusted cab company in Pasadena, we provide dependable service any time—day or night.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            Rosie Taxi Cab to LAX, Burbank & Ontario Airports
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Need Pasadena transportation to LAX? Rosie Taxi Cab specializes in reliable airport transfers with no surge pricing. Whether it’s a Pasadena to LAX by taxi, a ride to Burbank, or Ontario, you can count on Rosie to get you there safely and on time.
                        </p>

                        <p className="text-gray-700 mb-3">Common routes from Pasadena include:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Taxi Pasadena to LAX airport</li>
                            <li>Pasadena taxi cab to Burbank airport</li>
                            <li>Private transportation Pasadena to Ontario airport</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            How to Book with Rosie Taxi Cab
                        </h2>
                        <p className="text-gray-700 mb-3">Booking a taxi in Pasadena is easy. You can:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Call Rosie Taxi Cab for instant or pre-scheduled rides</li>
                            <li>Reserve online through our simple booking form</li>
                            <li>Search for taxi cab near Pasadena and choose Rosie for fast, local service</li>
                        </ul>

                        <p className="text-gray-700 mb-4">
                            Unlike Uber Pasadena or Lyft Pasadena, Rosie gives you predictable pricing, local knowledge, and a more personalized experience.
                        </p>

                        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                            Why Choose Rosie Taxi Cab?
                        </h2>
                        <p className="text-gray-700 mb-4">
                            Whether you’re saying, "I need a taxi to LAX" or just heading downtown, Rosie Taxi Cab delivers top-notch service every time. Our licensed, experienced taxi drivers in Pasadena know the city and its traffic patterns, helping you avoid delays and ride comfortably.
                        </p>

                        <p className="text-gray-700 mb-4">
                            From quick local rides to long-distance travel, Rosie is Pasadena’s trusted name in transportation. Choose us for the most dependable cab service in Pasadena.
                        </p>

                        <p className="text-gray-800 italic">
                            Need a ride now? Book with Rosie Taxi Cab and enjoy Pasadena’s most professional taxi experience today.
                        </p>
                    </article>


                </div>
            </main>

        </>

    );
}

export default PageHome;
