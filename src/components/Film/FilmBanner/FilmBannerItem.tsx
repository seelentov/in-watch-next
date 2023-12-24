import { Button } from "@/components/ui/Button/Button"
import { ButtonLike } from "@/components/ui/ButtonLike/ButtonLike"
import { ROUTING } from "@/core/config/routing.config"
import { Movie } from "@/core/types/movie"
import getHMFromMins from "@/core/utils/date/getHMFromMins"
import Image from 'next/image'
import Link from "next/link"
import { FC } from "react"
import styles from './FilmBanner.module.scss'
import { API_URL } from "@/core/config/axios.config"


export interface IFilmBannerItemProps {
  film: Movie
  header?: 'h1' | 'h2' | 'h3'
}

export const FilmBannerItem: FC<IFilmBannerItemProps> = ({ film, header = 'h2' }) => {

  const displayDuration = getHMFromMins(film.movieLength)

  const pageLink = `${ROUTING.CATALOG}/${film._id}`

  const watchLink = `${ROUTING.PLAYER}/${film._id}`

  return (
    <div className={styles.item}>
      <div className={styles.rated}>
        {film.ageRating}
      </div>
      <div className={styles.image}>
        {film.backdrop && <Image src={API_URL + film.backdrop} alt={film.name} width={1920} height={1080} />}
      </div>
      <div className={styles.content}>
        <Link href={pageLink}>
          {header === 'h1' ? <h1>{film.name}</h1> :
            header === 'h2' ? <h2>{film.name}</h2> :
              <h3>{film.name}</h3>}
        </Link>
        <p>{film.year} | {film.genres[0]} | {displayDuration}</p>
        <p>{film.description}</p>
        <div className={styles.buttons}>
          <Link href={watchLink}>
            <Button>Смотреть</Button>
          </Link>
          {/*<ButtonLike _id={film._id} size='m' />*/}
        </div>
      </div>
    </div>
  )
}