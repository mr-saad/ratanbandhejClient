import HeaderSvg from "@/components/HeaderSvg"
import Link from "next/link"
import dynamicImport from "next/dynamic"
import { FaChevronDown } from "react-icons/fa"

const Product = dynamicImport(() => import("@/components/Product"))

export const runtime = "edge"
export const preferredRegion = "bom1"

async function getProducts() {
  const sanity = (await import("@/components/sanity")).default
  return await sanity.fetch(`
  *[_type=="product"]|order(_createdAt asc)[0..3] {
    _id,
    type,
    title,
    "slug": slug.current,
    "image": images[0].asset->{metadata{lqip},_id},
  }`)
}

export default async function Home() {
  const data = await getProducts()
  return (
    <div className="mx-auto">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <HeaderSvg />
        <h1 className="font-semibold text-2xl text-center my-5">
          One Place For All Your Bandhani Needs.
        </h1>
        <a aria-label="Scroll Down" title="Scroll Down" href="#arrivals">
          <FaChevronDown size={40} />
        </a>
      </div>
      <div id="arrivals" className="scroll-mt-5 md:scroll-mt-24">
        <h1 className="w-fit mb-5 text-2xl font-semibold">New Arrivals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map(props => {
            return <Product key={props.slug} {...props} home={true} />
          })}
        </div>
        <Link
          prefetch={false}
          className="flex items-center w-fit btn mt-5"
          href={"/products"}
        >
          Explore
        </Link>
      </div>
    </div>
  )
}
