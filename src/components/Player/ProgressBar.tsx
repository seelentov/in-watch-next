import { FC, RefObject } from 'react';
import styles from './Player.module.scss';

export interface IProgressBarProps {
  duration: number
  currentTime: number
}

export const ProgressBar: FC<IProgressBarProps> = ({ 
  duration,
  currentTime
 }) => {

  return (
    <div className={styles.progress}>
      <p>{currentTime}</p>
      <progress className={styles.main} value={currentTime} max={duration}>
      </progress>
      <p>{duration}</p>
    </div>
  );
}