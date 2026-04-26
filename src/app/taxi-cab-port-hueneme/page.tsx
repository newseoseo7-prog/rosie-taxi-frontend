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
    title:
      "Port Hueneme Taxi Service | 24/7 Navy Base & LAX Rides | Rosie Taxi Cab",
    description:
      "Fast taxi service in Port Hueneme to Naval Base VC, LAX, Oxnard & Santa Barbara. Military discount available. 24/7 reliable rides - Book now! (805) 258-8937",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-cab-port-hueneme/",
    },
    openGraph: {
      title:
        "Port Hueneme Taxi Service | 24/7 Navy Base & LAX Rides | Rosie Taxi Cab",
      description:
        "Trusted Port Hueneme taxi for Naval Base VC commutes, LAX airport transfers, and local rides. Open 24/7 with military discounts. Call (805) 258-8937",
      url: "https://new.rosietaxicab.com/taxi-cab-port-hueneme/",
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
          alt: "Port Hueneme Taxi at Naval Base VC",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Port Hueneme Taxi Service | 24/7 Navy Base & LAX Rides | Rosie Taxi Cab",
      description:
        "Trusted Port Hueneme taxi for Naval Base VC commutes, LAX airport transfers, and local rides. Open 24/7 with military discounts. Call (805) 258-8937",
      images: [
        "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/lax-airport-LAXBATHROOM0318.jpg",
      ],
      label1: "Time to read",
      data1: "5 minutes",
    },
    other: {
      "og:updated_time": "2024-07-26T11:59:32-07:00",
    },
  };
}

function PageHome() {
  const faqItems = [
    {
      question: "How far is Port Hueneme from LAX ? ",
      answer:
        "The drive from Port Hueneme to LAX is between 1hr 30 min on weekdays and 2hr on weekends.",
    },
    {
      question: "how to order a cab / private car in Port Hueneme ?",
      answer:
        "Ordering online has became easier. First, type in your pick up and drop off location within our booking system, choose a date and time. And make a payment on check out and you’re all set.",
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
        "Yes. We are the best transportation company in Ventura’s County. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc.",
    },
    {
      question: "how to find a good taxi near Port Hueneme CA ? ",
      answer: `You see most of the mediocre transportation companies in Port Hueneme are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Port Hueneme CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    { name: "Transportation service from Port Hueneme to LAX", href: "#" },
    {
      name: " Transportation service from Port Hueneme to BOB AIRPORT ",
      href: "#",
    },
    { name: "Transportation service from Port Hueneme to SBA", href: "#" },
    {
      name: "Transportation service from Port Hueneme to John Wayne Airport",
      href: "#",
    },
    {
      name: "Transportation service from Port Hueneme to Los Angeles",
      href: "#",
    },
    {
      name: "Transportation service from Port Hueneme to Hollywood",
      href: "#",
    },
    { name: "Transportation service from Port Hueneme to Burbank", href: "#" },
    {
      name: "Transportation service from Port Hueneme to Disney Land",
      href: "#",
    },
    {
      name: "Transportation service from Port Hueneme to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from Port Hueneme to Rodeo dr Beverly Hills",
      href: "#",
    },
    {
      name: "Transportation service from Port Hueneme to San Diego",
      href: "#",
    },
    {
      name: "Transportation service from Port Hueneme to Westlake Village",
      href: "#",
    },
    {
      name: "Transportation service from Port Hueneme to Santa Monica",
      href: "#",
    },
    {
      name: "Transportation service from Port Hueneme to Holmby Hills",
      href: "#",
    },
    { name: "Transportation service from Port Hueneme to Malibu", href: "#" },
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
#I Need A Ride #Private Car #Reliable Taxi #Port Hueneme To LAX #Ventura CA #Oxnard #Camarillo #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Westlake Village #Malibu #Los Angeles #Beverly Hills

                    "
          />

          <AirportTransportationList
            items={[
              { label: "Hueneme to LAX" },
              { label: "Hueneme to BOB" },
              { label: "Hueneme to SBA" },
              { label: "Hueneme to Los Angeles" },
            ]}
          />

          <PageEndLinks routes={routes} />
          <TwoColumnFAQ faqItems={faqItems} />

          <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              How to Book a Taxi Cab in Port Hueneme with Rosie Taxi Cab
            </h1>

            <p className="text-gray-700 mb-4">
              Looking for dependable transportation in Port Hueneme? Rosie Taxi
              Cab offers fast, affordable, and professional service around the
              clock. Whether you're heading to the beach, the base, or catching
              a flight, Rosie is your trusted Port Hueneme taxi
              provider—available 24/7.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              24/7 Taxi Service in Port Hueneme
            </h2>
            <p className="text-gray-700 mb-4">
              Need a taxi near Port Hueneme or searching taxi near me open?
              Rosie Taxi Cab is always ready with friendly drivers and clean
              vehicles. Unlike Uber or Lyft, we don’t have surge pricing, and we
              know the local streets well—from Naval Base Ventura County to
              Hueneme Pier and beyond.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Rosie Taxi Cab to LAX, Burbank & Santa Barbara Airports
            </h2>
            <p className="text-gray-700 mb-4">
              Flying out of town? Rosie Taxi Cab offers flat-rate, stress-free
              rides from Port Hueneme to major airports including LAX, Burbank,
              and Santa Barbara. Our airport transfers are reliable,
              comfortable, and available any time of day.
            </p>

            <p className="text-gray-700 mb-3">
              Popular airport routes from Port Hueneme include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Taxi Port Hueneme to LAX</li>
              <li>Port Hueneme taxi to Burbank airport</li>
              <li>Port Hueneme transportation to Santa Barbara airport</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              How to Book with Rosie Taxi Cab
            </h2>
            <p className="text-gray-700 mb-3">
              Booking a ride is simple and convenient. You can:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Call Rosie directly for immediate or scheduled service</li>
              <li>Reserve online in just a few clicks</li>
              <li>
                Search taxi near Port Hueneme and choose Rosie from the results
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              Unlike Uber Port Hueneme or Lyft Port Hueneme, Rosie offers
              personal service, transparent pricing, and drivers who care about
              your comfort and safety.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Why Choose Rosie Taxi Cab?
            </h2>
            <p className="text-gray-700 mb-4">
              Whether you’re headed to a local event, running errands, or
              catching a flight, Rosie Taxi Cab is the most reliable taxi
              service in Port Hueneme. Our professional drivers are experienced,
              courteous, and committed to providing top-quality service.
            </p>

            <p className="text-gray-700 mb-4">
              Skip the waiting and pricing surprises—Rosie is the trusted name
              for local and long-distance travel throughout Ventura County.
            </p>

            <p className="text-gray-800 italic">
              Ready to ride? Book your Rosie Taxi Cab today for the best taxi
              service in Port Hueneme—fast, friendly, and always available.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

export default PageHome;
