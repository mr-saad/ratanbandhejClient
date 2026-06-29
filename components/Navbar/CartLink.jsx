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
import { ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import useCartBtn from "@/lib/hooks/useCartBtn"
import Link from "next/link"
import Empty from "../ui/Empty"

export default function CartLink() {
  const { cart } = useRatanContext()

  const { removeFromCartBtn } = useCartBtn()

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart
          className={cn(
            "cursor-pointer stroke-rose-700",
            cart?.length !== 0 ? "fill-rose-700" : "fill-none",
          )}
        />
      </SheetTrigger>
      <SheetContent
        showCloseButton={false}
        className={
          "grid grid-rows-[auto_1fr_auto] border-black/5 bg-white dark:border-white/10 dark:bg-stone-950"
        }
      >
        <SheetHeader>
          <SheetTitle className={"highlight text-3xl font-bold"}>
            Cart
          </SheetTitle>
        </SheetHeader>
        <div
          className="grid content-start gap-5 overflow-auto"
          style={{ scrollbarWidth: 0 }}
        >
          {cart?.length > 0 ? (
            cart.map((item, index) => {
              return (
                <div
                  key={item.slug}
                  className={cn(
                    "mx-5 flex items-start justify-between gap-2 border-black/5 pb-5 dark:border-white/10",
                    index !== cart.length - 1 && "border-b",
                  )}
                >
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link
                        href={"/products/" + item.slug}
                        className="flex items-start gap-2"
                      >
                        <Image
                          alt={item.title}
                          src={item.image.url}
                          placeholder="blur"
                          blurDataURL={item.image?.lqip}
                          width={50}
                          height={50}
                          className="aspect-square max-w-full rounded-md object-cover"
                        />
                        <span className="highlight line-clamp-2 font-serif">
                          {item.title}
                        </span>
                      </Link>
                    }
                  />
                  <Button
                    variant={"secondary"}
                    className={"border-none p-0"}
                    onClick={() => removeFromCartBtn(item)}
                  >
                    <Trash2 size={17} />
                  </Button>
                </div>
              )
            })
          ) : (
            <Empty
              className={"mt-10"}
              message={"Cart is currently empty."}
              content={
                <p>
                  Explore{" "}
                  <Link className="link underline" href={"/products"}>
                    Products
                  </Link>
                </p>
              }
            />
          )}
        </div>

        <SheetFooter>
          <SheetClose
            render={
              <Button variant={"secondary"} className={"justify-center"}>
                Close
              </Button>
            }
          />
          {cart?.length > 0 && (
            <SheetClose
              nativeButton={false}
              render={
                <Button href="/cart/checkout" className={"justify-center"}>
                  Checkout
                </Button>
              }
            />
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
