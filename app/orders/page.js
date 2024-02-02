import { getXataClient } from "@/lib/xata"
import { cookies } from "next/headers"
const xata = getXataClient()

export default async function Orders() {
  const orders = cookies().get("userId")
    ? await xata.db.Orders.filter({
        UserId: cookies().get("userId").value,
      }).getMany()
    : []

  return (
    <div>
      <h1 className="heading">Orders</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 gap-y-5">
        {orders.length > 0 ? (
          orders.map((order) => {
            return (
              <div
                key={order.id}
                className="border dark:border-white/10 p-5 rounded-md"
              >
                <p className="highlight">{order.ProductName}</p>
                <p>₹{order.ProductPrice}</p>
                <p>{order.xata.createdAt.toLocaleString("en-US")}</p>
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
