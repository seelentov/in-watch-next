export default interface User {
  _id: string
  avatarUrl: string
  login: string
  email: string
  role: 'user' | 'admin' | ''
  favorite: string[]
  receit: string[]
  token?: string
}

export type UserLogin = Omit<User, '_id' | 'login' | 'avatarUrl' | 'role' | 'receit' | 'favorite'> & {
  password: string
}


export type UserSignUp = Omit<User, '_id' | 'role' | 'receit' | 'favorite'> & {
  password: string
}