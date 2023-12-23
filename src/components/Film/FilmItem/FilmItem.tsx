import { ROUTING } from '@/core/config/routing.config';
import { Movie } from '@/core/types/movie';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './FilmItem.module.scss';
export interface IFilmsItemProps {
  film: Movie
}

export const FilmItem: FC<IFilmsItemProps> = ({
  film
}) => {

  console.log(film)

  return (
    <div className={styles.item}>
      <Link href={ROUTING.CATALOG + `/${film._id}`}>
        <div className={styles.content}>
          <div className={styles.likeBtn}>
            {/*<ButtonLike _id={film.id} />*/}
          </div>
          <div className={styles.img}>
            {film.poster && <Image src={film.poster} alt={film.name} width={480} height={270} />}
          </div>
          <div className={styles.info}>
            <h3>{film.name}</h3>
            <p>{film.genres.join(' | ').slice(0, 3)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}