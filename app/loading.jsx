import ScrollToTop from "@/components/ScrollToTop"

export default function Loading() {
  return (
    <div className="h-[95dvh] animate-pulse bg-red-800/20 dark:bg-white/20">
      <ScrollToTop />
    </div>
  )
}
