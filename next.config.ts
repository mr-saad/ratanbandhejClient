import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 100],
    deviceSizes: [360, 640, 768, 1024, 1280],
    imageSizes: [96, 160, 240, 320, 480],
    minimumCacheTTL: 31556926,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
