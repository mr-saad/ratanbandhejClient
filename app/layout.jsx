import "./globals.css"
import { GeistSans } from "geist/font/sans"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer"
import Provider from "@/components/Provider"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#111" },
    { media: "(prefers-color-scheme: dark)", color: "#111" },
  ],
}

export const metadata = {
  title: {
    template: "%s | Ratan Bandhej",
    default: "Ratan Bandhej | One Place For All Your Bandhani Needs",
  },
  alternates: {
    canonical: "https://ratanbandhej.shop",
  },
  metadataBase: new URL("https://ratanbandhej.shop"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "Bandhani Shop",
  manifest: "/site.webmanifest",
  generator: "NextJS",
  keywords: [
    "ratanbandhej",
    "ratan",
    "bandhej",
    "saadkhatri",
    "khatri",
    "saad",
    "house",
    "creative",
    "bandhani",
    "dupatta",
    "banarasi",
    "saree",
    "ratanbandhej.site",
    "ratanbandhej.shop",
    "top-materials",
    "top",
    "material",
    "bandhej",
    "ratan bandhej bhuj",
    "one-place-for-all-your-bandhani-needs",
    "handicraft bandhani",
    "handmade bandhani",
  ],
  applicationName: "Ratan Bandhej",
  referrer: "origin-when-cross-origin",
  creator: "Saad Khatri",
  publisher: "Saad Khatri",
  authors: [{ name: "Saad Khatri", url: "https://instagram.com/sxvd.js" }],
  description:
    "One Place for All Your Bandhani Needs. Ratan Bandhej Provides Their Customers A Large Number Of Variaties In Bandhani Dupattas, Sarees, Top Materials",
  openGraph: {
    title: "Ratan Bandhej | One Place For All Your Bandhani Needs",
    description:
      "One Place for All Your Bandhani Needs. Ratan Bandhej Provides Their Customers A Large Number Of Variaties In Bandhani Dupattas, Sarees, Top Materials",
    url: "https://ratanbandhej.shop",
    siteName: "Ratan Bandhej | One Place For All Your Bandhani Needs",
    locale: "en_US",
    type: "website",
    authors: ["Saad Khatri"],
  },
  icons: {
    icon: "/android-chrome-192x192.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "android-chrome-512x512",
      url: "/android-chrome-512x512.png",
    },
  },
}

export default async function RootLayout({ children }) {
  return (
    <html className={GeistSans.className} lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          <div className="min-h-screen accent-[#111] dark:accent-white">
            {children}
          </div>
        </Provider>
        <Footer />
      </body>
    </html>
  )
}
