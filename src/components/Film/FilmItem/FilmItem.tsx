import { ButtonLike } from '@/components/ui/ButtonLike/ButtonLike';
import { ROUTING } from '@/core/config/routing.config';
import Film from '@/core/models/Film';
import Series from '@/core/models/Series';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './FilmItem.module.scss';
export interface IFilmsItemProps {
  film: Film | Series
}

export const FilmItem: FC<IFilmsItemProps> = ({
  film
}) => {
  return (
    <Link href={ROUTING.CATALOG + `/${film.type}` + `/${film._id}`}>
      <div className={styles.item}>
        <div className={styles.likeBtn}>
          <ButtonLike _id={film._id} />
        </div>
        <div className={styles.img}>
          <Image src={film.thumbnailUrl} alt={film.name} width={480} height={270} />
        </div>
        <div className={styles.info}>
          <h3>{film.name}</h3>
          <p>{film.year} | {film.tags[0]}</p>
        </div>
      </div>
    </Link>
  );
}