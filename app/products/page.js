import sanity from "@/components/sanity"
import FilterProducts from "./FilterProducts"

export const metadata = {
  title: "Products"
}

export const runtime = "edge"
export const preferredRegion = "bom1"
export const dynamic = "force-dynamic"
async function getProducts() {
  return await sanity.fetch(`
  *[_type=="product"]|order(_createdAt asc) {
    _id,
    type,
    title,
    "slug": slug.current,
    "image": images[0].asset->{metadata{lqip},_id}
  }`)
}

export default async function Products() {
  const data = await getProducts()

  return (
    <div className="pt-4">
      <FilterProducts data={data} />
    </div>
  )
}
