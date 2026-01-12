export interface ICommonDiscoverItem {
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  vote_average: number
  vote_count: number
}

export interface ICommonDiscover {
  page: number
  total_pages: number
  total_results: number
}

export interface IGenreForDetailItem {
  id: number
  name: string
}

export interface IProductionCompanyForDetailItem {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface IProductionCountryForDetailItem {
  iso_3166_1: string
  name: string
}

export interface ISpokenLanguageItem {
  english_name: string
  iso_639_1: string
  name: string
}

export interface ICommonDetail {
  adult: boolean
  backdrop_path: string
  genres: IGenreForDetailItem[]
  homepage: string
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: IProductionCompanyForDetailItem[]
  production_countries: IProductionCountryForDetailItem[]
  spoken_languages: ISpokenLanguageItem[]
  status: string
  tagline: string
  vote_average: number
  vote_count: number
}

export interface ICommonJobItem {
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
}