"use client"

import Link from "next/link"
import Product from "@/components/Product"
import { useSearchParams } from "next/navigation"

export default function FilteredProducts({ data }) {
  const search = useSearchParams()

  const categories = [...new Set(data.map((all) => all.type))]
  const filtered = data.filter(({ type }) => type === search.get("category"))

  const products = search.get("category") ? filtered : data
  const searchCat = search.get("category")
  const showFilter = search.get("filter")

  return (
    <div className="Container">
      <Link
        prefetch
        href={
          showFilter !== "true"
            ? `/products?filter=true${searchCat ? "&category=" + searchCat.replace(/ /g, "+") : ""}`
            : `/products${searchCat ? "?category=" + searchCat.replace(/ /g, "+") : ""}`
        }
        className={`mb-2 inline-block rounded-[200px] border border-current bg-transparent px-4 py-2 font-bold text-red-800 [corner-shape:squircle] md:hidden dark:text-white ${searchCat ? "bg-linear-to-t from-red-800 to-red-600 text-white!" : ""}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 inline"
        >
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
        Filter
      </Link>
      <div
        className={`mb-5 ${showFilter === "true" ? "flex" : "hidden"} flex-wrap gap-2 md:flex`}
      >
        {categories.map((category) => {
          return (
            <Link
              prefetch
              href={
                search.get("category") !== category
                  ? `/products?filter=true&category=${category.replace(/ /g, "+")}`
                  : "/products?filter=true"
              }
              key={category}
              className={`btn-secondary ${
                search.get("category") === category &&
                "bg-linear-to-t text-white!"
              }`}
            >
              {category}
            </Link>
          )
        })}
      </div>
      <div className="3xl:grid-cols-5 mt-3 grid gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        {products.length ? (
          products.map((product, index) => {
            return <Product index={index} key={product.slug} {...product} />
          })
        ) : (
          <p>No Products</p>
        )}
      </div>
    </div>
  )
}
