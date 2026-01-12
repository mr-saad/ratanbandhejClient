import cn from "@/lib/cn"

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-rose-900/40 shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  )
}
