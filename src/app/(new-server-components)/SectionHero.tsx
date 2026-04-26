"use client";

import React, { FC } from "react";
import imagePng from "@/images/hero-right.png";
import HeroSearchForm from "../(new-client-components)/HeroSearchForm";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-full flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            Cab & Tours
            <span className="text-primary-500"> for your next trip</span>
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            Accompanying us, you have a trip full of experiences. With Chisfis,
            booking accommodation, resort villas, hotels
          </span>
          <div className="flex justify-center w-full" >
          <ButtonPrimary href="/booking"   aria-label="booking" sizeClass="px-5 py-4 ">
            Start your search
          </ButtonPrimary>
          </div>
        </div>

      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-60 w-full">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
