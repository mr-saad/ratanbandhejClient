import cn from "@/lib/utils/cn"

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-md  bg-white dark:bg-[#1f000a]",
        className,
      )}
    >
      {children}
    </div>
  )
}
