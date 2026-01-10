import cn from "@/lib/cn"
import { cva } from "class-variance-authority"
import Link from "next/link"

const btnVariants = cva(
  "inline-flex items-center cursor-pointer will-change-transform rounded-md border px-4 py-1.5 font-semibold bg-linear-to-r text-white focus-visible:bg-none focus-visible:outline-none hover:bg-none capitalize outline-offset-2 transition-all [corner-shape:squircle] active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none supports-[corner-shape:squircle]:rounded-[200px]",
  {
    variants: {
      variant: {
        primary:
          "hover:text-rose-900 focus-visible:text-rose-900 from-rose-900 to-black border-rose-900 outline-rose-900",
        secondary:
          "hover:text-white focus-visible:text-white focus-visible:bg-linear-to-r bg-none hover:bg-linear-to-r from-rose-900 to-black text-rose-900 border-rose-900 outline-rose-900",
        danger:
          "hover:text-red-800 focus-visible:text-red-800 border-red-800 from-red-800 to-red-600",
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
