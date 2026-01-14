"use client"
import Product from "@/components/ui/Product"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import ProductGrid from "@/components/ui/ProductGrid"
import Button from "@/components/ui/Button"
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react"
import cn from "@/lib/cn"
import { useEffect, useState } from "react"

export default function FilteredProducts({ data }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { push } = useRouter()

  const categories = [...new Set(data.map((all) => all.type))]

  const searchCategory = searchParams.get("category")
  const showFilter = searchParams.get("filter")
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
            onClick={() =>
              handleFilter({ filter: showFilter === "true" ? null : "true" })
            }
            variant={searchCategory ? "primary" : "secondary"}
            className={"inline-flex gap-2"}
          >
            <SlidersHorizontal />
          </Button>
          <div
            className={cn(
              "absolute top-[115%] right-0 z-2 flex-wrap gap-2 rounded-xl bg-stone-100/75 p-5 backdrop-blur-lg md:right-auto md:left-0",
              showFilter === "true" ? "flex" : "hidden",
            )}
          >
            {categories.map((category) => {
              return (
                <Button
                  className={"text-nowrap"}
                  variant={
                    searchCategory === category ? "primary" : "secondary"
                  }
                  onClick={() => {
                    handleFilter({
                      category: searchCategory === category ? null : category,
                    })
                  }}
                  key={category}
                >
                  {category}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="flex gap-2 md:gap-5">
          <Button
            onClick={() => handleFilter({ view: null })}
            variant={view === "list" ? "secondary" : "primary"}
          >
            <LayoutGrid />
          </Button>
          <Button
            onClick={() =>
              handleFilter({ view: view === "list" ? null : "list" })
            }
            variant={view === "list" ? "primary" : "secondary"}
          >
            <List />
          </Button>
        </div>
      </div>

      <ProductGrid
        variant={view === "list" ? "list" : "grid"}
        className={"mt-5"}
      >
        {products.length ? (
          products.map((product, index) => {
            return (
              <Product
                variant={view === "list" ? "list" : "grid"}
                index={index}
                key={product.slug}
                {...product}
              />
            )
          })
        ) : (
          <p>No Products</p>
        )}
      </ProductGrid>
    </div>
  )
}
