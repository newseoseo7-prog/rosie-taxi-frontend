"use client";

import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";

export default function PageContent({ pageData }: { pageData: any }) {
  const content = pageData?.content;

  // Fix image/media URLs so Payload’s relative paths become absolute
  const fixedContent = content
    ? JSON.parse(
        JSON.stringify(content).replace(
          /"url":"\/api\/media/g,
          `"url":"${process.env.NEXT_PUBLIC_BACKEND_URL}/api/media`
        )
      )
    : null;

  return (
    <main className="container mx-auto px-4">
      <div className="space-y-8 py-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent leading-tight">
          {pageData?.title}
        </h1>

        {/* Description */}
        {pageData?.description && (
          <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-center text-gray-600 dark:text-gray-400 leading-relaxed">
            {pageData.description}
          </p>
        )}

        {/* Booking Button */}
        {pageData?.booking ? (
          <div className="pt-6 pb-10 flex items-center justify-center">
            <Link
              href="/booking"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <span className="relative">Book Your Ride Now</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        ) : (
          <div className="pt-6 pb-10 flex items-center justify-center">
            <div className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-600 bg-red-50 dark:text-red-400 dark:bg-gray-900 border-2 border-red-600 dark:border-red-500 rounded-2xl dark:shadow-[0_10px_25px_rgba(255,0,0,0.4)] shadow-[0_8px_20px_rgba(255,0,0,0.3)] cursor-not-allowed transition-all duration-300">
              <span className="relative flex items-center gap-3">
                <span className="animate-bounce-slow">⏳</span>
                Booking Coming Soon
              </span>
            </div>
          </div>
        )}

        {/* Rich Text Section */}
        {fixedContent && (
          <section className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:bg-gradient-to-br prose-headings:from-gray-900 prose-headings:to-gray-700 dark:prose-headings:from-white dark:prose-headings:to-gray-300 prose-headings:bg-clip-text prose-headings:text-transparent prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-2xl prose-img:shadow-xl prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gray-100 dark:prose-blockquote:bg-gray-800 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl">
            <RichText data={fixedContent} />
          </section>
        )}
      </div>
    </main>
  );
}
