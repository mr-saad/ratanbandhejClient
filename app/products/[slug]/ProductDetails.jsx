import CartBtn from "./CartBtn"

export default function ProductDetails({
  product: { _id, title, specs, description, colours, price, slug, images },
}) {
  const prod = {
    _id,
    title,
    colours,
    price,
    image: images ? images[0] : "",
    slug,
  }
  return (
    <div>
      <h1 className="highlight mb-3 text-2xl font-semibold capitalize md:mt-0">
        {title}
      </h1>
      <span>
        <strong className="highlight text-xl">₹{price}</strong> + Shipping
      </span>
      <p className="mt-2 whitespace-pre-wrap">{description}</p>

      <CartBtn prod={prod} />
      <hr className="mt-4 dark:border-white/20" />
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
        </tbody>
      </table>
    </div>
  )
}
