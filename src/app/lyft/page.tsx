import Image, { StaticImageData } from "next/image";
import React, { FC, ReactNode } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Link from "next/link";



const SectionHero: any = () => {
  return (
    <div className="text-center container py-20 dark:text-white">
      <h2 className="text-3xl font-bold  md:text-5xl">
        EXPERIENCE THE DIFFERENCE WITH ROSIE TAXI CAB LYFT'S CONCIERGE !
      </h2>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 ">
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            FAST PICK UPS <br />
            10-15 MIN
            <br />
            <br />
            ONCE YOU REQUEST A RIDE WE GUARANTEE FAST PICK UPS.
            <br />
            <br />
            NOBODY HAS TIME TO WASTE. WE GOT THAT. WHY WOULD YOU WAIT FOR THE
            CONVENTIONAL TAXIS IF IT WOULD TAKE MORE TIME AT HIGHER COST ? IT
            DOES NOT MAKE SENSE !
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            ALL COMMUNICATIONS <br />
            IN 1TEXT
            <br />
            <br />
            ALL COMMUNICATIONS IN 1 TEXT TO TRACK BETTER YOUR RIDE AND YOUR
            RECEIPT.
            <br />
            <br />
            WE WANT TO MAKE THINGS SUPER SIMPLE. WE SCHEDULE YOUR RIDE;
            COORDINATE WITH THE DRIVER (S); TEXT YOU HIS ARRIVAL TIME; AND GIVE
            YOU A REMINDER CALL.
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            PERFECT CONCIERGE <br />
            LYFT
            <br />
            <br />
            YOU HAVE A BUSY SCHEDULE, YOU ALWAYS RUN ON LAST MINUTE CALLS, OR
            MOST LIKELY YOU PREFER TO DELEGATE YOUR TRANSPORTATION REQUEST TO A
            PROFESSIONAL CONCIERGE? NOTHING TO WORRY ABOUT. THAT'S WHAT WE DO
            24/7. FROM YOUR INITIAL BOOKING ALL THE WAY TO THE DROP OFF.
            <br />
            <br />
            WE SCHEDULE YOUR RIDE BEFOREHAND AND SECURELY TO GUARANTEE YOUR PICK
            UP.
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            CONVENIENT <br />
            OPEN 24/7
            <br />
            <br />
            ALL COMMUNICATIONS IN 1 TEXT TO TRACK BETTER YOUR RIDE AND YOUR
            RECEIPT.
            <br />
            <br />
            WE WANT TO MAKE THINGS SUPER SIMPLE. WE SCHEDULE YOUR RIDE;
            COORDINATE WITH THE DRIVER (S); TEXT YOU HIS ARRIVAL TIME; AND GIVE
            YOU A REMINDER CALL.
            <br />
            <br />
            WE PROVODE SAFE AND SECURE AND RELIABLE RIDES.
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            THE AIRPORT SPECIALIST <br />
            $ 170
            <br />
            <br />
            YOU LAX LOS ANGELES AIRPORT <br />
            <br />
            BOB AIRPORT BURBANK <br />
            <br />
            SBA AIRPORT SANTA BARBARA <br />
            <br />
            LGB AIRPORT LONG BEACH <br />
            <br />
            SAN LUIS OBISPO AIRPORT <br />
            <br />
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            LARGE PARTY <br />
            PEOPLE
            <br />
            <br />
            WE HELP YOU SCHEDULE YOUR RIDES <br />
            <br />
            WE HELP YOU ALLOCATE ENOUGH CARS.
            <br />
            <br />
            WE DO THE ENTIRE COORDINATION END TO END SO YOU CAN FOCUS ON YOUR
            OPERATIONS.
            <br />
            <br />
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            BUILT ON DEMAND RELIABLE <br />
            ON DEMAND 1 CLICK AWAY.
            <br />
            <br />
            BOONCE YOUR BOOKING IS MADE YOU WILL RECEIVE DRIVER INFO ON SAME
            DAY. <br />
            <br />
            WE SECURE RIDES WHERE THE REST FAILS TO SERVICE OR MONEY BACK
            GUARANTEED.
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            LAST MINUTE CALL <br />
            YES
            <br />
            <br />
            WE CAN ASSIST IN CREATING THE RIDE YOU DESIRE, EVEN IF YOU CALL AT
            THE LAST MINUTE, ALTOUGH WE ADVISE YOU TO BOOK AHEAD OF TIME. <br />
            <br />
            LARGE FLEET AVAILABLE TO HANDLE LARGE GROUP OF PEOPLE.
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            BOOK ONLINE SAVE 20% FAST AND EASY
            <br />
            ONLINE BOOKING SAVES YOU ON EVERY TRIP. ORDER ONLINE, PAY WITH CARD,
            AND THERE YOU GO.
            <br />
            <br />
            WE WORK BETTER ON RESERVATIONS. EACH RESERVATION IS CONFIRMED BEFORE
            HAND.
          </h3>
        </div>
        <div className="border p-4">
          <h3 className="text-xl md:text-3xl mt-3  font-semibold">
            TOP PRIVACY APPROACH
            <br />
            WE DON'T TRACK YOU BY ADS /REMARKETING. WE WANT TO ENSURE THAT OUR
            PLATFORM STAYS FRIENDLY AND ERGONOMIC.
            <br />
            <br />
            YOUR INFORMATION IS SECURE AND IT COMPLIES WITH APPLICABLE CA LAWS
            AND PCI COMPLIANCE.
          </h3>
        </div>
      </div>

      <div className="py-6">
        

¶ Customers must meet credit/debit card eligibility criteria prior to the reservation. Meaning he/she waive any dispute or charge back upon the booking. We “the company ” refund payment (s) only if we failed to deliver the results ( your reservation).
<br /><br />
ǁ Every reservation should meet our <Link href={"/legal-terms"}> legal terms</Link> and customers are fully aware of our policy’s prior to book with us.
<br /><br />

ǁǁ For safety and quality purposes every conversation is recorded for voiding any difference in our terms¶;  ǁ; ǁǁ; §;§§;  all references. 
<br /><br />

§ Our method of payment is card. We occasionally take Zelle payment in rare cases. 
<br /><br />

§§ Our company can work with your health provider, insurance provider, legal provider based on our proposed terms and conditions. 
<br /><br />

References: 1. All payments are final. Payments are processed as soon as the reservation is made. 2. Our company is managed by LYFT / UBER Business on a day to day operations. 3.Our price is fix, occasionally it surges depending on a lot of factor but not limited to such as : drivers availability, time of the pick up, rush hours, etc. ǁ Every reservation should meet our legal terms and customers are fully aware of our policy’s prior to book with us.  https://new.rosietaxicab.com/legal-terms/4. Our platform is designed for transportation service. 5. We reserve the right to refuse service based on several factors but not limited to : fraud, defamatory statements, threat, blackmail, etc.  6.  You agree with all of our terms and conditions when you land on our pages. 7. Ordering over the phone or through our website constitutes a legal binding agreement.  8. We keep data on file upon your request to create an account. 9. The data that we keep on file is your personal information and your credit/debit card to process further reservations upon your request. 10. By ordering with us you agree with our terms and conditions. 11. Our fundamental theory of doing business is very simple and as follows : being transparent about our operations from end to end.  

      </div>
    </div>
  );
};

export default SectionHero;
