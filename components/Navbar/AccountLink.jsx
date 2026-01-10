"use client"

import cn from "@/lib/cn"
import useRatanContext from "@/lib/hooks/useRatanContext"
import { ChevronDown, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Button from "../ui/Button"
import signOut from "@/lib/actions/signOut"

export default function AccountLink() {
  const [loading, setLoading] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const { auth, setCart, setAuth } = useRatanContext()
  const pathname = usePathname()

  const onSignOut = async () => {
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
        className="flex cursor-pointer items-center text-black/60 hover:text-black focus-visible:text-black"
      >
        {auth.username ? auth.username : "Guest User"}
        <ChevronDown className={`transition ${dropdown ? "rotate-180" : ""}`} />
      </button>
      {dropdown && (
        <div className="top-13 right-0 grid w-max rounded-xl md:absolute md:bg-gray-200/95 md:p-5 md:backdrop-blur-xl">
          <Link
            onClick={() => setDropdown(false)}
            prefetch
            className={cn(
              "flex items-center gap-1 py-2 pt-4 transition hover:text-black focus-visible:text-black md:pt-0",
              pathname === "/profile" ? "text-black" : "text-black/60",
            )}
            href={"/profile"}
          >
            Profile
          </Link>
          <Link
            onClick={() => setDropdown(false)}
            prefetch
            className={cn(
              "flex items-center gap-1 py-2 pb-4 text-black/60 transition hover:text-black focus-visible:text-black md:pb-2",
              pathname === "/orders" ? "text-black" : "text-black/60",
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
      className={`block py-2 transition hover:text-black focus-visible:text-black md:inline md:px-2 md:py-0 ${
        pathname.includes("/create-account") ? "text-black" : "text-black/60"
      }`}
      href={"/create-account"}
    >
      Sign Up
    </Link>
  )
}
