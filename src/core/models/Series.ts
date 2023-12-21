import Comment from "./Comment"
import Episode from "./Episode"

export default interface Series {
  _id: string
  type: 'series'
  thumbnailUrl: string
  name: string
  desc: string
  likes: number
  comments: string[] | Comment[]
  rating: number
  tags: string[]
  episodes: { [key: number]: Episode[] }
  year: number
  duration: string
  country: string
  rated: string
  new: boolean
}