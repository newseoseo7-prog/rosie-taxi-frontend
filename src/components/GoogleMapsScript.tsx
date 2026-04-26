'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

interface GoogleMapsScriptProps {
  apiKey: string;
  onLoad?: () => void;
}

const GoogleMapsScript: React.FC<GoogleMapsScriptProps> = ({ apiKey, onLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).google?.maps) {
      setIsLoaded(true);
      onLoad?.();
    }
  }, [onLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  if (isLoaded) return null;

  return (
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`}
      onLoad={handleLoad}
      strategy="lazyOnload"
    />
  );
};

export default GoogleMapsScript; 