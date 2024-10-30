import getProducts from "@/lib/getProducts"
import FilteredProducts from "./FilteredProducts"

export const metadata = {
  title: "Products",
  alternates: {
    canonical: "/products",
  },
}

export default async function Products(props) {
  const searchParams = await props.searchParams
  const data = await getProducts({ count: -1 })
  return <FilteredProducts data={data} searchParams={searchParams} />
}
