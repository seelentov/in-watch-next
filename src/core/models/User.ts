export default interface User {
  _id: string
	avatarUrl?: string
	login: string
	email: string
	role: 'user' | 'admin' | ''
  token?: string
}

export type UserLogin = Omit<User, '_id' | 'login' | 'role'> & {
  password: string
}