"use client"
import { Tab } from "@headlessui/react";
import CarCard from "@/components/CarCard";
import ExperiencesCard from "@/components/ExperiencesCard";
import StayCard from "@/components/StayCard";
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  DEMO_STAY_LISTINGS,
} from "@/data/listings";
import React, { Fragment, useState } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import InfoSection from "@/new_sections/InfoSection";
import {TaxonomyType} from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSliderCities from "@/new_sections/SectionSliderCities";
import GallerySlider from "@/components/GallerySlider";
import Link from "next/link";

const AccountSavelists = () => {
  let [categories] = useState(["Stays", "Experiences", "Blog"]);


  //todo
    // Completed ones :
      // Oxnard
      // camarillo
      // Port hueneme
      // Ojai
      // Santa Paula
      // ventura
      // new port beach
      // manhattan-beach
      // Pasadena
      // Long Beach
      // Burbank
      // Hollywood
      // Dana point
      // Irvine
      // Costa mesa


    // Not Found
     // Malibu


  const mockData = [
      {
          name : "Ventura",
          href:"/taxi-cab-ventura",
          images : [
              "/images/ventura-1.jpg",
              "/images/ventura-2.jpg",
              "/images/ventura-3.jpg",
              "/images/ventura-4.jpg",
              "/images/ventura-6.jpg",

          ]

      }, {
          name : "Ojai",
          href:"/taxi-cab-ojai",
          images : [
              "/images/Ojai-1.jpg",
              "/images/Ojai-2.jpg",
              "/images/Ojai-3.jpg",
              "/images/Ojai-4.jpg",

          ]

      }, {
          name : "Oxnard",
          href:"/taxi-cab-oxnard",
          images : [
              "/images/oxnard.jpg",
              "/images/oxnard-2.jpg",
              "/images/oxnard-3.jpg",
              "/images/oxnard-4.jpg",
          ]

      }, {
          name : "Camarillo",
          href:"/taxi-cab-camarillo",
          images : [
              "/images/camarillo-2.jpg",
              "/images/camarillo-1.jpg",
              "/images/camarillo-3.jpg",
              "/images/camarillo-4.jpg",

          ]

      },
      {
        name:"Thousand Oaks ",
        href:"/taxi-cab-thousand-oaks",
        images:[
            "/images/thousand-oaks-4.jpg",
            "/images/thousand-oaks-1.jpg",
            "/images/thousand-oaks-2.jpg",
            "/images/thousand-oaks-3.jpg",
        ]
      }
      ,


      {
          name : "Santa Paula",
          href:"/taxi-cab-santa-paula",
          images : [
              "/images/Santa-Paula-1.jpg",
              "/images/Santa-Paula-2.jpg",
              "/images/Santa-Paula-3.jpg",

          ]

      },{
          name : "Port Hueneme",
          href:"/taxi-cab-port-hueneme",
          images : [
              "/images/Port-hueneme-1.jpg",
              "/images/Port-hueneme-2.jpg",
              "/images/Port-hueneme-3.jpg",
              "/images/Port-hueneme-4.jpg",
              "/images/Port-hueneme-5.jpg",

          ]

      },{
          name : "Fillmore",
          href:"/taxi-cab-fillmore",
          images : [
              "/images/Fillmore.jpeg",
              "/images/Fillmore.jpeg",
          ]

      },{
          name : "Beverly Hills",
          href:"/taxi-cab-beverly-hills",
          images : [
              "/images/beverly-hills.jpg",
              "/images/beverly-hills-2.jpg",
              "/images/beverly-hills-3.jpg",
          ]

      },{
          name : "Pasadena",
          href:"/taxi-cab-pasadena",
          images : [
              "/images/Pasadena-4.jpg",
              "/images/pasadena_1.jpg",
              "/images/Pasadena-2.jpg",
              "/images/Pasadena-3.jpg",



          ]

      },{
          name : "Long Beach",
          href:"/taxi-cab-long-beach",
          images : [
              "/images/long-beach-4.jpg",
              "/images/long-beach-1.jpg",
              "/images/long-beach-2.jpg",
              "/images/long-beach-3.jpg",

          ]

      },
      {
          name : "BurBank",
          href:"/taxi-cab-burbank",
          images : [
              "/images/burbank-4.jpg",
              "/images/burbank-3.jpg",
              "/images/burbank-1.jpg",
              "/images/burbank-2.jpg",


          ]

      },  {
          name : "Hollywood",
          href:"/taxi-cab-hollywood",
          images : [
              "/images/hollywood-1.jpg",
              "/images/hollywood-2.jpg",
              "/images/hollywood-3.jpg",
              "/images/hollywood-4.jpg",

          ]

      },{
          name : "Costa Mesa",
          href:"/taxi-cab-costa-mesa",
          images : [
              "/images/costa-mesa-1.jpg",
              "/images/costa-mesa-2.jpg",
              "/images/costa-mesa-3.jpg",
              "/images/costa-mesa-4.jpg",

          ]

      },{
          name : "Manhattan Beach",
          href:"/taxi-cab-manhattan",
          images : [
              "/images/manhattan_beach_california.jpg",
              "/images/manhattan-beach-1.jpg",
              "/images/manhattan-beach-2.jpg",
              "/images/manhattan-beach-3.jpg",

          ]

      },{
          name : "Hermosa Beach",
          href:"/taxi-cab-hermosa-beach",
          images : [
              "/images/hermosa-beach.jpg",
              "/images/hermosa-beach.jpg",
          ]

      },{
          name : "New Port Beach",
          href:"/taxi-cab-new-port",
          images : [
              "/images/new-port-beach-4.jpg",
              "/images/new-port-1.webp",
              "/images/new-port-beach-2.jpg",
              "/images/new-port-beach-3.jpg",

          ]

      },{
          name : "Dana Point",
          href:"/taxi-cab-dana-point",
          images : [
              "/images/dana-point-1.jpg",
              "/images/dana-point-2.jpg",
              "/images/dana-point-3.jpg",
              "/images/dana-point-4.jpg",
              "/images/dana-point-5.jpg",

          ]

      },{
          name : "Irvine",
          href:"/taxi-cab-irvine",
          images : [
              "/images/irvine-1.jpg",
              "/images/irvine-2.jpg",
              "/images/irvine-3.jpg",
              "/images/irvine-4.jpg",

          ]

      },{
          name : "San Diego",
          href:"/taxi-cab-san-diego",
          images : [
              "/images/San-Diego-1.jpg",
              "/images/San-Diego-2.jpg",
              "/images/San-Diego-3.jpg",
              "/images/San-Diego-4.jpg",

          ]

      },
      {
          name : "Los Angeles",
          href:"/losangeles",
          images : [
              "/images/Los-Angeles-1.jpg",
              "/images/Los-Angeles-2.jpg",
              "/images/Los-Angeles-3.jpg",
              "/images/Los-Angeles-4.jpg",
              "/images/Los-Angeles-5.jpg",

          ]

      },
      {
          name : "Malibu",
          href:"/taxi-cab-malibu",
          images : [
              "/images/malibu-1.jpg",
              "/images/malibu-800x450.webp",
              "/images/Malibu-Creek-State-Park.jpg.webp",
              "/images/beachfront-room.webp",
              "/images/nobu-malibu-ca-exterior-800x533.webp",
              "/images/point-mugu-state-park-3-1536x1024.webp",
              "/images/Adamson-House3.jpg.webp",
              "/images/The-getty-center-LA.jpg.webp",
              "/images/Paradise-cove-beach-Malibu-CA.jpg.webp",
              "/images/neptunes-net3.webp",



          ]

      },
      {
          name : "Glendale",
          href:"/taxi-cab-glendale",
          images : [
              "/images/MONA_exterior_by_Gary_van_der_Steur-copy-2-scaled-1-800x572.jpg",
              "/images/embassy-suites-los-angeles-glendale-exterior.jpg",
              



          ]

      },
      {
          name : "Westlake Village",
          href:"/taxi-cab-westlake-village",
          images : [
              "/images/82179f4f-5ba3-4a68-b4db-e184194190e4.webp",
              "/images/embassy-suites-los-angeles-glendale-exterior.jpg",
              



          ]

      },
  ]



  const renderSection1 = () => {
    return (
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-3xl font-semibold dark:text-white">Save lists</h2>
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
              </Tab.List>
              <Tab.Panels>
                {/* Stays Tab */}
                <Tab.Panel className="mt-8">
                    {/*<SectionSliderNewCategories categories={CITIES} />*/}
                    {/*<SectionSliderCities categories={CITIES2} />*/}
                    {/*<SectionSliderCities categories={CITIES3} />*/}
                    {/*<SectionSliderCities categories={CITIES4} />*/}


                    <div className={"grid grid-cols-1 md:grid-cols-4 gap-4"}>
                        {mockData.map((item, i) => (
                            <div key={i} className={'relative'}>
                            <GallerySlider
                                uniqueID={`${i}`}
                                ratioClass={item.images[1] === '/images/long-beach-1.jpg' ? "aspect-w-5 aspect-h-2  " : "aspect-w-4 aspect-h-3"}
                                galleryImgs={item.images}
                                imageClass={""}
                                // addImageBlackOverlay={true}
                                href={item.href}
                                galleryClass={undefined}
                            />
                                <h2 className="mt-2 font-bold absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white">
                                    <a href={item.href} className={" !text-2xl inline-block"}>{item.name}</a>
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
                            text={
                                <>
                                    <p className="mt-5">
                                        Discover a plethora of things to do in California. This day by day trip planner has been trained to provide you with 2 models of searches as follows :
                                    </p>
                                    <ul className="space-y-2 mt-4 list-inside list-disc">
                                        <li className=" items-start space-x-4">

                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                       Short-Term-Visit. For example : if you want to stay only for a couple of days you can discover many things to do within the city you choose by selecting a short calendar.
                        </span>
                                        </li>
                                        <li className=" items-start space-x-4">

                                        <span className=" text-neutral-700 dark:text-neutral-300">
                                   Broad-Term-Visit. For example : it gives you the flexibility to discover more surrounding cities with more things to do by extending your calendar.
                        </span>
                                        </li>


                                    </ul>

                                </>
                            }

                            image={"/images/Museum-of-Contemporary-Art-Los-Angeles.jpg"}
                            buttons={[
                                { url: "https://tourism.rosietaxicab.com/", text: "EXPLORE EXPERIENCES" },

                            ]}
                        />

                    </div>
                </Tab.Panel>

                {/* Blog Tab */}
                <Tab.Panel className="mt-8">
                  <div className="">
                    <InfoSection
                        heading="EDITORIAL | DISCOVER OUR WEEKLY STORIES "
                        imagePosition="right"
                        text={
                          <>
                            <p className="mt-5">
                                I write about different subjects. I help brands like @Rosietaxicab with their digital content and to recognize their potential, and cross communicate better. I love featuring my work in conjunction with many other platforms.
                            </p>


                          </>
                        }
                        imageClass={" md:!max-w-sm max-w-[200px]"}
                        image={"/images/62af27f1c26cda001e67c94f.webp"}
                        buttons={[
                          { url: "/blog", text: "Local Places" },

                        ]}
                    />

                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
    );
  };

  return renderSection1();
};

export default AccountSavelists;
