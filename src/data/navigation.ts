import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import __megamenu from "./jsons/__megamenu.json";


export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "dropdown",

    isNew: false,
  },

  //
  {
    id: ncNanoId(),
    href: "/",
    name: "Travel",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/discovery/taxi-cab-manhattan", name: "Manhattan" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-burbank", name: "Burbank" },
       { id: ncNanoId(), href: "/discovery/taxi-cab-long-beach", name: "Long Beach" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-thousand-oaks", name: "Thousand Oaks" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/",
    name: "Discover",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/discovery/taxi-cab-camarillo", name: "Camarillo" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-ventura", name: "Ventura" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-ojai", name: "Ojai" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-oxnard", name: "Oxnard" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-thousand-oaks", name: "Thousand Oaks" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/classics",
    name: "The Classics",
  },
  {
    id: ncNanoId(),
    href: "https://www.tripadvisor.com/Attraction_Review-g60769-d9820760-Reviews-Rosie_Taxi_Cab-Ventura_California.html",
    name: "Rate Us",
  },
];

export const NAVIGATION_DEMO_1: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Main Menu",
    type: "dropdown",

    children: [
      { id: ncNanoId(), href: "/", name: "Home" },
      { id: ncNanoId(), href: "/about", name: "About" },
      { id: ncNanoId(), href: "/contact", name: "Contact" },
      { id: ncNanoId(), href: "/discovery", name: "Discovery" }
    ],
  },
];
export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Main Menu",
    type: "dropdown",

    children: [
      { id: ncNanoId(), href: "/", name: "Home" },
      { id: ncNanoId(), href: "/about", name: "About" },
      { id: ncNanoId(), href: "/contact", name: "Contact" },
      { id: ncNanoId(), href: "/discovery", name: "Discovery" },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: "#",
    name: "Travel",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/discovery/taxi-cab-manhattan", name: "Manhattan" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-burbank", name: "BOB" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-san-diego", name: "San Diego" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-hollywood", name: "Hollywood" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-fillmore", name: "Fillmore" },
     ],
  },

  {
    id: ncNanoId(),
    href: "#",
    name: "Discover",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/discovery/taxi-cab-camarillo", name: "Camarillo" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-ventura", name: "Ventura" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-ojai", name: "Ojai" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-oxnard", name: "Oxnard" },
      { id: ncNanoId(), href: "/discovery/taxi-cab-thousand-oaks", name: "Thousand Oaks" },
    ],
  },

  {
    id: ncNanoId(),
    href: "/classics",
    name: "The Classics",
  },

  {
    id: ncNanoId(),
    href: "https://www.tripadvisor.com/Attraction_Review-g60769-d9820760-Reviews-Rosie_Taxi_Cab-Ventura_California.html",
    name: "Rate Us",
  },
];
