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
    <div className="px-5 sm:px-0">
      <h1 className="highlight leading-[1.1] mb-3 font-serif text-xl text-pretty capitalize md:mt-0 md:text-2xl">
        {title}
      </h1>
      <div className="flex items-center justify-between gap-2">
        <span>
          <strong className="highlight text-xl">₹{price}</strong> + Shipping
        </span>
        <CartBtn prod={prod} />
      </div>
      <p className="mt-2 whitespace-pre-wrap">{description}</p>

      {/*<hr className="mt-4 border-black/10 dark:border-white/10" />*/}
      <table className="mt-4 w-full border-t border-black/10 dark:border-white/10 [&_td:first-of-type]:border-r [&_td:first-of-type]:border-black/10 dark:[&_td:first-of-type]:border-white/10">
        <tbody>
          {specs.split(";").map((item) => (
            <tr key={item} className="*:w-1/2">
              <td className="highlight align-top font-bold pr-2 pb-2">
                {item.split(":=")[0]}
              </td>
              <td className="pl-2 pb-2">{item.split(":=")[1]}</td>
            </tr>
          ))}
          {colours && (
            <tr className="capitalize *:w-1/2">
              <td className="highlight align-top font-bold pr-2 pb-2">Instock</td>
              <td className="pl-2 pb-2">
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
