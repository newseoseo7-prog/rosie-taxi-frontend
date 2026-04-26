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
import Link from "next/link";
import Features from "@/components/features";
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
         <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
             {/* GLASSMOPHIN */}
             <BgGlassmorphism />

             <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                 {/* SECTION HERO */}
                 <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />



                 <>
                     {/* Camarillo Premium Outlets Section */}
                     <CitiesInfoSection
                         heading="Discover Los Angeles"
                         text={
                             <>
                                 <p>Los Angeles is one of the most exciting city in the World. Los Angeles is a trend-setting global metropolis with an extraordinary history and a rich cultural heritage. It’s known as the Entertainment Capital of the World and is home to renowned museums, along with 75 miles of sunny coastline. With so much to see and do, the best way to discover L.A. is by exploring L.A.’s vibrant multicultural neighborhoods. Use this virtual experience to explore the 50 hottest attractions in LA. Rosie Taxi Cab provides private car transportation in minutes anywhere and anytime in Los Angeles and all over California.</p>


                             </>
                         }
                         image="/images/gettyimages-1212376454-612x612-1.webp"  // Replace with actual Camarillo Premium Outlets image URL
                         imagePosition="right"
                         buttons={[
                             { url: "https://www.discoverlosangeles.com/business", text: "Los angeles made with love" },

                         ]}
                     />



                     <div className="text-center">
                         <h2 className="text-3xl font-bold  md:text-5xl">WELCOME TO LOS ANGELES</h2>
                         <p>TAKE A PEEK INSIDE OUR WONDER WORLD</p>
                         <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
                             <Link href="http://www.malibucreekstatepark.org/">
                                 <img src="/images/LA-NOW-1.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl mt-3  font-semibold">LOS ANGELES</h3>
                             </Link>
                             <Link href={"https://www.universalstudioshollywood.com/web/en/us"}>
                                 <img src="/images/Universal-studios.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Universal Studios Hollywood Tour </h3>
                             </Link>
                             <Link href={"https://www.wbstudiotour.com"}>
                                 <img src="/images/Warner-Bros.-Studio-Tour-Hollywood-Studio-Water-Tower.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Warner Bros. Studio Tour Hollywood</h3>
                             </Link>
                             <Link href={"http://www.paramountstudiotour.com/"}>
                                 <img src="/images/Paramount-Pictures-Studio-Tour-Los-Angeles-United-States.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Paramount Pictures Studio Tour</h3>
                             </Link>
                             <Link href={"https://www.hollywoodsign.org/"}>
                                 <img src="/images/11hollywood-strip-1-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">HOLLYWOOD SIGN</h3>
                             </Link>
                             <Link href={"https://www.petersen.org/"}>
                                 <img src="/images/BEN80_n-1536x1048.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Petersen Automotive Museum</h3>
                             </Link>
                             <Link href={"https://griffithobservatory.org/"}>
                                 <img src="/images/Griffith-Observatory-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Griffith Observatory</h3>
                             </Link>
                             <Link href={"https://disneyland.disney.go.com"}>
                                 <img src="/images/Disney-Land-CA-1536x1024.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Disney California Adventure Park</h3>
                             </Link>
                             <Link href={"https://www.santamonicapier.org"}>
                                 <img src="/images/santa-monica-pier_article-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Santa Monica Pier</h3>
                             </Link>
                             <Link href={"https://www.lacma.org/"}>
                                 <img src="/images/lacma.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Los Angeles County Museum of Art</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32272-d105176-Reviews-Museum_Of_Jurassic_Technology-Culver_City_California.html"}>
                                 <img src="/images/the-museum-of-jurassic-technology-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">The Museum of Jurassic Technology</h3>
                             </Link>
                             <Link href={"https://www.thebroad.org/"}>
                                 <img src="/images/the-broad-los-angeles-1536x1024.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">The Broad Los Angeles</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32655-d103412-Reviews-Natural_History_Museum_of_Los_Angeles_County-Los_Angeles_California.html"}>
                                 <img src="/images/Natural-History-Museum-of-Los-Angeles-County-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Natural History Museum of Los Angeles County</h3>
                             </Link>
                             <Link href={"https://www.getty.edu/visit/center/"}>
                                 <img src="/images/The-getty-center-LA-1536x1024.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">The Getty Center </h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32070-d116580-Reviews-Rodeo_Drive-Beverly_Hills_California.html"}>
                                 <img src="/images/beverly-hills-rodeo-drive-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Beverly Hills Rodeo Drive</h3>
                             </Link>
                             <Link href={"https://www.aquariumofpacific.org"}>
                                 <img src="/images/aquarium-of-the-pacific-1536x1024.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Aquarium of The Pacific</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g33029-d110203-Reviews-The_Huntington_Library_Art_Museum_and_Botanical_Gardens-San_Marino_California.html"}>
                                 <img src="/images/The-Huntington-Chinese-Garden-Lake-View-PC-The-Huntington-Library-Art-Museum-and-Botanical-Gardens_c3cc3d3e99a0496ea9909ca43528d03d.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">The Huntington Library, Art Museum, and Botanical Gardens</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32655-d615551-Reviews-Dodger_Stadium-Los_Angeles_California.html"}>
                                 <img src="/images/Dodger-Stadium-1536x1024.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Dodger Stadium</h3>
                             </Link>
                             <Link href={"https://www.lacclink.com"}>
                                 <img src="/images/LA-CONVENTION-CENTER-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">LA Convention Center </h3>
                             </Link>
                             <Link href={"https://www.nortonsimon.org"}>
                                 <img src="/images/Norton-Simon-Museum.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Norton Simon Museum</h3>
                             </Link>
                             <Link href={"https://www.downtownsm.com/"}>
                                 <img src="/images/downtown-santa-monica-2-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Downtown Santa Monica</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32655-d2440929-Reviews-Battleship_USS_Iowa_Museum-Los_Angeles_California.html"}>
                                 <img src="/images/Battleship-USS-Iowa-Museum-1-1536x1024.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Battleship USS Iowa Museum</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32655-d142962-Reviews-Angels_Flight_Railway-Los_Angeles_California.html"}>
                                 <img src="/images/Angels-Flight-Railwayjpg-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Angels Flight Railway</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32655-d23662291-Reviews-Academy_Museum_Of_Motion_Pictures-Los_Angeles_California.html"}>
                                 <img src="/images/Academy-Museum-of-Motion-Pictures.jpg" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Academy Museum of Motion Pictures</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32573-d109797-Reviews-Mount_Wilson_Observatory-La_Canada_Flintridge_California.html"}>
                                 <img src="/images/mount-wilson-observatory-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Mount Wilson Observatory</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32655-d266790-Reviews-Venice_Canals_Walkway-Los_Angeles_California.html"}>
                                 <img src="/images/Venice-Canals-los-angeles-1-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Venice Canals Los Angeles</h3>
                             </Link>
                             <Link href={"https://www.laparks.org/runyon/"}>
                                 <img src="/images/Runyon-Canyon-Park-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Mount Wilson Observatory</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32655-d106164-Reviews-California_Science_Center-Los_Angeles_California.html"}>
                                 <img src="/images/California-Science-Center1-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">California Science Center</h3>
                             </Link>
                             <Link href={"https://www.eataly.com/us_en/stores/los-angeles"}>
                                 <img src="/images/Grand-Central-Market-1-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Eataly Santa Monica</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32655-d106164-Reviews-California_Science_Center-Los_Angeles_California.html"}>
                                 <img src="/images/Grand-Central-Market-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Grand Central Market</h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g33052-d103427-Reviews-Third_Street_Promenade-Santa_Monica_California.html"}>
                                 <img src="/images/3rd-street-promenade-santa-monica-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Third Street Promenade</h3>
                             </Link>
                             <Link href={"https://www.barnsdall.org/hollyhock-house"}>
                                 <img src="/images/Hollyhock-House-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Hollyhock House</h3>
                             </Link>
                             <Link href={"https://malibupier.com"}>
                                 <img src="/images/malibu-pier.-Malibu-CA--800x533.jpg" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Malibu Pier </h3>
                             </Link>
                             <Link href={"https://tarpits.org/"}>
                                 <img src="/images/La-Brea-Tar-Pits-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">La Brea Tar Pits</h3>
                             </Link>
                             <Link href={"https://www.iflyworld.com/"}>
                                 <img src="/images/iFLY-Indoor-Skydiving-Hollywood-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">iFLY Indoor Skydiving - Hollywood</h3>
                             </Link>
                             <Link href={"https://www.madametussauds.com/hollywood/"}>
                                 <img src="/images/Madame-Tussauds-Hollywood-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Madame Tussauds Hollywood</h3>
                             </Link>
                             <Link href={"https://www.knotts.com/"}>
                                 <img src="/images/Knotts-Berry-Farm-800x533.jpg" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Knott's Berry Farm</h3>
                             </Link>
                             <Link href={"https://wheelfunrentals.com/ca/los-angeles/echo-park/"}>
                                 <img src="/images/Swan-Boat-Rental-in-Echo-Park-Rental-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Swan Boat Rental in Echo Park Rental</h3>
                             </Link>
                             <Link href={"https://www.moca.org"}>
                                 <img src="/images/Museum-of-Contemporary-Art-Los-Angeles-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Museum of Contemporary Art, Los Angeles</h3>
                             </Link>
                             <Link href={"https://www.skydivetaft.com"}>
                                 <img src="/images/Los-Angeles-Skydiving-1024x683.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">Los Angeles Skydiving</h3>
                             </Link>
                             <Link href={"https://www.adamsonhouse.org/"}>
                                 <img src="/images/Adamson-House.jpg.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">ADAMSON HOUSE MUSEUM </h3>
                             </Link>
                             <Link href={"https://www.adamsonhouse.org/"}>
                                 <img src="/images/getty-museum.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">THE GETTY MUSEUM </h3>
                             </Link>
                             <Link href={"https://www.tripadvisor.com/Attraction_Review-g32676-d272297-Reviews-Paradise_Cove_Road-Malibu_California.html"}>
                                 <img src="/images/Paradise-Cove-Beach-in-Malibu-CA.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">PARADISE COVE BEACH</h3>
                             </Link>
                             <Link href={"https://neptunesnet.com/"}>
                                 <img src="/images/neptunes-net.webp" alt="" />
                                 <h3 className="text-xl md:text-3xl  mt-3 font-semibold">NEPTUNE'S NET</h3>
                             </Link>
                         </div>
                     </div>

                     <CitiesInfoSection
                         heading="Los Angeles International Airport LAX "
                         text={
                             <>
                                 <p>PLANNING YOUR NEXT LAX TRIP LET US ANSWER YOUR QUESTIONS  !</p>
                                 <p>Finding A Reliable Taxi Cab Transportation From Pasadena to LAX Goes Through A set Of Questions As Follows : </p>

                                 <ul className="space-y-4 mt-10 list-inside list-disc">
                                     <li className=" items-center space-x-4 ">
                                         {/* <Badge name="01" /> */}
                                         <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Rosie Taxi Cab Provides The Most Reliable Airport Transfer 24/7 To Major Airport Transfer To/ From LAX; BOB; SBA
                        </span>
                                     </li>
                                     <li className=" items-center space-x-4">
                                         {/* <Badge name="02" /> */}
                                         <span className="font-medium text-neutral-700 dark:text-neutral-300">
                                        Availability Of the Driver (s)
                        </span>
                                     </li>
                                     <li className=" items-center space-x-4">
                                         {/* <Badge name="03" /> */}
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

                                 <p>Rosie Taxi Cab Can Help You Schedule Your Next LAX Trip Ahead of Time And We Make Sure To Provide You A Reliable Taxi Service In Los Angeles. Let Our Expert Dispatch To Help You Navigate This Process. Give Us A Call For More Details.</p>
                             </>
                         }
                         image="/images/lax-airport-LAXBATHROOM0318.webp"  // Replace with actual Camarillo Premium Outlets image URL
                         imagePosition="left"
                         buttons={[
                             { url: "https://www.discoverlosangeles.com/business", text: "Los angeles made with love" },

                         ]}
                     />
                 </>


                 <CitiesInfoSection
                     className="leading-6"
                     heading="Burbank Hope Airport BOB "
                     text={
                         <>
                             <p>Rosie Taxi Cab Can Help You Schedule Your Next Burbank Airport Trip Ahead of Time. Using Our Taxi Cab Service Is Guaranteed and We Encourage Our Customers To Reserve A Cab Rather Calling Last Minute To The Airport. From Our End, We Make Sure To Provide You A Reliable Taxi Service In Pasadena CA And Surrounding Areas.  Give Us A Call And Let Our Expert Dispatch To Help You Navigate This Process. </p>



                         </>
                     }
                     image="/images/MNLA_FilePhotos_PasadenaValley_0013_16-9.webp"  // Replace with actual Camarillo Ranch image URL
                     imagePosition="left"

                 />

                 <CitiesInfoSection
                     className="leading-6"
                     heading="Long Beach Airport LGB"
                     text={
                         <>
                             <p>
                                 Rosie Taxi Cab Can Help You Schedule Your Next Long Beach Airport Trip Ahead of Time And We Make Sure To Provide You A Reliable Taxi Service In Pasadena CA And Surrounding Areas. Let Our Expert Dispatch To Help You Navigate This Process. Give  Us A Call For More Details.
                             </p>



                         </>
                     }
                     image="/images/SBA-5362.webp"  // Replace with actual Adolfo Camarillo High image URL
                     imagePosition="right"

                 />

                 <Features
                     heading="AIRPORT RIDES WITH TAXI CAB OJAI"
                     box1={{
                         heading: "LAX",
                         para: "Going from Ojai to LAX is about 1h 45 min to 2hrs/ 30 min drive during traffic time. You can go from Ojai to LAX through the 10 south or through the Pacific Coast Hyw."
                     }}
                     box2={{
                         heading: "BOB",
                         para: "Going from Ojai to Burbank Airport is about 1hr 40 min to 2hrs with traffic. Choosing our safe and reliable service is our devise."
                     }}
                     box3={{
                         heading: "SBA",
                         para: "Going from Ojai to Santa Barbara Airport is abouity 1hr to 1hr/30 min with traffic. It’s a small airport comparing to LAX and BOB."
                     }}
                 />


                 <TwoColumnFAQ faqItems={faqItems} />
                 <PageEndLinks routes={routes} />


             </div>
         </main>
     );
}
export default PageHome;
