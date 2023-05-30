export function BaseFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[50px] border border-gray-600/40 rounded-lg overflow-hidden mt-5 mb-12">
      {children}
    </div>
  )
}