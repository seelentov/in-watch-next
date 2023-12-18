"use client"

import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { films } from '../../../test/data/films';
import styles from './FilmBanner.module.scss';
import { FilmBannerItem } from './FirmBannerItem';

export interface IFilmBannerProps {

}

export const FilmBanner = () => {
  return (

    <div className={styles.main}>
      <Swiper>
        {films.map(film => (
          <SwiperSlide>
            <FilmBannerItem key={film._id} {...{ film }} />
          </SwiperSlide>))}
      </Swiper >
    </div>

  );
}

