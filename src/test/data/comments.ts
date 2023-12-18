import Comment from '@/core/models/Comment'
import users from './users'

export const comments: Comment[] = [
  {
    _id: 'ahjsdhgjasgdjasdasd',
    user: users[0],
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae.',
    rating: 4.1
  },
  {
    _id: 'ashjdghjsagdjhsaghjdgashjd',
    user: users[1],
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae.',
    rating: 1.2
  },
  {
    _id: 'aksjhdakjsdjkashkdasjhdsa',
    user: users[0],
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae.',
    rating: 8.6
  }
]