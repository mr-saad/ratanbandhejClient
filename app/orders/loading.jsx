import ProductGrid from "@/components/ui/ProductGrid"

export default function OrdersSkeleton() {
  return (
    <div className="Container">
      <h1 className="heading w-fit animate-pulse rounded-md bg-stone-200 text-transparent! dark:bg-white/20">
        My Orders
      </h1>
      <ProductGrid>
        {Array(4)
          .fill("order")
          .map((order, index, arr) => {
            return (
              <div key={order + index} className="grid gap-5">
                <div className="aspect-square animate-pulse self-start rounded-md bg-stone-200 dark:bg-white/20"></div>
                <div className="w-full text-transparent select-none">
                  <p className="h-3 animate-pulse rounded-md bg-stone-200 dark:bg-white/20">
                    s
                  </p>
                  <p className="mt-2 h-3 animate-pulse rounded-md bg-stone-200 dark:bg-white/20">
                    s
                  </p>
                  <p className="mt-2 h-3 animate-pulse rounded-md bg-stone-200 dark:bg-white/20">
                    s
                  </p>
                  <p className="mt-2 h-3 animate-pulse rounded-md bg-stone-200 dark:bg-white/20">
                    s
                  </p>
                </div>
              </div>
            )
          })}
      </ProductGrid>
    </div>
  )
}
