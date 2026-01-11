"use client"

import { Home } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { usePathname } from "next/navigation"
import * as React from "react"

interface BreadcrumbBarProps {
  id: string
  name: string
}

export default function BreadcrumbBar({ id, name }: BreadcrumbBarProps) {
  const pathName = usePathname()
  const splitPathName = pathName.split("/").filter(item => item !== "")

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="flex items-center h-8 gap-2 rounded-md border px-3 text-sm">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="size-4" />
              <span className="sr-only">Home</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {
            splitPathName.map((item, index) => {
              const url = `/${splitPathName.slice(0, index - 1).join("/")}`
              const isLast = index === splitPathName.length - 1
              const displayName = (id && item === id) ? name : item.replace(/-/g, " ")

              return (
                <React.Fragment key={item}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      // Trang cuối cùng thì không cho bấm link (BreadcrumbPage)
                      <BreadcrumbPage className="capitalize font-semibold">
                        {displayName}
                      </BreadcrumbPage>
                    ) : (
                      // Các trang cấp cha thì có link
                      <BreadcrumbLink href={url} className="capitalize">
                        {displayName}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              )
            })
          }
        </BreadcrumbList>
      </Breadcrumb >
    </>
  )
}
