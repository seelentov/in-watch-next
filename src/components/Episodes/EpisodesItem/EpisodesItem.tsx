import { ROUTING } from '@/core/config/routing.config';
import Episode from '@/core/models/Episode';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './EpisodesItem.module.scss';

export interface IEpisodesItemProps {
  episode: Episode
}

export const EpisodesItem: FC<IEpisodesItemProps> = ({ episode: {
  thumbnailUrl, name, desc, type, _id
} }) => {
  return (
    <div className={styles.item}>
      <Link href={ROUTING.PLAYER + `/${type}` + `/${_id}`}>
        <div className={styles.content}>
          <div className={styles.img}>
            <Image src={thumbnailUrl} alt={name} width={480} height={270} />
          </div>
          <div className={styles.info}>
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}