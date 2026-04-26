import React, { useEffect, useRef } from 'react';

interface GooglePlacesAutocompleteProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

const GooglePlacesAutocomplete: React.FC<GooglePlacesAutocompleteProps> = ({
  onPlaceSelected,
  value,
  onChange,
  placeholder = '',
  className = '',
  autoFocus = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {

    console.log("GooglePlacesAutocomplete", inputRef.current);
    if (!inputRef.current) return;

    const options: google.maps.places.AutocompleteOptions = {
      fields: ['address_components', 'geometry', 'name', 'formatted_address'],
      types: ['geocode', 'establishment'],
    };

    autocompleteRef.current = new google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autocompleteRef.current.addListener('place_changed', () => {
      const place = autocompleteRef.current?.getPlace();
      if (place) {
        onPlaceSelected(place);
      }
    });

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [onPlaceSelected]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      autoFocus={autoFocus}
    />
  );
};

export default GooglePlacesAutocomplete; 