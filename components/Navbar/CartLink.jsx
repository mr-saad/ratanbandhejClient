"use client"
import cn from "@/lib/utils/cn"
import useRatanContext from "@/lib/hooks/useRatanContext"
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
import { ShoppingCart, Trash2, XIcon } from "lucide-react"
import Image from "next/image"
import removeFromCart from "@/lib/actions/removeFromCart"
import Link from "next/link"

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
            cart.map((item, index) => {
              return (
                <div
                  key={item.slug}
                  className={cn(
                    "mx-5 flex items-start justify-between gap-2 border-rose-200",
                    index !== cart.length - 1 && "border-b",
                  )}
                >
                  <Link href={item.slug} className="flex items-start gap-2">
                    <Image
                      alt={item.title}
                      src={item.image.path}
                      placeholder="blur"
                      blurDataURL={item.image.metadata?.lqip}
                      width={50}
                      height={50}
                      className="aspect-square max-w-full rounded-md object-cover"
                    />
                    <span className="highlight line-clamp-2 font-serif">
                      {item.title}
                    </span>
                  </Link>
                  <Button
                    variant={"secondary"}
                    className={"border-none p-0"}
                    onClick={() => removeFromCart(item)}
                  >
                    <Trash2 />
                  </Button>
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
          <SheetClose
            render={
              <Button href="/cart/checkout" className={"justify-center"}>
                Checkout
              </Button>
            }
          />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
