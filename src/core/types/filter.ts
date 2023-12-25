export interface Filter {
  order?: string
  orderDir?: string
  limit?: string
  yearMin?: string
  yearMax?: string
  name?: string
  ageRating?: string
  country?: string
  genres?: string
  movieLengthMin?: string
  movieLengthMax?: string
  ratingMin?: string
  ratingMax?: string
  showInBanner?: string
  page?: string | number
  page_limit?: string | number
}

export interface FilterValues{
  order: ['Год','Длительность','Рейтинг','Название']
  orderDir: ['ASC', 'DESC']
  yearMin: number
  yearMax: number
  name: string[]
  ageRating: number[]
  country: string[]
  genres: string[]
  movieLengthMin: number
  movieLengthMax: number
  ratingMin: number
  ratingMax: number
}