'use client'

import { UserContext } from '@/components/provider/UserProvider';
import { addFavorite, removeFavorite } from '@/core/api/account.api';
import { useIsAuth } from '@/core/hooks/useIsAuth';
import { FC, useContext, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BeatLoader } from 'react-spinners';
import styles from './ButtonLike.module.scss';

export interface IButtonLikeProps {
  size?: 's' | 'm'
  _id: string
}

export const ButtonLike: FC<IButtonLikeProps> = ({
  size = 's', _id
}) => {

  const { user, updateFavorite } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const iconSize = size === 's' ? '14px' : '24px'
  const buttonSize = size === 's' ? '32px' : '54px'
  const isAuth = useIsAuth()
  const toggled = user?.favorites?.some(filmId => filmId === _id)

  const handleClick = async (event: any) => {
    setIsLoading(true)
    event.preventDefault()
    let response
    if (!toggled) {
      response = await addFavorite([_id], localStorage.getItem('token') || '')
    } else {
      response = await removeFavorite([_id], localStorage.getItem('token') || '')
    }

    if (response.status !== 200) {
      console.log({
        status: response.status,
        message: response.data
      })
      alert(response.data)
      setIsLoading(false)
    } else {
      updateFavorite(response.data)
      setIsLoading(false)

      //updateFavorite(response.data)
    }
  }

  if (!isAuth) {
    return
  }

  return (
    <button className={styles.buttonLike} style={{ width: buttonSize, height: buttonSize }} onClick={handleClick}>
      {isLoading ?
        <BeatLoader
          color="var(--color-main)"
          size={6}
        /> :
        <IconContext.Provider
          value={{ color: 'var(--color-main)', size: iconSize }}
        >
          {toggled ? <FaHeart /> : <FaRegHeart />}
        </IconContext.Provider>}
    </button>
  );
}