/** @type {import('next').NextConfig} */

const withAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = withAnalyzer({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
  logging: false,
  experimental: {
    ppr: "incremental",
    reactCompiler: true,
  },
})

module.exports = nextConfig
