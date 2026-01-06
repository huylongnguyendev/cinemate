import Container from "../Container"
import CountryFilter from "./sorts/CountryFilter"
import DateFilter from "./sorts/DateFilter"
import SortAction from "./sorts/SortAction"

export default function Filters() {
  return (
    <>
      <div className="md:sticky top-20 z-50  bg-background/80 backdrop-blur-2xl py-4 transitions ">
        <Container className="grid grid-cols-1 sm:grid-cols-2 md:flex md:items-center justify-end-safe gap-2">
          <CountryFilter />
          <DateFilter />
          <SortAction />
        </Container>
      </div>
    </>
  )
}
