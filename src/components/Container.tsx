
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-4 w-full max-w-360 mx-auto">
        {children}
      </div>
    </>
  )
}
