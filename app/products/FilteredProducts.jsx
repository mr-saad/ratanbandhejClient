"use client"
import Product from "@/components/ui/Product"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import ProductGrid from "@/components/ui/ProductGrid"
import Button from "@/components/ui/Button"
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react"
import cn from "@/lib/utils/cn"
import { useEffect, useState } from "react"
import Empty from "@/components/ui/Empty"
import Link from "next/link"

export default function FilteredProducts({ data }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const categories = [...new Set(data.map((all) => all.type))]

  const searchCategory = searchParams.get("category")
  const [showFilter, setShowFilter] = useState(false)
  // const showFilter = searchParams.get("filter")
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
        <div className="relative grow">
          <input
            id="search"
            name="search"
            placeholder="Search"
            type="text"
            className="input"
            onChange={(e) => {
              setTimeout(() => {
                handleFilter({ search: e.target.value.trim() || null })
              }, 500)
            }}
          />
        </div>
        <div className="relative">
          <Button
            onClick={() => {
              setShowFilter((prev) => !prev)
            }}
            variant={searchCategory ? "primary" : "ghost"}
            className={"inline-flex gap-2"}
          >
            <SlidersHorizontal />
          </Button>
          <div
            className={cn(
              "absolute top-[115%] right-0 z-2 w-max flex-col flex-wrap items-start overflow-clip rounded-md bg-white shadow md:right-auto md:left-0 dark:bg-black",
              showFilter ? "flex" : "hidden",
            )}
          >
            {categories.map((category) => {
              return (
                <button
                  key={category}
                  className={cn(
                    "w-full cursor-pointer px-3 py-1 text-left first:pt-2 last:pb-2",
                    searchCategory === category ? "bg-rose-700 text-white" : "",
                  )}
                  onClick={() => {
                    handleFilter({
                      category: searchCategory === category ? null : category,
                    })
                  }}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
        <div className="flex gap-2 md:gap-5">
          <Button
            onClick={() => handleFilter({ view: null })}
            variant={view === "list" ? "ghost" : "primary"}
          >
            <LayoutGrid />
          </Button>
          <Button
            onClick={() =>
              handleFilter({ view: view === "list" ? null : "list" })
            }
            variant={view === "list" ? "primary" : "ghost"}
          >
            <List />
          </Button>
        </div>
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
