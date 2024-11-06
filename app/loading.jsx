import ScrollToTopWrapper from "@/components/ScrollToTopWrapper"

export default function Loading() {
  return (
    <div className="h-[95vh] animate-pulse bg-[#111]/20 dark:bg-white/20">
      <ScrollToTopWrapper />
    </div>
  )
}
