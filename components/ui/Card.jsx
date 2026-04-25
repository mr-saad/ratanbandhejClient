import cn from "@/lib/utils/cn"

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-black/10 shadow-lg shadow-black/5 dark:border-white/10",
        className,
      )}
    >
      {children}
    </div>
  )
}
