import ProductDetails from "./ProductDetails"
import { notFound } from "next/navigation"
import ImgSwiper from "@/app/products/[slug]/ImgSwiper"
import getProducts from "@/lib/server/getProducts"
import sanity from "@/lib/server/sanity"
import Product from "@/components/ui/Product"
import ProductGrid from "@/components/ui/ProductGrid"

export const revalidate = 3600

export async function generateMetadata(props) {
  const params = await props.params

  const { slug } = params

  const q = `*[slug.current==$slug][0]{title}`

  const product = await sanity.fetch(q, { slug })
  if (product) {
    const keywords = product.title.toLowerCase()

    return {
      title: product.title,
      alternates: {
        canonical: `/products/${slug}`,
      },
      keywords,
      openGraph: {
        title: product.title,
        description: `Buy ${product.title} at Ratan Bandhej`,
        url: `/products/${slug}`,
      },
    }
  } else {
    notFound()
  }
}

export async function generateStaticParams() {
  const q = `*[_type=="product"]{"slug":slug.current}`
  const res = await sanity.fetch(q)
  return res.map((all) => ({ slug: all.slug }))
}

async function getProduct(slug) {
  const q = `*[slug.current==$slug][0]{
      _id,
      "slug":slug.current,
      title,
      type,
      "images":images[].asset->{url,metadata{lqip}},
      specs,
      description,
      colours,
      price
    }`
  const res = await sanity.fetch(q, { slug })
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

  return (
    <>
      <div className="Container md:pt-10">
        <div className="grid gap-5 sm:grid-cols-2">
          <ImgSwiper data={product.images} title={product.title} />
          <ProductDetails product={product} />
        </div>
      </div>
      <div className="Container">
        {similars.length ? (
          <>
            <h2 className="heading">You Might Also Like</h2>
            <ProductGrid>
              {similars.map((prod) => (
                <Product {...prod} key={prod._id} />
              ))}
            </ProductGrid>
          </>
        ) : null}
      </div>
    </>
  )
}
