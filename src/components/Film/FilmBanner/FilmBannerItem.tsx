import { Button } from "@/components/ui/Button/Button"
import { ButtonLike } from "@/components/ui/ButtonLike/ButtonLike"
import { ROUTING } from "@/core/config/routing.config"
import Film from "@/core/models/Film"
import Series from "@/core/models/Series"
import Image from 'next/image'
import Link from "next/link"
import { FC } from "react"
import getHMSFromMilliseconds from '../../../core/utils/date/getHMSFromMilliseconds'
import styles from './FilmBanner.module.scss'


export interface IFilmBannerItemProps {
  film: Film | Series
  header?: 'h1' | 'h2' | 'h3'
}

export const FilmBannerItem: FC<IFilmBannerItemProps> = ({ film: { name, year, tags, duration, _id, thumbnailUrl, type, likes, rated }, header = 'h2', film }) => {

  const displayDuration = typeof duration === 'string' ? duration : getHMSFromMilliseconds(duration)

  const pageLink = ROUTING.CATALOG + `/${type}` + `/${_id}`

  const watchLink = type === 'series' ? pageLink : ROUTING.PLAYER + `/${type}/${_id}`

  return (
    <div className={styles.item}>
      <div className={styles.rated}>
        {rated}
      </div>
      <div className={styles.image}>
        <Image src={thumbnailUrl} alt={name} width={1920} height={1080} />
      </div>
      <div className={styles.content}>
        <Link href={pageLink}>
          {header === 'h1' ? <h1>{name}</h1> :
            header === 'h2' ? <h2>{name}</h2> :
              <h3>{name}</h3>}
        </Link>

        <p>{year} | {tags[0]} | {displayDuration}</p>
        {likes && <p>Нравится: {likes}</p>}
        <div className={styles.buttons}>
          <Link href={watchLink}>
            <Button>Смотреть</Button>
          </Link>
          <ButtonLike {...{ _id }} size='m' />
        </div>
      </div>
    </div>
  )
}