import { baseURL, getOptions, imgURL } from "@/lib/apis/base.api"
import { ShowResponse } from "@/lib/types/show.type"
import { Clock, Globe, Vote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

async function GetShows() {
  const res = await fetch(`${baseURL}/discover/tv?language=vi-VN`, getOptions("get"))
  console.log(res)
  if (!res.ok) return undefined
  const data = await res.json()
  return data
}


export default async function ShowList() {
  const data: ShowResponse = await GetShows()
  if (!data) return
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
          data.results.map((item, index: number) => (
            <div key={item.id} className="group">
              <Link href={`/movies/${item.id}`} className="space-y-4">
                <div className="relative w-full h-114">
                  <Image
                    src={imgURL + item.poster_path}
                    alt={item.name || item.original_name}
                    fill
                    priority={index < 4}
                    className="object-cover"
                  />
                  <div className="absolute size-full bg-black/0 transitions group-hover:bg-black/50" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-semibold truncate transitions group-hover:text-primary">{item.name || item.original_name}</h2>
                  <div className="[&_svg]:size-3 text-sm text-muted-foreground font-semibold space-x-4">
                    <p className="inline-flex items-center gap-0.5">
                      <Globe />
                      <span className="uppercase">{item.original_language}</span>
                    </p>
                    <p className="inline-flex items-center gap-0.5">
                      <Clock />
                      <span className="uppercase">{item.first_air_date.slice(0, 4)}</span>
                    </p>
                    <p className="inline-flex items-center gap-0.5">
                      <Vote />
                      <span className="uppercase">{item.vote_count.toLocaleString("vi-VN")}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  )
}
