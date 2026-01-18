"use client"

import { ResultItem } from "@/lib/types/db/video.type"
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog"
import Youtube, { YouTubeProps } from "react-youtube"

export default function ModalContent({ item, name }: { item: ResultItem, name: string }) {

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const video = item.find(movie => movie.type === "Trailer")

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      origin: typeof window !== "undefined" ? window.location.origin : "",
    },
  }

  return (
    <>
      <DialogContent className="max-w-5xl!  overflow-hidden">
        <DialogTitle>{`${name} (Trailer)`}</DialogTitle>
        <DialogDescription className="sr-only">
          Xem trailer chính thức của phim {name}
        </DialogDescription>
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          {
            item && video ? (
              <Youtube
                videoId={video.key}
                opts={opts}
                onReady={onPlayerReady}
                className="absolute top-0 left-0 size-full"
              >

              </Youtube>
            ) : (
              <p className="size-full flex flex-col justify-center items-center text-muted-foreground">Hiện chưa có Trailer chính thức</p>
            )
          }
        </div>
      </DialogContent>
    </>
  )
}
