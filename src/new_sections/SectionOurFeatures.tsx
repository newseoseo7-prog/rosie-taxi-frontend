import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface FeatureItem {
  badgeName: string;
  badgeColor?: string;
  title: string;
  description: string;
  id: string;
}

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
  features?: FeatureItem[]; // <-- add this
}

type TwMainColor = "blue" | "green" | "red" | "yellow";

const colorMap: Record<string, TwMainColor> = {
  blue: "blue",
  green: "green",
  red: "red",
  yellow: "yellow",
};

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "py-4 lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
  features = [], // default empty array
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures !mt-12 !mb-8 relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div
        className={`max-w-2xl flex-shrink-0 !mt-0 lg:mt-0 md:max-w-full ${
          type === "type1" ? "" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-black tracking-widest">
          Benefits
        </span>
        <h2 className="font-semibold text-4xl !leading-main">
          Why Rosie Taxi?
        </h2>

        <ul className="space-y-6 mt-6 md:flex md:gap-20 md:items-stretch max-w-sm md:max-w-full">
          {features.map((feature) => (
            <li key={feature.id} className="space-y-2 md:space-y-4 md:mt-6">
              <Badge
                color={
                  feature.badgeColor
                    ? colorMap[feature.badgeColor.toLowerCase()]
                    : undefined
                }
                name={feature.badgeName}
              />
              <span className="block text-2xl font-semibold">
                {feature.title}
              </span>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-300">
                {feature.description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
