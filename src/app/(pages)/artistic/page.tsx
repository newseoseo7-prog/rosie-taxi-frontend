import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import Link from "next/link";

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

        <div className="text-center dark:text-white">
          <h2 className="text-3xl font-bold  md:text-5xl">Latitudes Gallery</h2>
          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
            <div>
              <img src="/images/IMG_1255.jpg" alt="" />
            </div>
            <div>
              <img src="/images/IMG_1253.jpg" alt="" />
            </div>
            <div>
              <img src="/images/IMG_1251-e1606251257970.jpg" alt="" />
            </div>
            <div className="mt-16">
              <p>
                “Experience the breathtaking views of Ventura County and beyond-
                all in one charming, historic building. Located in the heart of
                Ventura’s Downtown District, Latitudes Gallery showcases the
                exquisite and captivating imagery from local photographers;
                Stephanie Hogue and Steve Munch. Step behind the lens and into
                the moments that take your breath away.Celebrate your community
                or extend your vacation bliss by taking home a piece of your
                very own. Images available in every shape, size and material.
                “Find Yours,”- today.”
              </p>
              <Link
                href={"https://latitudesgallery.com/"}
                className="text-blue-400"
              >
                https://latitudesgallery.com
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center dark:text-white">
          <h2 className="text-3xl font-bold  md:text-5xl">
            H Gallery + Studios
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
            <div>
              <img src="/images/IMG_1590.jpg" alt="" />
            </div>
            <div>
              <img src="/images/IMG_1588.jpg" alt="" />
            </div>
            <div>
              <img src="/images/IMG_1589-e1606252031564.jpg" alt="" />
            </div>
            <div className="mt-16">
              <p>
                H Gallery + Studios is a 10,000 square foot vintage 1930’s
                building completely dedicated to creatives & entrepreneurs. It
                includes a 2000 square foot gallery, a 2700 cubic foot suspended
                installation area and 20 work studios for creatives to nurture
                their creative endeavors. Nestled between Malibu and Ojai, H
                Gallery is one of the prevailing contemporary art spaces in the
                greater Los Angeles area.
              </p>
              <Link
                href={"https://visithgallery.com/"}
                className="text-blue-400"
              >
                https://visithgallery.com
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center dark:text-white">
          <h2 className="text-3xl font-bold  md:text-5xl">
          Denis Bloch Fine Art
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
            <div>
              <img src="/images/Skype_Picture_2020_11_24T21_09_02_952Z-e1606252412381.jpeg" alt="" />
            </div>
           
            <div >
              <p>
              “Our Los Angeles Art Gallery is located in the heart of Beverly Hills. We proudly sell Modern and Contemporary Art, Pop Art and Street Art. We happily offer our art sales and services to private art collectors, art dealers, and art museum institutions around the world. It is our mission to give our clientele the best opportunities to buy art of the finest quality, condition, and relevance. Gallery owner Denis Bloch is an expert in original Master prints with over 30 years of experience. Originally establishing his gallery in Paris, Denis began building his fine art collection in the 1980’s.”
              </p>
              <Link
                href={"https://denisbloch.com/"}
                className="text-blue-400"
              >
             https://denisbloch.com
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center dark:text-white">
          <h2 className="text-3xl font-bold  md:text-5xl">

          Studio Channel Islands Art Studios
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
            <div>
              <img src="/images/IMG_1597.jpg" alt="" />
            </div>
           
            <div >
              <p>
              “Art gallery, artist studio complex and education rooms. Visit our website for more details of upcoming exhibitions, special events and education programs.”
              </p>
           
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageHome;
