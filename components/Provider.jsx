"use client"
import { ThemeProvider, useTheme } from "next-themes"
import { createContext, useContext, useEffect, useState } from "react"

const RatanContext = createContext()
export const useRatanContext = () => {
  return useContext(RatanContext)
}

export default function Provider({ children, cartLayout, auth }) {
  const { setTheme } = useTheme()
  const [cart, setCart] = useState(cartLayout)

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
  }, [setTheme])

  useEffect(() => {
    setCart(cart)
  }, [cart])

  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <RatanContext.Provider value={{ cart, setCart, auth }}>
        {children}
      </RatanContext.Provider>
    </ThemeProvider>
  )
}
