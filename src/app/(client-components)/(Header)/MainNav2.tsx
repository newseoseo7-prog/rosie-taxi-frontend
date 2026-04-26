import React, { FC, useState, useRef, useEffect } from "react";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import LangDropdown from "./LangDropdown";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import Link from "next/link";
import TemplatesDropdown from "./TemplatesDropdown";
import { Route } from "@/routers/types";
import { NAVIGATION_DEMO_1, NAVIGATION_DEMO_2 } from "@/data/navigation";
import { NavItemType } from "@/shared/Navigation/NavigationItem";
import PageSearchBar from "@/app/(client-components)/(Header)/PagesSearchBar";

export interface MainNav2Props {
  className?: string;
}

const renderMegaMenuNavlink = (
    item: NavItemType,
    index: number,
    close: () => void
) => {
  return (
      <li key={item.id} className={`${item.isNew ? "menuIsNew" : ""}`}>
        <Link
            target={item.targetBlank ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
            href={{
              pathname: item.href || undefined,
            }}
            onClick={close}
        >
          {item.name}
        </Link>
      </li>
  );
};

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  // Mock search results - replace with your actual search logic
  const searchResults = [
    { id: 1, title: "Beachfront Villa", type: "Property" },
    { id: 2, title: "Mountain Cabin", type: "Property" },
    { id: 3, title: "City Apartment", type: "Property" },
    { id: 4, title: "How to list your property", type: "Article" },
  ].filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <div className={`MainNav2 relative z-10 dark:bg-neutral-800 ${className}`}>

        <div className="px-4 h-20 lg:container flex justify-between">
          <div className="flex md:justify-start flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
            <Logo className="w-24 self-center ttnc-logo flex items-center justify-center text-primary-6000 focus:outline-none focus:ring-0 " />
            <div className="hidden lg:block self-center h-10 border-l border-neutral-300 dark:border-neutral-500"></div>
          </div>

          <div className="self-center lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
            <HeroSearchForm2MobileFactory />
          </div>

          <div className="flex dark:text-white items-center">
            {/* Search Bar - Now positioned after menu items */}
            <PageSearchBar />
            {NAVIGATION_DEMO_1.map((item, index) => (
                <div key={index} className="flex">
                  <ul className="items-center gap-4 flex">
                    {item.children?.map((item, index) =>
                        renderMegaMenuNavlink(item, index, () => {})
                    )}
                  </ul>
                </div>
            ))}


          </div>

          <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
            <div className="hidden lg:flex space-x-1 items-center">
              <TemplatesDropdown />
              <NotifyDropdown />
              <AvatarDropdown />
            </div>
            <div className="flex space-x-2 lg:hidden">
              <NotifyDropdown />
              <AvatarDropdown />
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
  );
};

export default MainNav2;