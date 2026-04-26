import React, { FC, JSX } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import parse from "html-react-parser";
import { getFullImageUrl } from "@/utils/getFullImageUrl";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface CitiesInfoSectionProps {
  className?: string;
  heading: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  imageClass?: string | null;
  text: string | JSX.Element;
  image: StaticImageData | string;
  imageSize?: "small" | "medium" | "large";
  buttons?: { url: string; text: string }[]; // New prop for a list of buttons
  imagePosition?: "left" | "right"; // Control the image position
}

const CitiesInfoSection: FC<CitiesInfoSectionProps> = ({
  className = "",
  heading,
  headingLevel,
  text,
  image,
  imageSize = "medium",
  buttons = [], // Default to an empty array
  imageClass = null,
  imagePosition = "right", // Default to "right"
}) => {
  const isImageLeft = imagePosition === "left";

  const Tag = (headingLevel || "h2") as HeadingTag;

  const headingStyles: Record<HeadingTag, string> = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
    h5: "text-lg",
    h6: "text-base",
  };

  const imageStyles = {
    small: "w-full sm:w-2/3 md:w-1/2 lg:w-[400px] h-[200px] md:h-[250px]",
    medium: "w-full sm:w-3/4 md:w-2/3 lg:w-[600px] h-[250px] md:h-[350px]",
    large: "w-full md:w-3/4 lg:w-[800px] h-[300px] md:h-[450px]",
  };

  return (
    <div
      className={clsx(
        `nc-SectionSubscribe2 relative flex space-y-0  gap-3 lg:flex-row lg:items-stretch dark:text-white ${className}`,
        image && "justify-center",
        isImageLeft ? "flex-col" : "flex-col-reverse",
      )}
      data-nc-id="SectionSubscribe2"
    >
      {/* Render the image on the left if imagePosition is "left" */}
      {isImageLeft && image && (
        <div className="flex lg:mb-0 lg:mr-10">
          <div className={`w-full ${imageStyles[imageSize]}`}>
            <Image
              src={getFullImageUrl(typeof image === "string" ? image : "")}
              alt="Section Image"
              width={1200}
              height={800}
              className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition"
            />
          </div>
        </div>
      )}

      <div
        className={clsx(
          ` dark:text-white flex-shrink-0 flex flex-col ${
            image ? "lg:w-2/5" : "max-w-4xl"
          }`,
          !image && "mx-auto px-2",
        )}
      >
        <div>
          <Tag className={clsx("mb-4 font-semibold", headingStyles[Tag])}>
            {heading}
          </Tag>
          <div className="block mt-5 text-neutral-700  dark:text-white">
            {typeof text === "string" ? parse(text) : text}
          </div>
        </div>
        {/* Render the list of buttons */}
        {buttons.length > 0 && (
          <div className="mt-5     text-center   grid md:grid-cols-2    gap-3">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition flex justify-center items-center px-12 py-2 bg-black  text-white font-medium rounded-full hover:bg-gray-900 dark:hover:bg-white dark:hover:text-black"
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Render the image on the right if imagePosition is "right" */}
      {!isImageLeft && image && (
        <div className="flex mt-10 lg:mt-0 lg:ml-10">
          <div className={`w-full ${imageStyles[imageSize]}`}>
            <Image
              src={getFullImageUrl(typeof image === "string" ? image : "")}
              alt="Section Image"
              width={1200}
              height={800}
              className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CitiesInfoSection;
