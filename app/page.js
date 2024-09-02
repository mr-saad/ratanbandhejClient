import getProducts from "@/lib/getProducts"
import client from "@/lib/sanity"
import Image from "next/image"
import ImgSwiper from "./ImgSwiper"
import Section from "./Section"

export const revalidate = 10

export default async function Home() {
  const data = await getProducts(5)
  const dupatta = await getProducts(2, "Dupatta")
  const topMaterial = await getProducts(2, "Top Material")

  const {
    image: { url },
  } = await client.fetch(`*[_type=="headerImage"][0]{
      "image":image.asset->{url}
    }`)

  return (
    <>
      <header className="relative flex min-h-[95vh] w-full items-center before:absolute before:z-[2] before:h-full before:w-full before:bg-gradient-to-l before:from-transparent before:to-[#111]/70">
        <Image
          src={url}
          className="absolute h-full max-w-full select-none object-cover object-top"
          width={1920}
          height={1080}
          priority
          loading="eager"
          alt={"Ratan Bandhej"}
        />
        <div className="z-[2] px-5 text-white md:px-20">
          <h1 className="pb-4 text-6xl font-extrabold">Ratan Bandhej</h1>
          <h2 className="text-2xl">One Place For All Your Bandhani Needs.</h2>
        </div>
      </header>

      <div className="Container mx-auto">
        <div className="mb-10">
          <h1 className="heading arrivals my-5 text-center !text-4xl">
            New Arrivals
          </h1>

          <div className="mx-auto max-w-xl">
            <ImgSwiper data={data} />
          </div>
        </div>
        <Section title={dupatta[0].type} data={dupatta} />
        <Section title={topMaterial[0].type} data={topMaterial} />
      </div>
    </>
  )
}
