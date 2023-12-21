"use client"

import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { series } from '../../../test/data/series';
import styles from './FilmBanner.module.scss';
import { FilmBannerItem } from "./FilmBannerItem";


export interface IFilmBannerProps {

}

export const FilmBanner = () => {
  return (

    <div className={styles.main}>
      <Swiper>
        <SwiperSlide key={series[0]._id}>
          <FilmBannerItem key={series[0]._id} film={series[0]} header="h1" />
        </SwiperSlide>
        {series.slice(1,).map(series => (
          <SwiperSlide key={series._id}>
            <FilmBannerItem key={series._id} film={series} />
          </SwiperSlide>))}
      </Swiper >
    </div>

  );
}

