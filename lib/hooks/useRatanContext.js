import { RatanContext } from "@/components/Provider"
import { useContext } from "react"

export const useRatanContext = () => {
  return useContext(RatanContext)
}
