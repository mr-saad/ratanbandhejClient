"use client"
import Product from "@/components/Product"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function FilteredProducts({ data }) {
  const searchParams = useSearchParams()
  const categories = [...new Set(data.map(all => all.type))]
  const filtered = data.filter(
    ({ type }) => type === searchParams.get("category")
  )
  const products = searchParams.get("category") ? filtered : data
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2 mb-3">
        {categories.map(category => {
          return (
            <Link
              shallow={true}
              href={`/products?category=${category}`}
              key={category}
              className={`inline-block py-1 px-4 border border-current rounded-full transition text-black/50 dark:text-white/50 ${
                searchParams.get("category") === category &&
                "dark:!text-white !text-[#111111]"
              }`}
            >
              {category}
            </Link>
          )
        })}
        {searchParams.get("category") && (
          <Link shallow={true} href="/products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-[#111] dark:stroke-white transition h-full"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </Link>
        )}
      </div>
      {/* product list */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
        {products.map(product => {
          return <Product key={product.slug} {...product} />
        })}
      </div>
    </>
  )
}
