// components/GoogleMapsProvider.tsx
'use client';
import { useJsApiLoader } from '@react-google-maps/api';
import { createContext, useContext, ReactNode } from 'react';

// Define the context type
interface GoogleMapsContextType {
    isLoaded: boolean;
    loadError: Error | undefined;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({
    isLoaded: false,
    loadError: undefined,
});

export const useGoogleMaps = () => useContext(GoogleMapsContext);

const LIBRARIES: ["places"] = ["places"];

export function GoogleMapsProvider({ children }: { children: ReactNode }) {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
        libraries: LIBRARIES,
        preventGoogleFontsLoading: true,
    });

    return (
        <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
            {children}
        </GoogleMapsContext.Provider>
    );
}