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
    
    return (
        <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 leading-6">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

           
                <div>
                    <h2 className="text-4xl text-center">California Consumer Privacy Act</h2>
                    <p className="mt-4">
                    The California Consumer Privacy Act of 2018 (CCPA) gives consumers more control over the personal information that businesses collect about them. This landmark law secures new privacy rights for California consumers, including:
                    </p>
                    <ul className="mt-4 list-disc list-inside">
                        <li>The right to know about the personal information a business collects about them and how it is used and shared</li>
                        <li>The right to delete personal information collected from them (with some exceptions);</li>
                        <li>The right to opt-out of the sale of their personal information</li>
                        <li>The right to non-discrimination for exercising their CCPA rights.</li>
                        <li>Businesses are required to give consumers certain notices explaining their privacy practices. The CCPA applies to many businesses, including data brokers.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default PageHome;
