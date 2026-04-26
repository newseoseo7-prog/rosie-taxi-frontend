import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import Features from "@/components/features";
import Head from "next/head";
import schemaData from "@/app/schema";
import OurSolutions from "@/components/OurSolutions";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";
export async function generateMetadata() {
  return {
    title: "Taxi cab Ojai Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
    description:
      "Going From Ojai To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Ojai CA. Call Now (805) 258-8937 For The Best Airport Transportation",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-cab-ojai/",
    },
    openGraph: {
      title: "Taxi cab Ojai Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
      description:
        "Going From Ojai To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Ojai CA. Call Now (805) 258-8937 For The Best Airport Transportation Service Now And Guaranteed. We Are The Best",
      url: "https://new.rosietaxicab.com/taxi-cab-ojai/",
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
          alt: "Taxi cab Ojai",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Taxi cab Ojai Opens 24/7 - Save 20% Now | Rosie Taxi Cab",
      description:
        "Going From Ojai To LAX, BOB, SBA Is Easy Now With A Reliable Taxi Cab Based Here in Ojai CA. Call Now (805) 258-8937 For The Best Airport Transportation Service Now And Guaranteed. We Are The Best",
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

// Add this to your page component (or layout) to include Schema.org markup
function PageHome() {
  const faqItems = [
    {
      question: "How far is Ojai from LAX ?  ",
      answer:
        "The drive from Ojai to LAX is between 2hrs 30 min on weekdays and 1hr and 45 min on weekends.",
    },
    {
      question: "how to order a cab / private car in Ojai ?",
      answer:
        "Ordering online has became easier. First, type in your pick up and drop off location within our booking system, choose a date and time. And make a payment on check out and you’re all set. ",
    },
    {
      question: "How much is the minimun charge to lax ?",
      answer:
        "Our minimum charge to lax run from $190 to $240 depending on a lot of factors. Date and time of your travel, how many people, etc. We charge per car a flat rate that can accommodate 4 people. Now for a large party of people we usually suggest 2 cars or 1 XL Car that can fit 6 people.",
    },
    {
      question: "how long does it take to get a driver ? ",
      answer:
        "Between 10 to 15 min in the city. Now if you’re outside the city the pick up time will fluctuate depending on the distance the driver to drive to get at your location. If you order online you won’t lose your place.",
    },
    {
      question: "Does Rosie Taxi Cab Open 24/7 is the best ? ",
      answer:
        "Yes. We are the best transportation company in Ventura’s County. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc.",
    },
    {
      question: "how to find a good taxi near Ojai ? ",
      answer: `You see most of the mediocre transportation companies in Ventura are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Ventura CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    {
      question:
        "What is the cheapest way to get from Ojai to Los Angeles Airport LAX ?",
      answer: `The cheapest way to get from Ojai to Los Angeles Airport (LAX) is to drive to Ventura and take the train to LA’s Union Station. The cost from Ojai to Ventura’s train station on Harbord would be about $75.00 plus the cost of your train’s ticket. This solution is recommended if you do not have a flight to catch.  `,
    },
    {
      question:
        "What is the fastest way to get from Ojai to Los Angeles Airport LAX ?",
      answer: `The fastest way to get from Ojai to Los Angeles Airport (LAX) is to drive which takes 1h 45 mn, and usually is to take the 101 south.  Now, if you live between Santa Paula and Ojai it’s better to driver towards Fillmore and towards Santa Clarita and straight to LAX. `,
    },
    {
      question:
        "Is there a direct bus between Ojai and Los Angeles Airport LAX ?",
      answer: `No, there is no direct bus from Ojai to Los Angeles Airport (LAX). However, there are services departing from Ojai Ave & Fox and arriving at Los Angeles International Airport (LAX) via Ventura Station and Union Station FlyAway – 800 N Alameda St at Union Station / Patsaurus Plaza. The journey, including transfers, takes approximately 4h 6m.`,
    },
    {
      question: "Where can I stay near Los Angeles Airport LAX?",
      answer: `There are 2504+ hotels available in Los Angeles Airport (LAX). Prices start at $97 USD per nigh.`,
    },
    {
      question: "What other airports do you service ?",
      answer: `We proudly service all Airports in California 24/7 on reservation basis. `,
    },
  ];

  const routes = [
    { name: "Transportation service from Ventura to LAX", href: "#" },
    { name: "Transportation service from Ventura to BOB AIRPORT", href: "#" },
    { name: "Transportation service from Ojai to SBA", href: "#" },
    {
      name: " Transportation service from Ojai to John Wayne Airport ",
      href: "#",
    },
    { name: "Transportation service from Ojai to Los Angeles", href: "#" },
    { name: "Transportation service from Ojai to Hollywood", href: "#" },
    { name: " Transportation service from Ojai to Burbank ", href: "#" },
    { name: " Transportation service from Ojai to Disney Land ", href: "#" },
    {
      name: "Transportation service from Ojai to Universal Studios ",
      href: "#",
    },
    {
      name: " Transportation service from Ojai to Rodeo dr Beverly Hills ",
      href: "#",
    },
    { name: "Transportation service from Ojai to San Diego ", href: "#" },
    {
      name: "Transportation service from Ojai to Westlake Village ",
      href: "#",
    },
    { name: " Transportation service from Ojai to Santa Monica ", href: "#" },
    { name: " Transportation service from Ojai to Holmby Hills ", href: "#" },
    { name: " Transportation service from Ojai to Malibu ", href: "#" },
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
                    #I Need A Ride #Private Car #Reliable Taxi #Ojai To LAX #Ojai CA #Oxnard #Camarillo #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Westlake Village #Malibu #Los Angeles #Beverly Hills

                    "
          />
          <>
            {/* Ojai Mission Section */}
            <CitiesInfoSection
              className="leading-6"
              heading="RELIABLE TRANSPORTATION FROM OJAI TO LAX "
              text={
                <>
                  <ul className="space-y-2 mt-3 list-inside list-disc">
                    <li className=" items-center space-x-4">
                      {/* <Badge name="01" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        Want a ride to or from LAX (Los Angeles International
                        Airport), BOB (Burbank Hope Airport), or SBA (Santa
                        Barbra Airport), we’ll take you there !
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="02" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        We’ll make sure we pick you up from the airport on time
                        so no more waiting.
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="03" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        We’ll make sure to take you to LAX in time to make it to
                        your flight with ease.
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="04" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        Don’t worry about your luggage our shuttle service can
                        handle it
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="05" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        You can count on us!
                      </span>
                    </li>
                  </ul>
                </>
              }
              image="/images/lax-airport-LAXBATHROOM0318.jpg" // Replace with actual Ojai Mission image URL
              imagePosition="right"
            />

            <AirportTransportationList
              items={[
                { label: "Ojai to LAX" },
                { label: "Ojai to BOB" },
                { label: "Ojai to SBA" },
                { label: "Ojai to Los Angeles" },
              ]}
            />
            <div className="p-4">
              <EventsDisplay city="Ojai" />
            </div>
            {/* Ojai Valley Trail Section */}
            <CitiesInfoSection
              className="leading-6"
              heading="ROSIE TAXI CAB OJAI 24/7"
              text={
                <>
                  <p>
                    We Are delighted to Service Ojai CA For Any Of Your
                    Transportation To And From :
                  </p>

                  <ul className="space-y-4 my-5 list-inside list-disc">
                    <li className=" items-center space-x-4">
                      {/* <Badge name="01" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        LAX
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="02" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        BOB
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="03" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        SBA
                      </span>
                    </li>
                  </ul>
                  <p className="mt-5">
                    Order Online Save 20% On Your Airport Ride.
                  </p>

                  <p className="mt-2">We Are Open 24/7 To And From Ojai.</p>
                  <p>
                    We also offer Ojai taxi cab to Santa Barbara Airport and
                    Ojai taxi to Burbank Airport, making airport transfers
                    hassle-free. Our Ojai taxi service is a great alternative to
                    Uber Ojai or Lyft Ojai, especially if you prefer a local
                    driver who knows the area well. Whether you're looking for
                    taxis near me open, a taxi cab near Ojai, or trustworthy
                    cabs Ojai residents depend on, Rosie Taxi Cab has you
                    covered. With taxis Ojai open 24/7, experienced taxi drivers
                    Ojai locals trust, and flexible private transportation,
                    we’re your go-to choice for airport travel and local rides
                    alike.
                  </p>
                </>
              }
              image="/images/ROSIETAXICAB-OF-Ojai-1.webp" // Replace with actual Ojai Valley Trail image URL
              imagePosition="left"
            />

            {/* Lake Casitas Recreation Area Section */}

            <div className="flex flex-col gap-5 container max-w-4xl px-4 leading-6 ">
              <h2 className="text-center text-4xl font-bold">
                How To Plan Your Next Airport Transfer To And From Ojai CA ?{" "}
              </h2>
              <p className="dark:text-neutral-300">
                Are You Looking to plan your next visit to Ojai CA ? Looking for
                an outdoor adventure in Ojai CA ? You definitely need to have a
                reliable transportation service that you can count on ! Booking
                with Rosie Taxi Cab Ojai CA not only guarantee your ride but
                we’ll make sure to help you schedule your next LAX ride from and
                to Ojai CA with confidence. Indeed, From Ojai to LAX. We will
                make sure your commute in Ojai will be comfortable and a
                memorable one. We provide Ride Share transportation And Local
                Taxis, Private Cars in the city and the most reliable private
                cars to any airports as follows :{" "}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-3 leading-6 dark:text-neutral-300">
                <li className=" items-center space-x-4 ">
                  {/* <Badge name="01" /> */}
                  <span className="font-medium ">
                    (Los Angeles International Airport), BOB (Burbank Hope
                    Airport), or SBA (Santa BarbraAirport).
                  </span>
                </li>
                <li className=" items-center space-x-4">
                  {/* <Badge name="02" /> */}
                  <span className="font-medium ">
                    We ensure that our rides are safe and reliable. Available
                    20% off on booking and paying for a ride online.
                  </span>
                </li>
              </ul>
            </div>

            <CitiesInfoSection
              className="leading-6"
              heading="ROSIE TAXI CAB OF OJAI"
              text={
                <>
                  <p>
                    Rosie Taxi Cab, proudly serving the beautiful community of
                    Ojai, CA, is your go-to choice for dependable, safe, and
                    comfortable transportation—especially for those traveling to
                    and from the airport. Whether you're a resident, a frequent
                    traveler, or a visitor seeking Ojai transportation to LAX,
                    you can count on us for stress-free service 24 hours a day,
                    7 days a week. If you're searching for a reliable taxi Ojai
                    to airport or prefer the privacy of a dedicated private car
                    Ojai to airport, our team is ready to accommodate your needs
                    at any time—day or night. Many of our satisfied customers
                    frequently say, “I need a taxi to LAX,” and they choose
                    Rosie Taxi Cab because of our consistent punctuality, clean
                    vehicles, and courteous drivers. We specialize in providing
                    prompt taxi service from Ojai to LAX, and also offer smooth
                    rides whether you're headed from Ojai to LAX by taxi or just
                    need a quick and efficient taxi Ojai to Ventura. With Rosie
                    Taxi Cab, you’ll always experience timely, clean, and
                    professional transportation tailored to meet your travel
                    needs.
                  </p>
                </>
              }
              image="/images/Ojai-to-Lax-Rosietaxicab.com_.webp" // Replace with actual Ojai Valley Trail image URL
              imagePosition="left"
            />
            <Features
              heading="AIRPORT RIDES WITH TAXI CAB OJAI"
              box1={{
                heading: "LAX",
                para: "Going from Ojai to LAX is about 1h 45 min to 2hrs/ 30 min drive during traffic time. You can go from Ojai to LAX through the 10 south or through the Pacific Coast Hyw.",
              }}
              box2={{
                heading: "BOB",
                para: "Going from Ojai to Burbank Airport is about 1hr 40 min to 2hrs with traffic. Choosing our safe and reliable service is our devise.",
              }}
              box3={{
                heading: "SBA",
                para: "Going from Ojai to Santa Barbara Airport is abouity 1hr to 1hr/30 min with traffic. It’s a small airport comparing to LAX and BOB.",
              }}
            />

            <CitiesInfoSection
              className="leading-6 text-center"
              heading="Discover Things To Do In Ojai CA"
              text={
                <>
                  <p>
                    Ojai (pronounced like a startled greeting: OH-hi) is
                    situated in a small, east-west valley about 15 miles from
                    Ventura and the Pacific coast, surrounded by citrus groves,
                    oak trees, and the protective Santa Ynez Mountains. Here’s a
                    list of social activities you may want to explore !
                  </p>
                </>
              }
              image="" // Replace with actual Ojai Valley Trail image URL
              imagePosition="left"
              buttons={[
                {
                  url: "https://www.ojaivisitors.com/ojai-ca-attractions",
                  text: "Things To Do",
                },
              ]}
            />
          </>

          <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Things to Do in Ojai
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Discover the charm and natural beauty of Ojai, California's
                hidden gem in the valley.
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://cloudfront.traillink.com/photos/ojai-valley-trail_155957_sc.jpg"
                    alt="Ojai Valley"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Ojai Valley Trail
                    </h3>
                    <p className="text-gray-600">
                      Hike or bike this scenic 9-mile trail through the
                      beautiful Ojai Valley.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://static.wixstatic.com/media/537836_f1c1ff1b749944c3aa2ad0cd7f4029ce~mv2.jpeg/v1/fill/w_910,h_400,al_c/537836_f1c1ff1b749944c3aa2ad0cd7f4029ce~mv2.jpeg"
                    alt="Meditation Mount"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Meditation Mount
                    </h3>
                    <p className="text-gray-600">
                      Enjoy panoramic views and peaceful gardens at this
                      spiritual retreat center.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://orionmagazine.org/wp-content/uploads/2017/09/ojai1.jpg"
                    alt="Ojai Downtown"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Ojai Village
                    </h3>
                    <p className="text-gray-600">
                      Explore the quaint downtown with unique shops, art
                      galleries, and farm-to-table restaurants.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMjcyNDU3MDYvMjg3NmRiZmI2ZmMyMTNiZTEyMGQwZTg1NDIwMjQyOGQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoxMDgwLCJoZWlnaHQiOjcwMCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0%3D&w=3840&q=90"
                    alt="Ojai Hot Springs"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Ojai Hot Springs
                    </h3>
                    <p className="text-gray-600">
                      Relax in natural mineral springs at one of Ojai's renowned
                      spa retreats.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/34/2d/ba/super-sized-play-structure.jpg?w=1200&h=-1&s=1"
                    alt="Libbey Park"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Libbey Park
                    </h3>
                    <p className="text-gray-600">
                      Stroll through this central park featuring the iconic Ojai
                      Arcade and outdoor pavilion.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src="https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/VC_Olive.Oil_Module_3_Ojai_SUPPLIED_Lechin-de-Sevilla-tress-planted-in-1860_1280x640.jpg.webp?itok=88CPwPsj"
                    alt="Ojai Olive Oil"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Ojai Olive Oil Tour
                    </h3>
                    <p className="text-gray-600">
                      Sample award-winning olive oils and tour local olive
                      orchards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TwoColumnFAQ faqItems={faqItems} />
          <OurSolutions
            faqItems={[
              {
                title: "LOCAL RIDES",
                content:
                  "ON DEMAND 24/7 LOCAL TAXIS VENTURA CA | PRIVATE CARS | PRIVATE CHAUFFEURS | RIDE SHARE",
              },
              {
                title: "AIRPORT TRANSFER",
                content:
                  "LOS ANGELES INTERNATIONAL AIRPORT LAX; BURBANK AIRPORT BOB; SANTA BARBARA AIRPORT SBA",
              },
              {
                title: "NEMT",
                content: "NON EMERGENCY MEDICAL RIDES ANYTIME AND ANYWHERE",
              },
              {
                title: "SAVE 20%",
                content: "ORDER & PAY ONLINE SAVE 20% AND MORE ON EACH RIDES",
              },
              {
                title: "RELIABLE RIDES",
                content:
                  "YOU CAN RELY ON US FOR YOUR MOST CRUCIAL AIRPORT TRIPS, LOCAL AND LONG DISTANCE RIDES AND SO ON. WE HAVE A LONG EXPERIENCE BEING THE MOST RELIABLE.",
              },
              {
                title: "MATCH/BEAT",
                content:
                  "WE MATCH/BEAT ANY COMPETITORS PRICE. THIS IS OUR GUARANTEE.",
              },
              {
                title: "BEST DRIVERS",
                content:
                  "OUR DRIVERS ARE TRAINED, EQUIPPED WITH GPS, AND WE PROVIDE YOU AN ACCURATE ESTIMATE TIME OF ARRIVAL.",
              },
              {
                title: "LARGE PARTY",
                content:
                  "LET US HELP YOU MANAGE A LARGE PARTY OF PEOPLE TO/FROM HOTELS. GIVE US A CALL FOR MORE DETAILS.",
              },
              {
                title: "GUARANTEED RIDE HOME",
                content:
                  "OUR OBJECTIVE IS SIMPLE : BE THE BEST AND PROVE IT. YOU'RE GUARANTEED A RIDE HOME IF YOU BOOK WITH US. FIRST BOOKED FIRST SERVED.",
              },
            ]}
          />
          <PageEndLinks routes={routes} />
        </div>
      </main>
    </>
  );
}

export default PageHome;
