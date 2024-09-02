import Product from "@/components/Product"
import Link from "next/link"

export default function Section({ title, data }) {
  return (
    <div className="my-20">
      <h3 className="heading mb-5 text-center !text-4xl">{title}</h3>
      <div className="grid gap-5 md:grid-cols-3 md:gap-10">
        {data.map((props) => (
          <Product key={props.slug} {...props} />
        ))}
      </div>
      <Link href="/products" className="btn mt-5 inline-block">
        Explore
      </Link>
    </div>
  )
}
