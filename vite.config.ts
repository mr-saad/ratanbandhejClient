import vinext from "vinext"
import { defineConfig } from "vite"
import { nitro } from "nitro/vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [tailwindcss(), vinext(), nitro({
    output: { dir: "dist" },
    traceOpts: {
      nft: {
        ignore: [
          "**/node_modules/webpack/**",
          "**/node_modules/minimizer-webpack-plugin/**",
          "**/node_modules/@vercel/og/**",
          "**/node_modules/sharp/**",
          "**/node_modules/@img/**",
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
