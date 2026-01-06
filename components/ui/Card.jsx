export default function Card({ children, className }) {
  return (
    <div
      className={`rounded-xl border border-red-800/10 p-5 shadow-lg shadow-black/5 dark:border-red-800/30 ${className}`}
    >
      {children}
    </div>
  )
}
