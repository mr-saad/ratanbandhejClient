import dynamicImport from "next/dynamic"
import getProducts from "@/lib/getProducts"
import Link from "next/link"
import RatanSvg from "@/components/RatanSvg"

const Product = dynamicImport(() => import("@/components/Product"))

export const revalidate = 60

export default async function Home() {
  const data = await getProducts(2)
  return (
    <div className="mx-auto">
      <div className="min-h-[85vh] mb-10 flex flex-col justify-center items-center">
        <RatanSvg width={600} />
        <h1 className="font-semibold text-2xl text-center my-5">
          One Place For All Your Bandhani Needs.
        </h1>
        <a aria-label="Scroll Down" title="Scroll Down" href="#arrivals">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
      <div id="arrivals" className="scroll-mt-5 md:scroll-mt-24">
        <h1 className="heading">New Arrivals</h1>
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
