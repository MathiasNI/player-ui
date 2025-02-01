export function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="group h-[450px] w-[800px] bg-indigo-900 relative">
      {children}
    </div>
  )
}