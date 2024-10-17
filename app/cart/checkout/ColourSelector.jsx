import { useState } from "react"

const ColourSelector = ({ _id, colours, price, setTotal }) => {
  const [colourData, setColourData] = useState([
    {
      colour: colours.split(",")[0].split("=")[0],
      quantity: 1,
      maxQuantity: colours.split(",")[0].split("=")[1],
    },
  ])

  const handleSelectChange = (index, selectedColour) => {
    const updatedData = [...colourData]
    const maxQuantity =
      colours
        .split(",")
        .find((clr) => clr.includes(selectedColour))
        ?.split("=")[1] || 1
    updatedData[index] = {
      colour: selectedColour,
      quantity: 1,
      maxQuantity,
    }
    setColourData(updatedData)
  }

  const handleQuantityChange = (index, value) => {
    if (parseInt(value) > colourData[index].quantity)
      setTotal((prev) => prev + price)
    else setTotal((prev) => prev - price)

    const updatedData = [...colourData]
    updatedData[index].quantity = Math.max(
      1,
      Math.min(updatedData[index].maxQuantity, parseInt(value)),
    )
    setColourData(updatedData)
  }

  const addColour = () => {
    if (colourData.length >= colours.split(",").length) return
    setTotal((prev) => prev + price)
    setColourData([
      ...colourData,
      {
        colour: colours.split(",")[0].split("=")[0],
        quantity: 1,
        maxQuantity: colours.split(",")[0].split("=")[1],
      },
    ])
  }

  const removeColour = (index) => {
    if (colourData.length <= 1) return
    setTotal((prev) => prev - price * colourData[index].quantity)
    const updatedData = colourData.filter((_, idx) => idx !== index)
    setColourData(updatedData)
  }

  return (
    <div className="grid gap-5">
      {colourData.map((item, index) => (
        <div className="grid grid-flow-col grid-cols-4 gap-5" key={index}>
          <div className="relative">
            <label htmlFor={`colours-${index}-${_id}`}>Colour</label>
            <select
              name={`colour-${index}`}
              id={`colours-${index}-${_id}`}
              className="input clr min-h-[29px]"
              value={item.colour}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              {colours.split(",").map((clrItem) => {
                const clr = clrItem.split("=")[0]
                return (
                  <option
                    key={clrItem}
                    value={clr}
                    className="capitalize text-black"
                  >
                    {clr}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="relative">
            <label htmlFor={`quantity-${index}-${_id}`}>Quantity</label>
            <input
              name={`quantity-${index}`}
              id={`quantity-${index}-${_id}`}
              type="number"
              min={1}
              max={item.maxQuantity}
              className={`input qnt peer capitalize`}
              value={item.quantity}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            />
          </div>

          <button
            disabled={colourData.length <= 1}
            onClick={() => removeColour(index)}
            className="btn"
            type="button"
          >
            -
          </button>
          <button onClick={addColour} className="btn" type="button">
            +
          </button>
        </div>
      ))}
    </div>
  )
}

export default ColourSelector
