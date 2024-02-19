import Link from "next/link"
import { useRatanContext } from "../Provider"
import { CloseNav } from "./Navbar"
import { usePathname } from "next/navigation"

export default function OrderLink() {
  const { showOrderLink } = useRatanContext()
  const { pathname } = usePathname()

  return showOrderLink ? (
    <li>
      <Link
        onClick={CloseNav}
        className={`transition-colors block hover:opacity-100 ${
          pathname === "/orders" ? "opacity-100" : "opacity-60"
        }`}
        href={"/orders"}
      >
        Orders
      </Link>
    </li>
  ) : null
}
