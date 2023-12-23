"use client"

import { Movie } from "@/core/types/movie";
import { FC } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './FilmBanner.module.scss';
import { FilmBannerItem } from "./FilmBannerItem";


export interface IFilmBannerProps {
  films: Movie[]
}

export const FilmBanner: FC<IFilmBannerProps> = ({ films }) => {

  return (
    <div className={styles.main}>
      <Swiper>
        <SwiperSlide key={films[0]._id}>
          <FilmBannerItem key={films[0]._id} film={films[0]} header="h1" />
        </SwiperSlide>
        {films.slice(1,).map(film => (
          <SwiperSlide key={film._id}>
            <FilmBannerItem key={film._id} film={film} />
          </SwiperSlide>))}
      </Swiper >
    </div>

  );
}

