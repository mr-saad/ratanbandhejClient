import ScrollToTop from "@/components/ScrollToTop"
export default function Loading() {
  return (
    <div className="Container">
      <ScrollToTop />

      <div className="mb-5 h-11 max-w-52.5 animate-pulse rounded-md bg-red-800/20 dark:bg-white/20"></div>

      <div className="3xl:grid-cols-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        {Array(6)
          .fill(1)
          .map((item, index) => (
            <div
              key={index}
              className="aspect-square animate-pulse rounded-md bg-red-800/20 dark:bg-white/20"
            ></div>
          ))}
      </div>
    </div>
  )
}
