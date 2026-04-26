import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import AirportTransportationList from "@/components/AirportTransportationList";

export async function generateMetadata() {
    return {
        title: "Hollywood Taxi Service | 24/7 Rides to LAX & Attractions | Rosie Taxi Cab",
        description: "Fast & reliable Hollywood taxi service for LAX, BUR, studios & nightlife. Serving Walk of Fame, Dolby Theatre & all Hollywood. Book now! (805) 258-8937 - 24/7 service.",
        robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
        metadataBase: new URL('https://new.rosietaxicab.com'),
        alternates: {
            canonical: '/taxi-hollywood/',
        },
        openGraph: {
            title: "Hollywood Taxi Service | 24/7 Rides to LAX & Attractions | Rosie Taxi Cab",
            description: "Fast & reliable Hollywood taxi service for LAX, BUR, studios & nightlife. Serving Walk of Fame, Dolby Theatre & all Hollywood. Book now! (805) 258-8937 - 24/7 service.",
            url: 'https://new.rosietaxicab.com/taxi-hollywood/',
            siteName: "Rosie Taxi Cab",
            locale: 'en_US',
            type: 'article',
            publishedTime: '2020-06-08T06:32:29-07:00',
            modifiedTime: '2024-07-26T11:59:32-07:00',
            images: [
                {
                    url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/hollywood-taxi-service.jpg',
                    secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/hollywood-taxi-service.jpg',
                    alt: 'Hollywood Taxi Service near Walk of Fame',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Hollywood Taxi Service | 24/7 Rides to LAX & Attractions | Rosie Taxi Cab",
            description: "Fast & reliable Hollywood taxi service for LAX, BUR, studios & nightlife. Serving Walk of Fame, Dolby Theatre & all Hollywood. Book now! (805) 258-8937",
            images: ['https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/hollywood-taxi-service.jpg'],
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
          question: "How far is Hollywood from LAX ? ",
          answer: "The drive from Hollywood to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in Hollywood ?",
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
          question: "how to find a good taxi near Hollywood CA ? ",
          answer: `You see most of the mediocre transportation companies in Hollywood are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Hollywood CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
        { name: 'Transportation service from Hollywood to LAX', href: '#' },
        { name: ' Transportation service from Hollywood to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Hollywood to SBA', href: '#' },
        { name: 'Transportation service from Hollywood to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Hollywood to Los Angeles', href: '#' },
        { name: 'Transportation service from Hollywood to Hollywood', href: '#' },
        { name: 'Transportation service from Hollywood to Burbank', href: '#' },
        { name: 'Transportation service from Hollywood to Disney Land', href: '#' },
        { name: 'Transportation service from Hollywood to Universal Studios', href: '#' },
        { name: 'Transportation service from Hollywood to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Hollywood to San Diego', href: '#' },
        { name: 'Transportation service from Hollywood to Westlake Village', href: '#' },
        { name: 'Transportation service from Hollywood to Santa Monica', href: '#' },
        { name: 'Transportation service from Hollywood to Holmby Hills', href: '#' },
        { name: 'Transportation service from Hollywood to Malibu', href: '#' },
      ]

    return (
        <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16 leading-6" />

                <>
                    {/* Camarillo Premium Outlets Section */}
                    <CitiesInfoSection
                    className="leading-6"
                        heading="Discover Hollywood And Things To Do "
                        text={
                            <>
                                <p>Welcome to the capital of the global entertainment industry, Hollywood is, both a state of mind and a very real place. Spend some time here to see reminders of movie legends both past and present, while also discovering a vibrant contemporary urban district that has undergone under gone a dramatic revival in recent years. From the Walk of Fame to behind-the-scene tours, Hollywood is a true bucket-list destination.</p>

                         
                            </>
                        }
                        image="/images/hollywood.jpg"  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                          { url: "https://www.discoverlosangeles.com/things-to-do/the-beginners-guide-to-hollywood", text: "Things To Do" },
                        
                      ]}
                    />
                    <AirportTransportationList items={ [
                        { label: 'Hollywood to LAX' },
                        { label: 'Hollywood to BOB' },
                        { label: 'Hollywood to SBA' },
                        { label: 'Hollywood to Los Angeles' },
                    ]} />

                    <CitiesInfoSection
                    className="leading-6"
                        heading="Hollywood"
                        text={
                            <>
                                <p>
                                    #I Need A Ride #Private Car #Reliable Taxi #Reservation To Burbank Airport #Hollywood CA #los Angeles CA #Hollywood #Glendale #Pasadena #Arcadia #Airport Transportation #East Los Angeles #Alhambra #Anaheim #Los Angeles Love
                                </p>

                            </>
                        }
                        image=""  // Replace with actual Camarillo Premium Outlets image URL
                        imagePosition="right"
                        buttons={[
                          { url: "https://www.discoverlosangeles.com/things-to-do/the-beginners-guide-to-hollywood", text: "Things To Do" },

                      ]}
                    />


                  
                </>
                <PageEndLinks routes={routes} />
                <TwoColumnFAQ faqItems={faqItems} />
                <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">How to Book a Taxi Cab in Hollywood with Rosie Taxi Cab</h1>

                    <p className="text-gray-700 mb-4">
                        Looking for fast, reliable, and affordable transportation in Hollywood? <strong>Rosie Taxi Cab</strong> is the preferred choice for both locals and visitors.
                        Whether you're heading to a movie set, catching a flight, or sightseeing on Hollywood Boulevard, <strong>Rosie Taxi Cab</strong> offers professional, 24/7 service for a stress-free ride.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Hollywood Taxi Services Available 24/7</h2>
                    <p className="text-gray-700 mb-4">
                        Searching for a <strong>taxi near me open</strong> or <strong>taxi near my location</strong>? <strong>Rosie Taxi Cab</strong> has licensed drivers available any time of day.
                        Unlike rideshare apps that raise prices or limit drivers during busy times, <strong>Rosie Taxi Cab</strong> offers consistent, affordable service.
                        As a dependable <strong>Hollywood taxi service</strong> and top-rated <strong>cab company in Hollywood</strong>, Rosie prioritizes safety, punctuality, and clean vehicles.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Rosie Taxi Cab to LAX, Burbank & More</h2>
                    <p className="text-gray-700 mb-4">
                        Need <strong>Hollywood transportation to LAX</strong>? <strong>Rosie Taxi Cab</strong> provides flat-rate airport transfers with on-time pickup and drop-off.
                        Whether you're booking a <strong>Hollywood to LAX by taxi</strong>, a <strong>Taxi Hollywood to Burbank</strong>, or a ride to Van Nuys or Santa Monica,
                        <strong>Rosie</strong> offers 24/7 private car service for all your airport needs.
                    </p>

                    <p className="text-gray-700 mb-3">Popular routes from Hollywood include:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><strong>Taxi Hollywood to LAX airport</strong></li>
                        <li><strong>Hollywood taxi cab to Burbank airport</strong></li>
                        <li><strong>Private transportation Hollywood to Van Nuys or Santa Monica</strong></li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">How to Book with Rosie Taxi Cab</h2>
                    <p className="text-gray-700 mb-3">Booking your ride is simple and quick. You can:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Call <strong>Rosie Taxi Cab</strong> directly for immediate or scheduled pickups</li>
                        <li>Visit their website to reserve a <strong>Hollywood taxi cab</strong> online</li>
                        <li>Search <strong>taxi cab near Hollywood</strong> or <strong>taxi near me</strong> and choose Rosie from the results</li>
                    </ul>

                    <p className="text-gray-700 mb-4">
                        Unlike <strong>Uber Hollywood</strong> or <strong>Lyft Hollywood</strong>, Rosie offers fixed pricing, experienced local drivers, and zero hidden fees.
                        It’s the smart and reliable alternative for high-quality rides.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Why Choose Rosie Taxi Cab?</h2>
                    <p className="text-gray-700 mb-4">
                        When you say, "<strong>I need a taxi to LAX</strong>", think Rosie. Every <strong>taxi driver in Hollywood</strong> with Rosie is licensed, friendly,
                        and committed to getting you to your destination safely and on time.
                    </p>

                    <p className="text-gray-700 mb-4">
                        Whether it’s a quick trip through the city or long-distance travel, Rosie delivers the best <strong>cab service in Hollywood</strong>.
                        Don’t gamble with unknown companies—choose the name Hollywood trusts: <strong>Rosie Taxi Cab</strong>.
                    </p>

                    <p className="text-gray-800 italic">
                        Need a ride now? Book your Rosie Taxi Cab today for Hollywood’s most trusted and professional taxi experience.
                    </p>
                </article>

            </div>
        </main>
    );
}

export default PageHome;
