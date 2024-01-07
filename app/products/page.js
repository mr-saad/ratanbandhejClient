import { getProducts } from "../page"
import FilteredProducts from "./FilteredProducts"

export const metadata = {
  title: "Products",
  alternates: {
    canonical: "/products"
  }
}

export const revalidate = 3600

export default async function Products({ searchParams }) {
  const data = await getProducts()

  return (
    <div className="pt-4">
      <FilteredProducts data={data} />
    </div>
  )
}
