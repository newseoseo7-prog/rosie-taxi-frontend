import CardCategoryBox1 from "@/components/CardCategoryBox1";
import Heading from "@/shared/Heading";
import { TaxonomyType } from "@/data/types";
import React from "react";


export interface SectionFlightSchedulesProps {
  categories?: TaxonomyType[];
  headingCenter?: boolean;
  categoryCardType?: "card1`";
  className?: string;
  gridClassName?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/airports/lax_airport",
    name: "Los Angeles Airport",
    taxonomy: "category",
    count: 0,
    thumbnail:
        "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "/airports/santa_barbara_airport",
    name: "Santa Barbara",
    taxonomy: "category",
    count: 0,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/airports/burbank_airport",
    name: "Burbank Airport",
    taxonomy: "category",
    count: 0,
    thumbnail:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/airports/longbeach",
    name: "LongBeach",
    taxonomy: "category",
    count: 0,
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "4",
    href: "/airports/slo",
    name: "SLO",
    taxonomy: "category",
    count: 0,
    thumbnail:
      "https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  }
];

const SectionFlightsSchedule: React.FC<SectionFlightSchedulesProps> = ({
  categories = DEMO_CATS,
  categoryCardType = "card1",
  headingCenter = true,
  className = "",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
}) => {
  let CardComponentName = CardCategoryBox1;
  switch (categoryCardType) {
    case "card1":
      CardComponentName = CardCategoryBox1;
      break;

    default:
      CardComponentName = CardCategoryBox1;
  }

  return (
    <div className={`nc-SectionGridCategoryBox max-w-sm md:max-w-full mx-auto relative ${className}`}>
      <Heading
        desc="Want to know about the schedules of the airports in USA?"
        isCenter={headingCenter}
      >
        Flights Schedules
      </Heading>
      <div className={`grid ${gridClassName} gap-5 sm:gap-6 md:gap-8`}>
        {categories.map((item, i) => (
          <CardComponentName key={i} taxonomy={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionFlightsSchedule;
