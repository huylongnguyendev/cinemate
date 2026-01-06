
import { configService } from "@/lib/services/configuration.service"
import { CountryType } from "@/lib/types/country.type"
import { Suspense } from "react"
import CountryDropdown from "./CountryDropdown"
import { Button } from "@/components/ui/button"

export default async function CountryFilter() {
  const countryList: CountryType = await configService.getCountries()

  return (
    <>
      <Suspense fallback={<Button variant="outline" disabled>Quốc gia</Button>}>
        <CountryDropdown data={countryList} />
      </Suspense>
    </>
  )
}
