import ScrollToTop from "@/components/ScrollToTop"
export default function Loading() {
  return (
    <div className="Container">
      <ScrollToTop />

      <div className="mb-5 h-11 max-w-[210px] animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20"></div>

      <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(1)
          .map((item, index) => (
            <div
              key={index}
              className="aspect-square max-w-[400px] animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20"
            ></div>
          ))}
      </div>
    </div>
  )
}
