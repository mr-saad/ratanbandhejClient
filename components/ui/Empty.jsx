import cn from "@/lib/utils/cn"
import { FileExclamationPoint } from "lucide-react"

export default function Empty({ message, content, className }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <FileExclamationPoint
        size={100}
        className="rotate-10 animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <p>{message}</p>
      {content}
    </div>
  )
}
