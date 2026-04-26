import React from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import laxImg from "@/images/airports/lax-airport.webp";
import Badge from "@/shared/Badge";
import CitiesHeroSection from "@/app/cities/CitiesHeroSection";
import CitiesInfoSection from "@/app/cities/CitiesInfoSection";
import HashTags from "@/components/KeywordTags";

interface DynamicPageProps {
    title: string;
    body: string; // Changed from React.ReactNode to string
}

function DynamicPage({ title, body }: DynamicPageProps) {
    const markup = { __html: body };

    return (
        <main className="nc-PageHome relative overflow-hidden">
            {/* GLASSMOPHIN */}
            <BgGlassmorphism />

            <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
                {/* SECTION HERO */}
                <CitiesHeroSection className="pt-10 lg:pt-16 lg:pb-16" />

                <div className="max-w-4xl mx-auto">
                    {/* Title as H1 */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
                        {title}
                    </h1>

                    {/* Body content */}
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={markup}
                    />
                </div>
            </div>
        </main>
    );
}

export default DynamicPage;