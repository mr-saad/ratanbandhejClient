import vinext from "vinext"
import { defineConfig } from "vite"
import { nitro } from "nitro/vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [tailwindcss(), vinext(), nitro({
    traceOpts: {
      nft: {
        ignore: [
          "**/webpack/**",
          "**/minimizer-webpack-plugin/**",
          "**/@vercel/og/**",
          "**/sharp/**",
          "**/@img/**",
          "**/eslint/**",
          "**/node_modules/.nf3/@img/**",
          "**/node_modules/.nf3/sharp**",
        ],
      },
    },
  })],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
})
