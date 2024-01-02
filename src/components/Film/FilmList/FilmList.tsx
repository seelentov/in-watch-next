'use client'
import { Response, getAllByFilter } from '@/core/api/movies.api';
import SWIPER_CONFIG from '@/core/config/swiper.config';
import { Filter } from '@/core/types/filter';
import { Movie } from '@/core/types/movie';
import { FC, useEffect, useState } from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FilmItem } from '../FilmItem/FilmItem';
import { FilmItemSkeleton } from '../FilmItemSkeleton/FilmItemSkeleton';
import styles from './FilmList.module.scss';

export interface IFilmListProps {
  query?: Filter,
  view?: 'grid' | 'slider'
}


const FilmList: FC<IFilmListProps> = ({ query, view = 'grid' }) => {

  const [{ data: films }, setFilms] = useState<Response<Movie[]>>({
    data: [],
    page: 1,
    pages: 0,
    count: 0,
    entries: 0
  })
  const [limit, setLimit] = useState<number>(query?.page_limit ? parseInt(query?.page_limit as string) : 9)
  const [entries, setEntries] = useState<number>(0)
  const [fetching, setFetching] = useState<boolean>(true)

  useEffect(() => {
    setFetching(true)
    getAllByFilter({ ...query, page_limit: limit })
      .then((r) => {
        setFilms(r)
        setEntries(r.entries)
      })
      .then(() => setFetching(false))
      .catch(() => setFetching(false))
  }, [limit, query])

  useEffect(() => {
    if (view === 'slider' || query?.page_limit) return

    const content = document.querySelector('main')

    content?.addEventListener('scroll', handleScroll)

    return () => content?.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e: any) => {

    const scrollHeight = e.target?.scrollHeight
    const scrollTop = e.target?.scrollTop
    const innerHeight = window.innerHeight

    if (scrollHeight - (innerHeight + scrollTop) < 100) {
      setLimit(prev => {
        let newState = prev
        setEntries(prevEntries => {
          newState = prevEntries < prev ? prev : prev + 9;
          return prevEntries
        })
        return newState
      })
    }
  }

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
          {fetching && Array.from(new Array(6)).map((_, key) =>
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
      {fetching && Array.from(new Array(6)).map((_, key) =>
        <SwiperSlide key={key}>
          <FilmItemSkeleton />
        </SwiperSlide>
      )}
    </Swiper>
  )


}

export default FilmList