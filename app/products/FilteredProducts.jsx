"use client"
import Product from "@/components/ui/Product"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import ProductGrid from "@/components/ui/ProductGrid"
import { useEffect, useState } from "react"
import Empty from "@/components/ui/Empty"
import Link from "next/link"
import FilterPopover from "./FilterPopover"

export default function FilteredProducts({ data }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const categories = [...new Set(data.map((all) => all.type))]

  const searchCategory = searchParams.get("category")
  const search = searchParams.get("search")
  const view = searchParams.get("view")

  const filtered = data.filter(({ type }) => type === searchCategory)
  const [products, setProducts] = useState(
    searchParams.get("category") ? filtered : data,
  )
  useEffect(() => {
    if (!searchCategory) {
      setProducts(data)
      return
    }
    setProducts(filtered)
  }, [searchCategory])

  const updateQuery = (filter) => {
    const params = new URLSearchParams(searchParams.toString())
    Object.entries(filter).forEach(([key, value]) => {
      if (value === undefined || value === null || value === false) {
        params.delete(key)
      } else {
        params.set(key, String(value))
      }
    })

    return params
  }

  const handleFilter = (filter) => {
    const params = updateQuery(filter)
    push(pathname + "?" + params.toString())
  }

  const getSearchedProducts = async () => {
    try {
      const res = await fetch("/api/products?search=" + search.trim(), {
        method: "GET",
      })
      if (res.ok) {
        const prods = await res.json()
        setProducts(prods)
      }
    } catch (error) {
      alert(error.message)
      console.error(error)
    }
  }

  useEffect(() => {
    if (!search) {
      setProducts(data)
      return
    }
    getSearchedProducts()
  }, [search])

  return (
    <div className="Container">
      <div className="flex max-w-3xl flex-wrap items-center gap-2 md:gap-5">
        <FilterPopover
          handleFilter={handleFilter}
          searchCategory={searchCategory}
          categories={categories}
          view={view}
        />
      </div>

      {products.length > 0 ? (
        <ProductGrid
          variant={view === "list" ? "list" : "grid"}
          className={"mt-5"}
        >
          {products.map((product, index) => {
            return (
              <Product
                variant={view === "list" ? "list" : "grid"}
                index={index}
                key={product.slug}
                {...product}
              />
            )
          })}
        </ProductGrid>
      ) : (
        <Empty
          className={"mt-30"}
          message={"No products matched your criteria"}
          content={
            <Link className="underline" href="/products">
              View All Products
            </Link>
          }
        />
      )}
    </div>
  )
}
