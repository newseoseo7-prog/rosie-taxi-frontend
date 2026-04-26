import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useGoogleMaps } from "@/components/GoogleMapsProvider";

declare global {
    interface Window {
        google: any;
    }
}

interface LocationSearchProps {
    onPlaceSelect: (place: any) => void;
}

// Simple icon components based on common place types
const PlaceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const AddressIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const LocalityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

// Fallback/Default icon
const DefaultIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const LIBRARIES: ["places"] = ["places"];

const LocationSearch: React.FC<LocationSearchProps> = ({ onPlaceSelect }) => {
    const { isLoaded, loadError } = useGoogleMaps();
    
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [predictions, setPredictions] = useState<google.maps.places.AutocompletePrediction[]>([]);
    const [showPredictions, setShowPredictions] = useState(false);
    const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
    const placesService = useRef<google.maps.places.PlacesService | null>(null);
    const containerRef = useRef<HTMLDivElement>(null); // Ref for the whole component container

    useEffect(() => {
        if (!isLoaded) {
            console.log('Google Maps API not loaded');
            return;
        }
        // Initialize services once Google Maps API is loaded
        if (!autocompleteService.current) {
            autocompleteService.current = new window.google.maps.places.AutocompleteService();
        }
        if (!placesService.current && inputRef.current) {
            // PlacesService often needs a DOM element to attach to, though it can also be null
            placesService.current = new window.google.maps.places.PlacesService(inputRef.current);
        }

        // Click outside handler to hide predictions
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowPredictions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLoaded]);

    const fetchPredictions = useCallback(async (input: string) => {
        if (!autocompleteService.current || input.length < 2) { // Fetch predictions after 2 characters
            setPredictions([]);
            setShowPredictions(false);
            return;
        }

        try {
            const { predictions } = await autocompleteService.current.getPlacePredictions({
                input,
                componentRestrictions: { country: 'us' } // Set preferred country to USA
            });
            setPredictions(predictions);
            setShowPredictions(predictions.length > 0);
        } catch (error) {
            console.error('Error fetching place predictions:', error);
            setPredictions([]);
            setShowPredictions(false);
        }
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        fetchPredictions(value);
    };

    const handlePredictionSelect = (prediction: google.maps.places.AutocompletePrediction) => {
        if (!placesService.current) return;


         placesService.current.getDetails(
            { placeId: prediction.place_id, fields: ['name', 'formatted_address', 'geometry','place_id'] },
            (place, status) => {

                 if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
                    onPlaceSelect(place);
                    setSearchTerm(place.name || place.formatted_address || '');
                    setPredictions([]);
                    setShowPredictions(false);

                    // How to access latitude and longitude:
                    if (place.geometry && place.geometry.location) {
                        const lat = place.geometry.location.lat();
                        const lng = place.geometry.location.lng();
                        console.log('Latitude:', lat, 'Longitude:', lng);
                    }

                } else {
                    console.error('Error fetching place details:', status);
                }
            }
        );

    };

    const getPredictionIcon = (types: string[]) => {
        if (types.includes('street_address') || types.includes('route')) {
            return <AddressIcon />;
        }
        if (types.includes('locality') || types.includes('political')) {
            return <LocalityIcon />;
        }
        if (types.includes('establishment')) {
            return <PlaceIcon />;
        }
        // Fallback for other types or if no specific icon is matched
        return <DefaultIcon />;
    };



    return (
        <div ref={containerRef} className="w-full  mx-auto relative">
            <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                onFocus={() => predictions.length > 0 && setShowPredictions(true)}
                placeholder="Search for a location..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
            />

            {showPredictions && predictions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
                    {predictions.map((prediction) => (
                        <li
                            key={prediction.place_id}
                            className="flex items-center px-4 py-2 cursor-pointer hover:bg-blue-100 text-gray-800 border-b border-gray-100 last:border-b-0"
                            onClick={() => handlePredictionSelect(prediction)}
                        >
                            <div className="mr-3">
                                {getPredictionIcon(prediction.types)}
                            </div>
                            <div>
                                <span className="font-medium">{prediction.structured_formatting.main_text}</span>
                                <span className="text-sm text-gray-500 block">
                                    {prediction.structured_formatting.secondary_text}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationSearch;