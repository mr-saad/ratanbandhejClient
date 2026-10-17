import sanity from "@/lib/server/sanity"
import Image from "next/image"
import Link from "next/link"

const getCategories = async () => {
  const categories = await sanity.fetch(
    `*[_type == "product" && defined(type) && _id == *[_type == "product" && type == ^.type && defined(images)][0]._id] {
        type,
        "image": images[0].asset->{url, "lqip": metadata.lqip}
     }
    `,
  )
  return categories
}

export default async function HeroCategories() {
  const categories = await getCategories()
  return (
    <div className="Container flex gap-2 overflow-x-auto">
      {categories.map((cat) => {
        return (
          <Link
            className="group relative shrink-0 overflow-clip rounded-md"
            key={cat.type}
            href={"/products?category=" + cat.type}
          >
            {cat?.image && (
              <Image
                quality={60}
                priority
                fetchPriority="high"
                sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw, 25vw"
                alt={cat.type}
                placeholder="blur"
                blurDataURL={cat.image.lqip}
                src={`${cat.image.url}?w=200&auto=format`}
                width={200}
                height={200}
                className="aspect-square scale-105 object-cover object-top transition duration-300 ease-in-out will-change-transform group-focus-within:scale-100 group-hover:scale-100"
              />
            )}
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[#111]/70 to-transparent p-2 transition-all md:p-5">
              <h2 className="font-serif text-sm text-white capitalize md:text-base">
                {cat.type}
              </h2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
