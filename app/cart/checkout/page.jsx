import BookForm from "./BookForm"

export const metadata = {
  title: "Checkout",
}

export default function Checkout() {
  return (
    <div className="Container">
      <h1 className="heading">Checkout</h1>
      <BookForm />
    </div>
  )
}
