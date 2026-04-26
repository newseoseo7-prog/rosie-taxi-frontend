import {  Open_Sans } from "next/font/google";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import FloatingCallButton from "@/components/FloatingCallButton";
import schemaData from "@/app/schema";
import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'
import Logo from "@/shared/Logo";
import MobileOnlyNav from "@/app/(client-components)/(Header)/MobileOnlyNav";
import GoogleMapsScript from '@/components/GoogleMapsScript';
import { GoogleMapsProvider } from "@/components/GoogleMapsProvider";
//
// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });
// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });
// const rubik = Rubik({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });
const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});
export const dynamicParams = true; // Enable dynamic params for all routes

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" className={open_sans.className}>

      <body className="bg-white text-base dark:bg-neutral-700">
      <script src="https://js.authorize.net/v3/Accept.js"></script>


      <GoogleMapsProvider>
        <ClientCommons />
        <MobileOnlyNav />

        <SiteHeader className="hidden lg:block" />
          {children}
          <FloatingCallButton phoneNumber="tel:+18052588937" />
          <FooterNav />
          <Footer />
      </GoogleMapsProvider>

      </body>
      <GoogleAnalytics gaId="G-KTJ8Y2DCB3" />

    </html>
  );
}