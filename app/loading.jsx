export default function Loading() {
  return (
    <div className="p-5 md:px-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-ping"
      >
        <circle cx="12" cy="12" r="10" />
        {/* <ScrollToTop /> */}
      </svg>
    </div>
  )
}
