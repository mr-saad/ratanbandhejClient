import { useState } from "react"

export default function ColourChoose({
  _id,
  title,
  colours,
  items,
  setColours,
}) {
  const handleChange = (e) => {
    setQuant(e.target.value)
    const sel = items.find((item) => item._id === _id)
    sel.quantity = e.target.value
    setColours([
      ...new Set(
        items.map((item) => item),
        sel,
      ),
    ])
  }

  const [quant, setQuant] = useState("0")
  return (

  )
}
