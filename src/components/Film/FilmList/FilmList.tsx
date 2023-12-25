'use client'
import { Loader } from '@/components/ui/Loader/Loader';
import apiGetMovies, { Response } from '@/core/api/api';
import SWIPER_CONFIG from '@/core/config/swiper.config';
import { Filter } from '@/core/types/filter';
import { FC, useEffect, useState } from 'react';
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FilmItem } from '../FilmItem/FilmItem';
import styles from './FilmList.module.scss';
import { Movie } from '@/core/types/movie';

export interface IFilmListProps {
  query: Filter,
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
  const [limit, setLimit] = useState<number>(query.page_limit || 9)
  const [entries, setEntries] = useState<number>(0)
  const [fetching, setFetching] = useState<boolean>(true)

  useEffect(() => {
    setFetching(true)
    apiGetMovies.getAllByFilter({ ...query, page_limit: limit })
      .then((r) => {
        setFilms(r)
        setEntries(r.entries)
      })
      .then(() => setFetching(false))
  }, [limit])

  useEffect(() => {
    if (view === 'slider' || query.page_limit) return

    const content = document.querySelector('main')

    content?.addEventListener('scroll', handleScroll)

    return () => content?.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e: any) => {

    const scrollHeight = e.target?.scrollHeight
    const scrollTop = e.target?.scrollTop
    const innerHeight = window.innerHeight

    if ((innerHeight + scrollTop) > scrollHeight) {
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

  if (!films) {
    return <p>Ничего не найдено</p>
  }

  if (view === 'grid') {
    return (
      <>
        <div className={styles.grid}>
          {films.map(film =>
            <FilmItem key={film._id} film={film} />
          )}
        </div>
        {fetching &&
          <div className={styles.loader}>
            <Loader />
          </div>
        }
      </>
    );
  }

  return (
    <Swiper {...SWIPER_CONFIG.LIST}>
      {films.map(film =>
        <SwiperSlide key={film._id}>
          <FilmItem film={film} />
        </SwiperSlide>)}
    </Swiper>
  )


}

export default FilmList