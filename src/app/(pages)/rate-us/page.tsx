import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import TwoColumnFAQ from "@/components/Faq";
import Link from "next/link";
import PageEndLinks from "@/components/PageEndLinks";
import { url } from "inspector";


function PageHome() {
    const faqItems = [
        {
          question: "How far is Ventura from LAX ? ",
          answer: "The drive from Ventura to LAX is between 1hr 30 min on weekdays and 2hr on weekends."
        },
        {
          question: "how to order a cab / private car in Ventura ?",
          answer: "Ordering online has became easier. First, type in your pick up and drop off location within our booking system, choose a date and time. And make a payment on check out and you’re all set."
        },
        {
          question: "How much is the minimun charge to lax ?",
          answer: "Our minimum charge to lax run from $160 to $200 depending on a lot of factors. Date and time of your travel, how many people, etc. We charge per car a flat rate that can accommodate 4 people. Now for a large party of people we usually suggest 2 cars or 1 XL Car that can fit 6 people."
        },
        {
          question: "how long does it take to get a driver ? ",
          answer: "Between 10 to 15 min in the city. Now if you’re outside the city the pick up time will fluctuate depending on the distance the driver to drive to get at your location. If you order online you won’t lose your place."
        },
        {
          question: "Does Rosie Taxi Cab Open 24/7 is the best ? ",
          answer: "Yes. We are the best transportation company in Ventura’s County. It’s not an opinion. It’s a proven track record that corroborate our partnership with Lyft’s concierge to service all over CA. While old taxis take at least 30 min for a pick up we usually are there between 10-15 min.  We offer several transportation solutions such as : Airport rides, nemt, Accounts, Online Booking and Online payment, etc."
        },
        {
          question: "how to find a good taxi near Ventura CA ? ",
          answer: `You see most of the mediocre transportation companies in Ventura are all rated 5 stars with 2 to 3 cars on board. How is it possible they can be quick and efficient ? Here’s our approach to help you understand and choose carefully a reputable taxi service in Ventura CA : First, check the overall rating of their listing in Trip Advisor, the reputation of their reliability, the recommendations and how trustworthy the taxi or private car in the area. In nutshell, finding a reliable taxi cab near me can be tricky but don’t worry Rosie Taxi Cab is the most reliable taxi service in Ventura’s County and it is open 24/7. We’ve the experience and the technology to operate efficiently. 
`
        }
     ,
        {
          question: "Do you take card payment ?",
          answer: `Yes. We take all major cards. We are cashless, we work on demand, we help you design the trip you want and more affordable than the conventional taxis.`
        }
     ,
        {
          question: "What Cities do you service ?",
          answer: `We proudly service all over California 24/7 but we always advise you to make a reservation online or over the phone for prompt and reliable service. We still take spontaneous calls of course but we advise you to make a reservation.`
        }
     ,
        {
          question: "Can i call on same day to go to LAX ? ",
          answer: `Yes. But we highly encourage you to make a reservation online or over the phone. When you have a flight to catch you need to prepare yourself ahead of time. Don’t assume last minute call.`
        }
     ,
        {
          question: "What Cities do you service ?",
          answer: `We proudly service all over California 24/7 but we always advise you to make a reservation online or over the phone for prompt and reliable service. We still take spontaneous calls of course but we advise you to make a reservation.`
        }
      ]

      const routes = [
        { name: 'Transportation service from Ventura to LAX', href: '#' },
        { name: ' Transportation service from Ventura to BOB AIRPORT ', href: '#' },
        { name: 'Transportation service from Ventura to SBA', href: '#' },
        { name: 'Transportation service from Ventura to John Wayne Airport', href: '#' },
        { name: 'Transportation service from Ventura to Los Angeles', href: '#' },
        { name: 'Transportation service from Ventura to Hollywood', href: '#' },
        { name: 'Transportation service from Ventura to Burbank', href: '#' },
        { name: 'Transportation service from Ventura to Disney Land', href: '#' },
        { name: 'Transportation service from Ventura to Universal Studios', href: '#' },
        { name: 'Transportation service from Ventura to Rodeo dr Beverly Hills', href: '#' },
        { name: 'Transportation service from Ventura to San Diego', href: '#' },
        { name: 'Transportation service from Ventura to Westlake Village', href: '#' },
        { name: 'Transportation service from Ventura to Santa Monica', href: '#' },
        { name: 'Transportation service from Ventura to Holmby Hills', href: '#' },
        { name: 'Transportation service from Ventura to Malibu', href: '#' },
      ]
      
    return (
        <main className="nc-PageHome relative overflow-hidden  dark:bg-neutral-900 dark:text-white">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-16 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16 " />

                <>
                    {/* Mission San Buenaventura Section */}
                    <CitiesInfoSection
                    className="leading-6"
                        heading="
REAL FEEDBACKS
 "
                        text={
                            <>
                                {/* <p>TRANSPORTATION FROM VENTURA TO LAX </p> */}

                          <p>
                          We’re so excited to have our customers join and share their respective reviews on Trip Advisor. A platform where real customers can share their experiences with our company Rosie Taxi Cab. We are confident that you’re in good hands when expressing your sentiments vis a vis your experience with us.  Real reviews are intended to describe a genuine experience based on the facts on your trip, for example. We strive to provide an honest transportation service in connection with UBER / LYFT CONCIERGE where the ride is guaranteed. We take genuine feedbacks with the utmost care to deliver better and cost effective results in the future.  Trip Advisor is the place where we ask our customers for reviews, Trip Advisor is the market place to select and buy trips, and we can customize any trip to and from any Airport or local area in California. 
                          </p>
                            </>
                        }
                        image="/images/Trip-Advisor-Rosie-Taxi-Cab.webp"
                        imagePosition="right"
                        buttons={[
                            { url: "https://www.tripadvisor.com/ShowUserReviews-g60769-d9820760-r936627981-Rosie_Taxi_Cab-Ventura_California.html", text: "WE'RE ON TRIP ADVISOR " },
                           
                        ]}
                       
                    />

           

                    {/* Downtown Ventura Section */}
               
                    {/* Ventura Botanical Gardens Section */}
                 
                    {/* Ventura Botanical Gardens Section */}
               
                </>

            </div>
        </main>
    );
}

export default PageHome;
