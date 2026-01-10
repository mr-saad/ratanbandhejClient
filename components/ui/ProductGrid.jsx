import cn from "@/lib/cn"

export default function ProductGrid({ className, children }) {
  return (
    <div
      className={cn(
        "3xl:grid-cols-6 grid gap-5 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5",
        className,
      )}
    >
      {children}
    </div>
  )
}
