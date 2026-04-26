import React, { FC } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import Badge from "@/shared/Badge";
import Input from "@/shared/Input";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import parse from "html-react-parser";
import { getFullImageUrl } from "@/utils/getFullImageUrl";

export interface InfoSectionProps {
  className?: string;
  imageClass?: string;
  heading: string;
  text: string | JSX.Element;
  image: StaticImageData | string | undefined;
  buttons?: { url: string; text: string; locationParam?: string }[]; // Added locationParam
  imagePosition?: "left" | "right"; // Control the image position
  locationCode?: string; // Location identifier to be used in the URL
}

const InfoSection: FC<InfoSectionProps> = ({
  className = "",
  heading,
  text,
  image,
  imageClass,
  buttons = [],
  imagePosition = "right",
  locationCode = "", // Default to empty string
}) => {
  const isImageLeft = imagePosition === "left";

  // Function to modify URL for location-specific parameters
  const getModifiedUrl = (url: string, locationParam?: string) => {
    if (!locationCode || !locationParam) return url;

    // Check if URL already has query parameters
    const hasParams = url.includes("?");
    const separator = hasParams ? "&" : "?";

    // Add the appropriate parameter
    return `${url}${separator}${locationParam}=${locationCode}`;
  };

  return (
    <div
      className={`nc-SectionSubscribe2 mt-5 relative max-w-sm md:max-w-full mx-auto flex flex-col-reverse gap-6 lg:flex-row lg:items-stretch ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      {/* Render the image on the left if imagePosition is "left" */}
      {image && isImageLeft && (
        <div className="flex-grow mb-10 lg:mb-0 lg:mr-10">
          <Image
            alt="Section Image"
            width={700}
            height={500}
            src={getFullImageUrl(typeof image === "string" ? image : "")} // <-- wrap here
            className={
              "hover:scale-110 h-full transition-transform duration-300 " +
              imageClass
            }
          />
        </div>
      )}
      <div
        className={clsx(
          "flex flex-col flex-shrink-0 ",
          image ? "lg:w-1/2" : "lg:w-full text-center mt-10"
        )}
      >
        <div>
          <p className="font-semibold text-4xl dark:text-white ">{heading}</p>
          <div className="block mt-5 text-neutral-700 dark:text-neutral-300">
            {typeof text === "string" ? parse(text) : text}
          </div>
        </div>
        {/* Render the list of buttons */}
        {buttons.length > 0 && (
          <div
            className={clsx(
              "mt-5 gap-3 md:mt-auto text-center ",
              image
                ? "md:grid-cols-2 grid"
                : "flex items-center justify-center md:grid-cols-1"
            )}
          >
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={{
                  pathname: button.url,
                }}
                className={clsx(
                  "transition py-2 bg-black text-white font-medium rounded-full hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black",
                  image ? "block px-4" : "inline-block px-6"
                )}
              >
                {button.text}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Render the image on the right if imagePosition is "right" */}
      {image && !isImageLeft && (
        <div className="flex-grow mt-10 lg:mt-0 lg:ml-10 ">
          <Image
            alt="Section Image"
            width={700}
            height={300}
            src={getFullImageUrl(typeof image === "string" ? image : "")} // <-- wrap here
            className={
              "hover:scale-105 h-full rounded transition-transform duration-300 " +
              imageClass
            }
          />
        </div>
      )}
    </div>
  );
};

export default InfoSection;
