import { getProducts } from "../page"
import FilteredProducts from "./FilteredProducts"

export const metadata = {
  title: "Products",
  alternates: {
    canonical: "/products",
  },
}

export const revalidate = 3600

export default async function Products() {
  const data = await getProducts()
  return <FilteredProducts data={data} />
}
