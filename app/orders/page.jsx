import isAuthenticated from "@/lib/isAuthenticated"
import CancelOrder from "./CancelOrder"
import { query } from "@/lib/sanity"
import Image from "next/image"

export default async function Orders() {
  const { _id } = await isAuthenticated()

  const q = `*[_type=='product' && _id in *[_type=='order' && user._ref==$userId].product._ref]{
        "_id":*[_type=="order" && user._ref==$userId && product._ref == ^._id][0]._id,
        title,price,
        "status":*[_type=="order" && user._ref==$userId && product._ref == ^._id][0].status,
        "image":images[0].asset->{path,metadata{lqip}},
        "_createdAt": *[_type=="order" && user._ref==$userId && product._ref == ^._id][0]._createdAt
      }`

  const orders = await query(q, { userId: _id })

  return (
    <div className="Container">
      <h1 className="heading">My Orders</h1>
      <div className="ssm:grid-cols-2 slg:grid-cols-3 grid gap-10 divide-y divide-white/10">
        {orders.length ? (
          orders.map((order) => {
            return (
              <div
                key={order._id}
                className="flex gap-4 pt-10 first-of-type:pt-0"
              >
                <Image
                  alt={order.title}
                  width={200}
                  height={200}
                  quality={60}
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  className="aspect-square w-20 self-start rounded-md sm:w-auto"
                  src={order.image.path}
                  placeholder="blur"
                  blurDataURL={order.image.metadata.lqip}
                />
                <div className="flex flex-col">
                  <p className="highlight line-clamp-3">{order.title}</p>
                  <p>₹{order.price}</p>

                  <p>
                    {new Date(order._createdAt).getDate()}/
                    {new Date(order._createdAt).getMonth() + 1}/
                    {new Date(order._createdAt).getFullYear()}
                    {" - "}
                    {Math.abs(
                      Math.floor(new Date(order._createdAt).getHours() - 12) ===
                        0
                        ? 12
                        : Math.floor(
                            new Date(order._createdAt).getHours() - 12,
                          ),
                    )}
                    :{new Date(order._createdAt).getMinutes()}{" "}
                    {new Date(order._createdAt).getHours() > 12 ? "PM" : "AM"}
                  </p>
                  <p>
                    Status:{" "}
                    <span
                      className={`${order.status === "Cancelled" && "!text-red-600"} highlight font-semibold`}
                    >
                      {order.status}
                    </span>
                  </p>
                  {order.status !== "Cancelled" && (
                    <CancelOrder _id={order._id} />
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <p>No Orders Yet</p>
        )}
      </div>
    </div>
  )
}
