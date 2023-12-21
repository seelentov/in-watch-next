import Series from "@/core/models/Series";
import { comments } from "./comments";
import { episodes } from "./episodes";

export const series: Series[] = [
  {
    _id: 'ahskjdjkashkdjhaskdkaskdjahdksja',
    thumbnailUrl: '/default/film.jpeg',
    name: 'Тестовый сериал1',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae. Impedit totam est deserunt delectus qui. Sit rem vero a non dolores cum fugit eligendi dolorum hic?',
    likes: 2,
    comments: comments,
    rating: 8.4,
    tags: ['тестовый тег1', 'тестовый тег2', 'тестовый тег3'],
    year: 2021,
    duration: '3 сезона',
    country: 'Россия',
    rated: '18+',
    episodes: {
      1: [
        ...episodes.slice(0, 2)
      ],
      2: [
        ...episodes.slice(0, 2)
      ],
      3: [
        ...episodes
      ]
    },
    new: true,
    type: 'series'
  },
  {
    _id: 'alskldkasdlkasldaldasldkals',
    thumbnailUrl: '/default/film.jpeg',
    name: 'Тестовый сериал2',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae. Impedit totam est deserunt delectus qui. Sit rem vero a non dolores cum fugit eligendi dolorum hic?',
    likes: 2,
    comments: comments,
    rating: 8.4,
    duration: '3 сезона',

    tags: ['тестовый тег1', 'тестовый тег2', 'тестовый тег3'],
    year: 2021,
    country: 'Россия',
    rated: '18+',
    episodes: {
      1: [
        ...episodes.slice(0, 1)
      ],
      2: [
        ...episodes.slice(0, 2)
      ],
      3: [
        ...episodes
      ]
    },
    new: true,
    type: 'series'

  },
  {
    _id: 'lggddgfgdfdfgfddfdgfgfgdg',
    thumbnailUrl: '/default/film.jpeg',
    name: 'Тестовый сериал3',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae. Impedit totam est deserunt delectus qui. Sit rem vero a non dolores cum fugit eligendi dolorum hic?',
    likes: 2,
    duration: '3 сезона',

    comments: comments,
    rating: 8.4,
    tags: ['тестовый тег1', 'тестовый тег2', 'тестовый тег3'],
    year: 2021,
    country: 'Россия',
    rated: '18+',
    episodes: {
      1: [
        ...episodes.slice(0, 1)
      ],
      2: [
        ...episodes.slice(0, 2)
      ],
      3: [
        ...episodes
      ]
    },
    new: true,
    type: 'series'

  },
]