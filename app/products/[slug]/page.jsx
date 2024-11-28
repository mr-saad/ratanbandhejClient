import ProductDetails from "./ProductDetails"
import { notFound } from "next/navigation"
import ImgSwiper from "@/app/products/[slug]/ImgSwiper"
import getProducts from "@/lib/getProducts"
import { query } from "@/lib/sanity"
import Product from "@/components/Product"
import isAuthenticated from "@/lib/isAuthenticated"

export const revalidate = 3600

export async function generateMetadata(props) {
  const params = await props.params

  const { slug } = params

  const q = `*[slug.current==$slug][0]{title}`

  const product = await query(q, { slug })
  if (product) {
    const keywords = product.title.toLowerCase().split(" ")
    keywords.push(
      "ratanbandhej",
      "ratan",
      "bandhej",
      "ratanbandhej.site",
      "ratanbandhej.shop",
      "handicraft bandhani",
      "handmade bandhani",
    )
    return {
      title: product.title,
      alternates: {
        canonical: `/products/${slug}`,
      },
      keywords,
    }
  } else {
    notFound()
  }
}

export async function generateStaticParams() {
  const q = `*[_type=="product"]{"slug":slug.current}`
  const res = await query(q)
  return res.map((all) => ({ slug: all.slug }))
}

async function getProduct(slug) {
  const q = `*[slug.current==$slug][0]{
      _id,
      "slug":slug.current,
      title,
      type,
      "images":images[].asset->{path,metadata{lqip}},
      specs,
      description,
      colours,
      price
    }`
  const res = await query(q, { slug })
  if (res) {
    return res
  } else {
    notFound()
  }
}

export default async function Slug(props) {
  const params = await props.params
  const product = await getProduct(params.slug)
  const similars = await getProducts({
    count: 5,
    type: product.type,
    similar: "similar",
    _id: product._id,
  })
  const { _id: userId } = await isAuthenticated()

  return (
    <div className="Container mx-auto md:max-w-4xl md:pt-10">
      <div className="grid gap-5 md:grid-cols-2">
        <ImgSwiper data={product.images} title={product.title} />
        <ProductDetails userId={userId} product={product} />
      </div>
      {similars.length ? (
        <>
          <h2 className="heading mt-20">You Might Also Like</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {similars.map((prod) => (
              <Product {...prod} key={prod._id} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
