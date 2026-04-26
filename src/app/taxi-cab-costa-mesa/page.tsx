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
      "Costa Mesa Taxi Service | 24/7 Rides to SNA & South Coast Plaza | Rosie Taxi Cab",
    description:
      "Reliable Costa Mesa taxi service to John Wayne Airport (SNA), South Coast Plaza, Segerstrom Center & all OC areas. 24/7 service. Call now! (805) 258-8937",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-costa-mesa/",
    },
    openGraph: {
      title:
        "Costa Mesa Taxi Service | 24/7 Rides to SNA & South Coast Plaza | Rosie Taxi Cab",
      description:
        "Reliable Costa Mesa taxi service to John Wayne Airport (SNA), South Coast Plaza, Segerstrom Center & all OC areas. 24/7 service. Call now! (805) 258-8937",
      url: "https://new.rosietaxicab.com/taxi-costa-mesa/",
      siteName: "Rosie Taxi Cab",
      locale: "en_US",
      type: "article",
      publishedTime: "2020-06-08T06:32:29-07:00",
      modifiedTime: "2024-07-26T11:59:32-07:00",
      images: [
        {
          url: "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/costa-mesa-taxi.jpg",
          secureUrl:
            "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/costa-mesa-taxi.jpg",
          alt: "Costa Mesa Taxi Service at South Coast Plaza",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Costa Mesa Taxi Service | 24/7 Rides to SNA & South Coast Plaza | Rosie Taxi Cab",
      description:
        "Reliable Costa Mesa taxi service to John Wayne Airport (SNA), South Coast Plaza, Segerstrom Center & all OC areas. 24/7 service. Call now! (805) 258-8937",
      images: [
        "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2021/03/costa-mesa-taxi.jpg",
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
      question: "How far is Costa Mesa from LAX ? ",
      answer:
        "The drive from Costa Mesa to LAX is between 1hr 30 min on weekdays and 2hr on weekends.",
    },
    {
      question: "how to order a cab / private car in Costa Mesa ?",
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
      question: "how to find a good taxi near Costa Mesa CA ? ",
      answer: `You see most of the mediocre transportation companies in Costa Mesa are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Costa Mesa CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    { name: "Transportation service from Costa Mesa to LAX", href: "#" },
    {
      name: " Transportation service from Costa Mesa to BOB AIRPORT ",
      href: "#",
    },
    { name: "Transportation service from Costa Mesa to SBA", href: "#" },
    {
      name: "Transportation service from Costa Mesa to John Wayne Airport",
      href: "#",
    },
    {
      name: "Transportation service from Costa Mesa to Los Angeles",
      href: "#",
    },
    { name: "Transportation service from Costa Mesa to Hollywood", href: "#" },
    { name: "Transportation service from Costa Mesa to Burbank", href: "#" },
    {
      name: "Transportation service from Costa Mesa to Disney Land",
      href: "#",
    },
    {
      name: "Transportation service from Costa Mesa to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from Costa Mesa to Rodeo dr Beverly Hills",
      href: "#",
    },
    { name: "Transportation service from Costa Mesa to San Diego", href: "#" },
    {
      name: "Transportation service from Costa Mesa to Westlake Village",
      href: "#",
    },
    {
      name: "Transportation service from Costa Mesa to Santa Monica",
      href: "#",
    },
    {
      name: "Transportation service from Costa Mesa to Holmby Hills",
      href: "#",
    },
    { name: "Transportation service from Costa Mesa to Malibu", href: "#" },
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
#I Need A Ride #Private Car #Reliable Taxi #Reservation To John Wayne Airport #Costa Mesa CA #los Angeles CA #Hollywood #Glendale #Pasadena #Arcadia #Airport Transportation #East Los Angeles #Alhambra #Anaheim #Los Angeles Love #Santa Ana #New Port Beach #Huntington Beach

                "
        />

        <>
          {/* Camarillo Premium Outlets Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Discover Costa Mesa And Things To Do"
            text={
              <>
                <p>
                  Costa Mesa is known as one of Orange County’s foremost
                  cultural and business centers. At the heart of Southern
                  California is Orange County, the destination of choice for
                  more than 46 million visitors each year. And nestled within
                  Orange County is the internationally acclaimed arts and
                  theater district – Costa Mesa.
                </p>
              </>
            }
            image="/images/costa-mesa_-south-coast-plaza-1.webp" // Replace with actual Camarillo Premium Outlets image URL
            imagePosition="right"
            buttons={[
              { url: "https://www.travelcostamesa.com/", text: "Things To Do" },
            ]}
          />

          <AirportTransportationList
            items={[
              { label: "Costa Mesa to LAX" },
              { label: "Costa Mesa to BOB" },
              { label: "Costa Mesa to SBA" },
              { label: "Costa Mesa to Los Angeles" },
            ]}
          />

          <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Things to Do in Costa Mesa
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Experience the arts, shopping, and culinary scene in Costa Mesa
                — Orange County's cultural and entertainment hub.
              </p>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a href="https://www.scfta.org/">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://scfta-prod.imgix.net/scfta/about%20us/segerstrom-center-for-the-arts-rma-photography-(11).jpg?format=auto&fit=crop&auto=format"
                      alt="Segerstrom Center for the Arts"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Segerstrom Center for the Arts
                      </h3>
                      <p className="text-gray-600">
                        Catch world-class performances in music, dance, and
                        theater at this premier performing arts venue.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="https://www.southcoastplaza.com/">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/South_Coast_Plaza_entrance.jpg/1200px-South_Coast_Plaza_entrance.jpg"
                      alt="South Coast Plaza"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        South Coast Plaza
                      </h3>
                      <p className="text-gray-600">
                        Explore luxury shopping and fine dining at one of the
                        largest and most prestigious malls in the country.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="https://www.travelcostamesa.com/things-to-do/the-lab">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b2/50/a6/the-lab-anti-mall.jpg?w=900&h=500&s=1"
                      alt="The LAB Anti-Mall"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        The LAB Anti-Mall
                      </h3>
                      <p className="text-gray-600">
                        Discover eclectic shops, art installations, and local
                        eats in this unique shopping and cultural hangout.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="https://www.ocfair.com/">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://d2ladkkwa0n0m5.cloudfront.net/assets/files/11289/costa_mesa_fair1.2000x1125.jpeg?12u09p"
                      alt="OC Fair & Event Center"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        OC Fair & Event Center
                      </h3>
                      <p className="text-gray-600">
                        Attend the annual OC Fair, swap meets, expos, and more
                        at this vibrant year-round event space.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="https://www.costamesaca.gov/Home/Components/FacilityDirectory/FacilityDirectory/49/707">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/f2/a7/da/fairview-park-dublin.jpg?w=1200&h=-1&s=1"
                      alt="Fairview Park"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Fairview Park
                      </h3>
                      <p className="text-gray-600">
                        Walk, bike, or enjoy model train rides through scenic
                        trails and natural habitats in this expansive city park.
                      </p>
                    </div>
                  </div>
                </a>

                <a href="https://travelcostamesa.com/things-to-do/costa-mesa-art-walk">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img
                      src="https://cdn.crowdriff.com/in-use/b9b8808c-60c0-2370-804c-62c54d22b29a/500.jpg"
                      alt="Costa Mesa Art Walk"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Costa Mesa Art Walk
                      </h3>
                      <p className="text-gray-600">
                        Take a self-guided tour of public sculptures and
                        installations celebrating the city’s artistic spirit.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
        <div className="p-4">
          <EventsDisplay city="Costa Mesa" />
        </div>
        <PageEndLinks routes={routes} />
        <TwoColumnFAQ faqItems={faqItems} />
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          How to Book a Taxi Cab in Costa Mesa with Rosie Taxi Cab
        </h1>

        <p className="text-gray-700 mb-4">
          Need fast, reliable, and budget-friendly transportation in Costa Mesa?
          Rosie Taxi Cab is a trusted choice whether you're commuting across
          town or heading to the airport. From daily errands to important
          appointments, our taxi service is available any time of day or night.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Reliable 24/7 Taxi Services in Costa Mesa
        </h2>
        <p className="text-gray-700 mb-4">
          Looking for a taxi service that’s always available near you? Rosie
          Taxi Cab operates 24/7 across Costa Mesa, offering dependable,
          fixed-rate fares without the unpredictability of app-based surge
          pricing. With experienced local drivers and clean vehicles, you can
          expect punctual and professional service every time.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Rosie Taxi Cab to LAX, John Wayne & Beyond
        </h2>
        <p className="text-gray-700 mb-4">
          Traveling to the airport? Rosie Taxi Cab offers hassle-free, flat-rate
          transportation from Costa Mesa to major airports like LAX, John Wayne,
          and Long Beach. Schedule your airport ride any time, day or night, and
          enjoy peace of mind with private, on-time service.
        </p>

        <p className="text-gray-700 mb-3">
          Common airport routes from Costa Mesa include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Taxi rides from Costa Mesa to LAX</li>
          <li>Convenient cab service to John Wayne Airport</li>
          <li>Private transportation to Long Beach Airport</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          How to Book with Rosie Taxi Cab
        </h2>
        <p className="text-gray-700 mb-3">
          Booking a taxi is simple and flexible. Choose one of these easy
          options:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Call to request an immediate or scheduled pickup</li>
          <li>Visit the website to reserve your Costa Mesa taxi online</li>
          <li>
            Search for a local taxi near Costa Mesa and choose Rosie Taxi Cab
          </li>
        </ul>

        <p className="text-gray-700 mb-4">
          Unlike rideshare platforms, Rosie provides fair, upfront pricing and
          drivers with local knowledge who prioritize your safety and comfort.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
          Why Choose Rosie Taxi Cab?
        </h2>
        <p className="text-gray-700 mb-4">
          When it’s time to catch a flight or travel across town, Rosie Taxi Cab
          is a name you can rely on. Every driver is licensed, courteous, and
          focused on delivering punctual service.
        </p>

        <p className="text-gray-700 mb-4">
          For everything from local commutes to airport transfers, Rosie offers
          dependable, top-quality taxi service throughout Costa Mesa. Choose the
          transportation provider people trust—choose Rosie Taxi Cab.
        </p>

        <p className="text-gray-800 italic">
          Ready to ride? Book now with Rosie Taxi Cab, the most trusted name in
          Costa Mesa transportation.
        </p>
      </article>
    </main>
  );
}

export default PageHome;
