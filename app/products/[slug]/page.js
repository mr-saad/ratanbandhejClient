import sanity from "@/components/sanity"
import ImagesSwiper from "./ImagesSwiper"
import ProductDetails from "./ProductDetails"
import { notFound } from "next/navigation"

export const runtime = "edge"

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
      "ratanbandhej.vercel.app",
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
      description,
      colours,
      price
    }`,
    { slug },
  )
}

export default async function Slug({ params }) {
  const product = await getProduct(params.slug)
  return (
    <div className="mx-auto md:pt-10 max-w-md md:max-w-4xl grid md:grid-cols-2 grid-cols-1 md:gap-10">
      <ImagesSwiper images={product.images} title={product.title} />
      <ProductDetails product={product} />
    </div>
  )
}
