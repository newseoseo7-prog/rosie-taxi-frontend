import { DateRage } from "@/app/(client-components)/type";

// Convert DateRange (startDate, endDate) to a string
const converSelectedDateToString = ([startDate, endDate]: DateRage) => {
  // Helper function to format the date
  const formatDateTime = (date: Date | null) =>
    date
      ? date.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
        })
      : "";

  // If there's no endDate (single date picker mode), show only the startDate
  if (!endDate) {
    return formatDateTime(startDate);
  }

  // If there's an endDate (range picker mode), show both startDate and endDate
  const dateString = `${formatDateTime(startDate)}${
    endDate ? " - " + formatDateTime(endDate) : ""
  }`;

  return dateString;
};

export default converSelectedDateToString;
