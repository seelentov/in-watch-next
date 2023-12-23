import { Movie } from '@/core/types/movie';
import getHMFromMins from '@/core/utils/date/getHMFromMins';
import { FC } from 'react';
import styles from './FilmMore.module.scss';

export interface IFilmMoreProps {
  film: Movie
}

export const FilmMore: FC<IFilmMoreProps> = ({ film }) => {

  const displayDuration = getHMFromMins(film.movieLength)

  return (
    <div className={styles.main}>
      <p className={styles.tags}>
        {film.genres.map(genre => genre.name).join(' | ')}
      </p>
      <p className={styles.info}>
        {film.genres[0].name} | {film.year} | {film.countries.map(country => country.name).join(' | ')}
      </p>
      <h2>Описание</h2>
      <p className={styles.desc}>
        {film.description}
      </p>
      <h2>Подробности</h2>
      <table className={styles.moreInfo}>
        <tbody>
          <tr>
            <th>Год: </th>
            <td>{film.year}</td>
          </tr>
          <tr>
            <th>Страна: </th>
            <td>{film.countries.map(country => country.name).join(', ')}</td>
          </tr>
          <tr>
            <th>Длительность: </th>
            <td>{displayDuration}</td>
          </tr>
          <tr>
            <th>Рейтинг: </th>
            <td>{film.rating.kp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}