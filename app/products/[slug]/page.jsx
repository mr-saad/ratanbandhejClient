import sanity from "@/lib/sanity"
import ProductDetails from "./ProductDetails"
import { notFound } from "next/navigation"
import ImgSwiper from "@/app/products/[slug]/ImgSwiper"
import isAuthenticated from "@/lib/isAuthenticated"
import getProducts from "@/lib/getProducts"
import Product from "@/components/Product"

export async function generateMetadata(props) {
  const params = await props.params

  const { slug } = params

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
  const product = await sanity.fetch(
    `*[slug.current==$slug][0]{
      _id,
      "slug":slug.current,
      title,
      type,
      "images":images[].asset->{_id,metadata{lqip}},
      specs,
      description,
      colours,
      price
    }`,
    { slug },
  )
  if (product) {
    return product
  } else {
    notFound()
  }
}

export default async function Slug(props) {
  const params = await props.params
  const product = await getProduct(params.slug)
  const similars = await getProducts(
    5,
    product.type,
    "",
    "similar",
    product._id,
  )
  const auth = await isAuthenticated()
  return (
    <div className="Container mx-auto md:max-w-4xl md:pt-10">
      <div className="grid gap-5 md:grid-cols-2">
        <ImgSwiper data={product.images} title={product.title} />
        <ProductDetails product={product} auth={auth} />
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
