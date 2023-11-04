import sanity from "@/components/sanity"
import ImagesSwiper from "./ImagesSwiper"
import ProductDetails from "./ProductDetails"

export async function generateMetadata({ params: { slug } }) {
  const { title } = await sanity.fetch(`*[slug.current==$slug][0]{title}`, {
    slug
  })
  const keywords = title.toLowerCase().split(" ")
  keywords.push(
    "ratanbandhej",
    "ratan",
    "bandhej",
    "ratanbandhej.site",
    "ratanbandhej.vercel.app",
    "handicraft bandhani",
    "handmade bandhani"
  )
  return {
    title,
    alternates: {
      canonical: `${process.env.VERCEL_URL}/${slug}`
    },
    keywords
  }
}

export async function generateStaticParams() {
  const products = await sanity.fetch(
    `*[_type=="product"]{"slug":slug.current}`
  )
  return products.map(all => ({ slug: all.slug }))
}

export const revalidate = 2
async function getProduct(slug) {
  return await sanity.fetch(
    `*[slug.current==$slug][0]{
      _id,
      title,
      type,
      "images":images[].asset->{metadata{lqip},_id},
      description,
      colours,
      price,
      quantity,
      "slug":slug.current
    }`,
    { slug }
  )
}

export default async function Slug({ params }) {
  const product = await getProduct(params.slug)
  return (
    <div className="pt-5 mx-auto md:pt-10 max-w-5xl grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-5">
      <ImagesSwiper images={product.images} />
      <ProductDetails product={product} />
    </div>
  )
}
