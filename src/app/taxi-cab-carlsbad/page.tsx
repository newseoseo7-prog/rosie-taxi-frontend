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
        title: "Carlsbad Taxi Cab, 24/7 Airport & Local Rides, Rosie Taxi Cab",
        description: "ROSIE TAXI CAB CARLSBAD 24/7 ORDER ONLINE SAVE 20% NOW | CALL NOW (805) 258-8937 TAXI CAB NEAR ME CARLSBAD CA | AIRPORT & LOCAL TRANSPORTATION",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-cab-carlsbad/',
        },
        openGraph: {
            title: "Carlsbad Taxi Cab | 24/7 Airport & Local Rides | Rosie Taxi Cab",
            description: "Trusted taxi service in Carlsbad for beach visitors, business travelers, and airport transfers. Clean vehicles & reliable rides. Call (805) 258-8937",
            url: 'https://new.rosietaxicab.com/taxi-cab-carlsbad/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/carlsbad-luxury-taxi.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/carlsbad-luxury-taxi.jpg',
                    alt: 'Luxury Taxi Cab in Carlsbad',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Carlsbad Taxi Cab | 24/7 Airport & Local Rides | Rosie Taxi Cab",
            description: "Trusted taxi service in Carlsbad for beach visitors, business travelers, and airport transfers. Clean vehicles & reliable rides. Call (805) 258-8937",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/carlsbad-luxury-taxi.jpg'],
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

                <HashTags text="
#I Need A Ride #Private Car #Reliable Taxi #Camarillo To LAX #Camarillo #Ventura CA #Oxnard #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Westlake Village #Malibu #Los Angeles #Beverly Hills
                "/>

                <>
                    {/* Camarillo Premium Outlets Section */}
                    <CitiesInfoSection
                        heading="Camarillo Premium Outlets"
                        text={
                           <p>
                               Carlsbad Premium Outlets is a shopper’s paradise located just north of San Diego, California, offering over 90 luxury and brand-name stores with discounts of 25% to 65% off retail prices. Visitors can explore high-end fashion, accessories, home goods, and more from top brands like Coach, Kate Spade, Nike, and Michael Kors. The open-air mall features a pleasant, Spanish-style layout with shaded walkways, making it a comfortable place to shop year-round. Conveniently located near Carlsbad’s beaches and attractions like LEGOLAND, it’s a perfect stop for tourists looking to combine shopping with Southern California’s coastal charm. With ample parking and dining options, it’s a must-visit for bargain hunters and fashion lovers alike.
                           </p>
                        }
                        image="/images/carlsbad_2.jpg"  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                            {url: "https://www.premiumoutlets.com/outlet/carlsbad", text: "More details"},

                        ]}
                    />
                    <div className="p-4">
                        <EventsDisplay city="Carlsbad" />
                    </div>
                    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                                Places to Stay in Carlsbad
                            </h2>
                            <p className="text-lg text-gray-600 mb-10">
                                From luxury beachfront resorts to cozy boutique hotels, Carlsbad offers accommodations
                                for every traveler. Here are some top picks:
                            </p>

                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                 <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="/images/omni_la_costa.jpg"
                                         alt="Omni La Costa Resort" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Omni La Costa Resort &
                                            Spa</h3>
                                        <p className="text-gray-600">A premier luxury retreat with championship golf,
                                            spa treatments, and lush gardens.</p>
                                    </div>
                                </div>

                                 <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/427347266.jpg?k=9554c822cce04a969a5dfdd5b0d9bf771aa30196caa914931348598027da49e1&o=&hp=1"
                                         alt="Park Hyatt Aviara" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Park Hyatt Aviara</h3>
                                        <p className="text-gray-600">Five-star coastal elegance with panoramic views,
                                            fine dining, and a Forbes-rated spa.</p>
                                    </div>
                                </div>

                                 <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/379278047.jpg?k=21132c1226f5a3494996d2e8350a4eb9e63ca629745cc5e056752651fe32aa2c&o=&hp=1"
                                         alt="Beach Terrace Inn" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Beach Terrace Inn</h3>
                                        <p className="text-gray-600">Direct beach access with oceanfront balconies and a
                                            relaxed, intimate atmosphere.</p>
                                    </div>
                                </div>

                                 <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/484594402.jpg?k=118005b4333a890ccc33a682b2b34e8d1d21929335d5586f37aa41e8d7baa234&o=&hp=1"
                                         alt="Cape Rey Carlsbad" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Cape Rey Carlsbad</h3>
                                        <p className="text-gray-600">Modern coastal hotel with a pool, spa, and easy
                                            access to Carlsbad State Beach.</p>
                                    </div>
                                </div>

                                 <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://images.ntmllc.com/v4/hotel/T23/T23346/T23346_EXT_Z9ADED/West-Inn-%26-Suites-Exterior.JPG?tr=w-656%2Ch-390%2Cfo-auto"
                                         alt="West Inn & Suites" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">West Inn & Suites</h3>
                                        <p className="text-gray-600">Charming, family-friendly hotel with complimentary
                                            breakfast and a cozy fireplace lounge.</p>
                                    </div>
                                </div>

                                 <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://carlsbad-proxy.imgix.net/https%3A%2F%2Ffiles.idss.com%2FC272%2FHotel-in-Carlsbad-Tamarack-Beach-Resort_1.jpg?auto=compress%2Cformat&fit=max&h=1080&q=80&w=1920&s=20f721f9902b7f65d8895c54a8053655"
                                         alt="Tamarack Beach Resort" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Tamarack Beach Resort</h3>
                                        <p className="text-gray-600">Beachfront condos with full kitchens, perfect for
                                            extended stays and family vacations.</p>
                                    </div>
                                </div>

                                 <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://www.hilton.com/im/en/SFOBBGI/20073771/dsc-2627-edita.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=267&rw=768&rh=430"
                                         alt="Hilton Garden Inn" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Hilton Garden Inn</h3>
                                        <p className="text-gray-600">Convenient location near LEGOLAND, with a pool and
                                            on-site dining options.</p>
                                    </div>
                                </div>

                                 <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://www.hilton.com/im/en/SANPPUP/17105148/cas-drone-ext-0278.tif?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=472&rw=768&rh=430"
                                         alt="Cassara Carlsbad" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Cassara Carlsbad</h3>
                                        <p className="text-gray-600">Upscale Tapestry Collection hotel with stylish
                                            rooms and a rooftop terrace.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a href="https://www.tripadvisor.com/Hotels-g32171-Carlsbad_California-Hotels.html"
                                   className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                                    Explore More Hotels
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                                Things to Do in Carlsbad
                            </h2>
                            <p className="text-lg text-gray-600 mb-10">
                                Discover exciting activities and attractions in beautiful Carlsbad, California.
                            </p>

                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/surfcityusa/Legoland0-7ce421065056a36_7ce421e8-5056-a36a-08e50f4a93f715dc.jpg"
                                         alt="LEGOLAND California" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">LEGOLAND California</h3>
                                        <p className="text-gray-600">Family-friendly theme park with rides, shows, and
                                            impressive LEGO creations.</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Carlsbad_State_Beach.jpg"
                                         alt="Carlsbad State Beach" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Carlsbad State Beach</h3>
                                        <p className="text-gray-600">Relax on the sandy shores or explore the tide pools
                                            at this scenic beach.</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://6amcity.brightspotcdn.com/dims4/default/d595e4a/2147483647/strip/true/crop/3888x2187+0+203/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk1-prod-sixam-city.s3.us-east-2.amazonaws.com%2Fbrightspot%2Fda%2F6c%2F8533a0794d82844eabbb41604a92%2Ftheflowerfields-by-marciegonzalez-14.jpg"
                                         alt="The Flower Fields" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">The Flower Fields</h3>
                                        <p className="text-gray-600">Stroll through 50 acres of vibrant ranunculus
                                            blooms each spring.</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://carlsbadlifeinaction.com/wp-content/uploads/2020/08/Carlsbad-CA-sign-1.jpg"
                                         alt="Carlsbad Village" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Carlsbad Village</h3>
                                        <p className="text-gray-600">Explore charming shops, art galleries, and
                                            restaurants in this walkable downtown.</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://hikingguy.com/wp-content/uploads/hike-batiquitos-lagoon-featured.jpg"
                                         alt="Batiquitos Lagoon" className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Batiquitos Lagoon</h3>
                                        <p className="text-gray-600">Walk the nature trails and spot wildlife at this
                                            protected coastal wetland.</p>
                                    </div>
                                </div>

                                <div
                                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeyMItAGRAYEOYnWFa4coo0ifvIMhTSI1BA&s" alt="Museum of Making Music"
                                         className="w-full h-48 object-cover"/>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Museum of Making Music</h3>
                                        <p className="text-gray-600">Discover the history of American music through
                                            interactive exhibits.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a href="https://www.tripadvisor.com/Attractions-g32171-Activities-Carlsbad_California.html"
                                   className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                                    Explore More Activities
                                </a>
                            </div>
                        </div>
                    </div>

                </>


            </div>
        </main>
    );
}

export default PageHome;
