import cn from "@/lib/utils/cn"
import { cva } from "class-variance-authority"
import Link from "next/link"

const btnVariants = cva(
  // [corner-shape:squircle] supports-[corner-shape:squircle]:rounded-[200px]
  "inline-flex items-center cursor-pointer will-change-transform rounded-md px-4 py-1.5 font-semibold text-white focus-visible:bg-none focus-visible:outline-none hover:bg-none capitalize outline-offset-2 transition-all active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "hover:bg-rose-800 focus-visible:bg-rose-800 bg-rose-700 border border-rose-700 outline-rose-800",
        secondary:
          "text-rose-700 hover:outline-rose-800 focus-visible:ring-2 focus-visible:ring-rose-800 border-rose-700 border bg-transparent",
        danger:
          "hover:bg-red-800 focus-visible:bg-red-800 outline-red-800 bg-red-700 text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
)
export default function Button({
  className,
  variant,
  children,
  href,
  prefetch,
  ...props
}) {
  return href ? (
    <Link
      href={href}
      prefetch={prefetch}
      {...props}
      className={cn(btnVariants({ variant, className }))}
    >
      {children}
    </Link>
  ) : (
    <button {...props} className={cn(btnVariants({ className, variant }))}>
      {children}
    </button>
  )
}
