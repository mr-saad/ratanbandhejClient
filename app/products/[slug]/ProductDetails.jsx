import CartBtn from "./CartBtn"

export default function ProductDetails({
  userId,
  product: { _id, title, specs, description, colours, price },
}) {
  return (
    <div>
      <h1 className="highlight mb-3 text-2xl font-semibold capitalize md:mt-0">
        {title}
      </h1>
      <p className="mt-2 whitespace-pre-wrap">{description}</p>
      <table className="w-full border-separate border-spacing-y-4">
        <tbody>
          {specs.split(";").map((item) => (
            <tr key={item} className="*:w-1/2">
              <td className="highlight align-top font-bold">
                {item.split(":=")[0]}
              </td>
              <td>{item.split(":=")[1]}</td>
            </tr>
          ))}
          {colours && (
            <tr className="capitalize *:w-1/2">
              <td className="highlight align-top font-bold">Instock</td>
              <td>
                {colours
                  .split(",")
                  .map(
                    (clr, index, arr) =>
                      `${clr.split("=")[0]}${index < arr.length - 1 ? ", " : ""}`,
                  )}
              </td>
            </tr>
          )}
          <tr className="*:w-1/2">
            <td className="highlight align-top font-bold">Price</td>
            <td>₹{price}</td>
          </tr>
        </tbody>
      </table>
      <CartBtn userId={userId} _id={_id} />
    </div>
  )
}
