import FilteredProducts from "./FilteredProducts"
import getProducts from "@/lib/getProducts"

export const metadata = {
  title: "Products",
  alternates: {
    canonical: "/products",
  },
}

export default async function Products({ searchParams }) {
  const products = await getProducts({ count: -1 })
  return <FilteredProducts data={products} searchParams={searchParams} />
}
