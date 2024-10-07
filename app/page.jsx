import getProducts from "@/lib/getProducts"
import client from "@/lib/sanity"
import Image from "next/image"
import Section from "./Section"
import Carousel from "./Carousel"
import HeaderText from "./HeaderText"

export const revalidate = 10

export default async function Home() {
  const data = await getProducts(5)
  const dupatta = await getProducts(2, "Dupatta")
  const topMaterial = await getProducts(2, "Top Material")

  const {
    image: {
      url,
      metadata: { lqip },
    },
  } = await client.fetch(`*[_type=="headerImage"][0]{
      "image":image.asset->{url,metadata}
    }`)

  return (
    <>
      <header className="relative flex min-h-[95vh] w-full items-center bg-[#111] before:absolute before:z-[2] before:h-full before:w-full before:bg-gradient-to-l before:from-transparent before:to-[#111]/70">
        <Image
          placeholder="blur"
          blurDataURL={lqip}
          src={url}
          className="absolute h-full max-w-full select-none object-cover object-top"
          width={1920}
          height={1080}
          priority
          loading="eager"
          alt={"Ratan Bandhej"}
        />
        <HeaderText />
      </header>

      <div className="Container mx-auto">
        <div className="home mb-10">
          <h1 className="heading arrivals my-5 !text-4xl">Fresh Crafts</h1>
          <Carousel data={data} />
        </div>
        {dupatta.length && <Section title={dupatta[0].type} data={dupatta} />}
        {topMaterial.length && (
          <Section title={topMaterial[0].type} data={topMaterial} />
        )}
      </div>
    </>
  )
}
