"use client"

import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { films } from '../../../test/data/films';
import styles from './FilmBanner.module.scss';
import { FilmBannerItem } from "./FirmBannerItem";


export interface IFilmBannerProps {

}

export const FilmBanner = () => {
  return (

    <div className={styles.main}>
      <Swiper>
        <SwiperSlide key={films[0]._id}>
          <FilmBannerItem key={films[0]._id} film={films[0]} header="h1" />
        </SwiperSlide>
        {films.slice(1,).map(film => (
          <SwiperSlide key={film._id}>
            <FilmBannerItem key={film._id} {...{ film }} />
          </SwiperSlide>))}
      </Swiper >
    </div>

  );
}

