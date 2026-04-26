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
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Cab and Tour Booking  <br />
              <span className="text-primary-500">Affordable</span>
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Book a cab or tour with Rosie Taxi Cab today and enjoy a hassle-free travel experience.
          </span>

            <div className="flex space-x-4">
              <ButtonPrimary href="/booking" sizeClass="px-5 py-4 sm:px-7">
                Book a Cab
              </ButtonPrimary>
              <ButtonPrimary href="/booking" sizeClass="px-5 py-4 sm:px-7">
                Plan a Tour
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <Image className="w-full" src={imagePng} alt="hero" priority />
          </div>
        </div>
      </div>
  );
};

export default SectionHero;
