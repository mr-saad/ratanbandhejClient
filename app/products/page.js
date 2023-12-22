import Product from "@/components/Product"
import Link from "next/link"
import { getProducts } from "../page"

export const metadata = {
  title: "Products",
  alternates: {
    canonical: "/products"
  }
}

export const fetchCache = "force-cache"
export const revalidate = 60

export default async function Products({ searchParams }) {
  const data = await getProducts()
  const categories = [...new Set(data.map(all => all.type))]
  const filtered = data.filter(({ type }) => type === searchParams.category)
  const products = searchParams.category ? filtered : data

  return (
    <div className="pt-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(category => {
          return (
            <Link
              href={`/products?category=${category}`}
              key={category}
              className={`inline-block py-1 px-4 border border-current rounded-full transition ${
                searchParams.category === category &&
                "dark:text-white text-[#111111]"
              }`}
            >
              {category}
            </Link>
          )
        })}
        {searchParams.category && (
          <Link href="/products">
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
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {products.map(product => {
          return <Product key={product.slug} {...product} />
        })}
      </div>
    </div>
  )
}
