"use client"

import Image from "next/image"
import Link from "next/link"
import { smallImgURL } from "@/lib/apis/base.api"
import { IShowDetailItem } from "@/lib/types/db/tv/detail.type"
// import { useAppStore } from "@/lib/stores/store"
import { Checkbox } from "@/components/ui/checkbox"

export default function ShowListItem({ item }: { item: IShowDetailItem }) {


  return (
    <>
      <li className="flex items-center gap-10 p-4 rounded-md transitions hover:bg-card group">
      <Checkbox />
        <Link
          href={`/movies/${item.id}`}
          className="flex gap-10"
        >
          <Image
            src={smallImgURL + item.poster_path}
            alt={item.name || item.original_name}
            width={50}
            height={75}
            priority
            className="size-auto rounded-md object-cover"
          />
          <div className="w-full flex flex-col justify-between">
            <div className="space-y-0.5">
              <h3 className="font-semibold transitions group-hover:text-primary">{item.name || item.original_name}</h3>
              <div className="flex items-center gap-1.5">
                <p className="font-semibold">Thể loại:</p>
                {
                  item.genres.map((g, index) =>
                    <p
                      key={g.id}
                      className="text-muted-foreground text-sm"
                    >
                      {g.name}
                      {index < item.genres.length - 1 && ","}
                    </p>
                  )
                }
              </div>
            </div>
            <p className="text-muted-foreground">{item.first_air_date.slice(0, 4)}</p>
          </div>
        </Link>
      </li>
    </>
  )
}
