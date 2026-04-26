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
      question: "LOS ANGELES AIRPORT  ",
      answer:
        "WE PROVIDE THE MOST RELIABLE AIRPORT TRANSPORTATION TO LAX AND WE ARE 24/7",
    },
    {
      question: "BURBANK AIRPORT ",
      answer:
        "WE PROVIDE THE MOST RELIABLE AIRPORT TRANSPORTATION TO BURBANK AIRPORT  AND WE ARE OPEN 24/7 ",
    },
    {
      question: "SANTA BARBARA AIRPORT ",
      answer:
        "WE PROVIDE THE MOST RELIABLE AIRPORT TRANSPORTATION TO SANTA BARBARA AIRPORT AND WE ARE OPEN 24/7 ",
    },
    {
      question: "ALL AIRPORTS  ",
      answer:
        "WE PROVIDE THE MOST RELIABLE AIRPORT TRANSPORTATION TO ALL AIRPORTS IN CALIFORNIA 24/7 ON DEMAND.",
    },
    {
      question: "RIDE SHARE ",
      answer:
        "ORDER WITH US SAVE 20% WE PROVIDE FLAT RATES SHORT AND LONG DISTANCE RIDES. OUR RIDE SHARE PROGRAM IS QUICK AND COST EFFICIENT.  ",
    },
    {
      question: "LARGE PARTY EVENTS  ",
      answer: `LOOKING TO TRANSPORT A LARGE GROUP OF PEOPLE, WE HAVE  A LARGE FLEET AVAILABLE TO HELP  YOU MOVE YOUR GUEST ANYTIME AND ANYWHERE 
`,
    },
    {
      question: "SAVE 20%",
      answer: `EVERY RESERVATION YOU MAKE WITH US WILL SAVE YOU 20%`,
    },
    {
      question: "NEMT ",
      answer: `NON EMERGENCY MEDICAL RIDES. SET UP A PRIVATE ACCOUNT USING YOUR DEBIT/CREDIT CARD AND WE DO THE REST`,
    },
    {
      question: "INDEPENDENT DRIVERS",
      answer: `OUR INDEPENDENT DRIVERS ARE TRAINED, WITH GPS ON EACH VEHICLE. WE PROVIDE YOU AN ACCURATE ESTIMATE TIME OF ARRIVAL. `,
    },
    {
      question: "I WANNA SCHEDULE A RIDE",
      answer: `OUR DISPATCH IS OPEN 24/7 WE CAN HELP YOU AND GUIDE HOW TO BOOK A RIDE THAT FIT YOUR OWN CALENDAR. DON’T HESITATE TO GIVE US A CALL AND ASK FOR MORE INFORMATION HOW AND WHEN YOU CAN BOOK A RIDE WITH US . `,
    },
  ];
  return (
    <main className="nc-PageHome py-20 relative overflow-hidden dark:bg-neutral-900 dark:text-white">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
        {/* SECTION HERO */}

        <div>
          <h2 className="text-4xl text-center">WHY CHOOSE US?</h2>
          <p className="mt-4">
            INTRODUCING A WIDE SELECTION OF TRANSPORTATION SERVICES TO CHOOSE
            FROM. ROSIE TAXI CAB IS THE MOST RELIABLE TRANSPORTATION THROUGHOUT
            CALIFORNIA.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>
              The right to know about the personal information a business
              collects about them and how it is used and shared
            </li>
            <li>
              The right to delete personal information collected from them (with
              some exceptions);
            </li>
            <li>
              The right to opt-out of the sale of their personal information
            </li>
            <li>
              The right to non-discrimination for exercising their CCPA rights.
            </li>
            <li>
              Businesses are required to give consumers certain notices
              explaining their privacy practices. The CCPA applies to many
              businesses, including data brokers.
            </li>
          </ul>
        </div>
        <TwoColumnFAQ faqItems={faqItems} />
        <div>
          <h2 className="text-4xl text-center">
            OPEN 24HRS. 7 DAYS A WEEK. 365 DAYS
          </h2>
          <p className="mt-4">
            SAFETY FIRST. TRUST EARNED. WE MATCH/BEAT ANY COMPETITOR PRICE.
          </p>
          <p className="mt-4">
            We are proud to ensure your transportation at anytime 24hrs, 7 days
            a week, 365 days.{" "}
          </p>
          <p className="mt-4">
            Choosing Rosie Taxi Cab is a great option. We offer 20% off through
            our website and we also offer flat rates that are competitive to
            Airports, and any other local Rides between Cities near you.
          </p>
        </div>

        <div>
          <h2 className="text-4xl text-center">a large avaibility </h2>
          <p className="mt-4">
            SAFETY FIRST. TRUST EARNED. WE MATCH/BEAT ANY COMPETITOR PRICE.
            CONNECTING +20 CITIES.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Camarillo</li>
            <li>Ventura</li>
            <li>Oxnard</li>
            <li>Thousand Oaks</li>
            <li>Ojai</li>
            <li>Port Hueneme</li>
            <li>Santa Paula</li>
            <li>Santa Rosa</li>
            <li>Moorpark</li>
            <li>Somis</li>
            <li>Fillmore</li>
            <li>Point Mugu</li>
            <li>Beverly Hills</li>
            <li>Los Angeles </li>
            <li>Fullerton </li>
            <li>Pasadena </li>
            <li>Glendale </li>
            <li>Irvine </li>
            <li>Costa Mesa </li>
            <li>San Diego </li>
            <li>And many more </li>
          </ul>
        </div>
        <div>
          <h2 className="text-4xl text-center">WHAT MAKES US DIFFERENT?</h2>
          <p className="mt-4">
            We Understand All that Matters To You Is Reliability & Safety. We
            Have A Premium Quality of Independent Drivers Ready To Pick You Up
            In Minutes All over California, We have Newer and Eco Friendly Cars.
            Our Concierge Service will Help You To Schedule The Ride You Want
            24/7 Hassle Free, and Most Essentially We Provide An Unmatched
            Quality Service that Can Help You Schedule Any Ride You Want. We
            Provide You With The Most Reliable Transportation To Airports LAX;
            BOB; SBA; LGB; Local Rides; Nemt; And Much More.
          </p>
          <p className="mt-4">
            <img
              src="/images/travel-in-california-ask-rosie-taxi-cab.webp"
              alt=""
            />
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-center">PRIVATE CAR </h2>
          <p className="mt-4">
          Our professional experienced drivers are always ready to offer you luxurious transportation services. All of our cars are fitted with navigation systems to maintain punctuality. Rosie Taxi Cab offers you : 

          </p>
          <ul className="list-disc list-inside">
            <li>
            Low cost Airport Services 24/7
            </li>
            <li>Luxurious LAX Airport Transfers</li>
            <li>Prompt LAX Airport Private Cars</li>
            <li>Simple Online & Phone Booking</li>
            <li>Dedicated Support Staff 24 hours a day</li>
          </ul>
          <p className="mt-4">
            <img
              src="/images/travel-in-california-ask-rosie-taxi-cab.webp"
              alt=""
            />
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-center">NO HIDDEN COST</h2>
          <p className="mt-4">
          While riding in our cabs, you don’t need to worry about any hidden charges or extra costs. You will always pay what quotes you were told at the time of booking. We’ll automatically update our drivers if your flight is delayed so you don’t have to worry about additional waiting time charges.
          </p>
       
          <p className="mt-4">
            <img
              src="/images/download.webp"
              alt=""
            />
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-center">FEEL THE LUXURY OF NEW CARS</h2>
          <p className="mt-4">
          Whenever you think about booking a cab, the first thing that appears in your mind is that dull and old airport cab. We are different and have worked a lot on this. We provide new looking airport transportation to LAX cabs and offer you the best riding experience in luxury cars. These cars are furnished with all the luxuries that you would surely love. If you are coming for business purposes, these will help you feel the luxury of business class.
          </p>
       
          <p className="mt-4">
            <img
              src="/images/Lucid-Air-EV-blog-featured.webp"
              alt=""
            />
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-center">
SECURE PAYMENT	
</h2>
          <p className="mt-4">
          We provide you with both options to pay online or send you a link. We accept many popular payment methods. If you don’t want to pay by cash, you can pay us online by credit or debit card. Our payment methods are 100% secure, you don’t need to worry about it. You can process payments through our websites with complete peace of mind.
          </p>
       
          <p className="mt-4">
            <img
              src="/images/card-payment-rosietaxicab.webp"
              alt=""
            />
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-center">
          LUXURY AND BUSINESS CLASS AIRPORT PRIVATE CARS
</h2>
          <p className="mt-4">
          Rosie taxi cab provides you with a lot of comfort in our luxury and modern cars. You can enjoy : 
          </p>
         
          <ul className="list-disc list-inside">
            <li>Free Air Conditioner (all of our cars are equipped with air conditioners, and you can use it without any additional charges)</li>
            <li>You can also use a laptop for your personal or professional work</li>
            <li>simultaneously.</li>
            <li>We provide daily newspapers to keep you updated with what is going</li>
            <li>on there where you are traveling.</li>
            <li>We also provide you with some refreshment things as complimentary.</li>
          </ul>
          <p className="mt-4">
            <img
              src="/images/LAX.webp"
              alt=""
            />
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-center">
          
CARS IN 10 TO 15 MIN

</h2>
          <p className="mt-4">
          Our fleet has the latest model cars to ensure that all customers enjoy a luxurious traveling experience. With the latest models available, the Rosie taxi cab has the right car for you no matter where you need to go. 
          </p>
         
      
          <p className="mt-4">
            <img
              src="/images/ride-in-10-min.webp"
              alt=""
            />
          </p>
        </div>
      </div>
    </main>
  );
}

export default PageHome;
