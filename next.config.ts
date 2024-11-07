import type { NextConfig } from "next"

const withAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
}) as (config: NextConfig) => NextConfig

const nextConfig: NextConfig = withAnalyzer({
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
  experimental: {
    ppr: "incremental",
    reactCompiler: true,
    turbo: {
      treeShaking: true,
    },
    optimizePackageImports: [
      "react",
      "next",
      "framer-motion",
      "swiper",
      "next-themes",
      "zod",
    ],
  },
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=600",
          },
        ],
      },
    ]
  },
})

module.exports = nextConfig
