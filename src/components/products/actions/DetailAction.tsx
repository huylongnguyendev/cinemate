"use client"

import { Button } from "@/components/ui/button"
import { DialogTrigger } from "@/components/ui/dialog"
import { Film } from "lucide-react"

export default function DetailAction() {
  return (
    <>
      <div className="flex items-center">
        <DialogTrigger asChild>
          <Button>
            <Film />
            <p className="capitalize">xem trailer</p>
          </Button>
        </DialogTrigger>
      </div>
    </>
  )
}
