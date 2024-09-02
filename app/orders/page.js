import { cookies } from "next/headers"
import sanity from "@/lib/sanity"

export default async function Orders() {
  const userId = cookies().get("userId").value
  const orders =
    (await sanity.fetch(
      `*[_type=='order' && userId==$userId]{_id,username,productName,price,_createdAt}`,
      { userId },
    )) || []
  return (
    <div className="Container">
      <h1 className="heading">Orders</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 gap-y-5">
        {orders.length > 0 ? (
          orders.map((order) => {
            return (
              <div
                key={order._id}
                className="border dark:border-white/10 p-5 rounded-md"
              >
                <p className="highlight">{order.productName}</p>
                <p>₹{order.price}</p>
                <p>
                  {new Date(order._createdAt).getDate()}/
                  {new Date(order._createdAt).getMonth()}/
                  {new Date(order._createdAt).getFullYear()}
                </p>
              </div>
            )
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  )
}
