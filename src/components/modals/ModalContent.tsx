"use client"

import { ResultItem } from "@/lib/types/db/video.type"
import { DialogContent } from "../ui/dialog"
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
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  }

  return (
    <>
      <DialogContent className="max-w-5xl!  overflow-hidden">
        <h3 className="text-lg font-semibold">{`${name} (Trailer)`}</h3>
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          {
            item ? (
              <Youtube
                videoId={video?.key}
                opts={opts}
                onReady={onPlayerReady}
                className="absolute top-0 left-0 size-full"
              >

              </Youtube>
            ) : (
              <p>Không có thông tin</p>
            )
          }
        </div>
      </DialogContent>
    </>
  )
}
