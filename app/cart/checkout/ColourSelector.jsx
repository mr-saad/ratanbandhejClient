import useCartBtn from "@/lib/hooks/useCartBtn"
import { useState } from "react"

const ColourSelector = ({ _id, colours, price, setTotal, prod }) => {
  const { removeFromCartBtn, loading } = useCartBtn()

  const [colourData, setColourData] = useState([
    {
      colour: colours.split(",")[0].split("=")[0],
      quantity: 1,
      maxQuantity: parseInt(colours.split(",")[0].split("=")[1]) || 1,
    },
  ])

  const handleSelectChange = (index, selectedColour) => {
    const updatedData = [...colourData]
    const maxQuantity =
      parseInt(
        colours
          .split(",")
          .find((clr) => clr.includes(selectedColour))
          ?.split("=")[1],
      ) || 1
    setTotal((prev) => prev - price * (colourData[index].quantity - 1))
    updatedData[index] = {
      colour: selectedColour,
      quantity: 1,
      maxQuantity,
    }
    setColourData(updatedData)
  }
  const increaseQuan = (index) => {
    if (colourData[index].quantity >= colourData[index].maxQuantity) return
    setTotal((prev) => prev + price)

    const updatedData = [...colourData]
    updatedData[index].quantity = parseInt(
      Math.max(
        1,
        Math.min(
          updatedData[index].maxQuantity || 1,
          colourData[index].quantity + 1,
        ),
      ),
    )
    setColourData(updatedData)
  }

  const decreaseQuan = (index) => {
    if (colourData[index].quantity <= 1) return
    setTotal((prev) => prev - price)

    const updatedData = [...colourData]
    updatedData[index].quantity = parseInt(
      Math.max(
        1,
        Math.min(
          updatedData[index].maxQuantity || 1,
          colourData[index].quantity - 1,
        ),
      ),
    )
    setColourData(updatedData)
  }

  const handleQuantityChange = (index, value) => {
    if (
      parseInt(value) < 1 ||
      parseInt(value) > colourData[index].maxQuantity ||
      value.includes(".") ||
      value === ""
    )
      return

    if (parseInt(value) > colourData[index].quantity)
      setTotal((prev) => prev + price)
    else setTotal((prev) => prev - price)

    const updatedData = [...colourData]
    updatedData[index].quantity = parseInt(
      Math.max(1, Math.min(updatedData[index].maxQuantity || 1, value)),
    )
    setColourData(updatedData)
  }

  const addColour = () => {
    if (colourData.length >= colours.split(",").length) return
    setTotal((prev) => prev + price)
    setColourData([
      ...colourData,
      {
        colour: colours.split(",")[0].split("=")[0] || "",
        quantity: 1,
        maxQuantity: parseInt(colours.split(",")[0].split("=")[1]) || 1,
      },
    ])
  }

  const removeColour = async (index) => {
    if (colourData.length <= 1) {
      setTotal((prev) => prev - colourData[index].quantity * price)

      const res = await removeFromCartBtn(prod)
      if (!res.ok) {
        setTotal((prev) => prev + colourData[index].quantity * price)
      }
    } else {
      setTotal((prev) => prev - price * colourData[index].quantity)
      const updatedData = colourData.filter((_, idx) => idx !== index)
      setColourData(updatedData)
    }
  }
  return (
    <div className="mt-2 grid gap-4">
      {colourData.map((item, index) => (
        <div className="grid gap-2" key={index}>
          <div className="flex gap-4">
            <select
              id={`colours-${index}-${_id}`}
              className="input clr min-h-[29px] capitalize"
              value={item.colour}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              {colours.split(",").map((clrItem) => {
                const clr = clrItem.split("=")[0]
                return (
                  <option
                    key={clrItem}
                    value={clr}
                    className="text-black capitalize"
                  >
                    {clr}
                  </option>
                )
              })}
            </select>
            <div className="relative">
              <input
                id={`quantity-${index}-${_id}`}
                type="number"
                min={1}
                max={item.maxQuantity}
                className={`input qnt peer capitalize`}
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, e.target.value)}
              />
              {(parseInt(colours.split(",")[0].split("=")[1]) || 1) > 1 && (
                <>
                  <button type="button" onClick={() => increaseQuan(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute right-0 bottom-4"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <button type="button" onClick={() => decreaseQuan(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="absolute right-0 bottom-0"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="flex items-stretch justify-end gap-4">
            <button
              disabled={loading}
              onClick={() => removeColour(index)}
              className="btn w-14 border-red-700! bg-red-700! text-white! hover:bg-transparent! hover:text-red-700!"
              type="button"
            >
              {loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto animate-spin"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              ) : (
                "-"
              )}
            </button>
            <button
              disabled={loading}
              onClick={addColour}
              className="btn w-14"
              type="button"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ColourSelector
