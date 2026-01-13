import { ICommonDetail } from "../common.type"

export interface IEpisodeItem {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
}

export interface ICreateByItem {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

export interface INetworkItem {
  id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface ISeasonItem {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
  type: string
}

export interface IShowDetailItem extends ICommonDetail {
  created_by: ICreateByItem[]
  episode_run_time: number[]
  first_air_date: string

  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: IEpisodeItem

  name: string
  next_episode_to_air: IEpisodeItem
  networks: INetworkItem[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_name: string
  seasons: ISeasonItem[]

}