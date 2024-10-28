import getProducts from "@/lib/getProducts"
import client, { urlFor } from "@/lib/sanity"
import Image from "next/image"
import HeaderText from "./HeaderText"
import { Suspense } from "react"
import Loading from "./loading"
import dynamic from "next/dynamic"

const Section = dynamic(() => import("./Section"))
const Carousel = dynamic(() => import("./Carousel"))

export const experimental_ppr = true

export const revalidate = 10

export default async function Home() {
  const data = await getProducts(-1, "", "home")
  const carouselProds = await getProducts(4)

  const categories = [...new Set(data.map(({ type }) => type))]
  const filtered = categories.map((cat) => {
    return {
      type: cat,
      prods: data.filter((prod) => prod.type === cat)[0].prods,
    }
  })

  const { image, lqip } = await client.fetch(`*[_type=="headerImage"][0]{
      image,
      "lqip":image.asset->metadata.lqip
    }`)
  return (
    <>
      <header className="relative flex min-h-[95vh] w-full items-center bg-[#111] before:absolute before:z-[2] before:h-full before:w-full before:bg-gradient-to-l before:from-transparent before:to-[#111]/90">
        <Image
          priority
          loading="eager"
          placeholder="blur"
          blurDataURL={lqip}
          sizes="100vw"
          fill
          src={urlFor(image).width(1200).url()}
          className="select-none object-cover object-top md:object-center"
          alt={"Ratan Bandhej"}
        />
        <HeaderText />
      </header>

      <div className="Container mx-auto">
        <div className="home mb-10">
          <h1 className="heading arrivals my-5 !text-4xl">Fresh Crafts</h1>
          <Suspense fallback={<Loading />}>
            <Carousel data={carouselProds} />
          </Suspense>
        </div>

        <Suspense fallback={<Loading />}>
          {filtered.map((prod) => (
            <Section key={prod.type} title={prod.type} data={prod.prods} />
          ))}
        </Suspense>
      </div>
    </>
  )
}
