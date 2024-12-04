"use client"
import { ThemeProvider, useTheme } from "next-themes"
import { createContext, useEffect, useState } from "react"

export const RatanContext = createContext()

export default function Provider({ children }) {
  const { setTheme } = useTheme()
  const [cart, setCart] = useState([])
  const [auth, setAuth] = useState([])
  const [authLoad, setAuthLoad] = useState(false)

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
    const getAuth = async () => {
      setAuthLoad(true)
      const res = await (await fetch("/api/getAuth")).json()
      setAuth(res)
      setCart(res.cart)
      setAuthLoad(false)
    }
    getAuth()
  }, [])

  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <RatanContext.Provider value={{ cart, setCart, auth, setAuth, authLoad }}>
        {children}
      </RatanContext.Provider>
    </ThemeProvider>
  )
}
