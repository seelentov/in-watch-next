export const ROUTING = {
  HOME: '/',
  CATALOG: '/catalog',
  CATALOG_FILMS: '/catalog/films',
  CATALOG_SERIES: '/catalog/series',
  FAVORITES: '/favorites',
  TRENDING: '/trending',
  LOGIN: '/login',
  SIGNUP: '/signup',
  SETTINGS: '/settings',
  PLAYER: '/player',
  SEARCH: '/search',
  TAG: '/tag'
} as const

export type ROUTING = (typeof ROUTING)[keyof typeof ROUTING]