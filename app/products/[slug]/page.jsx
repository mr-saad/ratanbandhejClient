import sanity from "@/lib/sanity"
import ProductDetails from "./ProductDetails"
import { notFound } from "next/navigation"
import ImgSwiper from "@/app/ImgSwiper"
import isAuthenticated from "@/lib/isAuthenticated"

export async function generateMetadata({ params: { slug } }) {
  const product = await sanity.fetch(`*[slug.current==$slug][0]{title}`, {
    slug,
  })
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
  const products = await sanity.fetch(
    `*[_type=="product"]{"slug":slug.current}`,
  )
  return products.map((all) => ({ slug: all.slug }))
}

export const revalidate = 10
async function getProduct(slug) {
  return await sanity.fetch(
    `*[slug.current==$slug][0]{
      _id,
      "slug":slug.current,
      title,
      type,
      "images":images[].asset->{metadata{lqip},url,_id},
      specs,
      description,
      colours,
      price
    }`,
    { slug },
  )
}

export default async function Slug({ params }) {
  const product = await getProduct(params.slug)
  const auth = await isAuthenticated()
  return (
    <div className="Container mx-auto grid md:max-w-4xl md:grid-cols-2 md:gap-10 md:pt-10">
      <ImgSwiper data={product.images} title={product.title} />
      <ProductDetails product={product} auth={auth} />
    </div>
  )
}
