"use client"
import React, { useEffect, useState } from "react";
import { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { Route } from "@/routers/types";

export interface CommonLayoutProps {
  children: React.ReactNode;
  params: Promise<{ stepIndex: string }>;
}



const CommonLayout: FC<CommonLayoutProps> = ({ children, params }) => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setIndex(Number(resolvedParams.stepIndex) || 1);
    };
    resolveParams();
  }, [params]);

  const nextHref = (
    index < 10 ? `/add-listing/${index + 1}` : `/add-listing/1`
  ) as Route;
  const backtHref = (
    index > 1 ? `/add-listing/${index - 1}` : `/add-listing/1`
  ) as Route;
  const nextBtnText = index > 9 ? "Publish listing" : "Continue";

  return (
    <div className="nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32">
      <div className="space-y-11 dark:bg-neutral-700 py-4 px-4 rounded">
        <div>
          <span className="text-4xl font-semibold dark:text-white">{index}</span>{" "}
          <span className="text-lg text-neutral-500  dark:text-white">
            / 10
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap dark:text-white">{children}</div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary   aria-label="submit" href={backtHref}>Go back</ButtonSecondary>
          <ButtonPrimary  aria-label="submit" href={nextHref}>{nextBtnText}</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
