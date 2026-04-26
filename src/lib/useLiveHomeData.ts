"use client";
import { useState, useEffect, useRef } from "react";

export function useLiveHomeData(interval = 5000) {
  const [homeData, setHomeData] = useState<any>(null);
  const [loading, setLoading] = useState(!homeData);
  const [error, setError] = useState<string | null>(null);
  const prevDataRef = useRef<any>(null);
  const isActiveRef = useRef<boolean>(true); // track if tab is active

  const fetchHomeData = async () => {
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

      const res = await fetch(
        `${baseUrl}/api/globals/home?depth=2&draft=false`,
        {
          cache: "no-store",
        },
      );
      if (!res.ok) throw new Error("Failed to fetch home data");
      const data = await res.json();
      console.log(data);

      // Only update if data changed
      prevDataRef.current = data;
      setHomeData(data);

      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const handleVisibilityChange = () => {
      isActiveRef.current = !document.hidden;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const poll = async () => {
      if (!isMounted || !isActiveRef.current) return;
      await fetchHomeData();
    };

    // Initial fetch only if data is empty
    if (!homeData) poll();

    const timer = setInterval(poll, interval);

    return () => {
      isMounted = false;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [interval]);

  return { homeData, loading, error, refetch: fetchHomeData };
}
