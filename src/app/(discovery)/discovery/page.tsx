"use client";

import { Tab } from "@headlessui/react";
import React, { Fragment, useState, useEffect } from "react";

import InfoSection from "@/new_sections/InfoSection";
import GallerySlider from "@/components/GallerySlider";
import { getFullImageUrl } from "@/utils/getFullImageUrl";
import ModernLoading from "@/components/ModernLoading";
import ErrorComponent from "@/components/ErrorComponent";

const Discovery = () => {
  let [categories] = useState(["Stays", "Experiences"]);
  const [pagesData, setPagesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch discovery pages from API
  useEffect(() => {
    const fetchPages = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

        const res = await fetch(
          `${baseUrl}/api/discovery-pages?depth=2&limit=40&sort=order`,
          { cache: "no-store" },
        );
        if (!res.ok) throw new Error("Failed to fetch discovery pages");

        const data = await res.json();

        // const sortedDocs = data.docs.sort(
        //   (a: any, b: any) => (a.order || 0) - (b.order || 0),
        // );

        // IMPORTANT → Payload uses data.docs
        // const mapped = data.docs.map((page: any) => ({
        //   name: page.title,
        //   href: `/discovery/${page.slug}`,
        //   images: page.galleryImages.map((imgObj: any) =>
        //     getFullImageUrl(imgObj.image.url)
        //   ),
        // }));

        const mapped = data.docs.map((page: any) => ({
          name: page.title,
          href: `/discovery/${page.slug}`,
          // images:
          //   page.galleryImages?.map((imgObj: any) =>
          //     getFullImageUrl(imgObj.image.url),
          //   ) || [],
          images:
            page.galleryImages
              ?.map((imgObj: any) =>
                imgObj?.image?.url ? getFullImageUrl(imgObj.image.url) : null,
              )
              .filter(Boolean) || [],
        }));

        setPagesData(mapped);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Unknown error");
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  const renderSection1 = () => {
    if (loading) return <ModernLoading />;
    if (error) return <ErrorComponent />;

    return (
      <>
        <title>
          Discover Los Angeles & Nearby Attractions | Taxi & Tour Services
        </title>
        <meta
          name="description"
          content="Explore Los Angeles and surrounding areas with our reliable taxi and personalized tour services. Enjoy Hollywood, beaches, theme parks, and more with local experts."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Discover Los Angeles & Nearby Attractions | Taxi & Tour Services"
        />
        <meta
          property="og:description"
          content="Book trusted taxi rides and guided tours across Los Angeles, Santa Monica, Malibu, and beyond. Travel stress-free with our professional service."
        />
        <meta
          property="og:image"
          content="https://example.com/images/los-angeles-tour.jpg"
        />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:site_name" content="LA Tours & Taxi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Discover Los Angeles & Surroundings | LA Taxi & Tours"
        />
        <meta
          name="twitter:description"
          content="From city tours to beach transfers, our taxi and tourism service covers all of Los Angeles and nearby destinations."
        />
        <meta
          name="twitter:image"
          content="https://example.com/images/los-angeles-tour.jpg"
        />
        <meta
          name="keywords"
          content="Los Angeles tours, LA taxi service, Hollywood transportation, Santa Monica tour, LAX airport transfers, Los Angeles travel guide, Malibu sightseeing, California tour taxi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <div className="nc-CommonLayoutAccount bg-neutral-50 dark:bg-neutral-900">
          <div className="container pt-14 sm:pt-20 pb-24 lg:pb-32">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl font-semibold dark:text-white">
                  Discover
                </h2>
              </div>
              <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

              <div>
                <Tab.Group>
                  <Tab.List className="flex space-x-1 overflow-x-auto">
                    {categories.map((item) => (
                      <Tab key={item} as={Fragment}>
                        {({ selected }) => (
                          <button
                            aria-label="submit"
                            className={`flex-shrink-0 block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none ${
                              selected
                                ? "bg-secondary-900 text-secondary-50 "
                                : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                            } `}
                          >
                            {item}
                          </button>
                        )}
                      </Tab>
                    ))}
                    <a
                      href="/blog"
                      className="flex-shrink-0 block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    >
                      Blog
                    </a>
                  </Tab.List>

                  <Tab.Panels>
                    {/* Stays Tab */}
                    <Tab.Panel className="mt-8">
                      <div className={"grid grid-cols-1 md:grid-cols-4 gap-4"}>
                        {pagesData.map((item, i) => (
                          <div key={item.href} className={"relative"}>
                            <GallerySlider
                              uniqueID={`${i}`}
                              ratioClass={
                                item.images[1]?.includes("long-beach")
                                  ? "aspect-w-5 aspect-h-2"
                                  : "aspect-w-4 aspect-h-3"
                              }
                              galleryImgs={item.images}
                              imageClass={""}
                              href={item.href}
                            />
                            <h2 className="mt-2 font-bold absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white">
                              <a
                                href={item.href}
                                className={" !text-2xl inline-block"}
                              >
                                {item.name}
                              </a>
                            </h2>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>

                    {/* Experiences Tab */}
                    <Tab.Panel className="mt-8">
                      <div className="">
                        <InfoSection
                          heading="THIS IS CALIFORNIA"
                          imagePosition="right"
                          locationCode={"ca"}
                          text={
                            <>
                              <p className="mt-5">
                                Discover a plethora of things to do in
                                California. This day by day trip planner has
                                been trained to provide you with 2 models of
                                searches as follows :
                              </p>
                              <ul className="space-y-2 mt-4 list-inside list-disc">
                                <li className=" items-start space-x-4">
                                  <span className=" text-neutral-700 dark:text-neutral-300">
                                    Short-Term-Visit. For example : if you want
                                    to stay only for a couple of days you can
                                    discover many things to do within the city
                                    you choose by selecting a short calendar.
                                  </span>
                                </li>
                                <li className=" items-start space-x-4">
                                  <span className=" text-neutral-700 dark:text-neutral-300">
                                    Broad-Term-Visit. For example : it gives you
                                    the flexibility to discover more surrounding
                                    cities with more things to do by extending
                                    your calendar.
                                  </span>
                                </li>
                              </ul>
                            </>
                          }
                          image={
                            "/images/Museum-of-Contemporary-Art-Los-Angeles.jpg"
                          }
                          buttons={[
                            {
                              url: "https://tourism.rosietaxicab.com",
                              text: "EXPLORE EXPERIENCES",
                              locationParam: "from",
                            },
                          ]}
                        />
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return renderSection1();
};

export default Discovery;
