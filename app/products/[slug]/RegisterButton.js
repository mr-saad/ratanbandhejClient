"use client"
import { useRatanContext } from "@/components/Provider"

export default function RegisterButton() {
  const { setShowOrderLink } = useRatanContext()
  return (
    <button
      onClick={() => {
        setShowOrderLink(true)
      }}
      className="btn mr-3"
      type="submit"
    >
      Register
    </button>
  )
}
