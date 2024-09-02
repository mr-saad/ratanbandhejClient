import Link from "next/link"
import { useRatanContext } from "../Provider"
import { CloseNav } from "./Navbar"
import { usePathname } from "next/navigation"

export default function OrderLink() {
  const { showOrderLink } = useRatanContext()
  const pathname = usePathname()
  return showOrderLink ? (
    <li className="md:inline">
      <Link
        onClick={CloseNav}
        className={`transition block md:inline py-2 md:px-2 md:py-0 hover:opacity-100 ${
          pathname === "/orders" ? "opacity-100" : "opacity-60"
        }`}
        href={"/orders"}
      >
        Orders
      </Link>
    </li>
  ) : null
}
