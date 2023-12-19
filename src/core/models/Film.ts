import Comment from "./Comment"


export default interface Film {
  _id: string
  type: 'films'
  thumbnailUrl: string
  name: string
  desc: string
  likes: number
  source: string
  comments: string[] | Comment[]
  rating: number
  tags: string[]
  year: number
  duration: number
  country: string
  rated: string
  new: boolean
}