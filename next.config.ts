import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    qualities: [60, 75, 100],
    minimumCacheTTL: 31556926,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  logging: false,
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
