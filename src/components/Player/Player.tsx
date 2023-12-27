'use client'

import { Movie } from '@/core/types/movie';
import { useRouter } from 'next/navigation';
import { FC, useRef, useState } from 'react';
import { Controls } from './Controls';
import styles from './Player.module.scss';
import { IoMdArrowRoundBack } from 'react-icons/io';
export interface IPlayerProps {
  content: Movie
}

export const Player: FC<IPlayerProps> = ({ content }) => {

  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const navigate = useRouter()

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
      <button className={styles.back} onClick={() => navigate.back()}>
        <IoMdArrowRoundBack size={32} />
      </button>
      <video poster={content.backdrop} ref={videoRef}>
        <source src={content.trailer} type="video/mp4" />
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