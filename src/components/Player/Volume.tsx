import { FC } from 'react'
import styles from './Player.module.scss'

export interface IVolumeProps {
  volume: number
  handleVolumeChange: (arg0: any) => void
}

export const Volume: FC<IVolumeProps> = ({volume, handleVolumeChange}) => {
  return (
    <div className={styles.volume}>
      <input type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
    </div>
  );
}