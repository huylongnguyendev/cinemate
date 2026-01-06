import { cn } from "@/lib/utils"

export default function Container({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      <div className={cn(
        "px-4 w-full max-w-360 mx-auto",
        className
      )}>
        {children}
      </div>
    </>
  )
}
