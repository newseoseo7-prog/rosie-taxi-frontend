// app/page.tsx
import { GoogleMapsProvider } from "@/components/GoogleMapsProvider";
import LocationRadiusPicker from "./LocationRadiusPicker";
import BgGlassmorphism from "@/components/BgGlassmorphism";

export default function HomePage() {
    return (
        <>
            <title>Locations Settings</title>
            <main className="nc-PageHome relative overflow-hidden dark:bg-neutral-900 dark:text-white min-h-screen">
                <BgGlassmorphism />
                <GoogleMapsProvider>
                    <LocationRadiusPicker />
                </GoogleMapsProvider>
            </main>
        </>

    );
}