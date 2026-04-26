"use client";

import React, { FC, useState } from "react";
import LocationInput from "../(client-components)/(HeroSearchForm)/LocationInput";
import BookingDatesRangeInput from "./BookingDatesRangeInput";

export interface BookingLocationSearchFromProps {}

const BookingLocationSearchFrom: FC<BookingLocationSearchFromProps> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] = useState<
    "same" | "different"
  >("different");

  const renderRadioBtn = () => {
    return (
      <div className="pb-3 flex justify-center items-center space-x-3">
        <div>
          <h1>Book a Cab</h1>
        </div>
        
      </div>
    );
  };

  const renderForm = () => {
    return (
      <form className="w-full relative ">
        {renderRadioBtn()}
        <div className="flex flex-row w-full rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
          <LocationInput
            placeHolder="City or Airport"
            desc="Pick up location"
            className="flex-1"
          />
         
              <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
              <LocationInput
                placeHolder="City or Airport"
                desc="Drop off location"
                className="flex-1"
                divHideVerticalLineClass="-inset-x-0.5"
              />
           
          <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
          <BookingDatesRangeInput className="flex-1" />
        </div>
      </form>
    );
  };

  return renderForm();
};

export default BookingLocationSearchFrom;
