"use client";

import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import React, { useState, useRef, useEffect, FC } from "react";
import ClearDataButton from "./ClearDataButton";

export interface LocationInputProps {
  placeHolder?: string;
  desc?: string;
  className?: string;
  divHideVerticalLineClass?: string;
  autoFocus?: boolean;
  onChange?: (value: LocationResult) => void;
}

interface LocationResult {
  place_id: string;
  formatted_address: string;
  lat: number;
  lng: number;
}

const LocationInput: FC<LocationInputProps> = ({
                                                 autoFocus = false,
                                                 placeHolder = "Location",
                                                 desc = "Where are you going?",
                                                 className = "nc-flex-1.5",
                                                 divHideVerticalLineClass = "left-10 -right-0.5",
                                                 onChange,
                                               }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState("");
  const [showPopover, setShowPopover] = useState(autoFocus);
  const [searchResults, setSearchResults] = useState<LocationResult[]>([]);

  useEffect(() => {
    setShowPopover(autoFocus);
  }, [autoFocus]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPopover(false);
      }
    };

    if (showPopover) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPopover]);

  useEffect(() => {
    if (showPopover && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showPopover]);

  useEffect(() => {
    const fetchLocations = async () => {
      if (!value) {
        setSearchResults([]);
        return;
      }
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        const response = await fetch(`/api/search?query=${value}`,{cache:'no-store'});
        const data = await response.json();
        setSearchResults(data.map((item: any) => ({
          place_id: item.place_id,
          formatted_address: item.formatted_address,
          lat: item.geometry.location.lat,
          lng: item.geometry.location.lng,
        })));
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocations();
  }, [value]);

  const handleSelectLocation = (location: LocationResult) => {
    setValue(location.formatted_address);
    setShowPopover(false);

    onChange?.(location);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    onChange?.({
      place_id: "",
      formatted_address: newValue,
      lat: 0, // Default values until updated from map or search
      lng: 0,
    });
  };

  const renderSearchResults = () => {
    return searchResults.length ? (
        searchResults.map((result) => (
            <span
                onClick={() => handleSelectLocation(result)}
                key={result.place_id}
                className="flex px-4 sm:px-8 items-center space-x-3 sm:space-x-4 py-4 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
            >
          <span className="block text-neutral-400">
            <MapPinIcon className="h-4 w-4 sm:h-6 sm:w-6" />
          </span>
          <span className="block font-medium text-neutral-700 dark:text-neutral-200">
            {result.formatted_address}
          </span>
        </span>
        ))
    ) : (
        <p className="text-neutral-500 px-4">No results found</p>
    );
  };

  return (
      <div className={`relative flex ${className}`} ref={containerRef}>
        <div
            onClick={() => setShowPopover(true)}
            className={`flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left ${
                showPopover ? "nc-hero-field-focused" : ""
            }`}
        >
          <div className="text-neutral-300 dark:text-neutral-400">
            <MapPinIcon className="w-5 h-5 lg:w-7 lg:h-7" />
          </div>
          <div className="flex-grow">
            <input
                className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
                placeholder={placeHolder}
                value={value}
                onChange={handleInputChange}
                ref={inputRef}
                autoFocus={showPopover}
            />
            <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
            <span className="line-clamp-1">{!!value ? placeHolder : desc}</span>
          </span>
            {value && showPopover && (
                <ClearDataButton onClick={() => setValue("")} />
            )}
          </div>
        </div>

        {showPopover && (
            <div
                className={`h-8 absolute self-center top-1/2 -translate-y-1/2 z-0 bg-white dark:bg-neutral-800 ${divHideVerticalLineClass}`}
            ></div>
        )}

        {showPopover && (
            <div className="absolute left-0 z-40 w-full min-w-[300px] sm:min-w-[500px] bg-white dark:bg-neutral-800 top-full mt-3 py-3 sm:py-6 rounded-3xl shadow-xl max-h-96 overflow-y-auto">
              {renderSearchResults()}
            </div>
        )}
      </div>
  );
};

export default LocationInput;
