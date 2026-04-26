 "use client";

import React, { Fragment, useState, FC } from "react";
import DatePicker from "react-datepicker";
import { Popover, Transition } from "@headlessui/react";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import ClearDataButton from "./ClearDataButton";

export interface DateSingleInputProps {
  className?: string;
  fieldClassName?: string;
  onChange?: (dates: { startDate: Date | null; endDate: Date | null }) => void;
}

const DateSingleInput: FC<DateSingleInputProps> = ({
  className = "",
  fieldClassName = "[ nc-hero-field-padding--small ]",
  onChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date("2023/03/01"));
  const [endDate, setEndDate] = useState<Date | null>(new Date("2023/03/16"));

  const onChangeDate = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    // Trigger the onChange prop if provided
    if (onChange) {
      onChange({ startDate: start, endDate: end });
    }
  };

  const renderInput = () => {
    return (
      <>
        <div className="flex-grow text-left">
          <span className="block xl:text-base dark:text-white font-semibold">
            {startDate?.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            }) || "Date"}
            {endDate
              ? " - " +
                endDate?.toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                })
              : ""}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {startDate ? "Date" : `Add dates`}
          </span>
        </div>
      </>
    );
  };

  return (
    <>
      <Popover className={`ExperiencesDateSingleInput relative flex ${className}`}>
        {({ open }) => (
          <>
            <Popover.Button
              className={`flex-1 z-10 flex relative ${fieldClassName} items-center space-x-3 focus:outline-none ${
                open ? "nc-hero-field-focused--2" : ""
              }`}
            >
              {renderInput()}
              {startDate && open && (
                <ClearDataButton  onClick={() => onChangeDate([null, null])} />
              )}
            </Popover.Button>

            {open && (
              <div className="h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 -inset-x-0.5 bg-white dark:bg-neutral-700 "></div>
            )}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute overflow-scroll -left-80 z-[99999] -mt-16 top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                <div className="rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:text-white dark:bg-neutral-800 p-4">
                  <DatePicker
                    selected={startDate}
                    onChange={onChangeDate}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    monthsShown={2}
                    showPopperArrow={false}
                    inline
                    renderCustomHeader={(p) => (
                      <DatePickerCustomHeaderTwoMonth {...p} />
                    )}
                    renderDayContents={(day, date) => (
                      <DatePickerCustomDay dayOfMonth={day} date={date} />
                    )}
                  />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default DateSingleInput;
