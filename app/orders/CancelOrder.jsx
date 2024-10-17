"use client"

import cancelOrder from "@/lib/actions/cancelOrder"
import { useState } from "react"
export default function CancelOrder({ _id }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const onClick = async () => {
    setLoading(true)
    const warn = confirm("The Order you placed will be canceled. Sure?")
    if (warn) {
      const res = await cancelOrder(_id)
      setLoading(false)
      if (!res.ok) {
        setMessage(res.message)
      }
    }
    setLoading(false)
  }

  return (
    <>
      <div className="flex items-center gap-5">
        <button
          onClick={onClick}
          disabled={loading}
          className="btn mt-1 disabled:opacity-50"
        >
          Cancel
        </button>
        {loading && (
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
            className="animate-spin"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
      </div>
      {message !== "" && <p className="mt-2">{message}</p>}
    </>
  )
}
