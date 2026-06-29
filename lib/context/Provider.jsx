"use client"
import { ThemeProvider, useTheme } from "next-themes"
import { useState, useEffect, use } from "react"
import RatanContext from "./RatanContext"

export default function Provider({ children, authPromise }) {
  const { setTheme } = useTheme()
  const [auth, setAuth] = useState(use(authPromise))
  const [authLoading, setAuthLoading] = useState(true)

  const setCart = (cart) => {
    setAuth((prev) => ({ ...prev, cart }))
  }

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
  }, [])

  // useEffect(() => {
  //   const getAuth = async () => {
  //     try {
  //       const res = await (await fetch("/api/getAuth")).json()
  //       setAuth(initialAuth)
  //     } catch (error) {
  //       console.error(error)
  //       alert(error?.message || "Error Fetching Auth")
  //     } finally {
  //       setAuthLoading(false)
  //     }
  //   }
  //   getAuth()
  // }, [])

  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <RatanContext
        value={{
          cart: auth.cart,
          setCart,
          auth,
          setAuth,
          authLoading,
        }}
      >
        {children}
      </RatanContext>
    </ThemeProvider>
  )
}
