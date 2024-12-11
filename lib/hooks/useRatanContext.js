import RatanContext from "@/lib/context/RatanContext"
import { use } from "react"

export default function useRatanContext() {
  return use(RatanContext)
}
