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
}

export const FilmBannerItem: FC<IFilmBannerItemProps> = ({ film: { name, year, tags, duration, _id, thumbnailUrl } }) => {

  const displayDuration = typeof duration === 'string' ? duration : getHMSFromMilliseconds(duration)

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={thumbnailUrl} alt={name} width={1920} height={1080} />
      </div>

      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{year} | {tags[0]} | {displayDuration}</p>
        <div className={styles.buttons}>
          <Link href={ROUTING.PLAYER + `/${_id}`}>
            <Button>Смотреть</Button>
          </Link>
          <ButtonLike {...{ _id }} size='m' />
        </div>
      </div>
    </div>
  )
}