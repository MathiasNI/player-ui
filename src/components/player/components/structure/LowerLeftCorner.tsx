export function LowerLeftCorner({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex absolute bottom-0 left-0 p-3 space-x-3">
      {children}
    </div>
  )
}