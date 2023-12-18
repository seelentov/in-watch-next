import User from "@/core/models/User"

export const users: User[] = [
  {
    _id: 'aksdaskhjdkasjhdjhasjkd',
    avatarUrl: '/test/user.jpg',
    login: 'test_user1',
    email: 'test_user1@gmail.com',
    role: 'user'
  },
  {
    _id: 'fdfdfdfdfdsfdsfsd',
    avatarUrl: '/test/user.jpg',
    login: 'test_user2',
    email: 'test_user2@gmail.com',
    role: 'user'
  }
]

export const myUser = {
  _id: 'alskdaslkdalskdl',
  avatarUrl: '/test/user.jpg',
  login: 'test_admin1',
  email: 'test_admin1@gmail.com',
  role: 'admin'
}


export default users