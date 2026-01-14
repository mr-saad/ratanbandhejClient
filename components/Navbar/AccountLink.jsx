"use client"

import cn from "@/lib/cn"
import useRatanContext from "@/lib/hooks/useRatanContext"
import { ChevronDown, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import Button from "../ui/Button"
import signOut from "@/lib/actions/signOut"

export default function AccountLink() {
  const [loading, setLoading] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const { auth, setCart, setAuth } = useRatanContext()
  const pathname = usePathname()
  const { prefetch } = useRouter()

  const onSignOut = async () => {
    prefetch("/sign-in")
    setLoading(true)
    const warn = confirm(
      "You'll be Signed Out. You have to Sign In again to place an order. Sure?",
    )
    if (warn) {
      setCart([])
      setAuth({})
      await signOut()
    }
    setLoading(false)
  }

  return auth.status ? (
    <div className="relative py-2 md:py-0">
      <button
        onClick={() => setDropdown((prev) => !prev)}
        className="flex cursor-pointer items-center text-stone-500 hover:text-stone-950 focus-visible:text-stone-950"
      >
        {auth.username ? auth.username : "Guest User"}
        <ChevronDown className={`transition ${dropdown ? "rotate-180" : ""}`} />
      </button>
      {dropdown && (
        <div className="top-13 right-0 w-max rounded-xl md:absolute md:bg-gray-200/90 md:p-5 md:shadow-lg">
          <Link
            onClick={() => setDropdown(false)}
            prefetch
            className={cn(
              "flex items-center gap-1 py-2 pt-4 transition hover:text-stone-950 focus-visible:text-stone-950 md:pt-0",
              pathname === "/profile" ? "text-stone-950" : "text-stone-500",
            )}
            href={"/profile"}
          >
            Profile
          </Link>
          <Link
            onClick={() => setDropdown(false)}
            prefetch
            className={cn(
              "flex items-center gap-1 py-2 pb-4 text-stone-500 transition hover:text-stone-950 focus-visible:text-stone-950",
              pathname === "/orders" ? "text-stone-950" : "text-stone-500",
            )}
            href={"/orders"}
          >
            Orders
          </Link>
          <Button
            disabled={loading}
            onClick={onSignOut}
            type="button"
            variant={"danger"}
          >
            <span className="flex items-center justify-center gap-1">
              <LogOut />
              Sign Out
            </span>
          </Button>
        </div>
      )}
    </div>
  ) : (
    <Link
      prefetch
      className={`block py-2 transition hover:text-stone-950 focus-visible:text-stone-950 md:inline md:px-2 md:py-0 ${
        pathname.includes("/create-account")
          ? "text-stone-950"
          : "text-stone-500"
      }`}
      href={"/create-account"}
    >
      Sign Up
    </Link>
  )
}
