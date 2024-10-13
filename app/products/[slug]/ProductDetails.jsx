import CartBtn from "./CartBtn"

export default function ProductDetails({
  product: { _id, title, specs, description, colours, price },
  auth,
}) {
  return (
    <div>
      <h3 className="highlight my-3 text-base font-semibold capitalize md:mt-0">
        {title}
      </h3>
      <table className="w-full border-separate border-spacing-y-4">
        <tbody>
          {specs.split(";").map((item) => (
            <tr key={item} className="*:w-1/2">
              <td className="align-top font-bold">{item.split(":=")[0]}</td>
              <td>{item.split(":=")[1]}</td>
            </tr>
          ))}
          <tr className="*:w-1/2">
            <td className="align-top font-bold">Instock</td>
            <td>
              {colours.split(",").map((clr, index, arr) => (
                <span key={clr}>
                  {clr.split("=")[0]}
                  {index < arr.length - 1 ? ", " : ""}
                </span>
              ))}
            </td>
          </tr>
          <tr className="*:w-1/2">
            <td className="align-top font-bold">Price</td>
            <td>₹{price}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-2 whitespace-pre-wrap">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <CartBtn userId={auth._id} _id={_id} />
      </div>
    </div>
  )
}
