import { ICommonDiscover, ICommonDiscoverItem } from "../common.type"
import { IShowDiscoverItem } from "../tv/show.type"

export interface IMovieDiscoverItem {
  adult: boolean
  original_title: string
  title: string
  video: boolean
}

export type ResultType = ICommonDiscoverItem & IMovieDiscoverItem

export interface IMovieResponse extends ICommonDiscover {
  results: ResultType[]
}


export type ResultSearchType = ICommonDiscoverItem & (
  | (IMovieDiscoverItem & { media_type: "movie" }) 
  | (IShowDiscoverItem & { media_type: "tv" })
  | { media_type: "person" }
)

export interface ISearchResponse extends ICommonDiscover {
  results: ResultSearchType[]
}

