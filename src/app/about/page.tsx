import rightImg from "@/images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import SectionHero from "./SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import Link from "next/link";

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          // rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="Rosie Taxi Cab provides transportation solutions all over California with a pick up time between 10 to 15 min on average. We initially specialize in Airport transportation to :"
          children={
            <>
            <div className="text-neutral-6000  dark:text-white">
              <ul className="list-disc list-inside ">
                <li>LAX (Los Angeles Airport);</li>
                <li>BOB (Burbank Airport);</li>
                <li>SBA ( Santa Barbara Airport );</li>
                <li>SNA (John Wayne Airport );</li>
                <li>  LGB ( Long Beach Airport ) and more. </li>
              </ul>
             <p className="mt-4">
             Also, we provide local and long distance rides with the most competitive rates, we match / beat local competitor pricing. You can order online save 20% on every trip.  
             </p>
             <p className="mt-4">
             Rosie Taxi Cab offers rides in connection with LYFT BUSINESS to provide fast and efficient pick ups <Link href="/lyft" className="text-blue-500">Read more how we are making a difference</Link>
   
             </p>
             <p className="mt-4">
             Our top priority is safety while ensuring every reservation is processed fast. We operate fully online with an online support 24/7 at (805) 258-8937
             </p>
             <p className="mt-4">
             Truly yours,
             </p>
             <p>
              <Link href={"/"}  className="text-blue-500">Rosietaxicab.com</Link>
             </p>
            </div>
            </>
          }
        />

     

      </div>
    </div>
  );
};

export default PageAbout;
