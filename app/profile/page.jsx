"use client"
import React, { useEffect, useState } from "react"
import {
  User,
  Package,
  LogOut,
  Trash2,
  ShoppingCart,
  LoaderCircle,
} from "lucide-react"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import ProductGrid from "@/components/ui/ProductGrid"
import signOut from "@/lib/actions/signOut"
import useCartBtn from "@/lib/hooks/useCartBtn"
import Empty from "@/components/ui/Empty"
import cn from "@/lib/utils/cn"
import { initialAuth } from "@/lib/context/Provider"

export default function Profile() {
  const { auth, cart, setAuth, authLoading } = useRatanContext()
  const { removeFromCartBtn } = useCartBtn()

  const [logoutLoading, setLogoutLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("profile")
  const [orders, setOrders] = useState([])
  const [ordersLoading, setOrdersLoading] = useState(true)

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await (
          await fetch(`/api/getOrders?userId=${auth?._id}`, { method: "GET" })
        ).json()
        if (res) setOrders(res || [])
      } catch (error) {
        console.error(error)
        alert(error?.message || "Error while fetching orders")
      } finally {
        setOrdersLoading(false)
      }
    }
    !authLoading ? getOrders() : null
  }, [authLoading])

  const onSignOut = async () => {
    setLogoutLoading(true)
    const warn = confirm(
      "You'll be Signed Out. You have to Sign In again to place an order. Sure?",
    )
    if (warn) {
      setAuth(initialAuth)
      await signOut()
    }
    setLogoutLoading(false)
  }

  const handleRemoveFromCart = async (e, _id) => {
    e.preventDefault()
    removeFromCartBtn({ _id })
  }

  return (
    <div className="Container">
      <div className="flex items-start justify-between">
        <h1 className="heading mb-5">Profile</h1>
        <Button
          variant={"danger"}
          disabled={logoutLoading}
          onClick={onSignOut}
          className={"gap-2"}
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </Button>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <aside>
          <Card className={"overflow-clip"}>
            <nav className="flex overflow-x-auto *:grow md:flex-col">
              <NavButton
                active={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
                icon={User}
                label="General"
              />
              <NavButton
                active={activeTab === "orders"}
                onClick={() => setActiveTab("orders")}
                icon={Package}
                label="Orders"
              />
              <NavButton
                active={activeTab === "cart"}
                onClick={() => setActiveTab("cart")}
                icon={ShoppingCart}
                label="Cart"
              />
            </nav>
          </Card>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <div className="grow">
          {/* TAB: PERSONAL INFO */}
          {activeTab === "profile" && (
            <>
              <div className="mb-8 flex flex-col gap-8 md:flex-row">
                {/* Form Fields */}
                <div className="grid flex-1 gap-5 md:grid-cols-2">
                  <InputField
                    disabled
                    label="Username"
                    value={auth.username}
                    readOnly
                    note="Username cannot be changed."
                  />
                  <InputField
                    disabled
                    label="Email Address"
                    value={auth.email}
                    type="email"
                  />
                </div>
              </div>
            </>
          )}

          {/* TAB: ORDERS */}
          {activeTab === "orders" && (
            <>
              <div>
                {authLoading || ordersLoading ? (
                  <p>Loading</p>
                ) : orders?.length > 0 ? (
                  orders.map((order) => (
                    <div
                      key={order?._id}
                      className="flex flex-col justify-between gap-5 border-b border-black/10 p-5 pl-0 transition-colors last:border-0 hover:bg-stone-100 md:flex-row md:items-center dark:border-white/10 dark:hover:bg-stone-900"
                    >
                      <div className="flex items-start gap-5">
                        <div className="shrink-0 rounded-lg bg-stone-200 dark:bg-rose-900/50">
                          <Image
                            placeholder="blur"
                            blurDataURL={order?.product?.image?.metadata?.lqip}
                            src={order?.product?.image?.url}
                            width={70}
                            height={70}
                            alt={order?.product?.title}
                            className="aspect-square object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm">Order #{order?._id}</p>
                          <p className="highlight">{order?.product?.title}</p>
                          <p className="mt-1 text-sm">
                            Placed on{" "}
                            {new Date(order?._createdAt).toLocaleDateString(
                              "in",
                              { dateStyle: "medium" },
                            )}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <div
                              className={cn(
                                "text-sm font-medium",
                                order.status === "Cancelled" ||
                                  order.status === "Error"
                                  ? "text-red-700"
                                  : order.status === "Shipped"
                                    ? "text-green-600"
                                    : "text-orange-600",
                              )}
                            >
                              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-current"></span>
                              {order?.status}
                            </div>
                            <p className="font-serif font-medium">
                              ₹{order?.product?.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <Empty
                    className="mt-10"
                    message={"No Orders yet"}
                    content={
                      <p>
                        Explore{" "}
                        <Link href={"/products"} className="link underline">
                          Products
                        </Link>
                      </p>
                    }
                  />
                )}
              </div>
            </>
          )}

          {/* TAB: CART */}

          {activeTab === "cart" && (
            <>
              {cart.length > 0 ? (
                <ProductGrid>
                  {cart.map((i) => {
                    return (
                      <CartItem
                        key={i._id}
                        {...i}
                        handleRemoveFromCart={handleRemoveFromCart}
                      />
                    )
                  })}
                </ProductGrid>
              ) : (
                <Empty
                  className={"mt-10"}
                  message={"Cart is currently empty."}
                  content={
                    <p>
                      Explore{" "}
                      <Link className="underline" href="/products">
                        Products
                      </Link>
                    </p>
                  }
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// --- Sub-Components ---

const CartItem = ({ _id, slug, title, image, price, handleRemoveFromCart }) => {
  const [cartOpLoading, setCartOpLoading] = useState(false)
  return (
    <Card className={"overflow-clip"}>
      <Link href={"/products/" + slug} className="group">
        <div className="relative aspect-square overflow-clip bg-stone-100">
          <Image
            placeholder="blur"
            blurDataURL={image.metadata.lqip}
            width={300}
            height={300}
            src={image.url}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105 group-focus-visible:scale-105"
          />
          <Button
            disabled={cartOpLoading}
            variant={"danger"}
            className="absolute top-2 right-2"
            onClick={(e) => {
              setCartOpLoading(true)
              handleRemoveFromCart(e, _id)
              setCartOpLoading(false)
            }}
          >
            {cartOpLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <Trash2 size={14} />
            )}
          </Button>
        </div>
        <div className="p-5">
          <h4 className="highlight line-clamp-3 text-sm">{title}</h4>
          <p className="text-base">₹{price}</p>
        </div>
      </Link>
    </Card>
  )
}

const NavButton = ({ active, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`flex shrink-0 cursor-pointer items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 md:w-full ${
      active
        ? "bg-rose-700 text-white"
        : " hover:bg-rose-100 focus-visible:bg-rose-100"
    }`}
  >
    <Icon size={18} className={active ? "text-white" : ""} />
    <span>{label}</span>
  </button>
)

const InputField = ({
  label,
  value,
  type = "text",
  placeholder,
  readOnly,
  note,
  disabled,
}) => (
  <div className="group">
    <label className="mb-2 block text-sm font-bold tracking-wider uppercase">
      {label}
    </label>
    <input
      disabled={disabled}
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      readOnly={readOnly}
      className="input"
    />
    {note && <p className="mt-1 text-sm">{note}</p>}
  </div>
)
