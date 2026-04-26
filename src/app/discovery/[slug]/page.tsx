"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import HashTags from "@/components/KeywordTags";
import AirportTransportationList from "@/components/AirportTransportationList";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import EventsDisplay from "@/components/EventsDisplay";
import ModernLoading from "@/components/ModernLoading";
import ErrorComponent from "@/components/ErrorComponent";
import { useLiveDiscoveryPage } from "@/lib/useLiveDiscoveryPage";
import PageContent from "@/components/PageContent";
import schemaData from "@/app/schema";

interface PageData {
  title: string;
  slug: string;
  layout: any[];
  galleryImages: any[];
  booking: boolean;
}

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { pageData, loading, error } = useLiveDiscoveryPage(slug);

  // 🧠 Keep showing last valid data while new data is loading
  const [cachedData, setCachedData] = useState<any>(null);

  useEffect(() => {
    if (pageData) setCachedData(pageData);
  }, [pageData]);

  // ✅ Use cachedData for render
  if (!cachedData && loading) return <ModernLoading />;
  if (error) return <ErrorComponent />;

  const data = Array.isArray(cachedData?.docs)
    ? cachedData.docs[0]
    : cachedData;

  if (!data) return <ErrorComponent />;


  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
        <BgGlassmorphism />

        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
          {/* <h1 className="text-center text-lg sm:text-2xl mt-20">
            {data.title ? data.title : "Book a Ride"}
          </h1> */}
          <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

          <PageContent pageData={data} />

          <div className="p-4">
            <EventsDisplay city={data.title.split(" ")[2] || ""} />
          </div>

          {data.layout?.map((block: any) => {
            switch (block.blockType) {
              case "hashTags":
                return (
                  <HashTags
                    key={block.id}
                    text={block.text}
                    title={block.title}
                    titleHeadingLevel={block.titleHeadingLevel || "h2"} // ✅ NEW
                  />
                );
              case "citiesInfoSection": {

                return (
                  <CitiesInfoSection
                    key={block.id}
                    className="leading-6"
                    heading={block.heading}
                    headingLevel={block.headingLevel || "h2"}
                    text={block.text}
                    image={block.image?.url || ""}
                    imageSize={block.imageSize || "medium"}
                    imagePosition={block.imagePosition || "right"}
                    buttons={block.buttons?.map((btn: any) => ({
                      url: btn.url,
                      text: btn.text,
                    }))}
                  />
                );
              }
              case "airportTransportationList":
                return (
                  <AirportTransportationList
                    key={block.id}
                    title={block.title}
                    items={block.items.map((item: any) => ({
                      label: item.label,
                    }))}
                  />
                );
              case "faqSection":
                return <TwoColumnFAQ key={block.id} faqItems={block.faqs} />;
              case "page-end-links":
                return <PageEndLinks key={block.id} routes={block.routes} />;
              default:
                return null;
            }
          })}

          {/* Optional static article content can stay */}
          {/* <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Book a Taxi Cab in Santa Paula – Ride with Rosie Taxi Cab 24/7
            </h1>

            <p className="text-gray-700 mb-4">
              Need a fast and reliable Santa Paula taxi service? Rosie Taxi Cab
              offers professional, around-the-clock transportation across Santa
              Paula and surrounding areas. Whether you're commuting locally or
              heading to the airport, Rosie ensures safe, timely, and affordable
              rides—day or night.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              24/7 Taxi Cab Services in Santa Paula
            </h2>
            <p className="text-gray-700 mb-4">
              Searching for a taxi near Santa Paula or wondering if there’s a
              cab near me open now? Rosie Taxi Cab operates 24/7 with friendly
              drivers and well-maintained vehicles. Unlike Uber or Lyft, there
              are no surge prices, and we know Santa Paula’s neighborhoods—from
              downtown to the citrus groves.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Airport Transportation from Santa Paula
            </h2>
            <p className="text-gray-700 mb-4">
              Traveling to or from the airport? Rosie Taxi Cab offers
              dependable, flat-rate service to major airports like LAX, Burbank,
              and Santa Barbara. Whether you need early morning pickup or a
              late-night drop-off, our Santa Paula to airport taxi service has
              you covered.
            </p>

            <p className="text-gray-700 mb-3">
              Our most requested airport routes include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Taxi Santa Paula to LAX</li>
              <li>Santa Paula cab to Burbank Airport</li>
              <li>Santa Paula to Santa Barbara Airport transportation</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              How to Book with Rosie Taxi Cab
            </h2>
            <p className="text-gray-700 mb-3">
              Booking a ride in Santa Paula is easy. Just:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Call Rosie Taxi Cab for on-demand or scheduled rides</li>
              <li>Visit our website to reserve your ride online</li>
              <li>
                Search Santa Paula taxi near me and select Rosie from the
                results
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              Unlike Uber Santa Paula or Lyft Santa Paula, Rosie offers
              transparent pricing and local drivers who know the area
              well—ensuring smooth, safe rides every time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
              Why Choose Rosie Taxi Cab?
            </h2>
            <p className="text-gray-700 mb-4">
              Rosie Taxi Cab is the trusted choice for cab service in Santa
              Paula. We take pride in our customer-first approach, offering
              reliable service whether you're heading to a doctor's appointment,
              commuting to work, or catching a flight.
            </p>

            <p className="text-gray-700 mb-4">
              Our experienced drivers are courteous, professional, and familiar
              with the city and surrounding areas—so you can relax and enjoy the
              ride.
            </p>

            <p className="text-gray-800 italic">
              Don’t wait—book your ride with Rosie Taxi Cab today for the best
              taxi service in Santa Paula. Reliable. Local. 24/7.
            </p>
          </article> */}
        </div>
      </main>
    </>
  );
};

export default Page;
