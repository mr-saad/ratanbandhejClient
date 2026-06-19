"use client"
import { ThemeProvider, useTheme } from "next-themes"
import { useEffect, useState } from "react"
import RatanContext from "./RatanContext"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query"

const queryClient = new QueryClient()

const setCart = (cart) => {
  queryClient.setQueryData(["auth"], (auth) => ({ ...auth, cart }))
}

const setAuth = (newAuth) => queryClient.setQueryData(["auth"], newAuth)

const initialData = {
  status: false,
  verified: false,
  _id: "",
  _createdAt: "",
  username: "",
  address: "",
  email: "",
  cart: [],
  noAcc: true,
}

export default function Provider({ children }) {
  const { setTheme } = useTheme()
  // const [cart, setCart] = useState([])
  // const [auth, setAuth] = useState({
  //   status: null,
  //   verified: null,
  //   _id: "",
  //   username: "",
  //   address: "",
  //   email: "",
  //   noAcc: null,
  // })
  // const [authLoading, setAuthLoading] = useState(true)

  const { isLoading: authLoading, data: auth } = useQuery(
    {
      queryKey: ["auth"],
      queryFn: async () => await (await fetch("/api/getAuth")).json(),
      initialData,
    },
    queryClient,
  )

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

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        defaultTheme="system"
        enableSystem={true}
        attribute="class"
      >
        <RatanContext
          value={{
            cart: auth.cart,
            auth,
            setCart,
            setAuth,
            authLoading,
          }}
        >
          {children}
        </RatanContext>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
