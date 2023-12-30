'use client'

import { Movie } from '@/core/types/movie';
import { useRouter } from 'next/navigation';
import { FC, useRef, useState } from 'react';
import styles from './Player.module.scss';
import ReactPlayer from 'react-player';
export interface IPlayerProps {
  url: string
}

export const Player: FC<IPlayerProps> = ({ url }) => {

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
      <ReactPlayer
        className='react-player fixed-bottom'
        url={url}
        width='100%'
        height='100%'
        controls={true}
      />

  )
}