import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import Link from "next/link";
import Head from "next/head";
import schemaData from "@/app/schema";
import AirportTransportationList from "@/components/AirportTransportationList";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";
export async function generateMetadata() {
  return {
    title: "Taxi Cab Camarillo 24/7 - Save 20% Today | Rosie Taxi Cab",
    description:
      "Reliable taxi service in Camarillo to LAX, Burbank (BOB), and Santa Barbara (SBA). Book your ride now!",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-cab-camarillo/",
    },
    openGraph: {
      title: "Taxi Cab Camarillo 24/7 - Save 20% Today | Rosie Taxi Cab",
      description:
        "Fast & affordable taxi service from Camarillo to LAX, BOB, and SBA airports. Call (805) 258-8937 for reliable 24/7 transportation.",
      url: "https://new.rosietaxicab.com/taxi-cab-camarillo/",
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
          alt: "Taxi Cab Camarillo Service",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Taxi Cab Camarillo 24/7 - Save 20% Today | Rosie Taxi Cab",
      description:
        "Fast & affordable taxi service from Camarillo to LAX, BOB, and SBA airports. Call (805) 258-8937 for reliable 24/7 transportation.",
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
      question: "How far is Camarillo from LAX ? ",
      answer:
        "The drive from Camarillo to LAX is between 1hr and 20 min on weekdays and 1hr on weekends.",
    },
    {
      question: "how to order a cab / private car in camarillo ?",
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
        "Yes. We are the best transportation company in Camarillo’s County. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc.",
    },
    {
      question: "how to find a good taxi near Camarillo ?  ",
      answer: `You see most of the mediocre transportation companies in Camarillo are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Camarillo CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Camarillo’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    { name: "Transportation service from Camarillo to LAX", href: "#" },
    {
      name: " Transportation service from Camarillo to BOB AIRPORT ",
      href: "#",
    },
    { name: "Transportation service from Camarillo to SBA", href: "#" },
    {
      name: "Transportation service from Camarillo to John Wayne Airport",
      href: "#",
    },
    { name: "Transportation service from Camarillo to Los Angeles", href: "#" },
    { name: "Transportation service from Camarillo to Hollywood", href: "#" },
    { name: "Transportation service from Camarillo to Burbank", href: "#" },
    { name: "Transportation service from Camarillo to Disney Land", href: "#" },
    {
      name: "Transportation service from Camarillo to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from Camarillo to Rodeo dr Beverly Hills",
      href: "#",
    },
    { name: "Transportation service from Camarillo to San Diego", href: "#" },
    {
      name: "Transportation service from Camarillo to Westlake Village",
      href: "#",
    },
    {
      name: "Transportation service from Camarillo to Santa Monica",
      href: "#",
    },
    {
      name: "Transportation service from Camarillo to Holmby Hills",
      href: "#",
    },
    { name: "Transportation service from Camarillo to Malibu", href: "#" },
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
#I Need A Ride #Private Car #Reliable Taxi #Camarillo To LAX #Camarillo #Ventura CA #Oxnard #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Westlake Village #Malibu #Los Angeles #Beverly Hills
                "
          />

          <>
            {/* Camarillo Premium Outlets Section */}
            <CitiesInfoSection
              className="leading-6 text-center"
              heading="OPEN 24/7 ANYTIME ANYWHERE IN CAMARILLO CA "
              text={
                <>
                  <p>
                    Rosie Taxi Cab Open 24/7 Camarillo CA located here in
                    Camarillo to rely on for any local rides in and out of town.
                    Order Online for Camarillo taxi cab & Save 20% Easy and
                    Simple.
                  </p>
                </>
              }
              image="" // Replace with actual Camarillo Premium Outlets image URL
              imagePosition="right"
            />

            <AirportTransportationList
              items={[
                { label: "Camarillo to LAX" },
                { label: "Camarillo to BOB" },
                { label: "Camarillo to SBA" },
                { label: "Camarillo to Los Angeles" },
              ]}
            />
            <div className="p-4">
              <EventsDisplay city="Camarillo" />
            </div>
            <CitiesInfoSection
              className="leading-6"
              heading="Are You Looking For
A Reliable Transportation ? "
              text={
                <>
                  <ul className="space-y-4 mt-10 list-inside list-disc">
                    <li className=" items-center space-x-4 ">
                      {/* <Badge name="01" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        Rosie Taxi Cab Provides The Most Reliable Airport
                        Transfer 24/7 To Major Airport Transfer To/ From LAX;
                        BOB; SBA
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="02" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        Order & Pay Online SAVE 20%
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="03" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        Located Here In Camarillo CA
                      </span>
                    </li>
                    <li className=" items-center space-x-4">
                      {/* <Badge name="03" /> */}
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">
                        You’re In Good Hands With A Trusted Company +10 Years
                      </span>
                    </li>
                  </ul>
                </>
              }
              image="/images/CAMARILLO.webp" // Replace with actual Camarillo Premium Outlets image URL
              imagePosition="right"
            />

            {/* Camarillo Ranch Section */}
            <CitiesInfoSection
              heading="WELCOME TO CAMARILLO CA "
              text={
                <>
                  <p>
                    Camarillo is a small city of about 65,000 people situated in
                    the Pleasant Valley area of Camarillo County. This scenic
                    city features mountainous views and is known for its
                    almost-perfect climate, which features sun on most days
                    throughout the year.
                  </p>
                </>
              }
              image="/images/Taxi-near-Camarillo.webp" // Replace with actual Camarillo Ranch image URL
              imagePosition="left"
              buttons={[
                {
                  url: "https://visitcamarillo.com/?gclid=Cj0KCQjwqp-LBhDQARIsAO0a6aKA6v86U9MfztJAF_lPX6rHp6HvnxapUs9jtznXuiJSy54lfBclmvwaAnoDEALw_wcB",
                  text: "Explore THE CITY ",
                },
              ]}
            />

            {/* Adolfo Camarillo High School Section */}
            <CitiesInfoSection
              heading="Things To Do In Camarilllo Presented To You By Rosie Taxi Cab Camarilllo "
              text={
                <>
                  <p>
                    Camarillo’s culinary options will surely satisfy all
                    cravings and palettes. Stop in and enjoy dinner at one of
                    the many local restaurants. If the outdoors is calling your
                    name, enjoy fun in the sun year-round at Camarillo’s parks
                    including the beautiful mountain views at Camarillo Grove
                    Park. Looking for the perfect place to golf? Camarillo has
                    plenty of that. You can’t go wrong with any of the stunning
                    courses that surround the area like Camarillo Springs Golf
                    Course or Sterling Hills Golf Club. The fun doesn’t stop
                    there, the Camarillo Airport has many thrilling options
                    including SkyDive Coastal California, or Skyrider
                    Ultralights. If shopping is more your speed, then you are in
                    luck because Camarillo is home to the Camarillo Premium
                    Outlets
                  </p>
                </>
              }
              image="/images/BEDE2EE6-9720-485C-B96A-DC914AE7B3DE-819x1024.webp" // Replace with actual Adolfo Camarillo High image URL
              imagePosition="right"
            />

            {/* Pleasant Valley Historical Society Section */}
            <CitiesInfoSection
              heading="Shopping"
              text={
                <>
                  <p>
                    Premium Outlets, the outlet has an impressive selection of
                    designer wear and affordable finds. Make sure to stop by
                    during the fun festivities including the Camarillo Fiesta,
                    Old Town Beer March, and Wings Over Camarillo Airshow. No
                    matter the season, Camarillo’s museums and local farms are
                    always ready to welcome you.{" "}
                  </p>
                </>
              }
              image="/images/5A763F61-B826-4543-A527-409C65454F98-scaled-1024x682.webp" // Replace with actual Pleasant Valley Historical Society image URL
              imagePosition="left"
            />

            <div className="text-center">
              <h2 className="text-3xl font-bold  md:text-5xl">
                WELCOME TO CAMARILLO
              </h2>
              <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
                <Link href="https://camarillolibrary.org">
                  <img src="/IMG_1554-1024x683.webp" alt="Camarillo Library" />
                  <h3 className="text-xl md:text-3xl mt-3  font-semibold">
                    Camarillo Library
                  </h3>
                </Link>
                <div>
                  <img src="/IMG_1537.webp" alt="Camarillo Outlets" />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    Camarillo Outlets
                  </h3>
                </div>
                <Link href={"https://commemorativeairforce.org/"}>
                  <img src="/IMG_1538.webp" alt="commemorative" />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    Official-Commemorative Air-Force
                  </h3>
                </Link>
                <Link href={"https://studiochannelislands.org"}>
                  <img
                    src="/IMG_1590-q48o0sgrt9i30mqodou4kmggmybbwuzjemp9pu66y6.jpg"
                    alt="studio"
                  />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    Studio-Channel-Islands Art Center
                  </h3>
                </Link>
                <Link href={"https://www.skydivecoastalcalifornia.com/"}>
                  <img
                    src="/skydive-camarillo-2-q5t7o54cqkvw4ml12tl1ftpm0m03rst9ljkqds7s8e.jpg"
                    alt="skydive"
                  />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    Skydive Coastal California
                  </h3>
                </Link>
                <Link href={"http://camarillofarmersmarket.com/"}>
                  <img
                    src="/IMG_1539-qg287aat7ujmlci2eu6gbdhuw06tcoozleeeju6je6.png"
                    alt="formers market"
                  />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    Camarillo Farmers Market{" "}
                  </h3>
                </Link>
                <Link href={"https://www.storeatmcgrath.com/"}>
                  <img
                    src="/IMG_1542-qxjb4nsfes8i9r7335m4ixvk9umva8zxh568nchyni.webp"
                    alt="Family Farm"
                  />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    McGrath Family Farm
                  </h3>
                </Link>
                <Link href={"https://www.wfvz.org/"}>
                  <img
                    src="/cambirdmuseum55-q5t7ok5rq6b1n4qt1aeblre93fpohx7znog7hvfsmm.jpg"
                    alt="Western Foundation"
                  />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    Western Foundation of Vertebrate Zoology
                  </h3>
                </Link>
                <Link href={"https://www.pvrpd.org/camarillo-grove-park"}>
                  <img src="/IMG_1544-1024x683.webp" alt="Grove Park" />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    Camarillo Grove Park
                  </h3>
                </Link>
                <Link href={"https://www.pvrpd.org/bob-kildee-community-park"}>
                  <img src="/IMG_1545-768x512.webp" alt="Bob Kildee Park" />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    Bob Kildee Community Park
                  </h3>
                </Link>
                <Link href={"https://www.csuci.edu/"}>
                  <img
                    src="/launch-virtual-tour-16x9.jpg"
                    alt="State Channel"
                  />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    California State Channel Isld University{" "}
                  </h3>
                </Link>
                <Link href={"https://library.csuci.edu/"}>
                  <img src="/IMG_1552.webp" alt="Broome Library" />
                  <h3 className="text-xl md:text-3xl  mt-3 font-semibold">
                    CSU Channel Islands John Spoor Broome Library
                  </h3>
                </Link>
              </div>
            </div>
          </>
          <TwoColumnFAQ faqItems={faqItems} />
          <PageEndLinks routes={routes} />

          <article className="max-w-3xl mx-auto px-6 py-8 bg-white shadow-lg rounded-xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              How to Book a Taxi Cab in Camarillo with Rosie Taxi Cab
            </h1>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Looking for dependable and affordable transportation in Camarillo?
              Rosie Taxi Cab is your trusted local choice for getting around
              town, heading to the airport, or making a quick trip across the
              city. Available 24/7, Rosie offers safe, clean rides with licensed
              and professional drivers you can count on.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  24/7 Taxi Services in Camarillo
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Whether you need a taxi near me open or taxi near my location,
                  Rosie Taxi Cab is just a call or click away—day or night.
                  Unlike unpredictable rideshare prices from Uber Camarillo or
                  Lyft Camarillo, Rosie provides reliable, flat-rate fares you
                  can trust. As a leading cab company in Camarillo, Rosie
                  ensures every ride is comfortable, safe, and on time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Rosie Taxi Cab to LAX, Burbank, Santa Barbara & More
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Need Camarillo transportation to LAX or another major airport?
                  Rosie Taxi Cab offers flat-rate airport transfers 24/7.
                  Whether it's a taxi Camarillo to LAX, a ride to Burbank
                  Airport, or transportation to Santa Barbara, Rosie makes your
                  airport commute smooth and stress-free.
                </p>

                <p className="text-gray-700 mb-3">
                  Popular airport routes from Camarillo include:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-5">
                  <li>Camarillo to LAX by taxi</li>
                  <li>Camarillo taxi cab to Santa Barbara airport</li>
                  <li>Camarillo taxi to Burbank airport</li>
                  <li>Private car Camarillo to airport open 24/7</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  How to Book with Rosie Taxi Cab
                </h2>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  Booking your ride is simple. You can:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 pl-5">
                  <li>
                    Call or text Rosie Taxi Cab for immediate or future pickups
                  </li>
                  <li>Book online for scheduled service across Camarillo</li>
                  <li>
                    Search taxi cab near Camarillo or taxi near me and choose
                    Rosie from the results
                  </li>
                </ul>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Unlike rideshare services, Rosie offers transparent rates,
                  experienced drivers, and dependable service. Whether it's a
                  short ride or a long trip to the airport, Rosie is the better
                  alternative to Uber Camarillo or Lyft Camarillo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Why Choose Rosie Taxi Cab?
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When you need a trusted ride and say, "I need a taxi to LAX",
                  Rosie Taxi Cab is the name locals rely on. Every taxi driver
                  in Camarillo is experienced, courteous, and background-checked
                  for your peace of mind.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Whether you're running errands, commuting, or catching a
                  flight, Rosie offers the most dependable taxi service in
                  Camarillo. Choose the transportation company Camarillo
                  trusts—Rosie Taxi Cab.
                </p>
              </section>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-blue-800 italic text-center text-lg">
                  Ready to ride? Book your Rosie Taxi Cab now for a safe,
                  affordable, and professional experience in Camarillo.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default PageHome;
