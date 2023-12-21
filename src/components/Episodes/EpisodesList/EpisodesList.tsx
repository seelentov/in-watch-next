'use client'

import SWIPER_CONFIG from '@/core/config/swiper.config'
import Episode from '@/core/models/Episode'
import cn from 'classnames'
import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EpisodesItem } from '../EpisodesItem/EpisodesItem'
import styles from './EpisodesList.module.scss'

export interface IEpisodesListProps {
  episodes: {
    [key: string]: Episode[]
  }
}

export const EpisodesList: FC<IEpisodesListProps> = ({ episodes }) => {

  const seasonButtons = Object.keys(episodes)
  const [currentSeason, setCurrentSeason] = useState<string>('1')

  return (
    <div className={styles.main}>
      <div className={styles.seasons}>
        {seasonButtons.map(season => <button key={season} onClick={() => setCurrentSeason(season)} className={cn(currentSeason === season && styles.active)}>
          {season}
        </button>)}
      </div>
      <div className={styles.episodes}>
        <Swiper {...SWIPER_CONFIG.LIST}>
          {episodes[currentSeason].map(episode => <SwiperSlide key={episode._id}>
            <EpisodesItem episode={episode} />
          </SwiperSlide>)}
        </Swiper>
      </div>
    </div>
  );
}