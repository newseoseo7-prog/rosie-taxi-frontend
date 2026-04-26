import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";

export async function generateMetadata() {
  return {
    title:
      "Burbank Taxi Service | 24/7 Rides to BUR Airport & Studios | Rosie Taxi Cab",
    description:
      "Fast Burbank taxi service to Hollywood Burbank Airport (BUR), Warner Bros, Disney & all Burbank areas. Reliable 24/7 rides. Book now! (805) 258-8937",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-burbank/",
    },
    openGraph: {
      title:
        "Burbank Taxi Service | 24/7 Rides to BUR Airport & Studios | Rosie Taxi Cab",
      description:
        "Fast Burbank taxi service to Hollywood Burbank Airport (BUR), Warner Bros, Disney & all Burbank areas. Reliable 24/7 rides. Book now! (805) 258-8937",
      url: "https://new.rosietaxicab.com/taxi-burbank/",
      siteName: "Rosie Taxi Cab",
      locale: "en_US",
      type: "article",
      publishedTime: "2020-06-08T06:32:29-07:00",
      modifiedTime: "2024-07-26T11:59:32-07:00",
      images: [
        {
          url: "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/burbank-taxi-service.jpg",
          secureUrl:
            "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/burbank-taxi-service.jpg",
          alt: "Burbank Taxi Service at Hollywood Burbank Airport",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Burbank Taxi Service | 24/7 Rides to BUR Airport & Studios | Rosie Taxi Cab",
      description:
        "Fast Burbank taxi service to Hollywood Burbank Airport (BUR), Warner Bros, Disney & all Burbank areas. Reliable 24/7 rides. Book now! (805) 258-8937",
      images: [
        "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/burbank-taxi-service.jpg",
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
      question: "How far is Burbank from LAX ? ",
      answer:
        "The drive from Burbank to LAX is between 1hr 30 min on weekdays and 2hr on weekends.",
    },
    {
      question: "how to order a cab / private car in Burbank ?",
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
      question: "how to find a good taxi near Burbank CA ? ",
      answer: `You see most of the mediocre transportation companies in Burbank are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Burbank CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    { name: "Transportation service from Burbank to LAX", href: "#" },
    { name: " Transportation service from Burbank to BOB AIRPORT ", href: "#" },
    { name: "Transportation service from Burbank to SBA", href: "#" },
    {
      name: "Transportation service from Burbank to John Wayne Airport",
      href: "#",
    },
    { name: "Transportation service from Burbank to Los Angeles", href: "#" },
    { name: "Transportation service from Burbank to Hollywood", href: "#" },
    { name: "Transportation service from Burbank to Burbank", href: "#" },
    { name: "Transportation service from Burbank to Disney Land", href: "#" },
    {
      name: "Transportation service from Burbank to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from Burbank to Rodeo dr Beverly Hills",
      href: "#",
    },
    { name: "Transportation service from Burbank to San Diego", href: "#" },
    {
      name: "Transportation service from Burbank to Westlake Village",
      href: "#",
    },
    { name: "Transportation service from Burbank to Santa Monica", href: "#" },
    { name: "Transportation service from Burbank to Holmby Hills", href: "#" },
    { name: "Transportation service from Burbank to Malibu", href: "#" },
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
#I Need A Ride #Private Car #Reliable Taxi #Reservation To Burbank Airport #Burbank CA #los Angeles CA #Hollywood #Glendale #Pasadena #Arcadia #Airport Transportation #East Los Angeles #Alhambra #Anaheim #Los Angeles Love
                "
        />
        <>
          {/* Camarillo Premium Outlets Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Discover Burbank And Things To Do "
            text={
              <>
                <p>
                  Welcome to Burbank and find yourself in the heart of LA
                  action. It’s the ideal destination to experience all that
                  SoCal has to offer—from behind-the-scenes movie tours and talk
                  show tapings at Warner Bros. Studios to theme parks, outdoor
                  adventures, and arts and culture. Just minutes from Hollywood,
                  Universal Studios and SoCal’s many attractions, you’ll
                  discover eclectic eateries, a cool shopping scene and a range
                  of accommodations. It’s all here — in Burbank, CA.
                </p>
              </>
            }
            image="/images/MNLA_FilePhotos_PasadenaValley_0013_16-9.jpg.webp" // Replace with actual Camarillo Premium Outlets image URL
            imagePosition="right"
            buttons={[
              {
                url: "https://visitburbank.com/what-to-do/",
                text: "Things To Do",
              },
            ]}
          />

          <AirportTransportationList
            items={[
              { label: "Burbank to LAX" },
              { label: "Burbank to BOB" },
              { label: "Burbank to SBA" },
              { label: "Burbank to Los Angeles" },
            ]}
          />

          <div className="p-4">
            <EventsDisplay city="Burbank" />
          </div>
        </>
        <PageEndLinks routes={routes} />
        <TwoColumnFAQ faqItems={faqItems} />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          How to Book a Taxi Cab in Burbank with Rosie Taxi Cab
        </h1>

        <p className="text-gray-700 mb-4">
          Need quick, affordable, and reliable transportation in Burbank? Rosie
          Taxi Cab is the trusted local choice for getting around town or
          heading to the airport. Whether you're commuting, attending events, or
          catching a flight, Rosie Taxi Cab provides stress-free rides with
          licensed drivers available 24/7.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          24/7 Taxi Services in Burbank
        </h2>
        <p className="text-gray-700 mb-4">
          Looking for a taxi near me open or taxi near my location? Rosie Taxi
          Cab has you covered any time, day or night. Unlike surge-pricing
          rideshare services, Rosie Taxi Cab offers flat-rate, dependable
          service with no surprises. As a leading Burbank taxi service and
          reputable cab company in Burbank, Rosie ensures your ride is clean,
          safe, and on time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Rosie Taxi Cab to LAX, Hollywood Burbank & More
        </h2>
        <p className="text-gray-700 mb-4">
          Need Burbank transportation to LAX? Rosie Taxi Cab offers flat-rate
          transfers to all major airports. Whether it’s a Burbank to LAX taxi, a
          quick ride to Hollywood Burbank Airport, or travel to Santa Barbara,
          Rosie provides private, 24/7 service for a smooth journey.
        </p>

        <p className="text-gray-700 mb-3">
          Popular airport routes from Burbank include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Taxi Burbank to LAX airport</li>
          <li>Burbank taxi cab to Hollywood Burbank airport</li>
          <li>Private transportation Burbank to Santa Barbara airport</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          How to Book with Rosie Taxi Cab
        </h2>
        <p className="text-gray-700 mb-3">
          Booking your ride is simple. You can:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Call Rosie Taxi Cab directly for immediate or future pickups</li>
          <li>Book online through their website for a Burbank taxi cab</li>
          <li>
            Search taxi cab near Burbank or taxi near me and choose Rosie from
            the results
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          Unlike Uber Burbank or Lyft Burbank, Rosie offers transparent pricing,
          professional local drivers, and no hidden charges. It’s the smarter
          and more reliable transportation choice in the city.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Why Choose Rosie Taxi Cab?
        </h2>
        <p className="text-gray-700 mb-4">
          When you need a trusted ride and say, "I need a taxi to LAX", think of
          Rosie. Every taxi driver in Burbank with Rosie is background-checked,
          experienced, and courteous.
        </p>

        <p className="text-gray-700 mb-4">
          Whether you’re traveling across town or catching a flight, Rosie
          offers the most dependable cab service in Burbank. Don’t gamble with
          unknown options—choose the taxi service Burbank trusts: Rosie Taxi
          Cab.
        </p>

        <p className="text-gray-800 italic">
          Ready to ride? Book your Rosie Taxi Cab now for a comfortable and
          reliable experience in Burbank.
        </p>
      </article>
    </main>
  );
}

export default PageHome;
