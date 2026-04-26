/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    // appDir: true,
    typedRoutes: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Exclude Node.js modules from client-side bundles
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wallpapers.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ih1.redbubble.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a.cdn-hotels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.universalstudioshollywood.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.timeout.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.visittheusa.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "a0.muscache.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*", // This will match all routes
        headers: [
          {
            key: "Last-Modified",
            value: "Wed, 21 Oct 2024 07:28:00 GMT",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
