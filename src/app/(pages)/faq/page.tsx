import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import PageEndLinks from "@/components/PageEndLinks";
import Link from "next/link";


function PageHome() {
  const faqItems = [
    {
      question: "What's Rosie Taxi Cab Concierge?",
      answer:
        "Rosie Taxi Cab is an online platform that allows you to order a private car/taxi through your smartphone. This service is simple, fast, performant, and secure.",
    },
    {
      question: "How can I identify my driver?",
      answer:
        "Once your reservation is completed (over the phone or online), our dispatch sends your request to the nearest driver prior to pickup. You will receive a short SMS as follows:\n\n- Driver’s name;\n- Vehicle’s color & model;\n- License Plate;\n- Arrival Time;\n- Additionally, a phone call to verify your ride.",
    },
    {
      question: "What's Rosie Taxi Cab LYFT?",
      answer:
        "LYFT has initiated, developed, and successfully implemented a brokerage model to allow small and medium-sized businesses to large businesses to manage their transportation requests with ease, security, and reliability.",
    },
    {
      question: "What's Rosie Taxi Cab UBER?",
      answer:
        "UBER has initiated, developed, and successfully implemented a brokerage model to allow small and medium-sized businesses to large businesses to manage their transportation requests with ease, security, and reliability.",
    },
    {
      question: "How long does it take to go to LAX from Ventura?",
      answer:
        "It usually depends on traffic conditions. It takes approximately 1 hour and 30 minutes to 2 hours during weekdays.",
    },
    {
      question: "How to order a ride?",
      answer:
        "Ordering a ride has become easy. Just enter your pick-up location, drop-off location, date, time, and process the payment at checkout.",
    },
    {
      question: "Do you offer Airport rides?",
      answer:
        "Yes, we are Airport specialists with competitive rates and an advanced reservation system in place. We service all major airports in CA such as:\n\n- LAX Los Angeles Airport;\n- BOB Airport Burbank Airport;\n- SBA Santa Barbara Airport;\n- LGB Long Beach Airport;\n- SAN San Diego International Airport;\n- SBP San Luis Obispo County Regional Airport;\n- And many more airports.",
    },
    {
      question: "Do you have a taxi open 24/7?",
      answer: "Yes, Rosie Taxi Cab operates 24/7 to serve you.",
    },
    {
      question: "How long does it take to go to LAX from Camarillo?",
      answer:
        "It usually depends on traffic conditions. It takes approximately 1 hour and 10 minutes to 2 hours during weekdays.",
    },
    {
      question: "What cities do you service?",
      answer:
        "We service all over California on a reservation basis. Making a reservation is easy: provide your first and last name, email, pick-up location, drop-off location, and payment. Some frequent cities we service include:\n\nOjai, Ventura, Oxnard, Port Hueneme, Camarillo, Santa Paula, Fillmore, Thousand Oaks, Malibu, Westlake Village, Pasadena, Glendale, Costa Mesa, Los Angeles, and many more.",
    },
    {
      question: "Does Rosie Taxi Cab 24/7 provide the best service?",
      answer:
        "Yes. We are the best transportation company in Ventura County. We offer several transportation solutions such as airport rides, NEMT, account setups, online booking, and online payments.",
    },
    {
      question: "How long does it take to get a driver?",
      answer:
        "It usually takes 10 to 15 minutes, depending on any clients ahead of you. However, if you order online, you won’t lose your place in line.",
    },
    {
      question: "Can I pay with a debit/credit card?",
      answer:
        "Yes, we accept all major debit and credit cards. Our preferred method of payment is via card.",
    },
    {
      question: "Can I book and pay online and receive a receipt?",
      answer:
        "Yes. We send receipts via text and email after booking and payment.",
    },
  ];

  return (
    <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
        {/* SECTION HERO */}
        {/* <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" /> */}

        <TwoColumnFAQ faqItems={faqItems} />

       
      </div>
    </main>
  );
}

export default PageHome;
