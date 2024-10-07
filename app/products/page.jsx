import getProducts from "@/lib/getProducts"
import FilteredProducts from "./FilteredProducts"

export const metadata = {
  title: "Products",
  alternates: {
    canonical: "/products",
  },
}

export const revalidate = 10

export default async function Products({ searchParams }) {
  const data = await getProducts()
  return <FilteredProducts data={data} searchParams={searchParams} />
}
