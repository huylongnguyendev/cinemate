export interface IAuthorDetail {
  name: string
  username: string
  avatar_path: string
  rating: string
}

export interface IReviewItem {
  author: string
  author_details: IAuthorDetail
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export interface ReviewResponse {
  id: number
  page: number
  results: IReviewItem[]
  total_pages: number
  total_results: number
}