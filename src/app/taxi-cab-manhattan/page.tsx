import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import PageEndLinks from "@/components/PageEndLinks";
import TwoColumnFAQ from "@/components/Faq";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";

export async function generateMetadata() {
  return {
    title:
      "Manhattan Taxi Service | 24/7 NYC Rides to JFK & Attractions | Rosie Taxi Cab",
    description:
      "Fast & reliable Manhattan taxi service for JFK, LGA, Broadway, and all NYC boroughs. Skip ride-shares - book a guaranteed cab now! ☎ (212) 555-1234 (Local NYC Number) - 24/7 service.",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com/nyc"),
    alternates: {
      canonical: "/taxi-manhattan/",
    },
    openGraph: {
      title:
        "Manhattan Taxi Service | 24/7 NYC Rides to JFK & Attractions | Rosie Taxi Cab",
      description:
        "Fast & reliable Manhattan taxi service for JFK, LGA, Broadway, and all NYC boroughs. Skip ride-shares - book a guaranteed cab now! ☎ (212) 555-1234 - 24/7 service.",
      url: "https://new.rosietaxicab.com/nyc/taxi-manhattan/",
      siteName: "Rosie Taxi Cab NYC",
      locale: "en_US",
      type: "article",
      publishedTime: "2020-06-08T06:32:29-04:00", // EST timezone
      modifiedTime: "2024-07-26T11:59:32-04:00",
      images: [
        {
          url: "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/manhattan-taxi.jpg",
          secureUrl:
            "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/manhattan-taxi.jpg",
          alt: "Manhattan Taxi Service near Times Square",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Manhattan Taxi Service | 24/7 NYC Rides to JFK & Attractions | Rosie Taxi Cab",
      description:
        "Fast & reliable Manhattan taxi service for JFK, LGA, Broadway, and all NYC boroughs. Skip ride-shares - book a guaranteed cab now! ☎ (212) 555-1234",
      images: [
        "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/manhattan-taxi.jpg",
      ],
      label1: "Time to read",
      data1: "3 minutes", // Shorter for NYC pace
    },
    other: {
      "og:updated_time": "2024-07-26T11:59:32-04:00",
    },
  };
}

function PageHome() {
  const faqItems = [
    {
      question: "How far is  Manhattan Beach from LAX ? ",
      answer:
        "The drive from  Manhattan Beach to LAX is between 1hr 30 min on weekdays and 2hr on weekends.",
    },
    {
      question: "how to order a cab / private car in  Manhattan Beach ?",
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
      question: "how to find a good taxi near  Manhattan Beach CA ? ",
      answer: `You see most of the mediocre transportation companies in  Manhattan Beach are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in  Manhattan Beach CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    { name: "Transportation service from  Manhattan Beach to LAX", href: "#" },
    {
      name: " Transportation service from  Manhattan Beach to BOB AIRPORT ",
      href: "#",
    },
    { name: "Transportation service from  Manhattan Beach to SBA", href: "#" },
    {
      name: "Transportation service from  Manhattan Beach to John Wayne Airport",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Los Angeles",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Hollywood",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Burbank",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Disney Land",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Rodeo dr Beverly Hills",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to San Diego",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Westlake Village",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Santa Monica",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Holmby Hills",
      href: "#",
    },
    {
      name: "Transportation service from  Manhattan Beach to Malibu",
      href: "#",
    },
  ];

  return (
    <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
        {/* SECTION HERO */}
        <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

        <HashTags
          text="
#I Need A Ride #Private Car #Reliable Taxi #Reservation To Burbank Airport #Manhattan Beach #los Angeles CA #Hollywood #Glendale #Pasadena #Arcadia #Airport Transportation #East Los Angeles #Alhambra #Anaheim #Los Angeles Love

                "
        />
        <>
          {/* Camarillo Premium Outlets Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Discover Manhattan And Things To Do "
            text={
              <>
                <p>
                  Downtown Manhattan Beach is sometimes to referred to as the
                  “Pearl of the South Bay.” Founded back in the year 1912, the
                  downtown area of the city features chic shopping
                  opportunities, award-winning chefs and restaurants serving
                  delicious, mouth-watering food, and stunning sunsets just
                  steps away from a beach. There are more than 150, retailers in
                  Downtown Manhattan Beach
                </p>
              </>
            }
            image="/images/manhatten_beach.jpg" // Replace with actual Camarillo Premium Outlets image URL
            imagePosition="right"
            buttons={[
              {
                url: "https://www.tripadvisor.com/Attraction_Review-g32678-d261449-Reviews-Manhattan_Beach-Manhattan_Beach_California.html",
                text: "Things To Do",
              },
            ]}
          />
          <AirportTransportationList
            items={[
              { label: "Manhattan to LAX" },
              { label: "Manhattan to BOB" },
              { label: "Manhattan to SBA" },
              { label: "Manhattan to Los Angeles" },
            ]}
          />
          <div className="p-4">
            <EventsDisplay city="Manhattan" />
          </div>
          {/* Camarillo Ranch Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Taxi Service from Manhattan to Los Angeles International Airport (LAX)"
            text={
              <>
                <ul className="space-y-3 mt-5 list-disc list-inside">
                  <li className=" items-center space-x-4">
                    {/* <Badge name="01" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Rosie Taxi Cab Provides local taxis and private car with
                      UBER/ LYFT CONCIERGE to and from Irvine to LAX.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="02" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our current Pick Up Time is between 10 to 15 min
                      guaranteed on reservation basis
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="03" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our reservation approach is very simple as follows :
                      date/time and pick up location and drop off, and a credit
                      / debit card on file.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="04" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Keep in mind you have to be at the airport at least 2hrs
                      prior to your flight’s departure, and 3hrs ahead of time
                      for international flights.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="05" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our reservation system goes as first call first serve, and
                      with a priority to Airports.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="06" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      We’ve a wide selection of regular cars and XL cars 6
                      people on demand.
                    </span>
                  </li>
                </ul>
              </>
            }
            image="/images/WhatsApp-Image-2024-05-24-at-18.52.10_88eb18d7-800x500.jpg" // Replace with actual Camarillo Ranch image URL
            imagePosition="left"
          />

          {/* Adolfo Camarillo High School Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Taxi Service from Manhattan Beach to Burbank Airport (BOB)"
            text={
              <>
                <ul className="space-y-3 mt-5 list-inside list-disc">
                  <li className=" items-center space-x-4">
                    {/* <Badge name="01" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Rosie Taxi Cab Provides local taxis and private car with
                      UBER/ LYFT CONCIERGE to and from Irvine to Burbank
                      Airport.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="02" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our current Pick Up Time is between 10 to 15 min
                      guaranteed on reservation basis
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="03" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our reservation approach is very simple as follows :
                      date/time and pick up location and drop off, and a credit
                      / debit card on file.
                    </span>
                  </li>
                  <li className="items-center space-x-4">
                    {/* <Badge name="04" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Keep in mind you have to be at the airport at least 2hrs
                      prior to your flight’s departure, and 3hrs ahead of time
                      for international flights.
                    </span>
                  </li>
                  <li className="items-center space-x-4">
                    {/* <Badge name="05" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our reservation system goes as first call first serve, and
                      with a priority to Airports.
                    </span>
                  </li>
                  <li className="items-center space-x-4">
                    {/* <Badge name="06" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      We’ve a wide selection of regular cars and XL cars 6
                      people on demand.
                    </span>
                  </li>
                </ul>
              </>
            }
            image="/images/MNLA_FilePhotos_PasadenaValley_0013_16-9.jpg.webp" // Replace with actual Adolfo Camarillo High image URL
            imagePosition="right"
          />

          {/* Pleasant Valley Historical Society Section */}
          <CitiesInfoSection
            heading="Taxi Service from Manhattan Beach to John Wayne Airport (SNA)"
            text={
              <>
                <ul className="space-y-3 mt-5 list-inside list-disc">
                  <li className=" items-center space-x-4 ">
                    {/* <Badge name="01" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Rosie Taxi Cab Provides local taxis and private car with
                      UBER/ LYFT CONCIERGE to and from Irvine to John Wayne
                      Airport.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="02" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our current Pick Up Time is between 10 to 15 min
                      guaranteed on reservation basis
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="03" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our reservation approach is very simple as follows :
                      date/time and pick up location and drop off, and a credit
                      / debit card on file.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="04" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Keep in mind you have to be at the airport at least 2hrs
                      prior to your flight’s departure, and 3hrs ahead of time
                      for international flights.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="05" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our reservation system goes as first call first serve, and
                      with a priority to Airports.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="06" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      We’ve a wide selection of regular cars and XL cars 6
                      people on demand.
                    </span>
                  </li>
                </ul>
              </>
            }
            image="/images/welcome-to-jwa-scaled-1-800x533.webp" // Replace with actual Pleasant Valley Historical Society image URL
            imagePosition="left"
          />

          {/* Camarillo Community Center Section */}
          <CitiesInfoSection
            heading="Taxi Service from Manhattan to Ontario International Airport (ONT)"
            text={
              <>
                <ul className="space-y-2 mt-5 list-inside list-disc">
                  <li className=" items-center space-x-4">
                    {/* <Badge name="01" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Rosie Taxi Cab Provides local taxis and private car with
                      UBER/ LYFT CONCIERGE to and from Irvine to Ontario
                      International Airport.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="02" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our current Pick Up Time is between 10 to 15 min
                      guaranteed on reservation basis
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="03" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our reservation approach is very simple as follows :
                      date/time and pick up location and drop off, and a credit
                      / debit card on file.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="04" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Keep in mind you have to be at the airport at least 2hrs
                      prior to your flight’s departure, and 3hrs ahead of time
                      for international flights.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="05" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Our reservation system goes as first call first serve, and
                      with a priority to Airports.
                    </span>
                  </li>
                  <li className=" items-center space-x-4">
                    {/* <Badge name="06" /> */}
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      We’ve a wide selection of regular cars and XL cars 6
                      people on demand.
                    </span>
                  </li>
                </ul>
              </>
            }
            image="/images/Ontario-international-airport-800x600.jpg" // Replace with actual Camarillo Community Center image URL
            imagePosition="right"
          />
        </>

        <PageEndLinks routes={routes} />
        <TwoColumnFAQ faqItems={faqItems} />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          How to Book a Taxi Cab in Manhattan Beach with Rosie Taxi Cab
        </h1>

        <p className="text-gray-700 mb-4">
          Looking for fast, dependable, and affordable transportation in
          Manhattan Beach? Rosie Taxi Cab is your trusted solution. Whether
          you’re heading to the beach, downtown, or catching a flight, Rosie
          Taxi Cab offers professional service and 24/7 availability to get you
          there comfortably and on time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          24/7 Taxi Services in Manhattan Beach
        </h2>
        <p className="text-gray-700 mb-4">
          Searching for a taxi near me open or taxi near my location? Rosie Taxi
          Cab is always nearby in Manhattan Beach. Unlike rideshare apps that
          surge prices or cancel trips, Rosie offers consistent, reliable
          service around the clock. As a leading Manhattan Beach taxi service,
          Rosie ensures safe, clean, and on-time rides for locals and visitors
          alike.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Rosie Taxi Cab to LAX, Long Beach & More
        </h2>
        <p className="text-gray-700 mb-4">
          Need a Manhattan Beach to LAX taxi? Rosie Taxi Cab offers flat-rate
          airport transportation with no surprises. Whether you’re flying out of
          LAX, Long Beach Airport, or Burbank, Rosie has experienced drivers
          ready to serve you with private airport car service from Manhattan
          Beach 24/7.
        </p>

        <p className="text-gray-700 mb-3">Popular routes include:</p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Taxi Manhattan Beach to LAX</li>
          <li>Taxi cab to Long Beach Airport</li>
          <li>Manhattan Beach private car to Burbank Airport</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          How to Book with Rosie Taxi Cab
        </h2>
        <p className="text-gray-700 mb-3">
          Booking your ride is easy. Choose from:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Calling Rosie Taxi Cab for quick or scheduled pickups</li>
          <li>Booking online via the official Rosie Taxi Cab website</li>
          <li>
            Searching taxi cab near Manhattan Beach or taxi near me and
            selecting Rosie
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          Unlike Uber Manhattan Beach or Lyft Manhattan Beach, Rosie offers
          fixed pricing, licensed local drivers, and no hidden fees.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Why Choose Rosie Taxi Cab?
        </h2>
        <p className="text-gray-700 mb-4">
          When you say, "I need a taxi to LAX", think Rosie. Every taxi driver
          in Manhattan Beach is trained, licensed, and committed to customer
          satisfaction.
        </p>

        <p className="text-gray-700 mb-4">
          Whether you’re enjoying the coast or heading out of town, trust Rosie
          Taxi Cab for the most reliable taxi service in Manhattan Beach. Don’t
          leave your travel plans to chance—ride with the name locals trust.
        </p>

        <p className="text-gray-800 italic">
          Ready to go? Book your Rosie Taxi Cab now for the best taxi experience
          in Manhattan Beach.
        </p>
      </article>
    </main>
  );
}

export default PageHome;
