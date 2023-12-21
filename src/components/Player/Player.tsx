import Episode from '@/core/models/Episode';
import Film from '@/core/models/Film';
import { FC } from 'react';
import styles from './Player.module.scss';

export interface IPlayerProps {
  content: Episode | Film
}

export const Player: FC<IPlayerProps> = ({ content }) => {
  return (
    <div className={styles.main}>
      <video
        width="480"
        controls
        poster={content.thumbnailUrl}>
        <source
          src={content.source}
          type="video/mp4" />
        Your browser doesn't support HTML5 video tag.
      </video>

    </div>
  );
}