"use client"

import { ThemeProvider, useTheme } from "next-themes"
import { createContext, useEffect, useState } from "react"

export const RatanContext = createContext()

export default function Provider({ children }) {
  const { setTheme } = useTheme()
  const [favourites, setFavourites] = useState([])
  useEffect(() => {
    const isDark = localStorage.getItem("ratanTheme")
    if (isDark === "dark") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
    setFavourites(
      localStorage.getItem("favourites")
        ? JSON.parse(localStorage.getItem("favourites"))
        : []
    )
  }, [])
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <RatanContext.Provider value={{ favourites, setFavourites }}>
        {children}
      </RatanContext.Provider>
    </ThemeProvider>
  )
}
