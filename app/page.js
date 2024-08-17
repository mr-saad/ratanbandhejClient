import dynamicImport from "next/dynamic"
import getProducts from "@/lib/getProducts"
import Link from "next/link"
import RatanSvg from "@/components/RatanSvg"
import ScrollBottom from "./ScrollBottom"

const Product = dynamicImport(() => import("@/components/Product"))

export const revalidate = 60

export default async function Home() {
  const data = await getProducts(5)
  return (
    <div className="mx-auto">
      <div className="min-h-[85vh] mb-10 flex flex-col justify-center items-center">
        <RatanSvg width={600} />
        <h1 className="font-semibold text-2xl text-center my-5">
          One Place For All Your Bandhani Needs.
        </h1>
        <ScrollBottom />
      </div>
      <div id="arrivals" className="scroll-mt-5 md:scroll-mt-24">
        <h1 className="heading arrivals scroll-mt-5">New Arrivals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((props) => {
            return <Product key={props.slug} {...props} />
          })}
        </div>
        <Link href="/products" className="btn inline-block mt-5">
          Explore
        </Link>
      </div>
    </div>
  )
}
