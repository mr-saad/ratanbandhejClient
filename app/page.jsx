import getProducts from "@/lib/getProducts"
import Image from "next/image"
import HeaderText from "./HeaderText"
import { Suspense } from "react"
import Loading from "./loading"
import dynamic from "next/dynamic"
import { getHeaderImage } from "@/lib/getHeaderImage"
import { mutate, query } from "@/lib/sanity"

const Section = dynamic(() => import("./Section"))
const Carousel = dynamic(() => import("./Carousel"))

export const experimental_ppr = true

export default async function Home() {
  const [{ image }, carouselProds, dupatta, saree, dress, topMaterial] =
    await Promise.all([
      getHeaderImage(),
      getProducts({ count: 4 }),
      getProducts({ type: "Dupatta", count: 2 }),
      getProducts({ type: "Saree", count: 2 }),
      getProducts({ type: "Dress", count: 2 }),
      getProducts({ type: "Top Material", count: 2 }),
    ])
  return (
    <>
      <header className="relative flex min-h-[95vh] w-full items-center bg-[#111] before:absolute before:z-[2] before:h-full before:w-full before:bg-gradient-to-l before:from-transparent before:to-[#111]/90">
        <Image
          priority
          quality={65}
          loading="eager"
          placeholder="blur"
          blurDataURL={image.asset.metadata.lqip}
          sizes="100vw"
          fill
          src={image.asset.url}
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
          <Section title="Dupatta" data={dupatta} />
          <Section title="Saree" data={saree} />
          <Section title="Dress" data={dress} />
          <Section title="Top Material" data={topMaterial} />
        </Suspense>
      </div>
    </>
  )
}
