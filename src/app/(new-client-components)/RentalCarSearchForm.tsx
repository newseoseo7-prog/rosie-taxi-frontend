 "use client";

 import React, {FC, useState} from "react";
 import LocationInput from "./LocationInput";
 import ExperiencesDateSingleInput from "./ExperiencesDateSingleInput";
 import SearchSubmitButton from "./SearchSubmitButton";
 import { useRouter } from 'next/navigation'


 export interface RentalCarSearchFormProps {}

const RentalCarSearchForm: FC<RentalCarSearchFormProps> = ({}) => {
  const [dropOffLocationType, setDropOffLocationType] = useState<"different">("different");

  // Add state variables for each input field
  const [pickUpLocation, setPickUpLocation] = useState<any | null>(null);
  const [dropOffLocation, setDropOffLocation] = useState<any | null>(null);
  const [selectedDate, setSelectedDate] = useState<any | null>(null);
    const router = useRouter()

  const renderRadioBtn = () => {
    return (
      <div className="py-5 [ nc-hero-field-padding ] flex items-center flex-wrap flex-row border-b border-neutral-100 dark:border-neutral-700">
        <div
          className={`py-1.5 px-4 flex items-center rounded-full font-medium text-xs cursor-pointer mr-2 my-1 sm:mr-3 ${
            dropOffLocationType === "different"
              ? "bg-black text-white shadow-black/10 shadow-lg"
              : "border border-neutral-300 dark:border-neutral-700"
          }`}
          onClick={(e) => setDropOffLocationType("different")}
        >
          Different drop off
        </div>
      </div>
    );
  };

  const handleSearchClick = () => {
    // Log the collected values
    console.log("Search button clicked!");
    console.log("Pick-up Location:", pickUpLocation);
    console.log("Drop-off Location:", dropOffLocation);
    console.log("Selected Date:", selectedDate);
    console.log("Redirecting ==========>")
    //redirect user to summary page via
  //  redirect(`/summary?from=${pickUpLocation.lat},${pickUpLocation.lng}`,RedirectType.push) // Navigate to the new post page

      router.push(`/summary?from=${pickUpLocation.lat},${pickUpLocation.lng}&to=${dropOffLocation.lat},${dropOffLocation.lng}&date=${selectedDate.startDate}`)
  };

  const isDropOffDifferent = dropOffLocationType === "different";

  return (
    <form className="w-full relative mt-8 rounded-[40px] xl:rounded-[49px] rounded-t-2xl xl:rounded-t-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
      <div className={`relative flex flex-row`}>
        <LocationInput
          placeHolder="City or Airport"
          desc="Pick up location"
          className="flex-1"
          onChange={(value) => setPickUpLocation(value)}
        />
        {isDropOffDifferent && (
          <>
            <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
            <LocationInput
              placeHolder="City or Airport"
              desc="Drop off location"
              className="flex-1"
              divHideVerticalLineClass="-inset-x-0.5"
              onChange={(value) => setDropOffLocation(value)}
            />
          </>
        )}
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <ExperiencesDateSingleInput
          className="flex-1"
          onChange={(date) => setSelectedDate(date)}
        />
        <SearchSubmitButton className="mt-2 me-2" onClick={handleSearchClick} />
      </div>
    </form>
  );
};

export default RentalCarSearchForm;
