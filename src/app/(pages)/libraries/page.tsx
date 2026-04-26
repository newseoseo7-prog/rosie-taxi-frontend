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
          <h2 className="text-3xl font-bold  md:text-5xl">
            Ventura Law Library
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
            <div>
              <img
                src="/images/photo-e1497310016944-833x1024-1-q48o4d8nj1i516rmofah0mnbbkv1sbwywz6dmsw5e4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="/images/OKPlab-1-q48o4qee6q05jq8ijkz8zjbrmz26s3d7msb6cocmz0.jpg"
                alt=""
              />
            </div>
            <div>
              <img src="/images/IMG_0591-2.jpg.webp" alt="" />
            </div>
            <div className="mt-16">
              <p>
                The mission of the Ventura County Law Library is to provide
                access to current legal resources by providing an up-to-date
                research collection, supporting services, and new technologies
                possible within the scope of funding available to the Law
                Library.
              </p>
              <p> Library Services include the following :</p>
              <ul className="list-disc list-inside">
                <li>Legal Clinics</li>
                <li>Meeting Room Booking</li>
                <li>
                  A large catalogue of 70,000 volume collection consists
                  primarily of California and Federal statutes, codes, cases,
                  regulations, practice materials and research references.
                </li>
                <li>Free Internet And computers to use.</li>
                <li>
                  Ventura Law Library is located at 800 S Victoria Ave Ventura
                  CA 93003
                </li>
              </ul>
              <Link
                href={"https://www.vencolawlib.org"}
                className="text-blue-400"
              >
                https://www.vencolawlib.org
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center dark:text-white">
          <h2 className="text-3xl font-bold  md:text-5xl">
            Barnes and Nobles Book Store
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
            <div>
              <img
                src="/images/Barnes-Noble-booksellers-q48o46ns7794rx16qug316b35vrhag6uk2lz9v5wlo.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="/images/merlin_174096105_58f95f35-e85b-4380-95a9-d3ab5a774bba-mobileMasterAt3x-q48o42wffv3zhh6ncstkr798sca0fnrx7k01crbhak.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="/images/consumer-goods-retail-barnes-and-noble-bks.jpg.webp"
                alt=""
              />
            </div>
            <div className="mt-16">
              <p>
                Bookseller chain stocking housebrand eReader, plus a broad
                selection of titles for adults & kids.
              </p>
              <p>4280 telephone rd Ventura CA 93003</p>
              <Link
                href={"https://www.barnesandnoble.com"}
                className="text-blue-400"
              >
                https://www.barnesandnoble.com
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center dark:text-white">
          <h2 className="text-3xl font-bold  md:text-5xl">
            John Spoor Broome Library
          </h2>
          <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
            <div>
              <img
                src="/images/Foster-Broome-Library-000715-2-1-q48o3ha52oae2g21v1h5nupn4h8kime3gkzvbe7j9o.jpg"
                alt=""
              />
            </div>

            <img
              src="/images/Foster-Broome-Library-000734-2-1-q48o3mx67oi403tuy3wx2taeosgrst0hhcws71z68c.jpg"
              alt=""
            />
            <div>
              <img
                src="/images/Foster-Broome-Library-000817-2.jpg.webp"
                alt=""
              />
            </div>

            <div>
              <p>
                The John Spoor Broome Library enhances the CI mission of
                interdisciplinary, international, multicultural, and service
                learning through active collaboration with students, faculty,
                and staff to plan, implement, promote, and access the use of
                collections and services and support student learning via its
                robust information literacy program.
              </p>
              <p>One University Drive, Camarillo,CA 93012</p>
              <Link
                href={"https://library.csuci.edu"}
                className="text-blue-400"
              >
                https://library.csuci.edu
              </Link>
            </div>
          </div>
          <div className="text-center dark:text-white">
            <h2 className="text-3xl font-bold  md:text-5xl">
              Camarillo Public Library
            </h2>
            <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
              <div>
                <img
                  src="/images/366f71b03e8694ce75b17ef0ea743b47-q48o30d1nnn89gqmlu5veyzcfjjyo2ixe994oewmdo.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/images/camarillo-public-library-q48o2hk9uyxht9hxnm1c13q4ju4me4gano7f2vohu4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img src="/images/UP69SGLd-1.jpeg.webp" alt="" />
              </div>

              <div>
                <p>
                  This two-story, 67,294 SF state-of-the-art public library
                  facility was planned and designed to address community needs
                  for expanded collections, inter-generational reader seating
                  and study areas, a themed children’s area, K-8 homework
                  center, bookstore, staff offices, a 200-seat community room,
                  and a technology training center accommodating 80 public
                  computers. The library exterior features a courtyard entry
                  with fountain, patron seating with decorative landscaping, and
                  a 230-space parking lot.
                </p>
                <p>4101 Las Posas Road Camarillo, CA 93010</p>
                <Link
                  href={"https://www.camarillolibrary.org"}
                  className="text-blue-400"
                >
                  https://www.camarillolibrary.org{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageHome;
