import React from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface RideTagsProps {
  text: string;
  title?: string;
  titleHeadingLevel?: HeadingTag;
}

const HashTags: React.FC<RideTagsProps> = ({
  text,
  title,
  titleHeadingLevel,
}) => {
  const headingStyles: Record<HeadingTag, string> = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
    h3: "text-2xl md:text-3xl",
    h4: "text-xl md:text-2xl",
    h5: "text-lg",
    h6: "text-base",
  };

  const Tag: HeadingTag = titleHeadingLevel || "h2";
  const displayTitle = title?.trim() ? title : "LAX";

  return (
    <div className="bg-black text-white max-w-4xl mx-auto my-10 rounded-xl shadow-green-theme shadow-md p-8 text-center">
      <Tag
        className={`font-extrabold mb-6 drop-shadow-lg ${headingStyles[Tag]}`}
      >
        {displayTitle}
      </Tag>

      <p className="tracking-normal leading-relaxed text-[15px]">{text}</p>
    </div>
  );
};

export default HashTags;
