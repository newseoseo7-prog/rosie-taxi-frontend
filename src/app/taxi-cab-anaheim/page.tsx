import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";



export async function generateMetadata() {
    return {
        title: "Anaheim Taxi Cab, 24/7 LAX & Burbank Airport Rides, Rosie Taxi Cab",
        description: "ROSIE TAXI CAB ANAHEIM 24/7 ORDER ONLINE SAVE 20% NOW | CALL NOW (805) 258-8937 TAXI CAB NEAR ME ANAHEIM CA | AIRPORT TRANSPORTATION",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-anaheim/',
        },
        openGraph: {
            title: "Anaheim Taxi Cab | 24/7 LAX & Burbank Airport Rides | Rosie Taxi Cab",
            description: "Trusted taxi service in Anaheim for Disney visitors, local residents, and LAX/Burbank airport rides. Clean vehicles & on-time pickups. Call (805) 258-8937",
            url: 'https://new.rosietaxicab.com/taxi-cab-anaheim/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/anaheim-luxury-taxi.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/anaheim-luxury-taxi.jpg',
                    alt: 'Luxury Taxi Cab in Anaheim',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Anaheim Taxi Cab | 24/7 LAX & Burbank Airport Rides | Rosie Taxi Cab",
            description: "Trusted taxi service in Anaheim for Disney visitors, local residents, and LAX/Burbank airport rides. Clean vehicles & on-time pickups. Call (805) 258-8937",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/anaheim-luxury-taxi.jpg'],
            label1: 'Response Time',
            data1: 'Under 20 minutes'
        },
        other: {
            'og:updated_time': '2024-07-26T11:59:32-07:00',
        }
    };
}


function PageHome() {
    return (
        <main className="nc-PageHome relative overflow-hidden">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

                <HashTags text="#AnaheimTaxi #DisneylandRides #AnaheimToLAX #ARTshuttle #ConventionCenterRide #AngelsStadiumDropoff #HondaCenterTransit #AnaheimResortTransport #OCLimoService #Knott’sBerryFarmRide #AnaheimHillsCar #ThePackingHousePickup #AnaheimCommuter #714RideShare #AnaheimBusinessLimo #SoCalThemeParkTransit" />

                <>
                    {/* Camarillo Premium Outlets Section */}
                    <CitiesInfoSection
                        heading="Camarillo Premium Outlets"
                        text={
                            <>
                                <p>Camarillo Premium Outlets is a premier shopping destination featuring a wide variety of luxury and brand-name outlets at discounted prices.</p>

                                <ul className="space-y-4 mt-10">
                                    <li className="flex items-center space-x-4">
                                        <Badge name="01" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Home to top designer brands at discounted prices
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="02" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          A must-visit for shopping enthusiasts
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="03" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Offers year-round sales and special promotions
                        </span>
                                    </li>
                                </ul>
                                <p className="mt-5">
                                    Whether you're after high-end fashion or everyday essentials, Camarillo Premium Outlets has something for everyone at unbeatable prices.
                                </p>
                            </>
                        }
                        image="https://i4.swiftpic.io/visitcamarillo/SfbJuaPJJuzEn44zW6uDuoM0WOx7kZEEv8v8blbrntQ=/resize:1110,1110/https://visitcamarillo.com/wp-content/uploads/2016/08/X0A8674.jpg"  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                            { url: "/booking?from=camarillo", text: "Visit Camarillo Premium Outlets" },
                            { url: "/booking?to=camarillo", text: "Shop Now" },
                        ]}
                    />

                    {/* Camarillo Ranch Section */}
                    <CitiesInfoSection
                        heading="Camarillo Ranch"
                        text={
                            <>
                                <p>Camarillo Ranch is a historic property with a charming old-world feel, featuring beautiful gardens, a historic barn, and family-friendly activities.</p>

                                <ul className="space-y-4 mt-10">
                                    <li className="flex items-center space-x-4">
                                        <Badge name="01" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          A preserved ranch offering tours and events
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="02" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Perfect for photography, picnics, and history buffs
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="03" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Features gardens, a barn, and an equestrian center
                        </span>
                                    </li>
                                </ul>
                                <p className="mt-5">
                                    Explore the rich history of the Camarillo Ranch with guided tours, outdoor events, and scenic views perfect for a relaxing day out.
                                </p>
                            </>
                        }
                        image="https://www.venturacountymuseums.org/vcm/wp-content/uploads/2016/04/The-Camarillo-Ranch-House-850.jpg"  // Replace with actual Camarillo Ranch image URL
                        imagePosition="left"
                        buttons={[
                            { url: "/booking?from=camarillo", text: "Visit Camarillo Ranch" },
                            { url: "/booking?to=camarillo", text: "Plan Your Visit" },
                        ]}
                    />

                    {/* Adolfo Camarillo High School Section */}
                    <CitiesInfoSection
                        heading="Adolfo Camarillo High School"
                        text={
                            <>
                                <p>Adolfo Camarillo High School is a well-known educational institution in the heart of Camarillo, renowned for its commitment to academics and community involvement.</p>

                                <ul className="space-y-4 mt-10">
                                    <li className="flex items-center space-x-4">
                                        <Badge name="01" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          A leader in academic excellence and extracurricular activities
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="02" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Hosts community events, sports, and performances
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="03" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          A center for youth engagement and empowerment
                        </span>
                                    </li>
                                </ul>
                                <p className="mt-5">
                                    Adolfo Camarillo High School is more than just an educational institution—it is a key community hub where students, families, and residents gather to celebrate school spirit and local culture.
                                </p>
                            </>
                        }
                        image="https://imagescdn.homes.com/i2/ao0T5PzPorXila3rYGuPMtk7sNJ4Hdfbr2vms0oevCw/111/adolfo-camarillo-high-school-camarillo-ca-3-schoolphoto.jpg?p=1"  // Replace with actual Adolfo Camarillo High image URL
                        imagePosition="right"
                        buttons={[
                            { url: "/booking?from=camarillo", text: "Explore the School" },
                            { url: "/booking?to=camarillo", text: "Learn More" },
                        ]}
                    />

                    {/* Pleasant Valley Historical Society Section */}
                    <CitiesInfoSection
                        heading="Pleasant Valley Historical Society"
                        text={
                            <>
                                <p>The Pleasant Valley Historical Society preserves the rich history of Camarillo and the surrounding areas, with exhibits, events, and educational resources for visitors of all ages.</p>

                                <ul className="space-y-4 mt-10">
                                    <li className="flex items-center space-x-4">
                                        <Badge name="01" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Explore local history through exhibits and artifacts
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="02" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Hosts educational programs and community events
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="03" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          A valuable resource for history enthusiasts
                        </span>
                                    </li>
                                </ul>
                                <p className="mt-5">
                                    Discover the rich heritage of Camarillo and its people at the Pleasant Valley Historical Society, where you can explore exhibits and learn about the region’s fascinating past.
                                </p>
                            </>
                        }
                        image="https://example.com/pleasant_valley_historical_image.jpg"  // Replace with actual Pleasant Valley Historical Society image URL
                        imagePosition="left"
                        buttons={[
                            { url: "/booking?from=camarillo", text: "Visit the Historical Society" },
                            { url: "/booking?to=camarillo", text: "Learn About Local History" },
                        ]}
                    />

                    {/* Camarillo Community Center Section */}
                    <CitiesInfoSection
                        heading="Camarillo Community Center"
                        text={
                            <>
                                <p>The Camarillo Community Center is a popular venue for a wide range of events, from social gatherings and classes to recreational activities and family fun.</p>

                                <ul className="space-y-4 mt-10">
                                    <li className="flex items-center space-x-4">
                                        <Badge name="01" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          A versatile space for community events and programs
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="02" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Hosts a variety of cultural and recreational activities
                        </span>
                                    </li>
                                    <li className="flex items-center space-x-4">
                                        <Badge name="03" />
                                        <span className="font-medium text-neutral-700 dark:text-neutral-300">
                          Serves as a gathering place for Camarillo residents
                        </span>
                                    </li>
                                </ul>
                                <p className="mt-5">
                                    Whether you're looking for fitness classes, community meetings, or special events, the Camarillo Community Center offers something for everyone.
                                </p>
                            </>
                        }
                        image="https://images.squarespace-cdn.com/content/v1/5581d2d3e4b02b620931f85b/1434593415218-TPLK7IN77B178JRBZ6YF/PVHS_Gazebo.JPG"  // Replace with actual Camarillo Community Center image URL
                        imagePosition="right"
                        buttons={[
                            { url: "/booking?from=camarillo", text: "Discover the Community Center" },
                            { url: "/booking?to=camarillo", text: "Join a Program" },
                        ]}
                    />
                    <div className="p-4">
                        <EventsDisplay city="Anaheim" />
                    </div>
                </>


            </div>
        </main>
    );
}

export default PageHome;
