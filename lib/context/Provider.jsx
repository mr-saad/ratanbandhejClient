"use client"
import { ThemeProvider, useTheme } from "next-themes"
import { useEffect, useState } from "react"
import RatanContext from "./RatanContext"

export default function Provider({ children }) {
  const { setTheme } = useTheme()
  const [cart, setCart] = useState([])
  const [auth, setAuth] = useState({
    status: null,
    verified: null,
    _id: "",
    username: "",
    address: "",
    email: "",
    cart: [],
    noAcc: null,
  })
  const [authLoading, setAuthLoading] = useState(true)

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
      try {
        const res = await (await fetch("/api/getAuth")).json()
        setAuth(res)
        setCart(res.cart)
      } catch (error) {
        console.error(error)
      } finally {
        setAuthLoading(false)
      }
    }
    getAuth()
  }, [setTheme])

  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <RatanContext value={{ cart, setCart, auth, setAuth, authLoading }}>
        {children}
      </RatanContext>
    </ThemeProvider>
  )
}
