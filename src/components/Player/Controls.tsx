import { FC } from 'react';
import styles from './Player.module.scss';
import { Volume } from './Volume';

export interface IControlsProps {
  isPlaying: boolean,
  handlePlayPause: () => void
  handleVolumeChange: (arg0: any) => void
  volume: number,
  handleFullScreen: () => void
  isFullScreen: boolean
}

export const Controls: FC<IControlsProps> = ({
  handlePlayPause,
  isPlaying,
  handleVolumeChange,
  volume,
  handleFullScreen,
  isFullScreen
}) => {
  return (
    <div className={styles.controls}>
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      {/*<ProgressBar {...{
        duration,
        currentTime
      }} />*/}
      <Volume {...{ handleVolumeChange, volume }} />
      <button onClick={handleFullScreen}>{isFullScreen ? 'FS' : 'EFS'}</button>
    </div>
  );
}