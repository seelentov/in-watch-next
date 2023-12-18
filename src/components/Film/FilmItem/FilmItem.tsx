import Film from '@/core/models/Film';
import { FC } from 'react';
import styles from './FilmItem.module.scss';

export interface IFilmsItemProps {
  film: Film
}

export const FilmsItem: FC<IFilmsItemProps> = ({
  film
}) => {
  return (
    <div className={styles.item}>

    </div>
  );
}