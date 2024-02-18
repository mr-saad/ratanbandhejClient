"use client"
import { ThemeProvider, useTheme } from "next-themes"
import { createContext, useContext, useEffect, useState } from "react"

const RatanContext = createContext()
export const useRatanContext = () => {
  return useContext(RatanContext)
}

export default function Provider({ children }) {
  const { setTheme } = useTheme()
  const [favorites, setFavorites] = useState([])
  const [showOrderLink, setShowOrderLink] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem("ratanTheme")
    if (
      isDark === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
    setFavorites(
      localStorage.getItem("favorites")
        ? JSON.parse(localStorage.getItem("favorites"))
        : [],
    )
    document.cookie.includes("userId") && setShowOrderLink(true)
  }, [])
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <RatanContext.Provider
        value={{ favorites, setFavorites, showOrderLink, setShowOrderLink }}
      >
        {children}
      </RatanContext.Provider>
    </ThemeProvider>
  )
}
