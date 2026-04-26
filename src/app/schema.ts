
const schemaData = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Rosie Taxi Cab",
    "description": "Fast Reliable Airport Transportation. Car Service To & From LAX and all airports in California. Track your driver in minutes.",
    "url": "https://new.rosietaxicab.com/",
    "image": "https://new.rosietaxicab.com/wp-content/uploads/2023/10/Los-Angeles.jpg",
    "serviceType": "Airport Taxi, Local Cab, LAX Transportation",
    "areaServed": [
        {
            "@type": "Place",
            "name": "Ventura, CA"
        },
        {
            "@type": "Place",
            "name": "Ojai, CA"
        },
        {
            "@type": "Place",
            "name": "Oxnard, CA"
        },
        {
            "@type": "Place",
            "name": "Camarillo, CA"
        },
        {
            "@type": "Place",
            "name": "Los Angeles International Airport (LAX)"
        }
    ],
    "provider": {
        "@type": "LocalBusiness",
        "name": "Rosie Taxi Cab",
        "image": "https://new.rosietaxicab.com/wp-content/uploads/2023/10/Los-Angeles.jpg",
        "telephone": "+18052588937",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ventura",
            "addressRegion": "CA",
            "addressCountry": "US"
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "$$"
    },
    "hasMap": "https://www.google.com/maps/place/Ventura,+CA"
}
export default schemaData;