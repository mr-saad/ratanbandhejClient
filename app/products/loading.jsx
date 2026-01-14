import ScrollToTop from "@/components/ScrollToTop"
import ProductGrid from "@/components/ui/ProductGrid"
export default function Loading() {
  return (
    <div className="Container">
      <ScrollToTop />

      <div className="mb-5 flex flex-wrap gap-2 md:gap-5">
        <div className="max-w-133.5 grow animate-pulse rounded-md bg-stone-200 p-2 dark:bg-white/20">
          &nbsp;
        </div>
        <div className="w-13 animate-pulse rounded-lg bg-stone-200 p-2 dark:bg-white/20">
          &nbsp;
        </div>
        <div className="w-13 animate-pulse rounded-lg bg-stone-200 p-2 dark:bg-white/20">
          &nbsp;
        </div>
        <div className="w-13 animate-pulse rounded-lg bg-stone-200 p-2 dark:bg-white/20">
          &nbsp;
        </div>
      </div>

      <ProductGrid>
        {Array(6)
          .fill(1)
          .map((item, index) => (
            <div
              key={index}
              className="aspect-square animate-pulse rounded-md bg-stone-500 dark:bg-white/20"
            ></div>
          ))}
      </ProductGrid>
    </div>
  )
}
