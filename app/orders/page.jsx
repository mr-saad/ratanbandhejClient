import client from "@/lib/sanity"
import CancelOrder from "./CancelOrder"
import isAuthenticated from "@/lib/isAuthenticated"
import Image from "next/image"

export default async function Orders() {
  const { _id } = await isAuthenticated()

  const orders =
    (await client.fetch(
      `*[_type=='product' && _id in *[_type=='order' && user._ref==$_id].product._ref]{
        "_id":*[_type=="order" && user._ref==$_id && product._ref == ^._id][0]._id,
        title,price,
        "image":images[0].asset->{url,metadata{lqip}},
        "_createdAt": *[_type=="order" && user._ref==$_id && product._ref == ^._id][0]._createdAt
      }`,
      { _id },
    )) || []
  return (
    <div className="Container">
      <h1 className="heading">My Orders</h1>
      <div className="grid grid-cols-1 gap-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {orders.length > 0 ? (
          orders.map((order) => {
            return (
              <div key={order._id} className="flex h-full gap-4">
                <Image
                  alt={order.title}
                  width={100}
                  height={100}
                  className="aspect-square h-auto w-auto rounded-md object-cover object-top"
                  src={order.image.url}
                  placeholder="blur"
                  blurDataURL={order.image.metadata.lqip}
                />
                <div className="flex flex-col">
                  <p className="highlight">{order.title}</p>
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
                  <div className="mt-auto">
                    <CancelOrder _id={order._id} />
                  </div>
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
