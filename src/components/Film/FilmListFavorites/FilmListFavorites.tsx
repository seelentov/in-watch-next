'use client'

import { getFavorite } from '@/core/api/account.api';
import SWIPER_CONFIG from '@/core/config/swiper.config';
import { useIsAuth } from '@/core/hooks/useIsAuth';
import { useToken } from '@/core/hooks/useToken';
import { Movie } from '@/core/types/movie';
import { FC, useEffect, useState } from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FilmItem } from '../FilmItem/FilmItem';
import { FilmItemSkeleton } from '../FilmItemSkeleton/FilmItemSkeleton';
import styles from './FilmListFavorites.module.scss';
import { ROUTING } from '@/core/config/routing.config';
import { useRouter } from 'next/navigation';

export interface IFilmListFavoriteProps {
  view?: 'grid' | 'slider'
}


const FilmListFavorite: FC<IFilmListFavoriteProps> = async ({ view = 'grid' }) => {

  const { token } = useToken()
  const [films, setFilms] = useState<Movie[]>([])
  const [fetching, setFetching] = useState<boolean>(true)
  const isAuth = useIsAuth()
  const navigate = useRouter()


  useEffect(() => {
    if (!isAuth) {
      navigate.push(`${ROUTING.HOME}`)
    }

  }, [isAuth])

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await getFavorite(token)
      if (status === 200) {
        setFilms(data)
        setFetching(false)
      } else {
        console.log(status, data)
      }
    }
    fetchData()
  }, [token])





  if (films.length === 0 && !fetching) {
    return <p>Ничего не найдено</p>
  }

  if (view === 'grid') {
    return (
      <>
        <div className={styles.grid}>
          {films.map(film =>
            <FilmItem key={film._id} film={film} />
          )}
          {fetching && Array.from(new Array(8)).map((_, key) =>
            <FilmItemSkeleton key={key} />
          )}
        </div>
      </>
    );
  }

  return (
    <Swiper {...SWIPER_CONFIG.LIST}>
      {films.map(film =>
        <SwiperSlide key={film._id}>
          <FilmItem film={film} />
        </SwiperSlide>)}
      {fetching && Array.from(new Array(8)).map((_, key) =>
        <SwiperSlide key={key}>
          <FilmItemSkeleton />
        </SwiperSlide>
      )}
    </Swiper>
  )


}

export default FilmListFavorite