"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination"
import { Button } from "../ui/button"

export default function PaginationBar({
  totalPage,
  scroll = true
}: {
  totalPage: number
  scroll?: boolean
}) {
  const setTotal = totalPage > 500 ? 500 : totalPage

  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  function handleChangePage(newPage: number) {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", newPage.toString())
    router.push(`${pathName}?${params}`, { scroll })
  }

  function setPageList() {
    const pageList = []
    if (setTotal <= 10) {
      for (let i = 1; i <= setTotal; i++)
        pageList.push(i)
      return pageList
    }
    if (currentPage < 5)
      return [1, 2, 3, 4, 5, "...", setTotal]
    if (currentPage > setTotal - 5)
      return [1, "...", setTotal - 5, setTotal - 4, setTotal - 3, setTotal - 2, setTotal - 1, setTotal]
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", setTotal]
  }

  const getPageList = setPageList()

  return (
    <>
      <Pagination className="mt-6 py-6">
        <PaginationContent>
          <PaginationItem className={currentPage === 1 ? "opacity-50 pointer-events-none" : ""}>
            <PaginationPrevious
              onClick={() => handleChangePage(currentPage - 1)}
            />
          </PaginationItem>

          {
            getPageList.map((item) => (
              <PaginationItem key={"page-" + item}>
                {
                  typeof item !== "string" ? (
                    <Button
                      variant={currentPage === item ? "default" : "secondary"}
                      size={item < 10 ? "icon-sm" : "sm"}
                      onClick={() => handleChangePage(item)}
                    >
                      {item}
                    </Button>
                  ) : <PaginationEllipsis />
                }
              </PaginationItem>
            ))
          }

          <PaginationItem className={currentPage === setTotal || !setTotal ? "opacity-50 pointer-events-none" : ""}>
            <PaginationNext
              onClick={() => handleChangePage(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
