import Container from "../Container"
import DateFilter from "./sorts/DateFilter"
import SortAction from "./sorts/SortAction"

export default function Filters() {
  return (
    <>
      <div className="sticky top-20 z-50 bg-background/80 backdrop-blur-2xl py-4">
        <Container className="flex items-center justify-end-safe gap-4">
          <DateFilter />
          <SortAction />
        </Container>
      </div>
    </>
  )
}
