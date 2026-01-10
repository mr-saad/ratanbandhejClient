"use client"

import Product from "@/components/Product"
import { useSearchParams } from "next/navigation"
import ProductGrid from "@/components/ui/ProductGrid"
import Button from "@/components/ui/Button"
import { SlidersHorizontal } from "lucide-react"
import cn from "@/lib/cn"

export default function FilteredProducts({ data }) {
  const search = useSearchParams()

  const categories = [...new Set(data.map((all) => all.type))]
  const filtered = data.filter(({ type }) => type === search.get("category"))

  const products = search.get("category") ? filtered : data
  const searchCat = search.get("category")
  const showFilter = search.get("filter")

  return (
    <div className="Container">
      <Button
        prefetch
        href={
          showFilter !== "true"
            ? `/products?filter=true${searchCat ? "&category=" + searchCat.replace(/ /g, "+") : ""}`
            : `/products${searchCat ? "?category=" + searchCat.replace(/ /g, "+") : ""}`
        }
        variant={searchCat ? "primary" : "secondary"}
        className={"mb-2 inline-flex gap-2 md:hidden"}
      >
        <SlidersHorizontal />
        Filter
      </Button>
      <div
        className={cn(
          "flex-wrap gap-2 md:flex",
          showFilter === "true" ? "flex" : "hidden",
        )}
      >
        {categories.map((category) => {
          return (
            <Button
              variant={searchCat === category ? "primary" : "secondary"}
              prefetch
              href={
                search.get("category") !== category
                  ? `/products?filter=true&category=${category.replace(/ /g, "+")}`
                  : "/products?filter=true"
              }
              key={category}
            >
              {category}
            </Button>
          )
        })}
      </div>
      <ProductGrid className={"mt-3"}>
        {products.length ? (
          products.map((product, index) => {
            return <Product index={index} key={product.slug} {...product} />
          })
        ) : (
          <p>No Products</p>
        )}
      </ProductGrid>
    </div>
  )
}
