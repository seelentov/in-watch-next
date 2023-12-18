import User from "./User"

export default interface Comment{
  _id: string
  user: User | string
  text: string
  rating: number
}