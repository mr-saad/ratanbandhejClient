"use client"

<<<<<<< HEAD
=======
import { ThemeProvider, useTheme } from "next-themes"
>>>>>>> 536726c (git cli)
import { createContext, useEffect, useState } from "react"

export const RatanContext = createContext()

export default function Provider({ children }) {
<<<<<<< HEAD
  const [dark, setDark] = useState(false)
  const [favourites, setFavourites] = useState([])
  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("ratanDark"))
    if (isDark) {
      document.documentElement.classList.add("dark")
      setDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      setDark(false)
=======
  const { setTheme } = useTheme()
  const [favourites, setFavourites] = useState([])
  useEffect(() => {
    const isDark = localStorage.getItem("ratanTheme")
    if (isDark === "dark") {
      setTheme("dark")
    } else {
      setTheme("light")
>>>>>>> 536726c (git cli)
    }
    setFavourites(
      localStorage.getItem("favourites")
        ? JSON.parse(localStorage.getItem("favourites"))
        : []
    )
  }, [])
  return (
<<<<<<< HEAD
    <RatanContext.Provider value={{ dark, setDark, favourites, setFavourites }}>
      {children}
    </RatanContext.Provider>
=======
    <ThemeProvider defaultTheme="light" attribute="class">
      <RatanContext.Provider value={{ favourites, setFavourites }}>
        {children}
      </RatanContext.Provider>
    </ThemeProvider>
>>>>>>> 536726c (git cli)
  )
}
