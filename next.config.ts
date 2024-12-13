import type { NextConfig } from "next"

const withAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
}) as (config: NextConfig) => NextConfig

const nextConfig = withAnalyzer({
  images: {
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
})

module.exports = nextConfig
