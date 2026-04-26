// This dynamic page route previously rendered content from the SQLite-backed pages system.
// That system has been removed, so this route now returns a simple 404-style message.

import React from "react";

export const metadata = {
    title: "Page not found | Rosie Taxi Cab",
    description: "The requested page is no longer available.",
};

export default async function Page() {
    return <div>Page not found</div>;
}