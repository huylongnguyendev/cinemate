"use client"

import { IReviewItem } from "@/lib/types/review.type"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ItemContent({ content }: { content: Pick<IReviewItem, "content"> }) {
  const [isExpand, setIsExpand] = useState<boolean>(false)

  return (
    <>
      <div onClick={() => setIsExpand(!isExpand)}>
        <p className={cn("text-sm text-muted-foreground leading-6 transitions cursor-pointer",
          isExpand ? "h-fit" : "line-clamp-4")}
        >
          {content.content}
        </p>
      </div>
    </>
  )
}
