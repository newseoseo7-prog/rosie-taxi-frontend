// utils/getFullImageUrl.ts
export const getFullImageUrl = (url: string) => {
  if (!url) return "";
  
  // If the url already has protocol, return as-is
  if (url.startsWith("http://") || url.startsWith("https://")) return url;

  // Otherwise, prepend environment-specific host
  const baseUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

  // Make sure no double slashes
  return `${baseUrl.replace(/\/$/, "")}${url.startsWith("/") ? "" : "/"}${url}`;
};
