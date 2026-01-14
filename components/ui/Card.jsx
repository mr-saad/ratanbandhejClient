import cn from "@/lib/cn"

export default function Card({ children, className }) {
  return (
    <div
      className={cn("rounded-xl border border-stone-500 shadow-lg", className)}
    >
      {children}
    </div>
  )
}
