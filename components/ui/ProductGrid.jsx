import cn from "@/lib/utils/cn"
import { cva } from "class-variance-authority"

const gridVariants = cva("grid gap-2", {
  variants: {
    variant: {
      grid: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6",
      list: "grid-cols-1",
    },
  },
  defaultVariants: {
    variant: "grid",
  },
})

export default function ProductGrid({
  className,
  children,
  variant,
  ...props
}) {
  return (
    <div {...props} className={cn(gridVariants({ variant, className }))}>
      {children}
    </div>
  )
}
