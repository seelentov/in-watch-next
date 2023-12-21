import { EpisodesList } from '@/components/Episodes/EpisodesList/EpisodesList';
import Film from '@/core/models/Film';
import Series from '@/core/models/Series';
import getHMSFromMilliseconds from '@/core/utils/date/getHMSFromMilliseconds';
import { FC } from 'react';
import styles from './FilmMore.module.scss';

export interface IFilmMoreProps {
  film: Film | Series
}

export const FilmMore: FC<IFilmMoreProps> = ({ film }) => {

  const type: string = film.type === 'series' ? 'Сериал' : 'Фильм'

  const displayDuration = typeof film.duration === 'string' ? film.duration : getHMSFromMilliseconds(film.duration)

  const Episodes = () => <>
    
    {film.type === 'series' && <><h2>Серии</h2><EpisodesList episodes={film.episodes} /></>}
  </>

  return (
    <div className={styles.main}>
      <p className={styles.tags}>
        {film.tags.join(' | ')}
      </p>
      <p className={styles.info}>
        {type} | {film.year} | {film.country}
      </p>
      <h2>Описание</h2>
      <p className={styles.desc}>
        {film.desc}
      </p>

      <Episodes />
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
          <tr>
            <th>Рейтинг: </th>
            <td>{film.rated}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}