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
    title: "Taxi cab Oxnard Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
    description:
      "Fast, reliable, and affordable taxi service in Oxnard, CA. 24/7 local and airport transportation to LAX, Burbank, and Ventura County. Book your ride now!",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-cab-oxnard/",
    },
    openGraph: {
      title: "Taxi cab Oxnard Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
      description:
        "Going From Oxnard To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Oxnard CA. Call Now (805) 258-8937 For The Best Airport Transportation Service Now And Guaranteed. We Are The Best",
      url: "https://new.rosietaxicab.com/taxi-cab-oxnard/",
      siteName: "Rosie Taxi Cab",
      locale: "en_US",
      type: "article",
      publishedTime: "2020-06-08T06:32:29-07:00",
      modifiedTime: "2024-07-26T11:59:32-07:00",
      images: [
        {
          url: "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg",
          secureUrl:
            "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg",
          alt: "Taxi cab Oxnard",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Taxi cab Oxnard Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
      description:
        "Going From Oxnard To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Oxnard CA. Call Now (805) 258-8937 For The Best Airport Transportation Service Now And Guaranteed. We Are The Best",
      images: [
        "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg",
      ],
      label1: "Time to read",
      data1: "7 minutes",
    },
    other: {
      "og:updated_time": "2024-07-26T11:59:32-07:00",
    },
  };
}

function PageHome() {
  const faqItems = [
    {
      question: "How far is Oxnard from LAX ? ",
      answer:
        "The drive from Oxnard to LAX is between 1hr 30 min on weekdays and 1hr and 10 min on weekends.",
    },
    {
      question: "how to order a cab / private car in Oxnard ?",
      answer:
        "Ordering online has became easier. First, type in your pick up and drop off location within our booking system, choose a date and time. And make a payment on check out and you’re all set. ",
    },
    {
      question: "How much is the minimun charge to lax ?",
      answer:
        "Our minimum charge to lax run from $160 to $200 depending on a lot of factors. Date and time of your travel, how many people, etc. We charge per car a flat rate that can accommodate 4 people. Now for a large party of people we usually suggest 2 cars or 1 XL Car that can fit 6 people.",
    },
    {
      question: "how long does it take to get a driver ? ",
      answer:
        "Between 10 to 15 min in the city. Now if you’re outside the city the pick up time will fluctuate depending on the distance the driver to drive to get at your location. If you order online you won’t lose your place.",
    },
    {
      question: "Does Rosie Taxi Cab Open 24/7 is the best ? ",
      answer:
        "Yes. We are the best transportation company in Oxnard’s County. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc.",
    },
    {
      question: "how to find a good taxi near Oxnard ?",
      answer: `You see most of the mediocre transportation companies in Oxnard are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Oxnard CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Oxnard’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
`,
    },
    {
      question: "Do you take card payment ?",
      answer: `Yes. We take all major cards. We are cashless, we work on demand, we help you design the trip you want and more affordable than the conventional taxis.`,
    },
    {
      question: "What Cities do you service ?",
      answer: `We proudly service all over California 24/7 but we always advise you to make a reservation online or over the phone for prompt and reliable service. We still take spontaneous calls of course but we advise you to make a reservation.`,
    },
    {
      question: "Can i call on same day to go to LAX ? ",
      answer: `Yes. But we highly encourage you to make a reservation online or over the phone. When you have a flight to catch you need to prepare yourself ahead of time. Don’t assume last minute call.`,
    },
    {
      question: "What Cities do you service ?",
      answer: `We proudly service all over California 24/7 but we always advise you to make a reservation online or over the phone for prompt and reliable service. We still take spontaneous calls of course but we advise you to make a reservation.`,
    },
  ];

  const routes = [
    { name: "Transportation service from Oxnard to LAX", href: "#" },
    { name: " Transportation service from Oxnard to BOB AIRPORT ", href: "#" },
    { name: "Transportation service from Oxnard to SBA", href: "#" },
    {
      name: "Transportation service from Oxnard to John Wayne Airport",
      href: "#",
    },
    { name: "Transportation service from Oxnard to Los Angeles", href: "#" },
    { name: "Transportation service from Oxnard to Hollywood", href: "#" },
    { name: "Transportation service from Oxnard to Burbank", href: "#" },
    { name: "Transportation service from Oxnard to Disney Land", href: "#" },
    {
      name: "Transportation service from Oxnard to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from Oxnard to Rodeo dr Beverly Hills",
      href: "#",
    },
    { name: "Transportation service from Oxnard to San Diego", href: "#" },
    {
      name: "Transportation service from Oxnard to Westlake Village",
      href: "#",
    },
    { name: "Transportation service from Oxnard to Santa Monica", href: "#" },
    { name: "Transportation service from Oxnard to Holmby Hills", href: "#" },
    { name: "Transportation service from Oxnard to Malibu", href: "#" },
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
        {/* GLASSMOPHIN */}
        <BgGlassmorphism />

        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
          {/* SECTION HERO */}
          <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

          <HashTags
            text="
                    #I Need A Ride #Private Car #Reliable Taxi #Oxnard To LAX #Oxnard CA #Port Hueneme #Camarillo #Ventura #Santa Paula #Fillmore #Thousand Oaks #Westlake Village #Malibu #Los Angeles #Beverly Hills

                    "
          />

          <>
            {/* Heritage Square Section */}
            <CitiesInfoSection
              className="leading-6"
              heading="ROSIE TAXI CAB OXNARD OPEN 24/7"
              text={
                <>
                  <ul className="space-y-4 mt-10 list-inside list-disc">
                    <li className=" items-center space-x-4">
                      {/* <Badge name="01" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        MOST RELIABLE OXNARD TAXI SERVICE
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="02" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        COURTEOUS DRIVER
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="03" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        ON DEMAND 24/7 LOCAL TAXIS OXNARD
                      </span>
                    </li>
                  </ul>
                  <p className="mt-5">
                    At Rosie Taxi Cab Oxnard, we are open 24/7 to meet your
                    travel needs at any hour. Whether you need a quick ride
                    across town, a late-night pickup, or an early morning
                    airport transfer, count on us for prompt and friendly
                    service every time!
                  </p>
                </>
              }
              image="/images/oxnard_2.jpg" // Replace with actual Heritage Square image URL
              imagePosition="right"
            />
            <AirportTransportationList
              items={[
                { label: "Oxnard to LAX" },
                { label: "Oxnard to BOB" },
                { label: "Oxnard to SBA" },
                { label: "Oxnard to Los Angeles" },
              ]}
            />

            <div className="p-4">
              <EventsDisplay city="Oxnard" />
            </div>
            {/* Oxnard Beach Park Section */}
            <CitiesInfoSection
              className="leading-6"
              heading="Everything You Need To Know About Oxnard CA"
              text={
                <>
                  <p>
                    Oxnard is located 60 miles northwest of LAX and is 25
                    minutes from both Malibu and Santa Barbara. If arriving by
                    rail, the Amtrak Pacific Surfliner stops in the heart of
                    Downtown Oxnard at Oxnard Transit Center; the city is also
                    home to a county-owned public airport.
                  </p>
                </>
              }
              image="/images/oxnard-3.webp" // Replace with actual Oxnard Beach Park image URL
              imagePosition="left"
              buttons={[{ url: "https://visitoxnard.com/", text: "Read More" }]}
            />

            {/* Channel Islands Harbor Section */}
            <CitiesInfoSection
              className="leading-6"
              heading="Things To Do In Oxnard Presented To You By Rosie Taxi Cab Oxnard Open 24/7"
              text={
                <>
                  <p>
                    You can find a wide variety international restaurants,
                    things to do, and year-round festivals including California
                    Strawberry Festival; Oxnard Salsa Festival, annual Summer
                    Concerts and many more. Whether coming for the pristine
                    white sandbeaches, world-class museums,historic district or
                    upscale shopping,choose Rosie Taxi Cab to get you around the
                    city, and don’t forget to save more by booking online. Plan
                    your stay at one of Oxnard’s incredible hotel properties.
                  </p>
                </>
              }
              image="/images/A3A8DFA7-2B5A-41B1-9024-6CD11C8E654E.webp" // Replace with actual Channel Islands Harbor image URL
              imagePosition="right"
              buttons={[
                {
                  url: "https://visitoxnard.com/things-to-do/outdoor-adventure/",
                  text: "	Things to Do In Oxnard ",
                },
              ]}
            />
          </>

          <TwoColumnFAQ faqItems={faqItems} />
          <PageEndLinks routes={routes} />

          <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Things to Do in Oxnard
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Discover the coastal charm and vibrant culture of Oxnard,
                California's hidden gem on the Gold Coast.
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a href={"https://www.channelislandsharbor.org/"}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="/images/oxnard/oxnard_harbor.jpg"
                      alt="Channel Islands Harbor"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Channel Islands Harbor
                      </h3>
                      <p className="text-gray-600">
                        Enjoy waterfront dining, boating, and scenic views at
                        this bustling harbor.
                      </p>
                    </div>
                  </div>
                </a>
                <a href={"https://www.parks.ca.gov/?page_id=609"}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="/images/oxnard/state_beach.jpg"
                      alt="Mandalay State Beach"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Mandalay State Beach
                      </h3>
                      <p className="text-gray-600">
                        Relax on pristine sands and explore the natural beauty
                        of this protected beach.
                      </p>
                    </div>
                  </div>
                </a>

                <a href={"https://www.heritagesquare.org/"}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://heritagesquareoxnard.com/wp-content/uploads/2023/07/dsc09037_51293216625_o.jpg"
                      alt="Heritage Square"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Heritage Square
                      </h3>
                      <p className="text-gray-600">
                        Step back in time with a visit to this collection of
                        restored Victorian homes and gardens.
                      </p>
                    </div>
                  </div>
                </a>

                <a href={"https://thecollectionrp.com/"}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="/images/oxnard/the-annex-food-hall-is.jpg"
                      alt="The Collection at RiverPark"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        The Collection at RiverPark
                      </h3>
                      <p className="text-gray-600">
                        Shop, dine, and enjoy entertainment at Oxnard's premier
                        lifestyle center.
                      </p>
                    </div>
                  </div>
                </a>

                <a href={"https://www.oxnard.gov/beach-park"}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="/images/oxnard/beach_park.webp"
                      alt="Oxnard Beach Park"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Oxnard Beach Park
                      </h3>
                      <p className="text-gray-600">
                        Enjoy family-friendly fun with picnic areas,
                        playgrounds, and ocean views.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href={
                    "https://www.channelislandsharbor.org/listing/channel-islands-maritime-museum/"
                  }
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="/images/oxnard/maritime_museum.jpg"
                      alt="Channel Islands Maritime Museum"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Channel Islands Maritime Museum
                      </h3>
                      <p className="text-gray-600">
                        Explore maritime history and art at this waterfront
                        museum.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Places to Stay in Oxnard
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Discover comfortable accommodations ranging from hotels to
                vacation rentals in Oxnard, California.
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
                {/* Zachari Dunes on Mandalay Beach */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_1920,h_1080,q_70,f_auto,g_auto/g_auto/Imagery/Property%20Photography/Curio%20Collection/S/SBAZDQQ/1_Zachari_Dunes_Hero.jpg"
                    alt="Zachari Dunes on Mandalay Beach"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Zachari Dunes on Mandalay Beach
                    </h3>
                    <p className="text-gray-600 mb-4">
                      An all-suite oceanfront resort offering beach access, pool
                      with cabanas, and on-site dining.
                    </p>
                    <a
                      href="https://www.zacharidunes.com/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Website
                    </a>
                  </div>
                </div>

                {/* Courtyard by Marriott Oxnard Ventura */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://cache.marriott.com/content/dam/marriott-renditions/OXRVO/oxrvo-entrance-0080-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
                    alt="Courtyard by Marriott Oxnard Ventura"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Courtyard by Marriott Oxnard Ventura
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Located near The Collection at RiverPark, offering modern
                      rooms and convenient amenities.
                    </p>
                    <a
                      href="https://www.marriott.com/en-us/hotels/oxrvo-courtyard-oxnard-ventura/overview/"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Website
                    </a>
                  </div>
                </div>

                {/* Staybridge Suites Oxnard – River Ridge */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://digital.ihg.com/is/image/ihg/staybridge-suites-oxnard-10323256296-3x2?wid=733"
                    alt="Staybridge Suites Oxnard – River Ridge"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Staybridge Suites Oxnard – River Ridge
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Offers spacious suites with full kitchens, ideal for
                      extended stays near the beach.
                    </p>
                    <a
                      href="https://www.ihg.com/staybridge/hotels/us/en/oxnard/oxrva/hoteldetail"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Website
                    </a>
                  </div>
                </div>

                {/* Airbnb – Oxnard Stays */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://a0.muscache.com/im/pictures/hosting/Hosting-46506915/original/08267cfb-eb4e-4a2a-a0a8-7a35c4feea31.jpeg?im_w=720"
                    alt="Airbnb – Oxnard Stays"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Airbnb – Oxnard Stays
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Browse a wide selection of homes, cottages, and apartments
                      suitable for various group sizes and preferences.
                    </p>
                    <a
                      href="https://www.airbnb.com/oxnard-ca/stays"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Website
                    </a>
                  </div>
                </div>

                {/* Homes & Villas by Marriott International */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://homes-and-villas.marriott.com/assets/images/vacation-rental-villa.png?imwidth=350"
                    alt="Homes & Villas by Marriott International"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Homes & Villas by Marriott International
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Offers private vacation home rentals with a range of
                      amenities for a personalized stay.
                    </p>
                    <a
                      href="https://homes-and-villas.marriott.com/en/vacation-rentals/united-states/california/oxnard"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Reliable Oxnard Taxi Cab Services – Available 24/7 with Rosie Taxi
            Cab
          </h1>

          <p className="text-gray-700 mb-4">
            Need a trustworthy Oxnard taxi? Whether you're heading across town
            or need transportation from Oxnard to LAX, Rosie Taxi Cab is here
            for you. With clean vehicles, courteous drivers, and reliable
            service available 24/7, we make every ride comfortable and
            stress-free.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            24/7 Taxi Service in Oxnard
          </h2>
          <p className="text-gray-700 mb-4">
            Searching for a taxi cab near Oxnard or a taxi near me open now?
            Rosie Taxi Cab is always available—day or night. Unlike services
            like Uber Oxnard or Lyft Oxnard, we offer consistent rates with no
            surge pricing and a personalized experience from seasoned taxi
            drivers in Oxnard.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Airport Rides: Oxnard to LAX, Burbank, and Santa Barbara
          </h2>
          <p className="text-gray-700 mb-3">
            Need a ride to the airport? We specialize in taxi Oxnard to airport
            services, whether you’re traveling to LAX, Burbank, or Santa
            Barbara. Our airport transportation includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Oxnard transportation to LAX</li>
            <li>Taxi Oxnard to Burbank or Oxnard taxi to Burbank airport</li>
            <li>Oxnard taxi cab to Santa Barbara airport</li>
            <li>Private car Oxnard to airport available 24/7</li>
          </ul>
          <p className="text-gray-700 mb-4">
            With punctual pickups and affordable rates, Rosie Taxi Cab ensures
            you arrive at the airport safely and on time.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Easy Booking with Rosie Taxi Cab
          </h2>
          <p className="text-gray-700 mb-3">Booking your ride is simple:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Call us anytime for immediate or scheduled service</li>
            <li>
              Search taxi near me or taxi near my location and choose Rosie Taxi
              Cab
            </li>
            <li>Book your Oxnard taxi cab online with just a few clicks</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Whether you're saying "I need a taxi to LAX" or browsing for cabs in
            Oxnard, you can count on us. We're a reliable cab company in Oxnard
            trusted by locals and visitors alike.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Why Choose Rosie Taxi Cab in Oxnard?
          </h2>
          <p className="text-gray-700 mb-4">
            At Rosie Taxi Cab, we’re proud to offer dependable service with a
            personal touch. Our professional, friendly drivers know Oxnard
            inside and out, making us the go-to for safe, timely, and
            comfortable transportation. From quick trips around town to longer
            airport transfers, Rosie is the smart choice for cab service in
            Oxnard.
          </p>

          <p className="text-gray-800 italic">
            Next time you’re looking for taxis Oxnard to LAX or need taxis in
            Oxnard open 24/7, ride with Rosie—your trusted local taxi service.
          </p>
        </article>
      </main>
    </>
  );
}

export default PageHome;
