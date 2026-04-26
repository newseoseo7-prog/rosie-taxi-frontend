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
      "Long Beach Taxi Service | 24/7 Rides to LGB, LAX & LA | Rosie Taxi Cab",
    description:
      "Fast & reliable Long Beach taxi service. Airport rides to LGB, LAX, SNA & all LB areas. Book your cab now! (805) 258-8937 - 24/7 service, flat-rate fares available.",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-long-beach/",
    },
    openGraph: {
      title:
        "Long Beach Taxi Service | 24/7 Rides to LGB, LAX & LA | Rosie Taxi Cab",
      description:
        "Fast & reliable Long Beach taxi service. Airport rides to LGB, LAX, SNA & all LB areas. Book your cab now! (805) 258-8937 - 24/7 service, flat-rate fares available.",
      url: "https://new.rosietaxicab.com/taxi-long-beach/",
      siteName: "Rosie Taxi Cab",
      locale: "en_US",
      type: "article",
      publishedTime: "2020-06-08T06:32:29-07:00",
      modifiedTime: "2024-07-26T11:59:32-07:00",
      images: [
        {
          url: "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/long-beach-taxi.jpg",
          secureUrl:
            "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/long-beach-taxi.jpg",
          alt: "Long Beach Taxi Service at Queen Mary or Downtown LB",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Long Beach Taxi Service | 24/7 Rides to LGB, LAX & LA | Rosie Taxi Cab",
      description:
        "Fast & reliable Long Beach taxi service. Airport rides to LGB, LAX, SNA & all LB areas. Book your cab now! (805) 258-8937",
      images: [
        "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/long-beach-taxi.jpg",
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
      question: "How far is  Long Beach from LAX ? ",
      answer:
        "The drive from  Long Beach to LAX is between 1hr 30 min on weekdays and 2hr on weekends.",
    },
    {
      question: "how to order a cab / private car in  Long Beach ?",
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
      question: "how to find a good taxi near  Long Beach CA ? ",
      answer: `You see most of the mediocre transportation companies in  Long Beach are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in  Long Beach CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    { name: "Transportation service from  Long Beach to LAX", href: "#" },
    {
      name: " Transportation service from  Long Beach to BOB AIRPORT ",
      href: "#",
    },
    { name: "Transportation service from  Long Beach to SBA", href: "#" },
    {
      name: "Transportation service from  Long Beach to John Wayne Airport",
      href: "#",
    },
    {
      name: "Transportation service from  Long Beach to Los Angeles",
      href: "#",
    },
    { name: "Transportation service from  Long Beach to Hollywood", href: "#" },
    { name: "Transportation service from  Long Beach to Burbank", href: "#" },
    {
      name: "Transportation service from  Long Beach to Disney Land",
      href: "#",
    },
    {
      name: "Transportation service from  Long Beach to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from  Long Beach to Rodeo dr Beverly Hills",
      href: "#",
    },
    { name: "Transportation service from  Long Beach to San Diego", href: "#" },
    {
      name: "Transportation service from  Long Beach to Westlake Village",
      href: "#",
    },
    {
      name: "Transportation service from  Long Beach to Santa Monica",
      href: "#",
    },
    {
      name: "Transportation service from  Long Beach to Holmby Hills",
      href: "#",
    },
    { name: "Transportation service from  Long Beach to Malibu", href: "#" },
  ];

  return (
    <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <HashTags
        title="#LGB"
        text="
#I Need A Ride #Private Car #Reliable Taxi #Reservation To Long Beach Airport #Long Beach CA #Downtown & The Waterfront #Belmont Heights #Camarillo #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Woodland Hills #Malibu #Los Angeles
            "
      />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
        {/* SECTION HERO */}
        <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

        <>
          {/* Camarillo Premium Outlets Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Discover Long Beach And Things To Do "
            text={
              <>
                <p>
                  Long Beach Located just over 20 miles from LAX, Long Beach has
                  a highly diverse yet welcoming small-town feel that flies
                  under the radar of most tourists and Angelenos. Long Beach is
                  the second busiest container port in the United States as well
                  as being one of the largest shipping ports in the World. The
                  Ocean experience in Long Beach culminates in the Downtown
                  Waterfront District. Here, places like the Aquarium of the
                  Pacific and Rainbow Harbor offer authentic Southern California
                  travel experiences
                </p>
              </>
            }
            image="/images/long-beach-1.webp" // Replace with actual Camarillo Premium Outlets image URL
            imagePosition="right"
            buttons={[
              {
                url: "https://www.thecrazytourist.com/top-25-things-long-beach-ca/",
                text: "Things To Do",
              },
            ]}
          />

          <AirportTransportationList
            items={[
              { label: "Long Beach to LAX" },
              { label: "Long Beach to BOB" },
              { label: "Long Beach to SBA" },
              { label: "Long Beach to Los Angeles" },
            ]}
          />
          <div className="p-4">
            <EventsDisplay city="Long Beach" />
          </div>
        </>

        <PageEndLinks routes={routes} />
        <TwoColumnFAQ faqItems={faqItems} />

        <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            How to Book a Taxi Cab in Long Beach with Rosie Taxi Cab
          </h1>

          <p className="text-gray-700 mb-4">
            Looking for fast, reliable, and affordable transportation in Long
            Beach? Rosie Taxi Cab is the trusted choice for both locals and
            visitors. Whether you’re heading to the airport, cruising from the
            port, or just exploring the city, booking with Rosie Taxi Cab means
            stress-free service available 24/7.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Long Beach Taxi Services Available 24/7
          </h2>
          <p className="text-gray-700 mb-4">
            Searching for a taxi near me open or taxi near my location? Rosie
            Taxi Cab has professional drivers ready to go around the clock.
            Unlike rideshare apps with unpredictable pricing or availability,
            Rosie Taxi Cab offers consistent, dependable service. As a leading
            Long Beach taxi service and trusted cab company in Long Beach, Rosie
            ensures safe, timely, and clean transportation throughout the city
            and beyond.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Rosie Taxi Cab to LAX, Burbank & Long Beach Airports
          </h2>
          <p className="text-gray-700 mb-4">
            Need Long Beach transportation to LAX? Rosie Taxi Cab provides
            flat-rate airport rides for a smooth, timely experience. Whether
            it’s a Long Beach to LAX by taxi trip, a Taxi Long Beach to Burbank
            ride, or a local transfer to the Long Beach Airport, Rosie has you
            covered. Their private car Long Beach to airport open 24/7 service
            is ideal for early or late flights.
          </p>

          <p className="text-gray-700 mb-3">
            Popular routes from Long Beach include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Taxi Long Beach to LAX airport</li>
            <li>Long Beach taxi cab to Burbank airport</li>
            <li>Private transportation Long Beach to airport</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            How to Book with Rosie Taxi Cab
          </h2>
          <p className="text-gray-700 mb-3">
            Booking your ride is easy. You can:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Call Rosie Taxi Cab directly for immediate or scheduled pickups
            </li>
            <li>Visit their website to book a Long Beach taxi cab online</li>
            <li>
              Search taxi cab near Long Beach or taxi near me and select Rosie
              from the results
            </li>
          </ul>

          <p className="text-gray-700 mb-4">
            Unlike Uber Long Beach or Lyft Long Beach, Rosie offers flat rates,
            trained local drivers, and no surprise charges. It’s the smarter
            choice for comfort, safety, and price transparency.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Why Choose Rosie Taxi Cab?
          </h2>
          <p className="text-gray-700 mb-4">
            When you say, "I need a taxi to LAX", think Rosie. Every taxi driver
            in Long Beach with Rosie is licensed, courteous, and committed to
            on-time, professional service.
          </p>

          <p className="text-gray-700 mb-4">
            Whether it’s a quick trip across town or long-distance airport
            travel, Rosie provides the most dependable cab service in Long
            Beach. Don’t take chances with random companies—go with the name
            Long Beach trusts: Rosie Taxi Cab.
          </p>

          <p className="text-gray-800 italic">
            Need a ride now? Book with Rosie Taxi Cab for Long Beach’s most
            trusted and reliable taxi experience.
          </p>
        </article>
      </div>
    </main>
  );
}

export default PageHome;
