import { API_URL } from '@/core/config/config';
import { ROUTING } from '@/core/config/routing.config';
import { Movie } from '@/core/types/movie';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './FilmItem.module.scss';
import { ButtonLike } from '@/components/ui/ButtonLike/ButtonLike';
export interface IFilmsItemProps {
  film: Movie
}

export const FilmItem: FC<IFilmsItemProps> = ({
  film
}) => {

  return (
    <div className={styles.item}>
      <Link href={ROUTING.CATALOG + `/${film._id}`}>
        <div className={styles.content}>
          <div className={styles.likeBtn}>
            <ButtonLike _id={film._id} />
          </div>
          <div className={styles.img}>
            {film.poster && <Image src={API_URL + film.poster} alt={film.name} width={480} height={270} />}
          </div>
          <div className={styles.info}>
            <h3>{film.name}</h3>
            <p>{film.genres.join(' | ')}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}