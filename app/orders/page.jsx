import isAuthenticated from "@/lib/isAuthenticated"
import CancelOrder from "./CancelOrder"
import { query } from "@/lib/sanity"
import Image from "next/image"
import Card from "@/components/ui/Card"

export default async function Orders() {
  const { _id } = await isAuthenticated()

  const q = `*[_type=='product' && _id in *[_type=='order' && user._ref==$userId].product._ref]| order(*[_type=="order" && user._ref==$userId && product._ref == ^._id][0]._createdAt desc){
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
      <div className="3xl:grid-cols-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 dark:divide-white/10">
        {orders.length ? (
          orders.map((order) => {
            return (
              <Card
                key={order._id}
                className={`relative flex flex-wrap overflow-clip rounded-lg border border-black/10 dark:border-white/10`}
              >
                <span
                  className={`absolute top-0 right-0 rounded-bl-lg px-1 text-white shadow ${order.status === "Processing" ? "bg-amber-600" : order.status === "Cancelled" ? "bg-red-800" : "bg-green-600"}`}
                >
                  {order.status}
                </span>
                <Image
                  alt={order.title}
                  width={300}
                  height={300}
                  quality={60}
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                  className="aspect-square w-full"
                  src={order.image.path}
                  placeholder="blur"
                  blurDataURL={order.image.metadata.lqip}
                />

                <div className="p-5">
                  <p className="highlight line-clamp-3 capitalize">
                    {order.title}
                  </p>
                  {/* <p>₹{order.price}</p> */}
                  <p>
                    {new Intl.DateTimeFormat("en-IN", {
                      // timeStyle: "short",
                      month: "short",
                      day: "2-digit",
                      year: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      timeZone: "Asia/Kolkata",
                    }).format(new Date(order._createdAt))}
                  </p>

                  {order.status !== "Cancelled" && (
                    <CancelOrder _id={order._id} />
                  )}
                </div>
              </Card>
            )
          })
        ) : (
          <p>No Orders Yet</p>
        )}
      </div>
    </div>
  )
}
