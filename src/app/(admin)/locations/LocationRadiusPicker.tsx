// components/LocationRadiusPicker.tsx
'use client'
import { GoogleMap, Marker, Circle } from '@react-google-maps/api';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useGoogleMaps } from "@/components/GoogleMapsProvider";

// Constants
const MAP_CONTAINER_STYLE = {
    width: '100%',
    height: '400px'
};
const DEFAULT_CENTER = {
    lat: 34.0522,
    lng: -118.2437
};

// Types
type Location = {
    lat: number;
    lng: number;
} | null;

type Area = {
    location: Location;
    radius: number;
};

export default function LocationRadiusPicker() {
    const { isLoaded, loadError } = useGoogleMaps();

    const router = useRouter();
    const [title, setTitle] = useState<string>(''); // ✅ Title field
    const [pickupArea, setPickupArea] = useState<Area>({ location: null, radius: 1000 });
    const [dropoffArea, setDropoffArea] = useState<Area>({ location: null, radius: 1000 });
    const [activeArea, setActiveArea] = useState<'pickup' | 'dropoff'>('pickup');
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [fixedFare, setFixedFare] = useState<string>('');
    const [minimumFare, setMinimumFare] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ✅ Distance Info State
    const [distanceInfo, setDistanceInfo] = useState<{
        distance: number;
        minDistance: number;
        maxDistance: number;
    } | null>(null);

    const onMapLoad = useCallback((mapInstance: google.maps.Map) => {
        if (mapInstance instanceof google.maps.Map) {
            setMap(mapInstance);
        } else {
            console.error('Received invalid map instance');
        }
    }, []);

    const handleMapClick = (e: google.maps.MapMouseEvent) => {
        if (!e.latLng) return;
        const location = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        if (activeArea === 'pickup') {
            setPickupArea(prev => ({ ...prev, location }));
        } else {
            setDropoffArea(prev => ({ ...prev, location }));
        }
    };

    const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const radius = parseInt(e.target.value);
        if (activeArea === 'pickup') {
            setPickupArea(prev => ({ ...prev, radius }));
        } else {
            setDropoffArea(prev => ({ ...prev, radius }));
        }
    };

    // ✅ Calculate distances
    useEffect(() => {
        if (pickupArea.location && dropoffArea.location && window.google?.maps?.geometry) {
            const pickupLatLng = new google.maps.LatLng(pickupArea.location.lat, pickupArea.location.lng);
            const dropoffLatLng = new google.maps.LatLng(dropoffArea.location.lat, dropoffArea.location.lng);

            const centerDistance = google.maps.geometry.spherical.computeDistanceBetween(pickupLatLng, dropoffLatLng);
            const minDist = Math.max(0, centerDistance - (pickupArea.radius + dropoffArea.radius));
            const maxDist = centerDistance + (pickupArea.radius + dropoffArea.radius);

            setDistanceInfo({
                distance: centerDistance,
                minDistance: minDist,
                maxDistance: maxDist
            });
        } else {
            setDistanceInfo(null);
        }
    }, [pickupArea, dropoffArea]);

    const handleSubmit = async () => {
        if (!title.trim()) {
            alert('Please enter a title');
            return;
        }
        if (!pickupArea.location || !dropoffArea.location) {
            alert('Please select both pickup and dropoff areas');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/save-location-radius', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    pickupLocation: pickupArea.location,
                    pickupRadius: pickupArea.radius,
                    dropoffLocation: dropoffArea.location,
                    dropoffRadius: dropoffArea.radius,
                    fixedFare: fixedFare ? parseFloat(fixedFare) : null,
                    minimumFare: minimumFare ? parseFloat(minimumFare) : null
                })
            });

            if (!response.ok) throw new Error('Failed to save location data');

            await response.json();
            alert("Areas updated successfully!");
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to save location data');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (!map) return;
        if (pickupArea.location && activeArea === 'pickup') {
            map.panTo(pickupArea.location);
        } else if (dropoffArea.location && activeArea === 'dropoff') {
            map.panTo(dropoffArea.location);
        }
    }, [activeArea, map, pickupArea.location, dropoffArea.location]);

    useEffect(() => {
        return () => {
            if (map) {
                google.maps.event.clearInstanceListeners(map);
            }
        };
    }, [map]);

    const mapOptions = useMemo(() => ({
        center: activeArea === 'pickup' && pickupArea.location ? pickupArea.location :
            activeArea === 'dropoff' && dropoffArea.location ? dropoffArea.location :
                DEFAULT_CENTER,
        zoom: 13,
        clickableIcons: false,
        disableDefaultUI: true,
    }), [activeArea, pickupArea.location, dropoffArea.location]);

    if (loadError) {
        return <div className="text-red-500 p-4">Error loading Google Maps. Please refresh the page.</div>;
    }

    return (
        <div className="container relative py-12 lg:py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Set Pickup and Dropoff Areas</h1>

                {/* ✅ Title Field */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter area title"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md"
                    />
                </div>

                {/* Area Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <AreaCard type="pickup" active={activeArea === 'pickup'} area={pickupArea} onClick={() => setActiveArea('pickup')} />
                    <AreaCard type="dropoff" active={activeArea === 'dropoff'} area={dropoffArea} onClick={() => setActiveArea('dropoff')} />
                </div>

                {/* Map Section */}
                {isLoaded ? (
                    <div className="mb-8">
                        <GoogleMap
                            mapContainerStyle={MAP_CONTAINER_STYLE}
                            options={mapOptions}
                            onClick={handleMapClick}
                            onLoad={onMapLoad}
                            onUnmount={() => setMap(null)}
                        >
                            {pickupArea.location && (
                                <>
                                    <Marker
                                        position={pickupArea.location}
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
                                        center={pickupArea.location}
                                        radius={pickupArea.radius}
                                        options={{
                                            fillColor: '#34D399',
                                            fillOpacity: 0.2,
                                            strokeColor: '#34D399',
                                            strokeOpacity: 0.8,
                                            strokeWeight: 2
                                        }}
                                    />
                                </>
                            )}

                            {dropoffArea.location && (
                                <>
                                    <Marker
                                        position={dropoffArea.location}
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
                                        center={dropoffArea.location}
                                        radius={dropoffArea.radius}
                                        options={{
                                            fillColor: '#EF4444',
                                            fillOpacity: 0.2,
                                            strokeColor: '#EF4444',
                                            strokeOpacity: 0.8,
                                            strokeWeight: 2
                                        }}
                                    />
                                </>
                            )}
                        </GoogleMap>

                        {/* Radius Slider */}
                        <div className="mt-4">
                            <label className="block text-sm font-medium mb-1">
                                {activeArea === 'pickup' ? 'Pickup' : 'Dropoff'} Radius (meters)
                            </label>
                            <input
                                type="range"
                                min="100"
                                max="5000"
                                step="100"
                                value={activeArea === 'pickup' ? pickupArea.radius : dropoffArea.radius}
                                onChange={handleRadiusChange}
                                className="w-full"
                            />
                            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {[100, 1000, 2000, 3000, 4000, 5000].map((value) => (
                                    <span key={value}>{value === 1000 ? '1km' : `${value/1000}km`}</span>
                                ))}
                            </div>
                            <p className="text-center mt-2">
                                Current radius: {(activeArea === 'pickup' ? pickupArea.radius : dropoffArea.radius).toLocaleString()} meters
                            </p>
                        </div>

                        {/* ✅ Distance Info */}
                        {distanceInfo && (
                            <div className="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4 mt-4 border border-gray-200 dark:border-neutral-700">
                                <p><strong>Center Distance:</strong> {distanceInfo.distance.toLocaleString()} meters</p>
                                <p><strong>Minimum Possible Distance:</strong> {distanceInfo.minDistance.toLocaleString()} meters</p>
                                <p><strong>Maximum Possible Distance:</strong> {distanceInfo.maxDistance.toLocaleString()} meters</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <MapLoadingPlaceholder />
                )}

                {/* Fare Settings */}
                <FareSettings
                    fixedFare={fixedFare}
                    minimumFare={minimumFare}
                    onFixedFareChange={setFixedFare}
                    onMinimumFareChange={setMinimumFare}
                />

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting || !pickupArea.location || !dropoffArea.location}
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {isSubmitting ? 'Saving...' : 'Confirm Locations'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Sub-components
function AreaCard({ type, active, area, onClick }: {
    type: 'pickup' | 'dropoff';
    active: boolean;
    area: Area;
    onClick: () => void;
}) {
    return (
        <div
            className={`p-4 rounded-lg cursor-pointer transition-colors ${
                active
                    ? 'bg-indigo-100 dark:bg-indigo-900 border-2 border-indigo-500'
                    : 'bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700'
            }`}
            onClick={onClick}
        >
            <h2 className="text-xl font-semibold mb-2">{type === 'pickup' ? 'Pickup' : 'Dropoff'} Area</h2>
            {area.location ? (
                <div className="space-y-2">
                    <p>Latitude: {area.location.lat.toFixed(6)}</p>
                    <p>Longitude: {area.location.lng.toFixed(6)}</p>
                    <p>Radius: {area.radius.toLocaleString()} meters</p>
                </div>
            ) : (
                <p className="text-gray-500 dark:text-gray-400">Click on the map to set {type} location</p>
            )}
        </div>
    );
}

function FareSettings({ fixedFare, minimumFare, onFixedFareChange, onMinimumFareChange }: {
    fixedFare: string;
    minimumFare: string;
    onFixedFareChange: (value: string) => void;
    onMinimumFareChange: (value: string) => void;
}) {
    return (
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-700 p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Fare Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Fixed Fare (optional)</label>
                    <input
                        type="number"
                        value={fixedFare}
                        onChange={(e) => onFixedFareChange(e.target.value)}
                        placeholder="Enter fixed fare amount"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md"
                        min="0"
                        step="0.01"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Minimum Fare</label>
                    <input
                        type="number"
                        value={minimumFare}
                        onChange={(e) => onMinimumFareChange(e.target.value)}
                        placeholder="Enter minimum fare amount"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-md"
                        min="0"
                        step="0.01"
                    />
                </div>
            </div>
        </div>
    );
}

function MapLoadingPlaceholder() {
    return (
        <div className="bg-gray-100 dark:bg-neutral-700 rounded-lg h-64 flex items-center justify-center mb-8">
            <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">Loading map...</p>
            </div>
        </div>
    );
}
