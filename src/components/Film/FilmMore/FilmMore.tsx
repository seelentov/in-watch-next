import getHMFromMins from '@/core/utils/date/getHMFromMins';
import { FC } from 'react';
import styles from './FilmMore.module.scss';
import { Rating } from './Rating';
import { Movie } from '@/core/types/movie';

interface IFilmMoreProps {
  film: Movie
}


export const FilmMore: FC<IFilmMoreProps> = ({ film }) => {

  const displayDuration = getHMFromMins(film.movieLength);

  return (
    <div className={styles.main}>
      <p className={styles.tags}>
        {film.genres.join(' | ')}
      </p>
      <p className={styles.info}>
        {film.year} | {film.country}
      </p>
      <h2>Описание</h2>
      <p className={styles.desc}>
        {film.description}
      </p>
      <h2>Рейтинг</h2>
      <Rating rating={film.rating} />
      <h2>Подробности</h2>
      <table className={styles.moreInfo}>
        <tbody>
          <tr>
            <th>Год: </th>
            <td>{film.year}</td>
          </tr>
          <tr>
            <th>Страна: </th>
            <td>{film.country}</td>
          </tr>
          <tr>
            <th>Длительность: </th>
            <td>{displayDuration}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
