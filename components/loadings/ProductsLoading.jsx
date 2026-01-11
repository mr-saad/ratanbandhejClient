import ProductGrid from "../ui/ProductGrid"

export default function ProductsLoading() {
  return (
    <ProductGrid>
      {Array(6)
        .fill(1)
        .map((item, index) => (
          <div
            key={index}
            className="aspect-square max-w-100 animate-pulse rounded-md bg-gray-200 dark:bg-white/20"
          ></div>
        ))}
    </ProductGrid>
  )
}
