'use client'

import SWIPER_CONFIG from '@/core/config/swiper.config';
import { Movie } from '@/core/types/movie';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FilmItem } from '../FilmItem/FilmItem';
import styles from './FilmList.module.scss';
import "swiper/css";

export interface IFilmListProps {
  films: Movie[],
  view?: 'grid' | 'slider'
}


const FilmList: FC<IFilmListProps> = ({ films, view = 'grid' }) => {


  if (!films) {
    return <p>Ничего не найдено</p>
  }

  if (view === 'grid') {
    return (
      <div className={styles.grid}>
        {films.map(film => <FilmItem key={film._id} film={film} />)}
      </div>
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