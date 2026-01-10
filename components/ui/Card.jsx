import cn from "@/lib/cn"

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        "${className} rounded-xl border border-black/10 shadow-lg shadow-black/5 dark:border-white/10",
        className,
      )}
    >
      {children}
    </div>
  )
}
