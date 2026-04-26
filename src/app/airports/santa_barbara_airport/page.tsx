import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSliderCities from "@/new_sections/SectionSliderCities";
import InfoSection from "@/new_sections/InfoSection";
import laxImg from "@/images/airports/lax-airport.webp";
import sbaImg from "@/images/airports/santa_barbara_airport.webp";
import burbankImg from "@/images/airports/burbank_airport.webp";
import Badge from "@/shared/Badge";
import SectionFlightsSchedule from "@/new_sections/SectionFlightsSchedules";

 const CITIES: TaxonomyType[] = [
  {
    id: "1",
    href: "/taxi-cab-ventura",
    name: "Ventura",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/images/cities/ventura.jpg",
  },
  {
    id: "2",
    href: "/taxi-cab-ojai",
    name: "OJAI",
    taxonomy: "category",
    count: 188288,
    thumbnail:
        "/images/cities/ojai.webp",
  },
  {
    id: "3",
    href: "/taxi-cab-oxnard",
    name: "OXNARD",
    taxonomy: "category",
    count: 188288,
    thumbnail:
        "/images/cities/oxnard.jpg",
  },
  {
    id: "5",
    href: "/taxi-cab-camarillo",
    name: "CAMARILLO",
    taxonomy: "category",
    count: 188288,
    thumbnail:
        "/images/cities/camarillo.jpg",
  },
  {
    id: "6",
    href: "/taxi-cab-santa-paula",
    name: "SANTA PAULA",
    taxonomy: "category",
    count: 188288,
    thumbnail:
        "/images/cities/santa_paula.jpg",
  },
  {
    id: "7",
    href: "/taxi-cab-malibu",
    name: "MALIBU",
    taxonomy: "category",
    count: 188288,
    thumbnail:
        "/images/cities/malibu.jpg",
  },
];


function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={CITIES} />
        <SectionSliderCities categories={CITIES} />

        <SectionOurFeatures />

        <SectionHowItWork />

        <InfoSection
            heading="Los Angeles International Airport LAX"
            text={
              <>
                <p>Finding a reliable taxi cab transportation from Ventura to LAX goes through a set of questions as
                  follows:</p>

                <ul className="space-y-4 mt-10">
                  <li className="flex items-center space-x-4">
                    <Badge name="01"/>
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Availability of the Driver(s)
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Badge name="02"/>
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      Your Flight’s Departure
                    </span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Badge name="03"/>
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                     Day / Time of the Travel
                    </span>
                  </li>

                </ul>
                <p className="mt-5">
                  Rosie Taxi Cab can help you schedule your next LAX trip ahead of time, ensuring a reliable taxi
                  service in Ventura and surrounding areas.
                  Let our expert dispatch help you navigate this process. Give us a call for more details.
                </p>
              </>
            }
            image={laxImg}
            imagePosition="right"
            buttons={[ ]}
        />
        <InfoSection
            heading="Burbank Hope Airport BOB"
            imagePosition="left"

            text={
              <>
                <p className="mt-5">
                  Rosie Taxi Cab Can Help You Schedule Your Next Burbank Airport Trip Ahead of Time. Using Our Taxi Cab Service Is Guaranteed adn We Encourage Our Customers To Reserve A Cab Rather Calling Last Minute To The Airport. From Our End, We Make Sure To Provide You A Reliable Taxi Service In Ventura And Surrounding Areas.  Give Us A Call And Let Our Expert Dispatch To Help You Navigate This Process.  </p>
              </>
            }
            image={burbankImg}
            buttons={[]}
        />
        <InfoSection
            heading="Santa Barbara Airport SBA"
            imagePosition="right"
            text={
              <>
                <p className="mt-5">
                  Rosie Taxi Cab Can Help You Schedule Your Next Santa Barbara Airport Trip Ahead of Time And We Make Sure To Provide You A Reliable Taxi Service In Ventura And Surrounding Areas. Let Our Expert Dispatch To Help You Navigate This Process. Give  Us A Call For More Details.
                </p>
                </>
            }
            image={burbankImg}
            buttons={[ ]}
        />

        <SectionFlightsSchedule />

        <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
        />


      </div>
    </main>
  );
}

export default PageHome;
