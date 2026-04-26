import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import Link from "next/link";
import { Button } from "@headlessui/react";
import clsx from "clsx";

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
        {/* SECTION HERO */}
        <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

        <div>
          <h2 className="text-4xl text-center">FIND YOUR NEXT EVENTS </h2>
          <p className="mt-4">
            Learn how local events in your areas can create a demand
            forecasting. This Events Index is very accurate and refined to
            provide you with the following parameters :
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Visualize Your New Events Data;</li>
            <li>Filter Per Location (s);</li>
            <li>Predict Events in your Area (s); </li>
            <li>Discover Plenty of Categories; </li>
            <li>And much more</li>
          </ul>
          <a
            href={"/"}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "transition mt-5   inline-block py-2 px-6 bg-black  text-white font-medium rounded-full hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black"
            )}
          >
            Events
          </a>
        </div>
      </div>
    </main>
  );
}

export default PageHome;
