import React from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface TwoColumnFAQProps {
     title?:string,
    subTitle?:string
}

export default function PopularAirports({ title, subTitle }: TwoColumnFAQProps) {
    const faqItems = [
        {
            question: "How far is Ojai from LAX ?  ",
            answer: "The drive from Ojai to LAX is between 2hrs 30 min on weekdays and 1hr and 45 min on weekends."
        },
        {
            question: "how to order a cab / private car in Ojai ?",
            answer: "Ordering online has became easier. First, type in your pick up and drop off location within our booking system, choose a date and time. And make a payment on check out and you’re all set. "
        },
        {
            question: "How much is the minimun charge to lax ?",
            answer: "Our minimum charge to lax run from $190 to $240 depending on a lot of factors. Date and time of your travel, how many people, etc. We charge per car a flat rate that can accommodate 4 people. Now for a large party of people we usually suggest 2 cars or 1 XL Car that can fit 6 people."
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
            question: "how to find a good taxi near Ojai ? ",
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
        ,
        {
            question: "What is the cheapest way to get from Ojai to Los Angeles Airport LAX ?",
            answer: `The cheapest way to get from Ojai to Los Angeles Airport (LAX) is to drive to Ventura and take the train to LA’s Union Station. The cost from Ojai to Ventura’s train station on Harbord would be about $75.00 plus the cost of your train’s ticket. This solution is recommended if you do not have a flight to catch.  `
        }
        ,
        {
            question: "What is the fastest way to get from Ojai to Los Angeles Airport LAX ?",
            answer: `The fastest way to get from Ojai to Los Angeles Airport (LAX) is to drive which takes 1h 45 mn, and usually is to take the 101 south.  Now, if you live between Santa Paula and Ojai it’s better to driver towards Fillmore and towards Santa Clarita and straight to LAX. `
        }
        ,
        {
            question: "Is there a direct bus between Ojai and Los Angeles Airport LAX ?",
            answer: `No, there is no direct bus from Ojai to Los Angeles Airport (LAX). However, there are services departing from Ojai Ave & Fox and arriving at Los Angeles International Airport (LAX) via Ventura Station and Union Station FlyAway – 800 N Alameda St at Union Station / Patsaurus Plaza. The journey, including transfers, takes approximately 4h 6m.`
        }
        ,
        {
            question: "Where can I stay near Los Angeles Airport LAX?",
            answer: `There are 2504+ hotels available in Los Angeles Airport (LAX). Prices start at $97 USD per nigh.`
        }
        ,
        {
            question: "What other airports do you service ?",
            answer: `We proudly service all Airports in California 24/7 on reservation basis. `
        }
    ]


  return (
    <div className="container mx-auto  px-0 md:px-4 py-0 md:py-8 !mt-12 leading-6">
      <h2 className="text-3xl font-bold text-center mb-8">{title ? title : "Frequently Asked Questions"}</h2>

        {subTitle && (
            <p className={"text-center text-xl font-bold text-center mb-8"}>

                {subTitle}
            </p>
        )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white dark:bg-neutral-900 dark:border-white dark:border-solid dark:border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.question}</h3>
              <div className={'h-1 w-12 my-4 bg-[#00ce1b] rounded-lg'}></div>
            <p className="text-gray-600 dark:text-white">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
