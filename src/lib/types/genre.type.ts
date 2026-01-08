export interface IGenreItem {
  id: number
  name: string
}

export type GenreType = IGenreItem[]

export interface GenreResponse {
  genres: GenreType
}