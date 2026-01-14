import ScrollToTop from "@/components/ScrollToTop"
import ProductGrid from "@/components/ui/ProductGrid"
export default function Loading() {
  return (
    <div className="Container">
      <ScrollToTop />

      <div className="mb-5 max-w-52.5 animate-pulse rounded-md bg-stone-500 text-stone-500 dark:bg-white/20">
        Loading
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
