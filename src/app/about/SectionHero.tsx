import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";

export interface SectionHeroProps {
  className?: string;
  rightImg?: StaticImageData;
  heading: ReactNode;
  subHeading: string;
  btnText: string;
  children?: ReactNode;
}

const SectionHero: FC<SectionHeroProps> = ({
  className = "",
  rightImg,
  heading,
  subHeading,
  btnText,
  children
}) => {
  return (
    <div className={`nc-SectionHero relative ${className}`}>
      <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
        <div className="w-screen max-w-full  space-y-5 lg:space-y-7">
          <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-white">
            {heading}
          </h2>
          <span className="block text-base xl:text-lg text-neutral-6000 dark:text-white">
            {subHeading}
          </span>
          <div className="">
            {children}
          </div>
          {!!btnText && <ButtonPrimary   aria-label="submit" href="/login">{btnText}</ButtonPrimary>}
        </div>
        { rightImg && <div className="flex-grow">
        <Image className="w-full" src={rightImg} alt="" />
        </div>
}
      </div>
    </div>
  );
};

export default SectionHero;
