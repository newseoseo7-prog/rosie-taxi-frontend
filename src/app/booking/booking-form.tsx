"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LocationInput from "@/new_sections/LocationInput";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useGoogleMaps } from "@/components/GoogleMapsProvider";
import { Route } from "next";
import converSelectedDateToString from "@/utils/converSelectedDateToString";
import StayDatesRangeInput from "@/app/(client-components)/(HeroSearchForm2Mobile)/DatesRangeInput";
import { Dialog } from "@headlessui/react";

const mapContainerStyle = { width: "100%", height: "400px" };
const defaultCenter = { lat: 0, lng: 0 };
const FARE_PER_KM = 2;

interface LocationResult {
  place_id: string;
  formatted_address: string;
  lat: number;
  lng: number;
}

const PREDEFINED_LOCATIONS = {
  "burbank-airport": {
    place_id: "ChIJQZzJvR6XwoARs7Q3u5At5qs",
    formatted_address:
        "Hollywood Burbank Airport (BUR), 2627 N Hollywood Way, Burbank, CA 91505",
    lat: 34.1983,
    lng: -118.3574,
  },
  "lax-airport": {
    place_id: "ChIJ9TH7_o25woARGBQ0KrYoDnA",
    formatted_address:
        "Los Angeles International Airport (LAX), 1 World Way, Los Angeles, CA 90045",
    lat: 33.9416,
    lng: -118.4085,
  },
  "santa-barbara-airport": {
    place_id: "ChIJ02AHfe8U6YARs_h5no6qzJM",
    formatted_address:
        "Santa Barbara Airport (SBA), 500 James Fowler Rd, Santa Barbara, CA 93117",
    lat: 34.4262,
    lng: -119.8415,
  },
  ventura: {
    place_id: "ChIJC8QgIC8U6YARtOSGqKA72k4",
    formatted_address: "Ventura, CA, USA",
    lat: 34.2746,
    lng: -119.229,
  },
  oxnard: {
    place_id: "ChIJeVSQQDb06IARopkmyLSAFxw",
    formatted_address: "Oxnard, CA, USA",
    lat: 34.1975,
    lng: -119.1771,
  },
  camarillo: {
    place_id: "ChIJ8VebvHmZ6IARwFGxuc2wYAI",
    formatted_address: "Camarillo, CA, USA",
    lat: 34.2321,
    lng: -119.0376,
  },
  ojai: {
    place_id: "ChIJO6mJWYYM6YARuQwmP0JjZPA",
    formatted_address: "Ojai, CA, USA",
    lat: 34.448,
    lng: -119.2429,
  },
  "santa-paula": {
    place_id: "ChIJLY8oiXLp6IARg4vcu9RIV3g",
    formatted_address: "Santa Paula, CA, USA",
    lat: 34.3542,
    lng: -119.0593,
  },
};

const BookingForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const timeSelectRef = useRef<HTMLSelectElement>(null);

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [pickUpLocation, setPickUpLocation] = useState<google.maps.LatLng | null>(null);
  const [dropOffLocation, setDropOffLocation] = useState<google.maps.LatLng | null>(null);
  const [pickUpAddress, setPickUpAddress] = useState<string>("");
  const [dropOffAddress, setDropOffAddress] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [fare, setFare] = useState<number | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const { isLoaded, loadError } = useGoogleMaps();

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  const generateTimeOptions = () => {
    const options = [];
    const now = new Date();

    for (let i = 0; i <= 16; i++) {
      const optionTime = new Date(now.getTime() + i * 15 * 60 * 1000);
      const hours = optionTime.getHours();
      const minutes = optionTime.getMinutes().toString().padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
      const formattedHours = ((hours + 11) % 12) + 1;
      options.push(`${formattedHours}:${minutes} ${period}`);
    }

    return options;
  };

  const getUserLocation = (): Promise<{ lat: number; lng: number }> => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        return resolve({ lat: 59.3293, lng: 18.0686 });
      }

      navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => {
            resolve({ lat: 59.3293, lng: 18.0686 });
          }
      );
    });
  };

  const renderInputDates = () => {
    return (
        <div className="px-4 bg-white dark:text-white dark:bg-neutral-800 flex justify-between items-center rounded-xl shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)]">
          <button
              className="w-full flex justify-between items-center text-sm font-medium p-4"
              aria-label="date selection"
              onClick={(e) => {
                if (!(e.target instanceof HTMLSelectElement)) {
                  setIsDatePickerOpen(true);
                }
              }}
          >
            <span className="text-neutral-400">When</span>
            <div className="flex items-center gap-4">
            <span className="border py-2.5 px-6 rounded-md border-black">
              {startDate
                  ? converSelectedDateToString([startDate, endDate])
                  : "Select Date"}
            </span>
              <select
                  ref={timeSelectRef}
                  value={selectedTime}
                  onChange={handleTimeChange}
                  onClick={(e) => e.stopPropagation()}
                  className="border p-2 rounded-md pr-8 dark:bg-neutral-800 dark:border-black"
              >
                <option value="">Select Time</option>
                {generateTimeOptions().map((time, idx) => (
                    <option key={idx} value={time}>
                      {time}
                    </option>
                ))}
              </select>
            </div>
          </button>
        </div>
    );
  };

  useEffect(() => {
    if (isLoaded && searchParams) {
      const pickupParam = searchParams.get("pickup");
      const dropoffParam = searchParams.get("dropoff");

      if (pickupParam && PREDEFINED_LOCATIONS[pickupParam as keyof typeof PREDEFINED_LOCATIONS]) {
        const location = PREDEFINED_LOCATIONS[pickupParam as keyof typeof PREDEFINED_LOCATIONS];
        setPickUpLocation(new google.maps.LatLng(location.lat, location.lng));
        setPickUpAddress(location.formatted_address);
        getUserLocation().then((deviceLocation) => {
          setDropOffLocation(new google.maps.LatLng(deviceLocation.lat, deviceLocation.lng));
        });
      }

      if (dropoffParam && PREDEFINED_LOCATIONS[dropoffParam as keyof typeof PREDEFINED_LOCATIONS]) {
        const location = PREDEFINED_LOCATIONS[dropoffParam as keyof typeof PREDEFINED_LOCATIONS];
        setDropOffLocation(new google.maps.LatLng(location.lat, location.lng));
        setDropOffAddress(location.formatted_address);
        getUserLocation().then((deviceLocation) => {
          setPickUpLocation(new google.maps.LatLng(deviceLocation.lat, deviceLocation.lng));
        });
      }
    }
  }, [isLoaded, searchParams]);

  const onLoad = useCallback(
      (mapInstance: google.maps.Map) => {
        setMap(mapInstance);
        if (pickUpLocation) {
          mapInstance.setCenter(pickUpLocation.toJSON());
        } else {
          mapInstance.setCenter(defaultCenter);
        }
      },
      [pickUpLocation]
  );

  const handleMapClick = useCallback(
      (event: google.maps.MapMouseEvent) => {
        if (!pickUpLocation) {
          setPickUpLocation(event.latLng || null);
          if (event.latLng) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode(
                { location: event.latLng.toJSON() },
                (results, status) => {
                  if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
                    setPickUpAddress(results[0].formatted_address);
                  }
                }
            );
          }
        } else if (!dropOffLocation) {
          setDropOffLocation(event.latLng || null);
          if (event.latLng) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode(
                { location: event.latLng.toJSON() },
                (results, status) => {
                  if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
                    setDropOffAddress(results[0].formatted_address);
                  }
                }
            );
          }
        }
      },
      [pickUpLocation, dropOffLocation]
  );

  const calculateRoute = useCallback(() => {
    if (!pickUpLocation || !dropOffLocation || !isLoaded) return;

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
        {
          origin: pickUpLocation,
          destination: dropOffLocation,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
            const route = result?.routes[0]?.legs[0];
            setDistance(route?.distance?.text || null);
            const distanceInKm = route?.distance?.value ? route.distance.value / 1000 : 0;
            setFare(distanceInKm * FARE_PER_KM);
          } else {
            console.error("Error fetching directions", status);
          }
        }
    );
  }, [pickUpLocation, dropOffLocation, isLoaded]);

  useEffect(() => {
    if (pickUpLocation && dropOffLocation) {
      calculateRoute();
    }
  }, [pickUpLocation, dropOffLocation, calculateRoute]);

  const handlePickupLocationChange = (value: LocationResult) => {
    if (value?.lat && value?.lng) {
      setPickUpLocation(new google.maps.LatLng(value.lat, value.lng));
      setPickUpAddress(value.formatted_address);
    }
  };

  const handleDropoffLocationChange = (value: LocationResult) => {
    if (value?.lat && value?.lng) {
      setDropOffLocation(new google.maps.LatLng(value.lat, value.lng));
      setDropOffAddress(value.formatted_address);
    }
  };

  const handleConfirmBooking = async () => {
    if (!pickUpLocation || !dropOffLocation || !startDate) {
      alert("Please select both locations and date.");
      return;
    }

    const bookingDetails = {
      pickupLocation: {
        lat: pickUpLocation.lat(),
        lng: pickUpLocation.lng(),
        address: pickUpAddress,
      },
      dropoffLocation: {
        lat: dropOffLocation.lat(),
        lng: dropOffLocation.lng(),
        address: dropOffAddress,
      },
      date: startDate,
      time: selectedTime,
      distance,
      fare,
    };

    try {
      const response = await fetch(`/api/get_summary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        const data = await response.json();
        const booking_id = data.booking_id;
        router.push(`/bookings?id=${data.id}` as Route);
      } else {
        console.error("Failed to confirm booking", response.statusText);
        alert("Failed to confirm booking. Please try again.");
      }
    } catch (error) {
      console.error("Error confirming booking:", error);
      alert("An error occurred while confirming your booking.");
    }
  };

  if (loadError) return <div>Error loading Google Maps API</div>;
  if (!isLoaded) return <div>Loading Google Maps...</div>;

  return (
      <div className="w-full relative mt-8 space-y-8">
        <form onSubmit={(e) => e.preventDefault()}
              className="rounded-[40px] shadow-xl border bg-white dark:bg-neutral-700 p-4 lg:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-2">
              <LocationInput
                  placeHolder="City or Airport"
                  desc="Pick up location"
                  className="flex-1"
                  value={pickUpAddress}
                  onChange={handlePickupLocationChange}
              />
            </div>

            <div className="flex items-center flex-1 space-x-2">
              <LocationInput
                  placeHolder="City or Airport"
                  desc="Drop off location"
                  className="flex-1"
                  value={dropOffAddress}
                  onChange={handleDropoffLocationChange}
              />
            </div>

            {renderInputDates()}
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            <button
                type="button"
                aria-label="Calculate Routes"
                onClick={calculateRoute}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                disabled={!pickUpLocation || !dropOffLocation}
            >
              Calculate Route
            </button>
          </div>

          <div className="w-full mt-6">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={pickUpLocation?.toJSON() || defaultCenter}
                zoom={13}
                onLoad={onLoad}
                onClick={handleMapClick}
            >
              {pickUpLocation && (
                  <Marker position={pickUpLocation} title="Pick-up Location" />
              )}
              {dropOffLocation && (
                  <Marker position={dropOffLocation} title="Drop-off Location" />
              )}
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </div>

          {distance && fare && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-neutral-600 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-medium">Distance:</span>
                  <span>{distance}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="font-medium">Estimated Fare:</span>
                  <span>${fare.toFixed(2)}</span>
                </div>
              </div>
          )}

          <div className="flex justify-end space-x-4 mt-4">
            <button
                type="button"
                aria-label="confirm booking"
                onClick={handleConfirmBooking}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              Confirm Booking
            </button>
          </div>
        </form>

        {/* Date Picker Modal */}
        <Dialog
            open={isDatePickerOpen}
            onClose={() => setIsDatePickerOpen(false)}
            className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white dark:bg-neutral-800 p-6">
              <Dialog.Title className="text-xl font-bold mb-4">Select Date</Dialog.Title>
              <StayDatesRangeInput
                  isRange={false}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(startDate, endDate) => {
                    setStartDate(startDate);
                    setEndDate(endDate);
                    setSelectedDate(startDate);
                  }}
              />
              <div className="mt-6 flex justify-end space-x-3">
                <button
                    onClick={() => setIsDatePickerOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                    onClick={() => {
                      setIsDatePickerOpen(false);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Apply
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
  );
};

export default BookingForm;