"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationNext, PaginationPrevious } from "./ui/pagination"
import { Button } from "./ui/button"

interface PaginationProps {
  totalPage: number
}

export default function PaginationBar({ totalPage }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page") || 1)
  const safePage = totalPage > 500 ? 500 : totalPage

  function handleChangPage(page: number) {
    if (page >= 1 && page <= safePage) {
      const params = new URLSearchParams(searchParams.toString())
      params.set("page", page.toString())
      router.push(`?${params.toString()}`, { scroll: true })
    }
  }

  function setPageNumber() {
    const listPage: number[] = []
    if (safePage < 10) {
      for (let i = 1; i <= safePage; i++)
        listPage.push(i)
      return listPage
    } else {
      if (currentPage <= 4)
        return [1, 2, 3, 4, 5, "...", safePage]
      else if (currentPage >= safePage - 4)
        return [1, "...", safePage - 4, safePage - 3, safePage - 2, safePage - 1, safePage]
      else {
        return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", safePage]
      }
    }
  }

  const pagesPagination = setPageNumber()

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem
            className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          >
            <PaginationPrevious onClick={() => handleChangPage(currentPage - 1)} />
          </PaginationItem>

          {
            pagesPagination.map((item, index) => (
              <PaginationItem key={"page-" + index + 1}>
                {
                  typeof item !== "string"
                    ? (
                      <Button
                        variant={currentPage === item ? "default" : "secondary"}
                        size="sm"
                        onClick={() => handleChangPage(item)}
                      >
                        {item}
                      </Button>) : (
                      <PaginationEllipsis />
                    )
                }
              </PaginationItem>
            ))
          }

          <PaginationItem
            className={currentPage === safePage ? "pointer-events-none opacity-50" : ""}
          >
            <PaginationNext onClick={() => handleChangPage(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
