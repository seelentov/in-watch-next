import { ROUTING } from "@/core/config/routing.config"
import { FaArrowUpWideShort, FaFilm, FaHeart } from "react-icons/fa6"
import { IoMdSettings } from "react-icons/io"

export const MENU = {
  ALL: [
    {
      link: ROUTING.HOME,
      icon: <FaFilm size={24} />,
      name: 'Главная'
    },
    {
      link: ROUTING.TRENDING,
      icon: <FaArrowUpWideShort size={24} />,
      name: 'Тренды'
    }
  ],
  USER: [
    {
      link: ROUTING.FAVORITES,
      icon: <FaHeart size={24} />,
      name: 'Любимое'
    },
    {
      link: ROUTING.SETTINGS,
      icon: <IoMdSettings size={24} />,
      name: 'Настройки'
    },
  ],
  TAGS: [
    'тестовый тег1',
    'тестовый тег2',
  ]
} as const

export type MENU = (typeof MENU)[keyof typeof MENU]