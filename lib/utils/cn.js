import { twMerge } from "tailwind-merge"
import clsx from "clsx"

export default function cn(...classNames) {
  return twMerge(clsx(classNames))
}
