"use client";

import React from "react";
import { TaxonomyType } from "@/data/types";
import SectionOurFeatures from "@/new_sections/SectionOurFeatures";
import InfoSection from "@/new_sections/InfoSection";
import laxImg from "@/images/airports/lax-airport-resized.webp";
import sbaImg from "@/images/airports/santa_barbara_airport.webp";

import burbankImg from "@/images/airports/burbank_airport.webp";
import Head from "next/head";
import HeroSearchForm2Mobile from "./(client-components)/(HeroSearchForm2Mobile)/HeroSearchForm2Mobile";
import Image from "next/image";
import ImageSlider from "@/components/ImageWithTextCarousel";
import TwoColumnFAQ from "@/components/Faq";
import schemaData from "@/app/schema";
import { useLiveHomeData } from "@/lib/useLiveHomeData";
import ModernLoading from "@/components/ModernLoading";
import ErrorComponent from "@/components/ErrorComponent";

const CITIES: TaxonomyType[] = [
  {
    id: "1",
    href: "/taxi-cab-ventura",
    name: "Ventura",
    taxonomy: "category",

    thumbnail: "/images/ventura.jpg",
  },
  {
    id: "2",
    href: "/taxi-cab-ojai",
    name: "Ojai",
    taxonomy: "category",

    thumbnail: "/images/ojai.jpg",
  },
  {
    id: "3",
    href: "/taxi-cab-oxnard",
    name: "Oxnard",
    taxonomy: "category",

    thumbnail: "/images/oxnard.jpg",
  },
  {
    id: "5",
    href: "/taxi-cab-camarillo",
    name: "Camarillo",
    taxonomy: "category",

    thumbnail: "/images/camarillo.jpg",
  },
  {
    id: "6",
    href: "/taxi-cab-santa-paula",
    name: "Santa Paula",
    taxonomy: "category",

    thumbnail: "/images/santa_paula.jpg",
  },
];

// export async function generateMetadata() {
//   return {
//     title: "Rosie Taxi Cab 24/7 | Call (805) 258-8937 Save 20% Now !",
//     description:
//       "Fast Reliable Airport Transportation. Provide Car Service To & From LAX | Local Taxi Cab Service | Ride In Minutes | All Airports in CA. Track Driver!",
//     robots:
//       "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
//     metadataBase: new URL("https://new.rosietaxicab.com"),
//     alternates: {
//       canonical: "/",
//     },
//     icons: {
//       icon: [
//         {
//           url: "/favicon.ico",
//           type: "image/x-icon",
//         },
//         {
//           url: "/favicon-32x32.webp",
//           type: "image/webp",
//           sizes: "32x32",
//         },
//         {
//           url: "/favicon-16x16.webp",
//           type: "image/webp",
//           sizes: "16x16",
//         },
//       ],
//     },
//     openGraph: {
//       title:
//         "ROSIE TAXI CAB OPEN 24/7 | ORDER ONLINE SAVE 20% | AIRPORT TAXI CAB NEAR VENTURA CA",
//       description:
//         "ROSIE TAXI CAB OPEN 24/7 PROVIDES BOOK TO RIDES IN VENTURA, OJAI, OXNARD, CAMARILLO | CALL (805) 258-8937",
//       url: "https://new.rosietaxicab.com/",
//       siteName: "Rosie Taxi Cab",
//       locale: "en_US",
//       type: "website",
//       updatedTime: "2024-12-08T18:49:41-08:00",
//       images: [
//         {
//           url: "https://new.rosietaxicab.com/wp-content/uploads/2023/10/Los-Angeles.jpg",
//           secureUrl:
//             "https://new.rosietaxicab.com/wp-content/uploads/2023/10/Los-Angeles.jpg",
//           alt: "Rosie taxi cab open 24/7 provides airport transportation",
//           width: 750,
//           height: 562,
//           type: "image/webp",
//         },
//       ],
//       videos: [
//         {
//           url: "https://new.rosietaxicab.com/wp-content/uploads/2023/10/pasadena-city-hall-california-aerial-view-down-2022-07-25-23-03-43-utc.mp4",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title:
//         "ROSIE TAXI CAB OPEN 24/7 | ORDER ONLINE SAVE 20% | AIRPORT TAXI CAB NEAR VENTURA CA",
//       description:
//         "ROSIE TAXI CAB OPEN 24/7 PROVIDES BOOK TO RIDES IN VENTURA, OJAI, OXNARD, CAMARILLO | CALL (805) 258-8937",
//       images: [
//         "https://new.rosietaxicab.com/wp-content/uploads/2023/10/Los-Angeles.jpg",
//       ],
//       label1: "Written by",
//       data1: "Ben",
//       label2: "Time to read",
//       data2: "7 minutes",
//     },
//     other: {
//       "og:updated_time": "2024-12-08T18:49:41-08:00",
//     },
//   };
// }

function PageHome() {
  const { homeData, loading, error, refetch }: any = useLiveHomeData(5000);

  const layout = homeData?.layout || [];
  let sliderInserted = false;

  if (loading) return <ModernLoading />;
  if (error) return <ErrorComponent />;

 
  return (
    <>
      <Head>
        <title>Rosie Taxicab | Airport Taxi Services</title>
        <meta
          name="description"
          content="Reliable taxi services for Ventura and surrounding areas including LAX, Burbank, and Santa Barbara airports."
        />
        <meta
          name="keywords"
          content="Taxi, Airport Taxi, LAX Taxi, Ventura Taxi, Reliable Taxi Service"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
        <div className="container relative space-y-8 mb-24 lg:space-y-28 lg:mb-28">
          <div className="my-24">
            <h1 className="text-center mb-3">
              {homeData.title ? homeData.title : "Book a ride"}
            </h1>
            <HeroSearchForm2Mobile />
          </div>

          {layout?.map((block: any, i: number) => {
            if (block.blockType === "faqSection" && !sliderInserted) {
              sliderInserted = true;
              return (
                <React.Fragment key={i}>
                  <InfoSection
                    heading="Where to Catch Your Ride When You Arrive in LAX?"
                    locationCode="lax-info"
                    text={
                      <>
                        <div
                          className={
                            "grid grid-cols-1 md:grid-cols-3 mt-4 mb-8 gap-4"
                          }
                        >
                          <div className={"flex flex-col gap-4"}>
                            <Image
                              width={500}
                              height={500}
                              alt={"Lax Image"}
                              src={"/images/LAXit-Review-9-e1700208900586.jpg"}
                              className={"rounded-2xl"}
                            />
                            <Image
                              width={500}
                              height={500}
                              alt={"Lax Image"}
                              src={
                                "/images/LAX-TBIT-Gates-Core-LW-Yang3_for-website.jpg"
                              }
                              className={"rounded-2xl"}
                            />
                          </div>
                          <div className={"flex flex-col gap-4"}>
                            <Image
                              width={500}
                              height={500}
                              alt={"Lax Image"}
                              src={"/images/download.png"}
                              className={"rounded-2xl"}
                            />
                            <Image
                              width={500}
                              height={500}
                              alt={"Lax Image"}
                              src={"/images/LAWA-1-1K.jpg"}
                              className={"rounded-2xl"}
                            />
                            <Image
                              width={500}
                              height={500}
                              alt={"Lax Image"}
                              src={"/images/lax_dfs_duty_free.webp"}
                              className={"rounded-2xl"}
                            />
                          </div>
                          <div className={"flex flex-col gap-4"}>
                            <Image
                              width={500}
                              height={500}
                              alt={"Lax Image"}
                              src={"/images/airport-info.png"}
                              className={"rounded-2xl"}
                            />
                            <Image
                              width={500}
                              height={500}
                              alt={"Lax Image"}
                              src={
                                "/images/mwox540ipad_2_snap-pad600x600f8f8f8.u13-1.jpg"
                              }
                              className={"rounded-2xl"}
                            />
                          </div>
                        </div>
                      </>
                    }
                    image={""}
                    buttons={[
                      {
                        url: "/lax",
                        text: "LEARN HOW TO CATCH YOUR RIDE WHEN YOU LAND IN LAX",
                      },
                    ]}
                  />
                  <ImageSlider />
                  <TwoColumnFAQ
                    faqItems={block.faqs || []}
                    title={block.title}
                    subTitle={block.subTitle}
                  />
                </React.Fragment>
              );
            }

            switch (block.blockType) {
              case "infoSection":
                return (
                  <InfoSection
                    key={i}
                    heading={block.heading}
                    locationCode={block.locationCode}
                    text={block.text}
                    image={block.image?.url}
                    imagePosition={block.imagePosition || "right"}
                    buttons={block.buttons || []}
                  />
                );

              case "sectionOurFeatures":
                return <SectionOurFeatures key={i} features={block.features} />;

              case "faqSection":
                return (
                  <TwoColumnFAQ
                    key={i}
                    faqItems={block.faqs || []}
                    title={block.title}
                    subTitle={block.subTitle}
                  />
                );

              default:
                return null;
            }
          })}
          
        </div>
      </main>
    </>
  );
}

export default PageHome;
