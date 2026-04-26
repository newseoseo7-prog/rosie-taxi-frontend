"use client";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import { PathName } from "@/routers/types";
import MenuBar from "@/shared/MenuBar";
import isInViewport from "@/utils/isInViewport";
import Link from "next/link";
import { usePathname } from "next/navigation";

let WIN_PREV_POSITION = 0;
if (typeof window !== "undefined") {
  WIN_PREV_POSITION = window.pageYOffset;
}

interface NavItem {
  name: string;
  link?: PathName;
  icon: any;
  protected?: boolean; // New property to indicate if item requires login
}

const NAV: NavItem[] = [
  {
    name: "Home",
    link: "/",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Discovery",
    link: "/discovery",
    icon: HeartIcon,
  },
  {
    name: "Account",
    link: "/account",
    icon: UserCircleIcon,
    protected: true, // Mark account as protected route
  },
  {
    name: "Menu",
    icon: MenuBar,
  },
];

const FooterNav = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage when component mounts
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleEvent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEvent = () => {
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(showHideHeaderMenu);
    }
  };

  const showHideHeaderMenu = () => {
    let currentScrollPos = window.pageYOffset;
    if (!containerRef.current) return;

    // SHOW _ HIDE MAIN MENU
    if (currentScrollPos > WIN_PREV_POSITION) {
      if (
          isInViewport(containerRef.current) &&
          currentScrollPos - WIN_PREV_POSITION < 80
      ) {
        return;
      }

      containerRef.current.classList.add("FooterNav--hide");
    } else {
      if (
          !isInViewport(containerRef.current) &&
          WIN_PREV_POSITION - currentScrollPos < 80
      ) {
        return;
      }
      containerRef.current.classList.remove("FooterNav--hide");
    }

    WIN_PREV_POSITION = currentScrollPos;
  };

  const renderItem = (item: NavItem, index: number) => {
    const isActive = pathname === item.link;

    // Skip rendering protected items if not logged in
    if (item.protected && !isLoggedIn) {
      return null;
    }

    return item.link ? (
        <Link
            key={index}
            aria-labelledby={item.name}
            aria-label={item.name}
            href={item.protected && !isLoggedIn ? "/login" : item.link}
            className={`flex flex-col items-center justify-between text-white ${
                isActive ? "text-neutral-900 dark:text-neutral-100" : ""
            }`}
        >
          <item.icon className={`w-6 h-6 ${isActive ? "text-white" : ""}`} />
          <span
              className={`text-[11px] leading-none mt-1 ${
                  isActive ? "text-white" : ""
              }`}
          >
          {item.name}
        </span>
        </Link>
    ) : (
        <div
            key={index}
            className={`flex flex-col items-center justify-between  text-white dark:text-neutral-300/90 ${
                isActive ? "text-neutral-900 dark:text-neutral-100" : "text-white"
            }`}
        >
          <item.icon iconClassName="w-6 h-6" className={``} />
          <span className="text-[11px] leading-none mt-1">{item.name}</span>
        </div>
    );
  };

  // Filter out protected items if not logged in
  const filteredNav = NAV.filter((item) => !item.protected || isLoggedIn);

  return (
      <div
          ref={containerRef}
          className="FooterNav block md:!hidden p-2 bg-black fixed top-auto bottom-0 inset-x-0 z-30 border-neutral-700
      transition-transform duration-300 ease-in-out"
      >
        <div className="w-full max-w-lg flex justify-around mx-auto text-sm text-center">
          {/* MENU */}
          {filteredNav.map(renderItem)}
          {/* Add Login button when not logged in */}
          {!isLoggedIn && (
              <Link
                  href="/login"
                  className="flex flex-col items-center justify-between text-white"
              >
                <UserCircleIcon className="w-6 h-6" />
                <span className="text-[11px] leading-none mt-1">Login</span>
              </Link>
          )}
        </div>
      </div>
  );
};

export default FooterNav;