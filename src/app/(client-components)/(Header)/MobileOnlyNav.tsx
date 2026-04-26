'use client'
import React, { FC, useState, useRef, useEffect } from "react";
import Logo from "@/shared/Logo";
import Link from "next/link";
import PageSearchBar from "@/app/(client-components)/(Header)/PagesSearchBar";

export interface MobileOnlyNavProps {
    className?: string;
}

const MobileOnlyNav: FC<MobileOnlyNavProps> = ({ className = "" }) => {


    return (
        <div className={`lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 shadow-sm ${className}`}>
            <div className="px-4 h-16 flex items-center justify-between">
                {/* Small Logo on Left */}
                <div className="flex-shrink-0">
                        <Logo className="ttnc-logo rounded-2xl flex items-center justify-center text-primary-6000 focus:outline-none focus:ring-0  w-16" /> {/* Smaller logo for mobile */}

                </div>

                {/* Search Bar on Right */}
            </div>
        </div>
    );
};

export default MobileOnlyNav;