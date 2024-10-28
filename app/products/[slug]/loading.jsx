import ScrollToTop from "@/components/ScrollToTop"
export default function Loading() {
  return (
    <div className="Container mx-auto md:max-w-4xl md:pt-10">
      <ScrollToTop />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="min-h-[335px] animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20"></div>
        <div>
          {Array(4)
            .fill(1)
            .map((item, index) => (
              <div
                key={index}
                className="mb-4 h-2 animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20"
              ></div>
            ))}
          <table className="w-full border-separate border-spacing-4">
            <tbody>
              {Array(4)
                .fill(1)
                .map((item, index) => (
                  <tr key={index}>
                    <td className="h-2 animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20"></td>
                    <td className="h-2 animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20"></td>
                  </tr>
                ))}
            </tbody>
          </table>
          {Array(2)
            .fill(1)
            .map((item, index) => (
              <div
                key={index}
                className="mb-4 h-2 animate-pulse rounded-md bg-[#111]/20 dark:bg-white/20"
              ></div>
            ))}
        </div>
      </div>
    </div>
  )
}
