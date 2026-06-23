import cn from "@/lib/utils/cn"

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-md border border-black/10 bg-white dark:border-white/10 dark:bg-[#1f000a]",
        className,
      )}
    >
      {children}
    </div>
  )
}
