'use client'

import Film from '@/core/models/Film';
import Series from '@/core/models/Series';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FilmItem } from '../FilmItem/FilmItem';
import styles from './FilmList.module.scss';


export interface IFilmListProps {
  films: (Film | Series)[],
  view?: 'grid' | 'slider'
}


const FilmList: FC<IFilmListProps> = ({ films, view = 'grid' }) => {

  if (view === 'grid') {
    return (
      <div className={styles.grid}>
        {films.map(film => <FilmItem key={film._id} film={film} />)}
      </div>
    );
  }

  const swiperConfig = {
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      415: {
        slidesPerView: 1.5,
      },
      600: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1376: {
        slidesPerView: 4.5,
      },
      1550: {
        slidesPerView: 4.5,
      },
      2200: {
        slidesPerView: 6,
      },
    },
  }

  return (
    <Swiper {...swiperConfig}>
      {films.map(film =>
        <SwiperSlide key={film._id}>
          <FilmItem film={film} />
        </SwiperSlide>)}
    </Swiper>
  )


}

export default FilmList