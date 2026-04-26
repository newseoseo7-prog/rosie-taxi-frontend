import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React from "react";
import FooterNav from "./FooterNav";
import Image from "next/image";
import Link from "next/link";
import Page from "@/app/(pages)/pci/page.jsx";

type MenuItem = string | { href: string; label: string };

type Menu = {
  id: string;
  title: string;
  menus: MenuItem[];
};

const footerData: Menu[] = [
  // Keep the rest of your original sections unchanged:
  {
    id: "5",
    title: "On Demand Taxi Services In",
    menus: [
      { href: "/taxi-cab-ojai", label: "Ojai" },
      { href: "/taxi-cab-oxnard", label: "Oxnard" },
      { href: "/taxi-cab-camarillo", label: "Camarillo" },
      { href: "/taxi-cab-fillmore", label: "Fillmore" },
      { href: "/taxi-cab-ventura", label: "Ventura" },
      { href: "/taxi-cab-port-hueneme", label: "Port Hueneme" },
      { href: "/taxi-cab-santa-paula", label: "Santa Paula" },
      { href: "/taxi-cab-malibu", label: "Malibu" },
      { href: "/taxi-cab-pasadena", label: "Pasadena" },
      { href: "/taxi-cab-thousand-oaks", label: "Thousand Oaks" },
      { href: "/taxi-cab-lax", label: "Los Angeles" },
      { href: "/taxi-cab-san-diego", label: "San Diego" },
      { href: "/taxi-cab-carlsbad", label: "Carlsbad" },
    ],
  },
  {
    id: "5",
    title: " ",
    menus: [
      { href: "/taxi-cab-irvine", label: "Irvine" },
      { href: "/taxi-cab-dana-point", label: "Dana Point" },
      { href: "/taxi-cab-hermosa-beach", label: "Hermosa Beach" },
      { href: "/taxi-cab-new-port-beach", label: "New Port Beach" },
      { href: "/taxi-cab-manhattan", label: "Manhattan" },
      { href: "/taxi-cab-costa-mesa", label: "Costa Mesa" },
      { href: "/taxi-cab-burbank", label: "Burbank" },
      { href: "/taxi-cab-westlake-village", label: "West Lake village" },

      { href: "/classics", label: "Classics" },
      { href: "/taxi-cab-long-beach", label: "Long Beach" },
      { href: "/taxi-cab-hollywood", label: "Hollywood" },
      { href: "/taxi-cab-glendale", label: "glendale" },
      { href: "/taxi-cab-beverly-hills", label: "Beverly Hills" },
    ],
  },
  {
    id: "1",
    title: "Airport Transfer",
    menus: [
      { href: "www.flylax.com", label: "Los Angeles Airport Transfer (LAX)" },
      {
        href: "www.hollywoodburbankairport.com",
        label: "Burbank Hope Airport Transfer (BOB)",
      },
      {
        href: "flysba.santabarbaraca.gov",
        label: "Santa Barbara Airport Transport (SBA)",
      },
      { href: "www.longbeach.gov/lgb", label: "Long Beach Airport ( LGB )" },
    ],
  },
  {
    id: "2",
    title: "Non Emergency Medical Rides",
    menus: [
      "Going to your next medical appointment is crucial and we want you to count on us to get you there.",
      {
        href: "https://jooble.org/jobs-taxi-driver",
        label: "Jobs for Taxi Driver",
      },
    ],
  },
  {
    id: "3",
    title: "Flights Checker",
    menus: [
      {
        href: "/airports/burbank_airport",
        label: "Burbank Airport Flights",
      },
      {
        href: "/airports/lax_airport",
        label: "Los Angeles Airport",
      },
      {
        href: "/airports/slo",
        label: "SLO County Airport (SBP)",
      },
      {
        href: "/airports/longbeach",
        label: "longbeach Airport  ",
      },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: Menu, index: number) => {
    return (
      <div key={index} className="text-sm ">
        <h2 className="font-semibold text-neutral-200">{menu.title}</h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index: number) => (
            <li key={index}>
              {typeof item === "string" ? (
                <p className="text-neutral-300">{item}</p>
              ) : (
                <a
                  className="text-neutral-300 hover:text-white"
                  href={
                    item.href.startsWith("http")
                      ? item.href
                      : item.href.startsWith("/")
                        ? item.href
                        : `https://${item.href}`
                  }
                  rel={
                    item.href.startsWith("http") || item.href.startsWith("www")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-black text-white ">
      <FooterNav />
      <div className="nc-Footer relative px-3 pt-16 pb-24 lg:py-28 border-t  border-neutral-700">
        <div className="md:container max-w-sm  mx-auto grid grid-cols-1 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:gap-x-10">
          {/* New HTML structure based on your request */}
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-4fd4ba12 elementor-widget elementor-widget-heading"
              data-id="4fd4ba12"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <p className="elementor-heading-title elementor-size-default font-bold ">
                  ROSIE TAXI CAB OPEN 24/7
                </p>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-ed3b59 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="ed3b59"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-text ">
                      1300 Eastman Ave, Ventura, CA 93003
                    </span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a href="#">
                      <span className="elementor-icon-list-text">
                        (805) 258 8937
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Render other menu items */}
          {footerData.map(renderWidgetMenuItem)}
        </div>
        <div className=" md:container  max-w-sm gap-12 md:gap-5 mx-auto mt-16 grid md:grid-cols-[1fr_2fr_1fr]  w-full">
          <div className="flex flex-col gap-4 ">
            <p className="elementor-heading-title elementor-size-default font-bold ">
              We Accept
            </p>
            <Image
              src={"/images/IMG_0166.png.webp"}
              alt="payment gateways"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="elementor-heading-title elementor-size-default font-bold ">
              ORDER & PAY ONLINE
            </p>
            <p className="text-neutral-300">
              Using our booking platform is essential for you to have an idea
              how much your ride could be. Sometimes we apply surge pricing
              techniques depending on several factors such as, but not limited
              to, drivers availability, last minute calls to the airport, and
              times of high demand / rush hours. Nothing to worry about with
              this surge pricing model as it doesn’t occur very often. Our
              booking system is designed to respond accordingly with the
              distance traveled from point a to b. You can save 20% on every
              reservation and we take all major card payments. We service all
              over California. The best way to secure a ride with us is just by
              making a simple reservation and you’re all set. All the
              information provided is secure and complies with California
              Privacy Act.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <h6 className="elementor-heading-title elementor-size-default font-bold ">
              DSS
            </h6>
            <div className="text-neutral-300 flex flex-col">
              <Link href="/pci" className="hover:text-white">
                ATTESTATION OF COMPLIANCE DSS
              </Link>
              <Link
                href="/certificate-of-validation"
                className="hover:text-white"
              >
                CERTIFICATE OF VALIDATION
              </Link>
              <Link
                href="/questionnaire-answer-sheet"
                className="hover:text-white"
              >
                QUESTIONNAIRE ANSWER SHEET
              </Link>
            </div>
            <h4 className="elementor-heading-title mt-4 elementor-size-default font-bold ">
              Do Not Pass or Sell My Information
            </h4>
            <div className="text-neutral-300 flex flex-col">
              <Link href="/privacy-policy" className="hover:text-white">
                CALIFORNIA CONSUMER PRIVACY ACT{" "}
              </Link>
              <Link href="/hipaa" className="hover:text-white">
                HIPAA
              </Link>
              <Link href="/legal-terms" className="hover:text-white">
                Legal Terms
              </Link>
              <Link href="/bill-of-rights" className="hover:text-white">
                CONSUMER BILL OF RIGHTS
              </Link>
              <Link
                href="/nondiscrimination-notice"
                className="hover:text-white"
              >
                PROPOSED NOTICE ON NONDISCRIMINATION
              </Link>
              <Link href="/e-accessibility" className="hover:text-white">
                E-ACCESSIBILITY
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 pb-20 md:pb-12 px-3">
        <Image
          src={"/images/aIGULFOVCuzpDMDEQmXkmRu.svg"}
          width={200}
          height={300}
          alt="tree"
        />
        <p>Copyright 2026 Rosie's Taxi Cabs All Rights Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
