import Link from "next/link"
import Product from "@/components/Product"
import getProducts from "@/lib/getProducts"

export default async function Sections() {
  const [dupatta, saree, dress, topMaterial] = await Promise.all([
    getProducts({ type: "Dupatta", count: 2 }),
    getProducts({ type: "Saree", count: 2 }),
    getProducts({ type: "Dress", count: 2 }),
    getProducts({ type: "Top Material", count: 2 }),
  ])
  return (
    <>
      <Section title={dupatta[0].type} data={dupatta} />
      <Section title={saree[0].type} data={saree} />
      <Section title={dress[0].type} data={dress} />
      <Section title={topMaterial[0].type} data={topMaterial} />
    </>
  )
}

function Section({ title, data }) {
  return (
    <div className="my-20">
      <div className="mb-5 flex items-center justify-between gap-5">
        <h3 className="heading !mb-0 shrink-0">{title}</h3>
        <hr className="w-full border-black/20 dark:border-white/20" />
        <Link href={"/products?category=" + title} className="btn inline-block">
          Explore
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        {data.map((props) => (
          <Product key={props.slug} {...props} />
        ))}
      </div>
    </div>
  )
}
