'use client'

import { getOneAndWatch } from '@/core/api/movies.api';
import { FC, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
export interface IPlayerProps {
  id: string
}

export const Player: FC<IPlayerProps> = ({ id }) => {
  const [video, setVideo] = useState<string>()
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    const fetchData = async () => {
      const { trailer } = await getOneAndWatch(id, localStorage.getItem('token') || '')
      setVideo(trailer)
    console.log(trailer, id)
      
    }
    fetchData()
  }, [id, localStorage.getItem('token')])

  return (
    <ReactPlayer
      className='react-player fixed-bottom'
      url={video}
      width='100%'
      height='100%'
      controls={true}
    />

  )
}