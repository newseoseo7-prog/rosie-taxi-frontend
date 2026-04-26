import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import Link from "next/link";
import PageEndLinks from "@/components/PageEndLinks";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";


export async function generateMetadata() {
  return {
    title: "Taxi Cab Glendale 24/7 - Reliable Rides & 20% Off | Rosie Taxi Cab",
    description: "Fast & affordable taxi service in Glendale CA. Airport rides to LAX, BUR, SNA & more. Book your Glendale taxi cab now! (805) 258-8937",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL('https://new.rosietaxicab.com'),
    alternates: {
      canonical: '/taxi-cab-glendale/',
    },
    openGraph: {
      title: "Taxi Cab Glendale 24/7 - Reliable Rides & 20% Off | Rosie Taxi Cab",
      description: "Fast & affordable taxi service in Glendale CA. Airport rides to LAX, BUR, SNA & more. Book your Glendale taxi cab now! (805) 258-8937",
      url: 'https://new.rosietaxicab.com/taxi-cab-glendale/',
      siteName: "Rosie Taxi Cab",
      locale: 'en_US',
      type: 'article',
      publishedTime: '2020-06-08T06:32:29-07:00',
      modifiedTime: '2024-07-26T11:59:32-07:00',
      images: [
        {
          url: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
          secureUrl: 'https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg',
          alt: 'Taxi Cab Glendale',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Taxi Cab Glendale 24/7 - Reliable Rides & 20% Off | Rosie Taxi Cab",
      description: "Fast & affordable taxi service in Glendale CA. Airport rides to LAX, BUR, SNA & more. Book your Glendale taxi cab now! (805) 258-8937",
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
      question: "How far is Glendale from LAX?",
      answer:
          "The drive from Glendale to LAX typically takes between 1 hour 30 minutes on weekdays and up to 2 hours on weekends, depending on traffic.",
    },
    {
      question: "How do I order a cab or private car in Glendale?",
      answer:
          "Ordering a ride in Glendale is easy. Just enter your pickup and drop-off locations in our booking system, select your date and time, and complete your payment at checkout. You’ll receive a confirmation right away.",
    },
    {
      question: "What is the minimum charge from Glendale to LAX?",
      answer:
          "Our minimum fare from Glendale to LAX ranges from $160 to $200, depending on factors like travel date, time, and the number of passengers. We charge a flat rate per car (up to 4 passengers). For larger groups, we recommend booking either two vehicles or one XL vehicle for up to 6 people.",
    },
    {
      question: "How long does it take to get a driver in Glendale?",
      answer:
          "Pickup times in Glendale usually range between 10 to 15 minutes. If you're outside the city, the wait time may vary depending on the driver’s location. Booking online helps ensure your place is reserved.",
    },
    {
      question: "Is Rosie Taxi Cab open 24/7 and reliable?",
      answer:
          "Yes, Rosie Taxi Cab operates 24/7 and is known as one of the most reliable transportation services in Southern California. We partner with Lyft Concierge and other providers to deliver fast, dependable service — usually within 10–15 minutes, unlike traditional taxis that can take 30 minutes or more.",
    },
    {
      question: "How can I find a good taxi in Glendale, CA?",
      answer:
          "When looking for a reputable taxi in Glendale, check their reviews on platforms like TripAdvisor, their overall reliability, and the size of their fleet. Be cautious of companies with perfect ratings but limited availability. Rosie Taxi Cab has the technology, staff, and experience to ensure dependable 24/7 service.",
    },
    {
      question: "Do you accept card payments?",
      answer:
          "Yes, we accept all major credit and debit cards. We're a fully cashless service, offering on-demand rides that are often more affordable than traditional taxis.",
    },
    {
      question: "What cities do you service from Glendale?",
      answer:
          "We proudly serve all of California from Glendale, 24/7. For the best experience, we recommend making a reservation online or by phone. We also accommodate last-minute calls when possible.",
    },
    {
      question: "Can I book a ride to LAX on the same day?",
      answer:
          "Yes, same-day bookings are available. However, for airport trips, we strongly recommend booking in advance to ensure timely arrival. Don't rely on last-minute arrangements when catching a flight.",
    },
  ];


  const routes = [
    { name: "Transportation service from Glendale to LAX", href: "#" },
    { name: "Transportation service from Glendale to BOB AIRPORT", href: "#" },
    { name: "Transportation service from Glendale to SBA", href: "#" },
    { name: "Transportation service from Glendale to John Wayne Airport", href: "#" },
    { name: "Transportation service from Glendale to Los Angeles", href: "#" },
    { name: "Transportation service from Glendale to Hollywood", href: "#" },
    { name: "Transportation service from Glendale to Burbank", href: "#" },
    { name: "Transportation service from Glendale to Disney Land", href: "#" },
    { name: "Transportation service from Glendale to Universal Studios", href: "#" },
    { name: "Transportation service from Glendale to Rodeo dr Beverly Hills", href: "#" },
    { name: "Transportation service from Glendale to San Diego", href: "#" },
    { name: "Transportation service from Glendale to Westlake Village", href: "#" },
    { name: "Transportation service from Glendale to Santa Monica", href: "#" },
    { name: "Transportation service from Glendale to Holmby Hills", href: "#" },
    { name: "Transportation service from Glendale to Malibu", href: "#" },
  ];

  return (
    <main className="nc-PageHome relative overflow-hidden  dark:bg-neutral-900 dark:text-white">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-16 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16 " />


        <HashTags text="#I Need A Ride #Private Car #Reliable Taxi #Glendale To LAX #Glendale #Los Angeles #Burbank #Pasadena #Eagle Rock #Atwater Village #Silver Lake #Hollywood #Downtown LA #North Hollywood #Toluca Lake #La Cañada #Beverly Hills" />

        <>
          {/* Mission San Buenaventura Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Los Angeles International Airport LAX "
            text={
              <>
                <p>
                  PLANNING YOUR NEXT LAX TRIP LET US ANSWER YOUR QUESTIONS !
                </p>
                <p className="mt-4">
                  Finding A Reliable Taxi Cab Transportation From Pasadena to
                  LAX Goes Through A set Of Questions As Follows :{" "}
                </p>

                <ul className="space-y-2 mt-6 list-disc list-inside  leading-6">
                  <li className=" items-start space-x-4">
                    {/* <Badge name="01" className="mt-1" /> */}
                    <span className=" text-neutral-700 dark:text-neutral-300">
                      – Availability Of the Driver (s)
                    </span>
                  </li>

                  <li className=" items-start space-x-4">
                    {/* <Badge name="02" className="mt-1" /> */}
                    <span className="text-neutral-700 dark:text-neutral-300">
                      – Your Flight’s Departure
                    </span>
                  </li>
                  <li className=" items-start space-x-4">
                    {/* <Badge name="03" className="mt-1" /> */}
                    <span className=" text-neutral-700 dark:text-neutral-300">
                      – Day / Time Of The Travel
                    </span>
                  </li>
                </ul>
                <p className="mt-4">
                  Rosie Taxi Cab Can Help You Schedule Your Next LAX Trip Ahead
                  of Time And We Make Sure To Provide You A Reliable Taxi
                  Service In Pasadena CA And Surrounding Areas. Let Our Expert
                  Dispatch To Help You Navigate This Process. Give Us A Call For
                  More Details.
                </p>
              </>
            }
            image="/images/lax-terminal-pinkish-sky-h2mkokhezigrcood.jpg"
            imagePosition="right"
          />

          <AirportTransportationList items={ [
            { label: 'Glendale to LAX' },
            { label: 'Glendale to BOB' },
            { label: 'Glendale to LGB' },
            { label: 'Glendale to Los Angeles' },
            { label: 'Glendale to Galleria' },
          ]} />
          <div className="p-4">
            <EventsDisplay city="Glendale" />
          </div>
          {/* Channel Islands National Park Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Burbank Hope Airport BOB "
            text={
              <>
                <p>
                  Rosie Taxi Cab Can Help You Schedule Your Next Burbank Airport
                  Trip Ahead of Time. Using Our Taxi Cab Service Is Guaranteed
                  adn We Encourage Our Customers To Reserve A Cab Rather Calling
                  Last Minute To The Airport. From Our End, We Make Sure To
                  Provide You A Reliable Taxi Service In Glendale  And Surrounding
                  Areas. Give Us A Call And Let Our Expert Dispatch To Help You
                  Navigate This Process.
                </p>
              </>
            }
            image="/images/MNLA_FilePhotos_PasadenaValley_0013_16-9.webp"
            imagePosition="right"
          />

          {/* Downtown Glendale  Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="
Long Beach Airport LGB
"
            text={
              <>
                <p>
                  Rosie Taxi Cab Can Help You Schedule Your Next Long Beach
                  Airport Trip Ahead of Time And We Make Sure To Provide You A
                  Reliable Taxi Service In Glendale CA And Surrounding Areas.
                  Let Our Expert Dispatch To Help You Navigate This Process.
                  Give Us A Call For More Details.
                </p>
              </>
            }
            image="/images/LGB-Monument-Sign.jpg"
            imagePosition="left"
          />

          {/* Glendale  Botanical Gardens Section */}

          <CitiesInfoSection
            className="leading-6"
            heading="
Things To Do In Glendale
"
            text={
              <>
                <p>
                  With historic buildings, luscious landscapes, and California
                  sunshine that provides a plethora of light, Pasadena is the
                  perfect place to escape to. Nestled at the base of the San
                  Gabriel Mountains, the city is an oasis from the hustle and
                  bustle of downtown Los Angeles, located a mere 10 miles away.
                </p>
              </>
            }
            image="/images/MONA_exterior_by_Gary_van_der_Steur-copy-2-scaled-1-800x572.jpg"
            imagePosition="right"
            buttons={[
              {
                url: "https://www.tripadvisor.com/Attractions-g32431-Activities-Glendale_California.html",
                text: "Things To Do",
              },
            ]}
          />
          <CitiesInfoSection
            className="leading-6"
            heading="
Places To Stay In Glendale
"
            text={
              <>
                <p>
                Choosing Pasadena as your home base for any trip to the Los Angeles area is a smart strategy. From here, you’ll have fast, easy access to downtown and other landmark locations such as Hollywood, Beverly Hills, and local beaches. Stay in one of our relaxing luxury hotels just a short walk from shopping, dining, museums, and theaters, or book your room at one of our intimate, affordable inns or bed & breakfasts, many of which are situated on the route of the famous Rose Parade®. Immersed in Pasadena’s urbane atmosphere, you’ll relish scenic views of the surrounding mountains and stroll among artfully maintained architectural treasures.

                </p>
              </>
            }
            image="/images/embassy-suites-los-angeles-glendale-exterior.jpg"
            imagePosition="right"
            buttons={[
              {
                url: "https://www.tripadvisor.com/Hotels-g32431-Glendale_California-Hotels.html",
                text: "Places to Stay",
              },
            ]}
          />
        </>

        <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Things to Do in Glendale
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Discover the vibrant culture, upscale shopping, and natural beauty that make Glendale a top destination in the Los Angeles area.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a href="https://americanaatbrand.com/">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                      src="https://caruso.com/wp-content/uploads/2016/10/Americana-Hero-1024x683.jpg"
                      alt="The Americana at Brand"
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">The Americana at Brand</h3>
                    <p className="text-gray-600">
                      Shop, dine, and unwind at this elegant open-air shopping center with a central park and nightly fountain shows.
                    </p>
                  </div>
                </div>
              </a>

              <a href="https://www.glendaleca.gov/government/departments/community-services-parks/verdugo-park">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                      src="https://www.glendaleca.gov/home/showpublishedimage/16697/635598842137930000"
                      alt="Verdugo Park"
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Verdugo Park</h3>
                    <p className="text-gray-600">
                      Enjoy green space, playgrounds, and picnic areas in one of Glendale’s most popular community parks.
                    </p>
                  </div>
                </div>
              </a>

              <a href="https://glendalepubliclibrary.org/museum">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                      src="https://www.neonmona.org/wp-content/uploads/2022/04/MONA_exterior_by_Gary_van_der_Steur-copy-2-scaled.jpg"
                      alt="Museum of Neon Art"
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Museum of Neon Art</h3>
                    <p className="text-gray-600">
                      Dive into glowing history and artistry with neon signs, electric art, and vintage brilliance.
                    </p>
                  </div>
                </div>
              </a>

              <a href="https://www.brandlibrary.org/">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                      src="https://static.wixstatic.com/media/67f63c_0c3fba5fd3ed42db90b58e54fc9ac0e5~mv2_d_5760_3840_s_4_2.jpg/v1/crop/x_0,y_0,w_5650,h_3840/fill/w_560,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Paper%20PreView%20High%20Res.jpg"
                      alt="Brand Library & Art Center"
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Brand Library & Art Center</h3>
                    <p className="text-gray-600">
                      Explore arts, music, and history in a stunning mansion-turned-library at the base of the Verdugo Mountains.
                    </p>
                  </div>
                </div>
              </a>

              <a href="https://www.glendaleca.gov/government/departments/community-services-parks/deukmejian-wilderness-park">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNzZgMyo8F4UzQk8M7KSWqrFuggx5NR8IIA&s"
                      alt="Deukmejian Wilderness Park"
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Deukmejian Wilderness Park</h3>
                    <p className="text-gray-600">
                      Hike scenic trails and enjoy panoramic views of the San Gabriel Valley from this beautiful nature preserve.
                    </p>
                  </div>
                </div>
              </a>

              <a href="https://www.glendalegalleria.com/">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1HUapIhVeDFpcH-IZ374FsfqT4GX4PeGvA&s"
                      alt="Glendale Galleria"
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Glendale Galleria</h3>
                    <p className="text-gray-600">
                      Shop major retailers and discover unique finds in this classic Southern California shopping destination.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>


        <TwoColumnFAQ faqItems={faqItems} />
        <PageEndLinks routes={routes} />
      </div>
    </main>
  );
}

export default PageHome;
