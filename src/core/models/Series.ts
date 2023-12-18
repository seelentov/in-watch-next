import Comment from "./Comment"
import Episode from "./Episode"

export default interface Series {
  _id: string
  thumbnailUrl: string
  name: string
  desc: string
  likes: number
  comments: string[] | Comment[]
  rating: number
  tags: string[]
  episodes: { [key: number]: Episode[] | string[] }
  year: number
  duration: number
  country: string
  rated: string
  new: boolean
}