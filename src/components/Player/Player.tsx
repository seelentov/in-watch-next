'use client'

import { Movie } from '@/core/types/movie';
import { FC, useRef, useState } from 'react';
import { Controls } from './Controls';
import styles from './Player.module.scss';
export interface IPlayerProps {
  content: Movie
}

export const Player: FC<IPlayerProps> = ({ content }) => {

  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };


  const [volume, setVolume] = useState(1);
  const handleVolumeChange = (event: any) => {
    setVolume(event.target.value);
    if (videoRef.current) {
      videoRef.current.volume = event.target.value;
    }
  };

  const [isFullScreen, setIsFullScreen] = useState(false);
  const handleFullScreen = () => {
    if (!videoContainerRef.current) return

    if (!isFullScreen) {
      videoContainerRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };


  return (
    <div className={styles.main} ref={videoContainerRef}>
      <video poster={content.backdrop.url} ref={videoRef}>
        <source src={content.videos.trailers[0].url} type="video/mp4" />
      </video>
      <Controls {...{
        isPlaying,
        handlePlayPause,
        handleVolumeChange,
        volume,
        handleFullScreen,
        isFullScreen
      }} />
    </div>
  )
}