import Link from "next/link"
import Layout from "./ProductsLay"

export default async function FilteredProducts({ data, searchParams }) {
  const categories = [...new Set(data.map((all) => all.type))]
  const filtered = data.filter(({ type }) => type === searchParams.category)
  const products = searchParams.category ? filtered : data
  const showFilter = searchParams.filter
  const searchCat = searchParams.category
  return (
    <div className="Container">
      <Link
        href={
          showFilter !== "true"
            ? `/products?filter=true${searchCat ? "&category=" + searchCat : ""}`
            : `/products${searchCat ? "?category=" + searchCat : ""}`
        }
        className="btn mb-2 inline-block"
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
        Filter by Category
      </Link>
      {showFilter === "true" && (
        <div className="mb-5 flex flex-wrap gap-2">
          {categories.map((category) => {
            return (
              <Link
                prefetch
                shallow={true}
                href={
                  searchParams.category !== category
                    ? `/products?filter=true&category=${category}`
                    : "/products?filter=true"
                }
                key={category}
                className={`inline-block rounded-full border border-current px-4 py-1 text-[#111]/70 transition dark:text-white/50 ${
                  searchParams.category === category &&
                  "bg-[#111] !text-white dark:bg-white dark:!text-[#111]"
                }`}
              >
                {category}
              </Link>
            )
          })}
        </div>
      )}
      <Layout products={products} />
    </div>
  )
}
