"use client"
import cn from "@/lib/utils/cn"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Link from "next/link"
import Button from "../ui/Button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function CartLink() {
  const { cart } = useRatanContext()

  return (
    // <Link
    //   prefetch
    //   className="justify-self-end"
    //   aria-label="favorites"
    //   href="/cart"
    // >
    //   <div className="relative cursor-pointer">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       className={cn(
    //         "cartLink stroke-black",
    //         cart.length !== 0 ? "fill-black" : "fill-none",
    //       )}
    //     >
    //       <circle cx="8" cy="21" r="1" />
    //       <circle cx="19" cy="21" r="1" />
    //       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    //     </svg>
    //     {cart.length !== 0 && (
    //       <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-stone-950 text-center text-xs text-white">
    //         {cart.length}
    //       </span>
    //     )}
    //   </div>
    // </Link>

    <Sheet>
      <SheetTrigger>
        <ShoppingCart
          className={cn(
            "cursor-pointer stroke-rose-700",
            cart.length !== 0 ? "fill-rose-700" : "fill-none",
          )}
        />
      </SheetTrigger>
      <SheetContent
        className={
          "grid grid-rows-[auto_1fr_auto] border-rose-700 bg-white dark:bg-stone-950"
        }
      >
        <SheetHeader>
          <SheetTitle className={"highlight text-3xl font-bold"}>
            Your Cart
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-5 overflow-auto" style={{ scrollbarWidth: 0 }}>
          {cart.length &&
            cart.map((item) => {
              return (
                <div key={item.slug} className="flex gap-2 p-5">
                  <Image
                    alt={item.title}
                    src={item.image.path}
                    placeholder="blur"
                    blurDataURL={item.image.metadata?.lqip}
                    width={100}
                    height={100}
                    className="aspect-square rounded-md object-cover"
                  />
                  <span className="highlight font-serif">{item.title}</span>
                </div>
              )
            })}
        </div>

        <SheetFooter>
          <SheetClose
            render={
              <Button variant={"secondary"} className={"justify-center"}>
                Close
              </Button>
            }
          />
          <Button href="/cart/checkout" className={"justify-center"}>
            Checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
