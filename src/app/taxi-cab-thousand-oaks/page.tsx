import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";

import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import CityOfThousandOaks from "@/images/cities/city_of_thousand_oaks.jpg";
import CivilArtPlaza from "@/images/cities/Civil_Art_Plaza_Thousand_Oaks.jpg";
import ParadiseFalls from "@/images/cities/paradise_falls.jpg";
import WildWoodRegionalPark from "@/images/cities/wildwood_regional_park.jpg";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import PopularAirports from "@/components/PopularAirports";
import Head from "next/head";
import schemaData from "@/app/schema";
import AirportTransportationList from "@/components/AirportTransportationList";
import ThreeColumnText from "@/components/ThreeColumnText";
import { FaClock, FaPlane, FaShieldAlt, FaTimesCircle } from "react-icons/fa";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";

export async function generateMetadata() {
  return {
    title:
      "Thousand Oaks Taxi Cab,24/7 LAX & Burbank Airport Rides,Rosie Taxi Cab",
    description:
      "ROSIE TAXI CAB THOUSAND OAKS 24/7 ORDER ONLINE SAVE 20% NOW | CALL NOW (805) 258-8937 TAXI CAB NEAR ME THOUSAND OAKS CA | AIRPORT TRANSPORTATION",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-cab-thousand-oaks/",
    },
    openGraph: {
      title:
        "Thousand Oaks Taxi Cab | 24/7 LAX & Burbank Airport Rides | Rosie Taxi Cab",
      description:
        "Premier taxi Cab in Thousand Oaks for business travelers, Amgen commuters, and LAX/Burbank airport transfers. Luxury SUVs & corporate discounts. (805) 258-8937",
      url: "https://new.rosietaxicab.com/taxi-cab-thousand-oaks/",
      siteName: "Rosie Taxi Cab",
      locale: "en_US",
      type: "article",
      publishedTime: "2020-06-08T06:32:29-07:00",
      modifiedTime: "2024-07-26T11:59:32-07:00",
      images: [
        {
          url: "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/thousand-oaks-luxury-taxi.jpg",
          secureUrl:
            "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/thousand-oaks-luxury-taxi.jpg",
          alt: "Luxury Taxi Cab in Thousand Oaks",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Thousand Oaks Taxi Cab | 24/7 LAX & Burbank Airport Rides | Rosie Taxi Cab",
      description:
        "Premier taxi Cab in Thousand Oaks for business travelers, Amgen commuters, and LAX/Burbank airport transfers. Luxury SUVs & corporate discounts. (805) 258-8937",
      images: [
        "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/thousand-oaks-luxury-taxi.jpg",
      ],
      label1: "Response Time",
      data1: "Under 20 minutes",
    },
    other: {
      "og:updated_time": "2024-07-26T11:59:32-07:00",
    },
  };
}

function PageHome() {
  const routes = [
    { name: "Transportation service from Thousand Oaks to LAX", href: "#" },
    {
      name: "Transportation service from Thousand Oaks to BOB Airport",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to SBA Airport",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to John Wayne Airport",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to Los Angeles",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to Hollywood",
      href: "#",
    },
    { name: "Transportation service from Thousand Oaks to Burbank", href: "#" },
    {
      name: "Transportation service from Thousand Oaks to Disneyland",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to Rodeo Drive, Beverly Hills",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to San Diego",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to Westlake Village",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to Santa Monica",
      href: "#",
    },
    {
      name: "Transportation service from Thousand Oaks to Holmby Hills",
      href: "#",
    },
    { name: "Transportation service from Thousand Oaks to Malibu", href: "#" },
  ];

  const faqItems = [
    {
      question: "How far is Thousand Oaks from LAX?",
      answer:
        "The drive from Thousand Oaks to LAX typically takes about 1 hour on weekends and up to 1 hour 10 minutes on weekdays, depending on traffic conditions.",
    },
    {
      question: "How do I order a cab or private car in Thousand Oaks?",
      answer:
        "Ordering online is easy. Simply enter your pickup and drop-off locations in our booking system, choose your desired date and time, and complete the payment at checkout. You're all set!",
    },
    {
      question: "What is the minimum charge to LAX?",
      answer:
        "The minimum charge to LAX ranges from $160 to $200, depending on various factors such as travel time, date, and number of passengers. Our flat rate covers up to 4 passengers per car. For larger groups, we recommend booking two vehicles or one XL car that can accommodate up to 6 passengers.",
    },
    {
      question: "How long does it take to get a driver?",
      answer:
        "Pickup time is usually between 10 to 15 minutes within Thousand Oaks. If you're located outside the city, pickup time may vary depending on the distance. When you book online, your request is prioritized.",
    },
    {
      question: "Is Rosie Taxi Cab open 24/7 and reliable?",
      answer:
        "Yes, Rosie Taxi Cab operates 24/7 and is one of the most trusted transportation services in Ventura County. Our proven track record includes a partnership with Lyft Concierge, providing dependable service across California. While traditional taxis may take 30+ minutes, we usually arrive in just 10–15 minutes. We offer airport rides, NEMT services, account billing, and easy online booking and payments.",
    },
    {
      question: "How can I find a good taxi near Thousand Oaks?",
      answer:
        "Many companies in Thousand Oaks claim high ratings with only 2 or 3 vehicles, raising concerns about reliability. To find a reputable taxi service, check their TripAdvisor reviews, service history, and customer recommendations. Rosie Taxi Cab is trusted by locals for its reliability, 24/7 availability, and professional service.",
    },
    {
      question: "Do you accept card payments?",
      answer:
        "Yes, we accept all major credit and debit cards. Our system is fully cashless and on-demand. We help you design the ride that suits your needs—more affordable and efficient than conventional taxis.",
    },
    {
      question: "What cities do you service?",
      answer:
        "We service all cities throughout California, 24/7. For prompt and reliable service, we recommend booking in advance either online or over the phone. We do accept last-minute and same-day requests when possible.",
    },
    {
      question: "Can I book a ride to LAX on the same day?",
      answer:
        "Yes, same-day bookings are accepted. However, we strongly recommend making your reservation ahead of time, especially for airport trips, to ensure availability and punctuality.",
    },
    {
      question: "What other airports do you service?",
      answer:
        "We provide transportation to all major airports across California, 24/7, by reservation. Book online or by phone for a smooth and reliable airport transfer.",
    },
  ];
  const features = [
    {
      icon: <FaShieldAlt size={50} />,
      heading: "TRUSTED BUSINESS",
      content:
        "Rosie Taxi Cab supports your journey from start to finish — especially when you book and pay online. We’re available 24/7 on demand to help you plan, schedule, and manage your trips with ease.",
    },
    {
      icon: <FaClock size={50} />,
      heading: "OPEN 24/7",
      content:
        "We strive for excellence and proudly serve Thousand Oaks, Newbury Park, Simi Valley, Moorpark, Westlake Village, Agoura Hills, and many more nearby areas. Day or night — we’re here when you need us.",
    },
    {
      icon: <FaPlane size={50} />,
      heading: "AIRPORT TRIPS",
      content:
        "Your airport trip is a priority. We help you schedule your next ride to LAX with ease, and we’re happy to answer any questions you have before booking. Fast, flexible, and reliable every time.",
    },
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <main className="nc-PageHome relative overflow-hidden">
        {/* GLASSMOPHIN */}
        <BgGlassmorphism />

        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          {/* SECTION HERO */}
          <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

          <HashTags
            text="
                    #I Need A Ride #Private Car #Reliable Taxi #Thousand Oaks To LAX #Thousand Oaks CA #Ventura #Oxnard #Camarillo #Port hueneme #Santa Paula #Fillmore #Westlake Village #Malibu #Los Angeles #Beverly Hills

                    "
          />
          <CitiesInfoSection
            heading="Things To Do In Thousand Oaks"
            text={
              <p>
                Thousand Oaks is Ventura County’s second-largest city, located
                approximately 40 miles from Los Angeles’ downtown city center.
                This beautiful city commonly referred to as “T.O.” by residents
                offers a wide selections of social activities to do. Discover a
                list of activities curated by top travelers here.
              </p>
            }
            image="/images/Muvico-Thousand-Oaks-Exterior.webp"
            imagePosition="right"
            buttons={[
              {
                url: "https://www.tripadvisor.com/Attractions-g60959-Activities-Thousand_Oaks_California.html",
                text: "THINGS TO DO",
              },
            ]}
          />

          <CitiesInfoSection
            className="leading-6 text-center"
            heading="LAX"
            text={
              <p>
                #I Need A Ride #Private Car #Reliable Taxi #Thousand Oaks To LAX
                #Thousand Oaks CA #Ventura #Oxnard #Camarillo #Port hueneme
                #Santa Paula #Fillmore #Westlake Village #Malibu #Los Angeles
                #Beverly Hills
              </p>
            }
            image="" // Replace with actual Ojai Valley Trail image URL
            imagePosition="left"
            buttons={[]}
          />

          <CitiesInfoSection
            heading="Civil Art Palaza"
            text={
              <p>
                Discover the heart of culture and entertainment at Civic Arts
                Plaza Thousand Oaks, the premier performing arts center in
                Ventura County. Located in the vibrant city of Thousand Oaks,
                the Bank of America Performing Arts Center offers world-class
                theater productions, concerts, ballet, comedy shows, and family
                events, all near popular destinations like The Lakes at Thousand
                Oaks and the Thousand Oaks Mall. Whether you're attending a
                Broadway show, a live concert, or a community event, the Civic
                Arts Plaza is a must-visit cultural landmark. For easy and
                reliable transportation, many visitors choose trusted taxi cab
                services in Thousand Oaks to get to and from the Civic Arts
                Plaza quickly and comfortably. Booking a Thousand Oaks taxi cab
                ensures you arrive on time and stress-free, while taxi cabs near
                Civic Arts Plaza are always available after the show to take you
                home safely. Experience the best of Thousand Oaks arts and
                entertainment with the convenience of local taxi services!
              </p>
            }
            image={CivilArtPlaza}
            imagePosition="right"
            buttons={[]}
          />
          <div className="p-4">
            <EventsDisplay city="Thousand Oaks" />
          </div>
          <AirportTransportationList
            items={[
              { label: "Thousand Oaks to LAX" },
              { label: "Thousand Oaks  to BOB" },
              { label: "Thousand Oaks  to SBA" },
              { label: "Thousand Oaks  to Los Angeles" },
            ]}
          />

          <CitiesInfoSection
            heading="City of Thousand Oaks"
            text={
              <>
                <p>City of Thousand Oaks</p>

                <ul className="space-y-4 mt-10">
                  <li className="flex items-center space-x-4">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      A preserved ranch offering tours and events
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Perfect for photography, picnics, and history buffs
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Features gardens, a barn, and an equestrian center
                    </span>
                  </li>
                </ul>
                <p className="mt-5">
                  Explore the rich history of the Camarillo Ranch with guided
                  tours, outdoor events, and scenic views perfect for a relaxing
                  day out.
                </p>
              </>
            }
            image={CityOfThousandOaks}
            imagePosition="left"
            buttons={[
              { url: "booking?from=camarillo", text: "Visit Camarillo Ranch" },
              { url: "booking?to=camarillo", text: "Plan Your Visit" },
            ]}
          />

          <CitiesInfoSection
            heading="Gardens of the World"
            text={
              <p>
                Gardens of the World in Thousand Oaks, California, is a serene
                4.5-acre botanical garden that offers a peaceful escape in the
                heart of the city. Established in 2001 and operated by the Hogan
                Family Foundation, the gardens are located at 2001 Thousand Oaks
                Boulevard, directly across from the Civic Arts Plaza.
              </p>
            }
            image="/images/garden_of_worlds.jpg"
            imagePosition="right"
            buttons={[{ url: "/booking?from=camarillo", text: "Explore " }]}
          />

          {/* Pleasant Valley Historical Society Section */}
          <CitiesInfoSection
            heading="Pleasant Valley Historical Society"
            text={
              <>
                <p>
                  The Pleasant Valley Historical Society preserves the rich
                  history of Camarillo and the surrounding areas, with exhibits,
                  events, and educational resources for visitors of all ages.
                </p>

                <ul className="space-y-4 mt-10">
                  <li className="flex items-center space-x-4">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Explore local history through exhibits and artifacts
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Hosts educational programs and community events
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      A valuable resource for history enthusiasts
                    </span>
                  </li>
                </ul>
                <p className="mt-5">
                  Discover the rich heritage of Camarillo and its people at the
                  Pleasant Valley Historical Society, where you can explore
                  exhibits and learn about the region’s fascinating past.
                </p>
              </>
            }
            image={WildWoodRegionalPark}
            imagePosition="left"
            buttons={[
              {
                url: "booking?from=camarillo",
                text: "Visit the Historical Society",
              },
              {
                url: "booking?to=camarillo",
                text: "Learn About Local History",
              },
            ]}
          />
        </div>
        <ThreeColumnText
          sectionTitle="Travel Made Simple"
          sectionSubtitle="Everything you need for a stress-free trip"
          items={features}
        />

        <TwoColumnFAQ faqItems={faqItems} />
        <PageEndLinks routes={routes} />

        <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Reliable Thousand Oaks Taxi Cab Services – Ride 24/7 with Rosie Taxi
            Cab
          </h1>

          <p className="text-gray-700 mb-4">
            Looking for fast, dependable Thousand Oaks taxi service? Rosie Taxi
            Cab is the top choice for local and long-distance rides. Whether
            you’re heading to the airport or across town, Rosie offers clean
            vehicles, professional drivers, and 24/7 service that Thousand Oaks
            residents can count on.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            24/7 Taxi Service in Thousand Oaks
          </h2>
          <p className="text-gray-700 mb-4">
            Need a taxi near Thousand Oaks right now? Whether you’re searching
            for a taxi near me open or planning ahead, Rosie Taxi Cab is always
            available. Unlike Uber or Lyft, we offer consistent pricing with no
            surprise surcharges, and our drivers know Thousand Oaks
            neighborhoods inside and out.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Airport Transportation from Thousand Oaks
          </h2>
          <p className="text-gray-700 mb-4">
            Catching a flight? Trust Rosie for comfortable and on-time rides to
            major airports like LAX, Burbank, and Santa Barbara. Our Thousand
            Oaks to airport taxi service is perfect for both early morning and
            late-night travelers.
          </p>

          <p className="text-gray-700 mb-3">Popular routes include:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Taxi Thousand Oaks to LAX</li>
            <li>Thousand Oaks to Burbank Airport taxi</li>
            <li>Thousand Oaks taxi to Santa Barbara Airport</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Easy Booking with Rosie Taxi Cab
          </h2>
          <p className="text-gray-700 mb-3">
            Booking your ride is quick and hassle-free:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Call for immediate or scheduled pickup</li>
            <li>Reserve online in minutes</li>
            <li>Search taxi Thousand Oaks near me and select Rosie Taxi Cab</li>
          </ul>

          <p className="text-gray-700 mb-4">
            Rosie offers better value than Uber Thousand Oaks or Lyft Thousand
            Oaks with no surge pricing, friendly local drivers, and personalized
            service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Why Choose Rosie Taxi Cab in Thousand Oaks?
          </h2>
          <p className="text-gray-700 mb-4">
            Rosie Taxi Cab is the most trusted name in cab service in Thousand
            Oaks. We prioritize safety, punctuality, and customer satisfaction.
            From quick errands to airport runs, we’re committed to making your
            ride smooth and stress-free.
          </p>

          <p className="text-gray-700 mb-4">
            Every Rosie driver is licensed, courteous, and knowledgeable about
            Thousand Oaks and surrounding areas.
          </p>

          <p className="text-gray-800 italic">
            Don’t settle for just any taxi—choose Rosie for Thousand Oaks’ most
            reliable, 24/7 taxi experience. Book today!
          </p>
        </article>
      </main>
    </>
  );
}

export default PageHome;
