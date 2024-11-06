import BookFormWrapper from "./BookFormWrapper"

export const metadata = {
  title: "Checkout",
}

export default async function Checkout() {
  return (
    <div className="Container">
      <h1 className="heading">Confirm Orders</h1>
      <BookFormWrapper />
    </div>
  )
}
