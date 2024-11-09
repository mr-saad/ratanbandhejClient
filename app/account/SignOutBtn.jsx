"use client"
import { useRatanContext } from "@/components/Provider"
import signOut from "@/lib/actions/signOut"
import { useState } from "react"

export default function SignOutBtn() {
  const [loading, setLoading] = useState(false)

  const { setCart } = useRatanContext()

  const onSignOut = async () => {
    setLoading(true)
    const warn = confirm(
      "You'll be Signed Out. You have to Sign In again to place an order. Sure?",
    )
    if (warn) {
      setCart([])
      await signOut()
    }
    setLoading(false)
  }
  return (
    <button
      disabled={loading}
      onClick={onSignOut}
      className="btn !border-red-700 !bg-red-700 !text-white disabled:opacity-50"
      type="button"
    >
      <span className="flex items-center justify-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
        Sign Out
      </span>
    </button>
  )
}
