export interface Movie {
  _id: string
  name: string
  poster: string
  backdrop: string
  movieLength: number,
  rating: number
  description: string
  year: number
  ageRating: number
  country: string
  trailer: string
  genres: string[]
  likes: number
  views: number
  viewsMonth: number
}