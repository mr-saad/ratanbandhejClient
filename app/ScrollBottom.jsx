"use client"
export default function ScrollBottom() {
  return (
    <svg
      onClick={() => document.querySelector(".arrivals").scrollIntoView()}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      className="stroke-current cursor-pointer"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
