'use client'
import {useEffect, useRef, useState} from "react";

const TimeSelect = ({
                        value,
                        onChange,
                        options,
                        disabled,
                    }: {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    disabled: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Calculate max height based on viewport height
    const calculateMaxHeight = () => {
        if (!dropdownRef.current) return '200px';
        const rect = dropdownRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom - 10;
        return `${Math.min(spaceBelow, 300)}px`; // Max 300px or whatever fits
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                className={`border p-2 rounded-md pr-8 dark:bg-neutral-800 dark:border-black w-full text-left ${
                    disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
            >
                {value || (disabled ? 'Select Date First' : 'Select Time')}
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
          ▼
        </span>
            </button>

            {isOpen && (
                <div
                    className="absolute z-10 mt-1 w-full bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-md shadow-lg overflow-y-auto"
                    style={{ maxHeight: calculateMaxHeight() }}
                >
                    {options.map((time) => (
                        <div
                            key={time}
                            className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                                onChange(time);
                                setIsOpen(false);
                            }}
                        >
                            {time}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default TimeSelect