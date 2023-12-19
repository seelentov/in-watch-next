import Film from "@/core/models/Film";
import { comments } from "./comments";

export const films: Film[] = [
  {
    _id: 'adjklasjdlksadkl',
    thumbnailUrl: '/default/film.jpeg',
    source: '/default/film.mp4',
    name: 'Тестовый фильм',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae. Impedit totam est deserunt delectus qui. Sit rem vero a non dolores cum fugit eligendi dolorum hic?',
    likes: 2,
    comments: comments,
    rating: 8.4,
    tags: ['тестовый тег1', 'тестовый тег2', 'тестовый тег3'],
    year: 2021, duration: 712837, country: 'Россия', rated: '18+',
    new: true,
    type: 'films'
  },
  {
    _id: 's;dlfk;sldkf;lsdkfl;sdkf',
    thumbnailUrl: '/default/film.jpeg',
    name: 'Тестовый фильм2',
    source: '/default/film.mp4',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae. Impedit totam est deserunt delectus qui. Sit rem vero a non dolores cum fugit eligendi dolorum hic?',
    likes: 2,
    comments: comments,
    rating: 8.4,
    tags: ['тестовый тег1', 'тестовый тег2', 'тестовый тег3'],
    year: 2021, duration: 712837, country: 'Россия', rated: '18+',
    new: true,
    type: 'films'

  },
  {
    _id: 'dfkgfkdlgjfdlgjdfgjfdlkgjdflg',
    thumbnailUrl: '/default/film.jpeg',
    name: 'Тестовый фильм3',
    source: '/default/film.mp4',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit consequuntur veritatis dolorum quae. Impedit totam est deserunt delectus qui. Sit rem vero a non dolores cum fugit eligendi dolorum hic?',
    likes: 2,
    comments: comments,
    rating: 8.4,
    tags: ['тестовый тег1', 'тестовый тег2', 'тестовый тег3'],
    year: 2021, duration: 712837, country: 'Россия', rated: '18+',
    new: true,
    type: 'films'

  }
]