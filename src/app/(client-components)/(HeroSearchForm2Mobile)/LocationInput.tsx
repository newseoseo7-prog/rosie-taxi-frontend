"use client";

import { MapPinIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useRef, FC } from "react";

interface LocationInputProps {
    onClick?: () => void;
    onChange?: (value: LocationResult) => void;
    className?: string;
    defaultValue?: string;
    headingText?: string;
    placeholder?: string;
    disabled?: boolean;
}

interface LocationResult {
    place_id: string;
    formatted_address: string;
    name: string;
    icon: string;
    lat: number;
    lng: number;
}

const LocationInput: FC<LocationInputProps> = ({
                                                   onChange,
                                                   className = "",
                                                   defaultValue = "",
                                                   disabled = false,
                                                   headingText = "Where to?",
                                                   placeholder = "Search destinations"
                                               }) => {
    const [value, setValue] = useState(defaultValue);
    const [searchResults, setSearchResults] = useState<LocationResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        const fetchLocations = async () => {
            if (!value.trim()) {
                setSearchResults([]);
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            try {
                const response = await fetch(`/api/search?query=${encodeURIComponent(value)}`, {
                    cache: 'no-store'
                });
                const data = await response.json();
                setSearchResults(
                    data.map((item: any) => ({
                        place_id: item.place_id,
                        formatted_address: item.formatted_address,
                        name: item.name,
                        lat: item.geometry.location.lat,
                        lng: item.geometry.location.lng,
                        icon: item.icon,
                    }))
                );
            } catch (error) {
                console.error("Error fetching location data:", error);
                setSearchResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchLocations, 300); // Debounce
        return () => clearTimeout(timeoutId);
    }, [value]);

    const handleSelectLocation = (location: LocationResult) => {
        setValue(location.name);
        setSearchResults([]);
        onChange?.(location);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            setValue(e.currentTarget.value);
        }
    };

    const renderSearchResults = () => {
        if (isLoading) {
            return (
                <div className="flex items-center justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-neutral-700 dark:border-neutral-300"></div>
                </div>
            );
        }

        if (searchResults.length === 0 && value.trim()) {
            return (
                <div className="py-4 text-center">
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">No results found</p>
                </div>
            );
        }

        if (searchResults.length === 0) {
            return null;
        }

        return (
            <div className="max-h-48 sm:max-h-60 overflow-y-auto border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 shadow-lg">
                {searchResults.map((result, index) => (
                    <div
                        className="px-3 py-3 sm:px-4 sm:py-3 flex items-start space-x-3 text-sm cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-150 border-b border-neutral-100 dark:border-neutral-700 last:border-b-0"
                        key={result.place_id}
                        onClick={() => handleSelectLocation(result)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleSelectLocation(result);
                            }
                        }}
                    >
                        <img src={result.icon} alt={result.name} className="w-5 h-5 text-neutral-500 dark:text-neutral-400 flex-shrink-0 mt-0.5"/>

                        <span className="text-neutral-800 dark:text-neutral-200 leading-relaxed break-words">
              {result.name || result.formatted_address}
             <br /> { result.formatted_address}
            </span>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={`w-full ${className}`} ref={containerRef}>
            <div className="p-3 sm:p-5">
                <h2 className="block font-semibold text-lg sm:text-xl lg:text-2xl text-neutral-900 dark:text-neutral-100 mb-1">
                    {headingText}
                </h2>

                <div className="relative mt-3 sm:mt-5">
                    <input
                        className={`block w-full bg-transparent border px-3 py-2.5 sm:px-4 sm:py-3 pr-10 sm:pr-12 border-neutral-300 dark:border-neutral-600 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 focus:outline-none text-sm sm:text-base leading-normal placeholder-neutral-500 dark:placeholder-neutral-400 font-medium transition-all duration-200 ${
                            disabled ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        placeholder={placeholder}
                        value={value}
                        onChange={handleInputChange}
                        ref={inputRef}
                        disabled={disabled}
                        autoComplete="off"
                        spellCheck={false}
                    />
                    <span className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 dark:text-neutral-400" />
          </span>
                </div>

                <div className="mt-4 sm:mt-6 relative">
                    {value && renderSearchResults()}
                </div>
            </div>
        </div>
    );
};

export default LocationInput;