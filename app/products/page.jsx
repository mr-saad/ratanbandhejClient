import FilteredProducts from "./FilteredProducts"
import getProducts from "@/lib/server/getProducts"

export const revalidate = 3600

export const metadata = {
  title: "Products",
  alternates: {
    canonical: "/products",
  },
}

export default async function Products() {
  const products = await getProducts({ count: -1 })
  return <FilteredProducts data={products} />
}
