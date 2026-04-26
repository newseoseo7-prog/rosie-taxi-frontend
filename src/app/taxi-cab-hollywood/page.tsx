import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
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
      "Hollywood Taxi Service | 24/7 Rides to LAX & Attractions | Rosie Taxi Cab",
    description:
      "Fast & reliable Hollywood taxi service for LAX, BUR, studios & nightlife. Serving Walk of Fame, Dolby Theatre & all Hollywood. Book now! (805) 258-8937 - 24/7 service.",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-hollywood/",
    },
    openGraph: {
      title:
        "Hollywood Taxi Service | 24/7 Rides to LAX & Attractions | Rosie Taxi Cab",
      description:
        "Fast & reliable Hollywood taxi service for LAX, BUR, studios & nightlife. Serving Walk of Fame, Dolby Theatre & all Hollywood. Book now! (805) 258-8937 - 24/7 service.",
      url: "https://rosietaxicab.com/taxi-hollywood/",
      siteName: "Rosie Taxi Cab",
      locale: "en_US",
      type: "article",
      publishedTime: "2020-06-08T06:32:29-07:00",
      modifiedTime: "2024-07-26T11:59:32-07:00",
      images: [
        {
          url: "https://rosietaxicab.twic.pics/https://rosietaxicab.com/wp-content/uploads/2021/03/hollywood-taxi-service.jpg",
          secureUrl:
            "https://rosietaxicab.twic.pics/https://rosietaxicab.com/wp-content/uploads/2021/03/hollywood-taxi-service.jpg",
          alt: "Hollywood Taxi Service near Walk of Fame",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Hollywood Taxi Service | 24/7 Rides to LAX & Attractions | Rosie Taxi Cab",
      description:
        "Fast & reliable Hollywood taxi service for LAX, BUR, studios & nightlife. Serving Walk of Fame, Dolby Theatre & all Hollywood. Book now! (805) 258-8937",
      images: [
        "https://rosietaxicab.twic.pics/https://rosietaxicab.com/wp-content/uploads/2021/03/hollywood-taxi-service.jpg",
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
      question: "How far is Hollywood from LAX ? ",
      answer:
        "The drive from Hollywood to LAX is between 1hr 30 min on weekdays and 2hr on weekends.",
    },
    {
      question: "how to order a cab / private car in Hollywood ?",
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
      question: "how to find a good taxi near Hollywood CA ? ",
      answer: `You see most of the mediocre transportation companies in Hollywood are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Hollywood CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    { name: "Transportation service from Hollywood to LAX", href: "#" },
    {
      name: " Transportation service from Hollywood to BOB AIRPORT ",
      href: "#",
    },
    { name: "Transportation service from Hollywood to SBA", href: "#" },
    {
      name: "Transportation service from Hollywood to John Wayne Airport",
      href: "#",
    },
    { name: "Transportation service from Hollywood to Los Angeles", href: "#" },
    { name: "Transportation service from Hollywood to Hollywood", href: "#" },
    { name: "Transportation service from Hollywood to Burbank", href: "#" },
    { name: "Transportation service from Hollywood to Disney Land", href: "#" },
    {
      name: "Transportation service from Hollywood to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from Hollywood to Rodeo dr Beverly Hills",
      href: "#",
    },
    { name: "Transportation service from Hollywood to San Diego", href: "#" },
    {
      name: "Transportation service from Hollywood to Westlake Village",
      href: "#",
    },
    {
      name: "Transportation service from Hollywood to Santa Monica",
      href: "#",
    },
    {
      name: "Transportation service from Hollywood to Holmby Hills",
      href: "#",
    },
    { name: "Transportation service from Hollywood to Malibu", href: "#" },
  ];

  return (
    <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16 leading-6" />

        <HashTags
          text="
                #I Need A Ride #Private Car #Reliable Taxi #Reservation To Burbank Airport #Hollywood CA #los Angeles CA #Hollywood #Glendale #Pasadena #Arcadia #Airport Transportation #East Los Angeles #Alhambra #Anaheim #Los Angeles Love

                "
        />

        <>
          {/* Camarillo Premium Outlets Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Discover Hollywood And Things To Do "
            text={
              <>
                <p>
                  Welcome to the capital of the global entertainment industry,
                  Hollywood is, both a state of mind and a very real place.
                  Spend some time here to see reminders of movie legends both
                  past and present, while also discovering a vibrant
                  contemporary urban district that has undergone under gone a
                  dramatic revival in recent years. From the Walk of Fame to
                  behind-the-scene tours, Hollywood is a true bucket-list
                  destination.
                </p>
              </>
            }
            image="/images/hollywood.jpg" // Replace with actual Camarillo Premium Outlets image URL
            imagePosition="right"
            buttons={[
              {
                url: "https://www.discoverlosangeles.com/things-to-do/the-beginners-guide-to-hollywood",
                text: "Things To Do",
              },
            ]}
          />
          <AirportTransportationList
            items={[
              { label: "Hollywood to LAX" },
              { label: "Hollywood to BOB" },
              { label: "Hollywood to SBA" },
              { label: "Hollywood to Los Angeles" },
            ]}
          />
          <div className="p-4">
            <EventsDisplay city="Hollywood" />
          </div>
          <CitiesInfoSection
            className="leading-6"
            heading="Hollywood"
            text={
              <>
                <p>
                  #I Need A Ride #Private Car #Reliable Taxi #Reservation To
                  Burbank Airport #Hollywood CA #los Angeles CA #Hollywood
                  #Glendale #Pasadena #Arcadia #Airport Transportation #East Los
                  Angeles #Alhambra #Anaheim #Los Angeles Love
                </p>
              </>
            }
            image="" // Replace with actual Camarillo Premium Outlets image URL
            imagePosition="right"
            buttons={[
              {
                url: "https://www.discoverlosangeles.com/things-to-do/the-beginners-guide-to-hollywood",
                text: "Things To Do",
              },
            ]}
          />
        </>
        <PageEndLinks routes={routes} />
        <TwoColumnFAQ faqItems={faqItems} />
        
        <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            How to Book a Taxi Cab in Hollywood with Rosie Taxi Cab
          </h1>

          <p className="text-gray-700 mb-4">
            Looking for fast, reliable, and affordable transportation in
            Hollywood, California? <strong>Rosie Taxi Cab</strong> is the
            top-rated choice for locals and tourists alike. Whether you’re
            headed to a movie set, Hollywood Boulevard, or catching a flight,
            Rosie offers 24/7 taxi service for a smooth and hassle-free ride.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            24/7 Taxi Service in Hollywood
          </h2>
          <p className="text-gray-700 mb-4">
            Searching online for a <strong>taxi near me open</strong> or{" "}
            <strong>taxi near my location in Hollywood</strong>?{" "}
            <strong>Rosie Taxi Cab</strong> operates around the clock. Unlike
            Uber or Lyft in Hollywood, Rosie provides consistent, fixed pricing
            without surprise fees. As a dependable{" "}
            <strong>Hollywood taxi service</strong> and trusted{" "}
            <strong>cab company in Hollywood</strong>, our licensed drivers
            ensure timely pickups, clean vehicles, and safe travel day or night.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Hollywood Taxi to LAX, Burbank Airport & More
          </h2>
          <p className="text-gray-700 mb-4">
            Need a dependable <strong>Hollywood to LAX taxi</strong> or a cab to
            Burbank Airport? <strong>Rosie Taxi Cab</strong> offers on-time,
            flat-rate airport transfers to and from Hollywood. Whether you’re
            traveling to LAX, Burbank, Van Nuys, or even Santa Monica, Rosie’s
            professional taxi drivers are ready to get you there—24/7.
          </p>

          <p className="text-gray-700 mb-3">
            Popular routes from Hollywood include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              <strong>Taxi from Hollywood to LAX Airport</strong>
            </li>
            <li>
              <strong>Hollywood taxi cab to Burbank Airport</strong>
            </li>
            <li>
              <strong>
                Private transportation from Hollywood to Van Nuys or Santa
                Monica
              </strong>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            How to Book a Hollywood Taxi with Rosie
          </h2>
          <p className="text-gray-700 mb-3">
            Booking a <strong>Hollywood taxi cab</strong> is quick and simple
            with Rosie. You can:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>
              Call <strong>Rosie Taxi Cab</strong> directly for on-demand or
              scheduled rides
            </li>
            <li>Book online via our easy-to-use website</li>
            <li>
              Search <strong>taxi cab near Hollywood</strong> or{" "}
              <strong>taxi near me Hollywood</strong> and choose Rosie
            </li>
          </ul>

          <p className="text-gray-700 mb-4">
            Unlike <strong>Uber in Hollywood</strong> or{" "}
            <strong>Lyft in Hollywood</strong>, Rosie Taxi Cab guarantees
            up-front pricing, no surge charges, and a fleet of experienced local
            drivers. It’s affordable, dependable, and always available.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
            Why Ride with Rosie Taxi Cab in Hollywood?
          </h2>
          <p className="text-gray-700 mb-4">
            When you're thinking, "
            <strong>I need a taxi to LAX from Hollywood</strong>", Rosie is the
            name to trust. Every <strong>Hollywood taxi driver</strong> on our
            team is licensed, courteous, and focused on your comfort and safety.
          </p>

          <p className="text-gray-700 mb-4">
            Whether you need a short city ride or a longer airport transfer,
            Rosie Taxi Cab provides the most reliable{" "}
            <strong>cab service in Hollywood</strong>. Avoid delays, surge
            pricing, or unprofessional drivers—choose Rosie.
          </p>

          <p className="text-gray-800 italic">
            Need a ride now? Book your Hollywood taxi with Rosie Taxi Cab today
            and experience the city’s most trusted, professional taxi service.
          </p>
        </article>
      </div>
    </main>
  );
}

export default PageHome;
