"use client"
import { useState } from "react"
import Product from "@/components/Product"
import { FaChevronDown } from "react-icons/fa"

export default function FilterProducts({ data }) {
  const [products, setProducts] = useState(data)
  const categories = [...new Set(data.map((all) => all.type))]
  const [category, setCategory] = useState("all")

  const [showDropdown, setShowDropdown] = useState(false)

  const ChangeCategory = (cate) => {
    setCategory(cate)
    switch (cate) {
      case "Saree":
        setProducts(data.filter((all) => all.type === "Saree"))
        break
      case "Dupatta":
        setProducts(data.filter((all) => all.type === "Dupatta"))
        break
      case "Top Material":
        setProducts(data.filter((all) => all.type === "Top Material"))
        break
      default:
        setProducts(data)
    }

    setShowDropdown(false)
  }
  return (
    <>
      <div className="mb-5 relative max-w-sm font-semibold rounded-md capitalize">
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center justify-between p-3 cursor-pointer border dark:border-white/10 rounded-md"
        >
          {category}
          <FaChevronDown
            className="transition"
            style={{ transform: !showDropdown ? "none" : "rotate(180deg)" }}
          />
        </div>

        {/* dropdown */}
        <div
          style={{ height: !showDropdown ? 0 : "auto" }}
          className="absolute overflow-hidden top-full left-0 w-full z-10 mt-1"
        >
          <div className="p-3 border dark:border-white/10 rounded-md bg-white dark:bg-[#111]">
            <h2
              onClick={() => {
                ChangeCategory("all")
                setShowDropdown(false)
              }}
              className="my-2 first:mt-0 last:mb-0 cursor-pointer"
            >
              all
            </h2>
            {categories.map((category) => {
              return (
                <h2
                  key={category}
                  onClick={() => ChangeCategory(category)}
                  className="my-2 first:mt-0 last:mb-0 cursor-pointer"
                >
                  {category}
                </h2>
              )
            })}
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {products.map((props) => {
          return <Product key={props.slug} {...props} />
        })}
      </div>
    </>
  )
}
