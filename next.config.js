/** @type {import('next').NextConfig} */

const withAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
}

module.exports = withAnalyzer(nextConfig)
