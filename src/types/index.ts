export interface Review {
  name: string
  review: string
  date: string
}

export interface ReviewsState {
  reviews: Review[]
  language: string
  currentPage: number
  reviewsPerPage: number
}
