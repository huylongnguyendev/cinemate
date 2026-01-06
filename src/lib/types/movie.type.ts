export interface IMovieItem {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  original_name?: string
}

export type MovieType = IMovieItem[]

export interface MovieResponse {
  page: number
  results: MovieType
  total_pages: number
  total_results: number
}

export interface ICompanyItem {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type CompanyType = ICompanyItem[]

export interface ICountryMovieItem {
  iso_3166_1: string
  name: string
}

export type CountryMovieType = ICountryMovieItem[]

export interface IGenreMovieItem {
  id: number
  name: string
}

export type GenreMovieType = IGenreMovieItem[]

export interface ILanguageMovieItem {
  english_name: string
  iso_639_1: string
  name: string
}

export type LanguageMovieType = ILanguageMovieItem[]

export interface IDetailItem {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string
  budget: number
  genres: GenreMovieType
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: CompanyType
  production_countries: CountryMovieType
  release_date: string
  revenue: number
  runtime: number
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  spoken_languages: LanguageMovieType
}