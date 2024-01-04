import { Button } from "@/components/ui/Button/Button"
import { ButtonLike } from "@/components/ui/ButtonLike/ButtonLike"
import { API_URL } from "@/core/api/api"
import { ROUTING } from "@/core/config/routing.config"
import { Movie } from "@/core/types/movie"
import getHMFromMins from "@/core/utils/date/getHMFromMins"
import Image from 'next/image'
import Link from "next/link"
import { FC } from "react"
import styles from './FilmBanner.module.scss'


export interface IFilmBannerItemProps {
  film: Movie
  header?: 'h1' | 'h2' | 'h3'
  isMorePage?: boolean
}

export const FilmBannerItem: FC<IFilmBannerItemProps> = ({ film, isMorePage, header = 'h2' }) => {

  const showHeader = header === 'h1' ? <h1>{film.name}</h1> :
    header === 'h2' ? <h2>{film.name}</h2> :
      <h3>{film.name}</h3>

  const displayDuration = getHMFromMins(film.movieLength)

  const pageLink = `${ROUTING.CATALOG}/${film._id}`

  const watchLink = `${ROUTING.PLAYER}/${film._id}`

  return (
    <div className={styles.item}>
      <div className={styles.rated}>
        {film.ageRating}
      </div>
      <div className={styles.image}>
        {film.backdrop &&
          <Image
            src={API_URL + film.backdrop}
            alt={film.name}
            fill={true}
            priority
          />}
      </div>
      <div className={styles.content}>
        {!isMorePage
          ? <Link href={pageLink}>
            {showHeader}
          </Link>
          : showHeader}

        <p>{film.year} | {film.genres[0]} | {displayDuration}</p>
        {!isMorePage && <p>{film.description}</p>}
        <p>Нравится: {film.likes} | Просмотров: {film.views} ({film.viewsMonth} в этом месяце)</p>
        <div className={styles.buttons}>
          <Link href={watchLink}>
            <Button>Смотреть</Button>
          </Link>
          <ButtonLike _id={film._id} size='m' />
        </div>
      </div>
    </div>
  )
}