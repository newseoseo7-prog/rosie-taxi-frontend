import React, { Suspense } from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BookingForm from "@/app/booking/booking-form";

export async function generateMetadata() {
  return {
    title: "Rosie Taxicab | Reliable Taxi Services",
    description:
      "Reliable taxi cab transportation in Ventura and surrounding areas including LAX, Burbank, and Santa Barbara airports.",
  };
}

export default function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      <BgGlassmorphism />
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <Suspense
          fallback={
            <div className="w-full text-center py-10">
              Loading booking form...
            </div>
          }
        >
          <BookingForm />
        </Suspense>
      </div>
    </main>
  );
}
