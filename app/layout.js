import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Provider from "@/components/Provider"
import "./globals.css"

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#111" },
    { media: "(prefers-color-scheme: dark)", color: "#111" }
  ]
}

export const metadata = {
  title: {
    template: "%s | Ratan Bandhej",
    default: "Ratan Bandhej | One Place For All Your Bandhani Needs"
  },
  alternates: {
    canonical: "/"
  },
  metadataBase: new URL("https://ratanbandhej.vercel.app"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
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
    "ratanbandhej.vercel.app",
    "top-materials",
    "top",
    "material",
    "bandhej",
    "ratan bandhej bhuj",
    "one-place-for-all-your-bandhani-needs",
    "handicraft bandhani",
    "handmade bandhani"
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
    url: "https://ratanbandhej.vercel.app",
    siteName: "Ratan Bandhej",
    images: [
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "ratan bandhej image"
      }
    ],
    locale: "en_US",
    type: "website",
    authors: ["Saad Khatri"]
  },
  icons: {
    icon: "/android-chrome-192x192.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "android-chrome-512x512",
      url: "/android-chrome-512x512.png"
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          <div className="min-h-screen px-4 py-2 md:px-20">{children}</div>
        </Provider>
        <Footer />
      </body>
    </html>
  )
}
