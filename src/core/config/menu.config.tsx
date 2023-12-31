import { ROUTING } from "@/core/config/routing.config"
import { FaArrowUpWideShort, FaFilm, FaHeart } from "react-icons/fa6"
import { IoMdSettings, IoMdTime } from "react-icons/io"
import { IoSearchSharp } from "react-icons/io5"
import { RiLogoutBoxFill } from "react-icons/ri"

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
    },
    {
      link: ROUTING.SEARCH,
      icon: <IoSearchSharp size={24} />,
      name: 'Поиск'
    }
  ],
  USER: [
    {
      link: ROUTING.FAVORITES,
      icon: <FaHeart size={24} />,
      name: 'Любимое'
    },
    {
      link: ROUTING.RECEIT,
      icon: <IoMdTime size={24} />,
      name: 'История'
    },
    {
      link: ROUTING.SETTINGS,
      icon: <IoMdSettings size={24} />,
      name: 'Настройки'
    },
  ],
  NON_USER: [
    {
      link: ROUTING.LOGIN,
      icon: <RiLogoutBoxFill size={24} />,
      name: 'Войти'
    },
  ]
} as const

export type MENU = (typeof MENU)[keyof typeof MENU]