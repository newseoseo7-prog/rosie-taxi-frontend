'use client'
import { GoogleMap, Marker, Circle, DirectionsRenderer } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from 'react';
import { useGoogleMaps } from "@/components/GoogleMapsProvider";

interface Location {
    id: number;
    title: string;
    pickup_lat: number;
    pickup_lng: number;
    pickup_radius: number;
    dropoff_lat: number;
    dropoff_lng: number;
    dropoff_radius: number;
}

interface LocationsMapProps {
    locations: Location[];
    selectedLocationId?: number;
}

const MAP_CONTAINER_STYLE = {
    width: '100%',
    height: '400px'
};

export default function LocationsMap({ locations, selectedLocationId }: LocationsMapProps) {
    const { isLoaded } = useGoogleMaps();
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

    const onMapLoad = useCallback((mapInstance: google.maps.Map) => {
        setMap(mapInstance);
    }, []);

    useEffect(() => {
        if (!map || !isLoaded || locations.length === 0) return;

        const bounds = new google.maps.LatLngBounds();
        locations.forEach(location => {
            bounds.extend({ lat: Number(location.pickup_lat), lng: Number(location.pickup_lng) });
            bounds.extend({ lat: Number(location.dropoff_lat), lng: Number(location.dropoff_lng) });
        });
        map.fitBounds(bounds);
    }, [map, isLoaded, locations]);

    useEffect(() => {
        if (!isLoaded || !selectedLocationId) {
            setDirections(null);
            return;
        }

        const selectedLocation = locations.find(loc => loc.id === selectedLocationId);
        if (!selectedLocation) return;

        const directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: { lat: Number(selectedLocation.pickup_lat), lng: Number(selectedLocation.pickup_lng) },
            destination: { lat: Number(selectedLocation.dropoff_lat), lng: Number(selectedLocation.dropoff_lng) },
            travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
            if (status === 'OK') {
                setDirections(result);
            }
        });
    }, [isLoaded, selectedLocationId, locations]);

    if (!isLoaded) {
        return (
            <div className="bg-gray-100 dark:bg-neutral-700 rounded-lg h-96 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <GoogleMap
            mapContainerStyle={MAP_CONTAINER_STYLE}
            center={{ lat: 34.0522, lng: -118.2437 }}
            zoom={10}
            onLoad={onMapLoad}
        >
            {locations.map(location => (
                <div key={location.id}>
                    <Marker
                        position={{ lat: Number(location.pickup_lat), lng: Number(location.pickup_lng) }}
                        icon={{
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 8,
                            fillColor: "#34D399",
                            fillOpacity: 1,
                            strokeWeight: 2,
                            strokeColor: "#FFFFFF"
                        }}
                    />
                    <Circle
                        center={{ lat: Number(location.pickup_lat), lng: Number(location.pickup_lng) }}
                        radius={Number(location.pickup_radius)}
                        options={{
                            fillColor: '#34D399',
                            fillOpacity: 0.2,
                            strokeColor: '#34D399',
                            strokeOpacity: 0.8,
                            strokeWeight: 2
                        }}
                    />
                    <Marker
                        position={{ lat: Number(location.dropoff_lat), lng: Number(location.dropoff_lng) }}
                        icon={{
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 8,
                            fillColor: "#EF4444",
                            fillOpacity: 1,
                            strokeWeight: 2,
                            strokeColor: "#FFFFFF"
                        }}
                    />
                    <Circle
                        center={{ lat: Number(location.dropoff_lat), lng: Number(location.dropoff_lng) }}
                        radius={Number(location.dropoff_radius)}
                        options={{
                            fillColor: '#EF4444',
                            fillOpacity: 0.2,
                            strokeColor: '#EF4444',
                            strokeOpacity: 0.8,
                            strokeWeight: 2
                        }}
                    />
                </div>
            ))}
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
    );
}