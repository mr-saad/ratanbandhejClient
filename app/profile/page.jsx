"use client"
import React, { useState } from "react"
import {
  User,
  Package,
  MapPin,
  Settings,
  LogOut,
  Camera,
  Edit2,
  Trash2,
  ChevronRight,
  ShoppingCart,
} from "lucide-react"
import useRatanContext from "@/lib/hooks/useRatanContext"
import Card from "@/components/ui/Card"
import Button from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import ProductGrid from "@/components/ui/ProductGrid"

export default function Account() {
  const { auth, cart } = useRatanContext()
  const [activeTab, setActiveTab] = useState("profile")

  const user = {
    username: auth.username,
    email: auth.email,
    phone: auth.phone,
    avatar: "/api/placeholder/150/150",
    joined: auth.createdAt,
    cart: cart,
  }

  return (
    <div className="Container">
      <h1 className="heading mb-5">My Account</h1>

      <div className="flex flex-col gap-5 md:flex-row">
        <aside>
          <Card>
            <div className="flex items-center gap-3 border-b border-black/10 p-5 dark:border-white/10">
              <img
                src={user.avatar}
                alt={user.username}
                className="h-10 w-10 rounded-full bg-stone-600 object-cover"
              />
              <div>
                <h3 className="truncate font-medium">{user.username}</h3>
                <p className="truncate text-sm">Member since {user.joined}</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-1 p-2 md:flex-col">
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
                label="My Orders"
              />
              <NavButton
                active={activeTab === "addresses"}
                onClick={() => setActiveTab("addresses")}
                icon={MapPin}
                label="Addresses"
              />
              <NavButton
                active={activeTab === "cart"}
                onClick={() => setActiveTab("cart")}
                icon={ShoppingCart}
                label="Cart"
              />
              <NavButton
                active={activeTab === "settings"}
                onClick={() => setActiveTab("settings")}
                icon={Settings}
                label="Settings"
              />
            </nav>
            <div className="mt-2 border-t border-black/10 p-2 dark:border-white/10">
              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-50">
                <LogOut size={18} />
                <span>Sign Out</span>
              </button>
            </div>
          </Card>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <Card className="flex-1 p-5 md:px-10">
          {/* TAB: PERSONAL INFO */}
          {activeTab === "profile" && (
            <>
              <div className="mb-8 flex items-start justify-between">
                <h2 className="highlight font-serif text-xl">
                  Personal Information
                </h2>
                <Button>Save</Button>
              </div>
              <div className="mb-8 flex flex-col gap-8 md:flex-row">
                {/* Avatar Upload */}
                <div className="shrink-0">
                  <div className="group relative h-24 w-24 overflow-hidden rounded-full bg-stone-100 ring-4 ring-stone-50">
                    <img
                      src={user.avatar}
                      alt="User"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                      <Camera className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                {/* Form Fields */}
                <div className="grid flex-1 gap-5 md:grid-cols-2">
                  <InputField
                    disabled={true}
                    label="Username"
                    value={user.username}
                    readOnly
                    note="Username cannot be changed."
                  />
                  <InputField
                    label="Email Address"
                    value={user.email}
                    type="email"
                  />
                  <InputField
                    label="Phone Number"
                    value={user.phone}
                    type="tel"
                  />
                  <InputField
                    label="Date of Birth"
                    placeholder="DD/MM/YYYY"
                    type="date"
                  />
                </div>
              </div>
            </>
          )}

          {/* TAB: ORDERS */}
          {activeTab === "orders" && (
            <>
              <div>
                <h2 className="highlight font-serif text-xl">Order History</h2>
              </div>
              <div>
                {[1, 2, 3].map((order) => (
                  <div
                    key={order}
                    className="flex flex-col justify-between gap-5 border-b border-black/10 p-5 pl-0 transition-colors last:border-0 hover:bg-stone-100 md:flex-row md:items-center dark:border-white/10 dark:hover:bg-stone-900"
                  >
                    <div className="flex items-start gap-5">
                      <div className="rounded-lg bg-stone-100 p-3">
                        <Package className="" size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium">Order #BAND-849{order}</h4>
                        <p className="mt-1 text-sm">Placed on Jan 15, 2026</p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="inline-block h-2 w-2 rounded-full bg-orange-400"></span>
                          <span className="text-sm font-medium text-orange-600">
                            Processing
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <p className="font-serif font-medium">₹4,250.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* TAB: ADDRESSES */}
          {activeTab === "addresses" && (
            <>
              <div className="mb-5 flex items-start justify-between">
                <h2 className="highlight font-serif text-xl">
                  Saved Addresses
                </h2>
                <Button>New</Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Default Address Card */}
                <Card className={"group relative p-5"}>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="rounded-md p-1.5 hover:bg-stone-100">
                      <Edit2 size={14} />
                    </button>
                  </div>
                  <span className="mb-3 inline-block rounded bg-stone-100 px-2 py-1 text-[10px] font-bold tracking-wider uppercase">
                    Default
                  </span>
                  <h4 className="mb-1 font-medium">Home</h4>
                  <p className="text-sm">
                    142, Artisan Lane, Near Temple
                    <br />
                    Bhujodi, Gujarat - 370020
                    <br />
                    <span className="mt-2 block text-sm">
                      Note: Drop at security gate.
                    </span>
                  </p>
                </Card>

                {/* Secondary Address Card */}
                <div className="group relative rounded-2xl border border-dashed border-stone-200/50 p-5 transition-colors hover:border-stone-300">
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="rounded-md p-1.5 hover:bg-white">
                      <Edit2 size={14} />
                    </button>
                    <button className="rounded-md p-1.5 text-red-500 hover:bg-red-50">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <h4 className="mb-1 font-medium">Office</h4>
                  <p className="text-sm">
                    Ratan Bandhej, ApnaNagar-1
                    <br />
                    Bhuj, Gujarat - 370001
                  </p>
                </div>
              </div>
            </>
          )}

          {/* TAB: CART */}

          {activeTab === "cart" && (
            <>
              <ProductGrid>
                {user.cart.map((i) => (
                  <Link
                    href={"/products/" + i.slug}
                    key={i.slug}
                    className="group"
                  >
                    <div className="relative mb-3 aspect-3/4 overflow-hidden rounded-xl bg-stone-100">
                      <Image
                        placeholder="blur"
                        blurDataURL={i.image.metadata.lqip}
                        width={300}
                        height={300}
                        src={i.image.path}
                        alt={i.title}
                        className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                      />
                      <Button
                        variant={"danger"}
                        className="absolute top-2 right-2 backdrop-blur-lg hover:bg-white/20"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                    <h4 className="highlight line-clamp-3 font-serif text-sm">
                      {i.title}
                    </h4>
                    <p className="text-sm">₹{i.price}</p>
                  </Link>
                ))}
              </ProductGrid>
            </>
          )}

          {/* TAB: SETTINGS */}
          {activeTab === "settings" && (
            <>
              <h2 className="highlight mb-5 font-serif text-xl">
                Security & Preferences
              </h2>

              <div className="space-y-5">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="font-medium">Newsletter</h4>
                    <p className="text-sm">
                      Receive updates on new Bandhani collections.
                    </p>
                  </div>
                  <ToggleSwitch />
                </div>

                <div className="border-t border-stone-100 pt-5">
                  <h4 className="mb-4 font-medium">Change Password</h4>
                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="input"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="input"
                    />
                  </div>
                  <Button className={"mt-5"}>Update</Button>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}

// --- Sub-Components ---

const NavButton = ({ active, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 md:w-full ${
      active ? "bg-stone-900 text-white" : " hover:bg-stone-100"
    }`}
  >
    <Icon size={18} className={active ? "text-white" : ""} />
    <span>{label}</span>
    {active && <ChevronRight size={14} className="ml-auto opacity-50" />}
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

const ToggleSwitch = () => (
  <label className="relative inline-flex cursor-pointer items-center">
    <input type="checkbox" className="peer sr-only" defaultChecked />
    <div className="peer h-6 w-11 rounded-full bg-stone-200 peer-checked:bg-green-600 peer-focus:ring-2 peer-focus:ring-stone-300 peer-focus:outline-none after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
  </label>
)
