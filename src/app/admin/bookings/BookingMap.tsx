'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, DirectionsRenderer, Marker } from '@react-google-maps/api';
import { useGoogleMaps } from '@/components/GoogleMapsProvider';

interface BookingMapProps {
  pickup: string;
  dropoff: string;
  pickupName?: string;
  dropoffName?: string;
}

const MAP_CONTAINER_STYLE = {
  width: '100%',
  height: '400px'
};

export default function BookingMap({ pickup, dropoff, pickupName, dropoffName }: BookingMapProps) {
  const { isLoaded } = useGoogleMaps();
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [routeInfo, setRouteInfo] = useState<{ distance: string; duration: string } | null>(null);

  const onMapLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoaded || !pickup || !dropoff) {
      return;
    }

    calculateAndDisplayRoute();
  }, [isLoaded, pickup, dropoff]);

  const calculateAndDisplayRoute = () => {
    if (!isLoaded) return;

    setLoading(true);
    setError(null);

    const directionsService = new google.maps.DirectionsService();
    
    directionsService.route(
      {
        origin: pickup,
        destination: dropoff,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        setLoading(false);
        if (status === 'OK' && response) {
          setDirections(response);
          
          // Extract route information
          const route = response.routes[0];
          const leg = route.legs[0];
          setRouteInfo({
            distance: leg.distance?.text || 'N/A',
            duration: leg.duration?.text || 'N/A'
          });
        } else {
          setError(`Failed to calculate route: ${status}`);
        }
      }
    );
  };

  if (!isLoaded) {
    return (
      <div className="h-96 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Loading map...</p>
        </div>
      </div>
    );
  }

  // Fallback when Google Maps fails to load
  if (!pickup || !dropoff) {
    return (
      <div className="h-96 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">Route information not available</p>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-green-600 dark:text-green-400">Pickup:</span>
              <p className="text-neutral-700 dark:text-neutral-300">{pickupName || pickup || 'Not specified'}</p>
            </div>
            <div>
              <span className="font-medium text-red-600 dark:text-red-400">Destination:</span>
              <p className="text-neutral-700 dark:text-neutral-300">{dropoffName || dropoff || 'Not specified'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={MAP_CONTAINER_STYLE}
        center={{ lat: 40.7128, lng: -74.0060 }}
        zoom={13}
        onLoad={onMapLoad}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: '#2563eb',
                strokeWeight: 4,
                strokeOpacity: 0.8,
              },
            }}
          />
        )}
        
        {directions && (
          <>
            <Marker
              position={directions.routes[0].legs[0].start_location}
              title={pickupName || 'Pickup Location'}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: '#10b981',
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: '#ffffff',
              }}
              label={{
                text: 'P',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
              }}
            />
            <Marker
              position={directions.routes[0].legs[0].end_location}
              title={dropoffName || 'Dropoff Location'}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 12,
                fillColor: '#ef4444',
                fillOpacity: 1,
                strokeWeight: 2,
                strokeColor: '#ffffff',
              }}
              label={{
                text: 'D',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
              }}
            />
          </>
        )}
      </GoogleMap>
      
      {loading && (
        <div className="absolute inset-0 bg-white dark:bg-neutral-800 bg-opacity-75 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Calculating route...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 bg-white dark:bg-neutral-800 bg-opacity-90 flex items-center justify-center rounded-lg">
          <div className="text-center p-4">
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <div className="space-y-2 text-sm mb-4">
              <div>
                <span className="font-medium text-green-600 dark:text-green-400">Pickup:</span>
                <p className="text-neutral-700 dark:text-neutral-300">{pickupName || pickup}</p>
              </div>
              <div>
                <span className="font-medium text-red-600 dark:text-red-400">Destination:</span>
                <p className="text-neutral-700 dark:text-neutral-300">{dropoffName || dropoff}</p>
              </div>
            </div>
            <button
              onClick={calculateAndDisplayRoute}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
            >
              Retry
            </button>
          </div>
        </div>
      )}
      
      {/* Legend and Route Info */}
      <div className="absolute top-4 left-4 bg-white dark:bg-neutral-800 p-3 rounded-lg shadow-lg">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="text-neutral-700 dark:text-neutral-300">Pickup</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">D</span>
            </div>
            <span className="text-neutral-700 dark:text-neutral-300">Destination</span>
          </div>
          {routeInfo && (
            <>
              <hr className="border-neutral-200 dark:border-neutral-600" />
              <div className="text-xs text-neutral-600 dark:text-neutral-400">
                <div>Distance: {routeInfo.distance}</div>
                <div>Duration: {routeInfo.duration}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}