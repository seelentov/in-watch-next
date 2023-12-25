import { ROUTING } from '@/core/config/routing.config';
import { Movie } from '@/core/types/movie';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './FilmItemSkeleton.module.scss';
import { API_URL } from '@/core/config/config';


export const FilmItemSkeleton = () => {

  return (
    <div className={styles.item}>

        <div className={styles.content}>
          <div className={styles.likeBtn}>
            {/*<ButtonLike _id={film.id} />*/}
          </div>
          <div className={styles.img}>
           
          </div>
          <div className={styles.info}>
            <h3 className={styles.text}></h3>
            <p className={styles.text}></p>
          </div>
        </div>
    
    </div>
  );
}