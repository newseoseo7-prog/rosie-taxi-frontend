import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import HashTags from "@/components/KeywordTags";
import EventsDisplay from "@/components/EventsDisplay";

export async function generateMetadata() {
  return {
    title:
      "Beverly Hills Taxi Cab, 24/7 LAX & Burbank Airport Rides, Rosie Taxi Cab",
    description:
      "ROSIE TAXI CAB BEVERLY HILLS 24/7 ORDER ONLINE SAVE 20% NOW | CALL NOW (805) 258-8937 TAXI CAB NEAR ME BEVERLY HILLS CA | AIRPORT TRANSPORTATION",
    robots:
      "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    metadataBase: new URL("https://new.rosietaxicab.com"),
    alternates: {
      canonical: "/taxi-cab-beverly-hills/",
    },
    openGraph: {
      title:
        "Beverly Hills Taxi Cab | 24/7 LAX & Burbank Airport Rides | Rosie Taxi Cab",
      description:
        "Reliable taxi service in Beverly Hills for luxury travel, business clients, and LAX/Burbank airport transfers. Executive SUVs & corporate rates. Call (805) 258-8937",
      url: "https://new.rosietaxicab.com/taxi-cab-beverly-hills/",
      siteName: "Rosie Taxi Cab",
      locale: "en_US",
      type: "article",
      publishedTime: "2020-06-08T06:32:29-07:00",
      modifiedTime: "2024-07-26T11:59:32-07:00",
      images: [
        {
          url: "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/beverly-hills-luxury-taxi.jpg",
          secureUrl:
            "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/beverly-hills-luxury-taxi.jpg",
          alt: "Luxury Taxi Cab in Beverly Hills",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Beverly Hills Taxi Cab | 24/7 LAX & Burbank Airport Rides | Rosie Taxi Cab",
      description:
        "Reliable taxi service in Beverly Hills for luxury travel, business clients, and LAX/Burbank airport transfers. Executive SUVs & corporate rates. Call (805) 258-8937",
      images: [
        "https://rosietaxicab.twic.pics/https://new.rosietaxicab.com/wp-content/uploads/2023/04/beverly-hills-luxury-taxi.jpg",
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
  const faqItems = [
    {
      question: "How far is Beverly Hills from LAX ? ",
      answer:
        "The drive from Beverly Hills to LAX is between 1hr 30 min on weekdays and 2hr on weekends.",
    },
    {
      question: "how to order a cab / private car in Beverly Hills ?",
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
      question: "how to find a good taxi near Beverly Hills CA ? ",
      answer: `You see most of the mediocre transportation companies in Beverly Hills are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Beverly Hills CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
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
    { name: "Transportation service from Beverly Hills to LAX", href: "#" },
    {
      name: " Transportation service from Beverly Hills to BOB AIRPORT ",
      href: "#",
    },
    { name: "Transportation service from Beverly Hills to SBA", href: "#" },
    {
      name: "Transportation service from Beverly Hills to John Wayne Airport",
      href: "#",
    },
    {
      name: "Transportation service from Beverly Hills to Los Angeles",
      href: "#",
    },
    {
      name: "Transportation service from Beverly Hills to Hollywood",
      href: "#",
    },
    { name: "Transportation service from Beverly Hills to Burbank", href: "#" },
    {
      name: "Transportation service from Beverly Hills to Disney Land",
      href: "#",
    },
    {
      name: "Transportation service from Beverly Hills to Universal Studios",
      href: "#",
    },
    {
      name: "Transportation service from Beverly Hills to Rodeo dr Beverly Hills",
      href: "#",
    },
    {
      name: "Transportation service from Beverly Hills to San Diego",
      href: "#",
    },
    {
      name: "Transportation service from Beverly Hills to Westlake Village",
      href: "#",
    },
    {
      name: "Transportation service from Beverly Hills to Santa Monica",
      href: "#",
    },
    {
      name: "Transportation service from Beverly Hills to Holmby Hills",
      href: "#",
    },
    { name: "Transportation service from Beverly Hills to Malibu", href: "#" },
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
#I Need A Ride #Private Car #Reliable Taxi #Reservation To LAX #Beverly Hills CA #Ventura CA #Oxnard #Camarillo #Port hueneme #Santa Paula #Fillmore #Thousand Oaks #Woodland Hills #Malibu #Los Angeles
"
        />

        <>
          {/* Camarillo Premium Outlets Section */}
          <CitiesInfoSection
            className="leading-6"
            heading="Discover Beverly Hills And Things To Do "
            text={
              <>
                <p>
                  Beverly Hills is is an icon of luxury, fame and wealth.
                  Hollywood Stars make Beverly Hills their home. From luxury
                  hotels and shopping to gastronomic restaurants and celebrity
                  homes, Beverly Hills offers opportunities for travelers to
                  explore its unique lifestyle like no other.{" "}
                </p>
              </>
            }
            image="/images/1646453_orig.webp" // Replace with actual Camarillo Premium Outlets image URL
            imagePosition="right"
            buttons={[
              {
                url: "https://lovebeverlyhills.com//articles/view/top-10-don-t-miss-things-to-do-in-beverly-hills",
                text: "Things To Do",
              },
            ]}
          />

          <div className="p-4">
            <EventsDisplay city="Beverly Hills" />
          </div>
        </>

        <PageEndLinks routes={routes} />
        <TwoColumnFAQ faqItems={faqItems} />
      </div>
    </main>
  );
}

export default PageHome;
