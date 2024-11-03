import type { NextConfig } from "next"

// const withAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// })

const nextConfig: NextConfig = /*  withAnalyzer( */ {
  images: {
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
      "next-themes",
      "zod",
    ],
  },
  productionBrowserSourceMaps: false,
} /* ) */

module.exports = nextConfig
