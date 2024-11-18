"use client"
import { getCart } from "@/lib/getCart"
import isAuthenticated from "@/lib/isAuthenticated"
import { ThemeProvider, useTheme } from "next-themes"
import { createContext, useContext, useEffect, useState } from "react"

const RatanContext = createContext()
export const useRatanContext = () => {
  return useContext(RatanContext)
}

export default function Provider({ children }) {
  const { setTheme } = useTheme()
  const [cart, setCart] = useState([])
  const [auth, setAuth] = useState([])

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
    const Cart = async () => {
      setCart(await getCart())
    }
    Cart()
    const Auth = async () => {
      setAuth(await isAuthenticated())
    }
    Auth()
  }, [cart])

  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <RatanContext.Provider value={{ cart, setCart, auth }}>
        {children}
      </RatanContext.Provider>
    </ThemeProvider>
  )
}
