import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 100],
    minimumCacheTTL: 31556926,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    loader: "custom",
    loaderFile: "./ImageLoader.js",
  },
  logging: false,
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
