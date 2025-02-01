export function LowerRightCorner({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex absolute bottom-0 right-0 p-3 space-x-3">
      {children}
    </div>
  )
}