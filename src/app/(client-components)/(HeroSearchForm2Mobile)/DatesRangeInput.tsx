import DatePicker from "react-datepicker";
import React, {FC, useState} from "react";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import DatePickerCustomDay from "@/components/DatePickerCustomDay";

export interface StayDatesRangeInputProps {
    className?: string,
    onChange?: (startDate: Date | null, endDate: Date | null) => void,
    isRange?: boolean,
    startDate?: Date | null,
    endDate?: Date | null,
    disabled?: boolean
}

const StayDatesRangeInput: FC<StayDatesRangeInputProps> = ({
                                                               className = "",
                                                               onChange,
                                                               isRange = true,
                                                               startDate,
                                                               endDate,
                                                               disabled
                                                           }) => {
    const onChangeDate = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        // Directly set the dates using the parent callback
        if (onChange) {
            onChange(start, end);
        }
    };

    return (
        <div>
            <div className="p-5">
        <span className="block font-semibold text-xl sm:text-2xl">
          {` When's your trip?`}
        </span>
            </div>

            <div className={`relative flex-shrink-0 flex justify-center z-10 py-5 ${className}`}>
                <DatePicker
                    selected={startDate}
                    onChange={isRange ? onChangeDate : (date: any) => onChange?.(date, null)} // Update start date or both
                    startDate={isRange ? startDate : undefined}
                    endDate={isRange ? endDate : undefined}
                    selectsRange={isRange} // Handle range logic
                    monthsShown={1}
                    showPopperArrow={false}
                    inline
                    renderCustomHeader={(p) => <DatePickerCustomHeaderTwoMonth {...p} />}
                    renderDayContents={(day, date) => <DatePickerCustomDay dayOfMonth={day} date={date}/>}
                />
            </div>
        </div>
    );
};

export default StayDatesRangeInput;
