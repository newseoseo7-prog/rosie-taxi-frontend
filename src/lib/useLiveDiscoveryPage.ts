"use client";
import { useState, useEffect, useRef } from "react";

export function useLiveDiscoveryPage(slug: string, interval = 5000) {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(!pageData);
  const [error, setError] = useState<string | null>(null);

  const prevDataRef = useRef<any>(null);
  const isActiveRef = useRef<boolean>(true);

  const fetchPageData = async () => {
    if (!slug) return;

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

      const res = await fetch(
        `${baseUrl}/api/discovery-pages?where[slug][equals]=${slug}&depth=2&draft=false`,
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch discovery page data");

      const data = await res.json();

      // Only update if data changed
      if (JSON.stringify(prevDataRef.current) !== JSON.stringify(data)) {
        prevDataRef.current = data;
        setPageData(data);
      }

      // 👇 only set loading false once after initial fetch
      if (loading) setLoading(false);
    } catch (err: any) {
      setError(err.message);
      if (loading) setLoading(false);
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
      await fetchPageData();
    };

    if (!pageData) poll();

    const timer = setInterval(poll, interval);

    return () => {
      isMounted = false;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [slug, interval]);

  return { pageData, loading, error, refetch: fetchPageData };
}
