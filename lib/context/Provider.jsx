"use client"
import { ThemeProvider, useTheme } from "next-themes"
import { useEffect, useState } from "react"
import RatanContext from "./RatanContext"

export default function Provider({ children }) {
  const { setTheme } = useTheme()
  const [cart, setCart] = useState([])
  const [auth, setAuth] = useState({})
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
      try {
        const res = await (await fetch("/api/getAuth")).json()
        setAuth(res)
        setCart(res.cart)
        setAuthLoad(false)
      } catch (error) {
        console.error(error)
      }
    }
    getAuth()
  }, [setTheme])

  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <RatanContext value={{ cart, setCart, auth, setAuth, authLoad }}>
        {children}
      </RatanContext>
    </ThemeProvider>
  )
}
