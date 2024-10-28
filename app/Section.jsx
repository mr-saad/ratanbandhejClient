import dynamic from "next/dynamic"
import Link from "next/link"

const Product = dynamic(() => import("@/components/Product"))

export default function Section({ title, data }) {
  return (
    <div className="my-20">
      <div className="mb-5 flex items-center justify-between gap-5">
        <h3 className="heading !mb-0 shrink-0">{title}</h3>
        <hr className="w-full border-[#888]" />
        <Link href={"/products?category=" + title} className="btn inline-block">
          Explore
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        {data.map((props, index) => (
          <Product key={props.slug} index={index} {...props} />
        ))}
      </div>
    </div>
  )
}
