"use client";

import React, { FC, useState } from "react";
import RentalCarSearchForm from "./RentalCarSearchForm";

export type SearchTab = "Taxi";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?:  "Taxi" ;
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
}) => {

  const renderForm = () => {
    return <RentalCarSearchForm />;
  };

  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-2 lg:py-0 ${className}`}
    >
      {renderForm()}
    </div>
  );
};

export default HeroSearchForm;
