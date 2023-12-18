'use client'

import { LibContext } from '@/components/provider/LibProlider/LibProvider';
import { FC, useContext } from 'react';
import { IconContext } from 'react-icons';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import styles from './ButtonLike.module.scss';

export interface IButtonLikeProps {
  size?: 's' | 'm'
  _id: string
}

export const ButtonLike: FC<IButtonLikeProps> = ({
  size = 's', _id
}) => {

  const { lib } = useContext(LibContext)

  const iconSize = size === 's' ? '14px' : '24px'
  const buttonSize = size === 's' ? '32px' : '54px'

  const toggled = [...lib.films, ...lib.series].some(film => film._id === _id)

  return (
    <button className={styles.buttonLike} style={{ width: buttonSize, height: buttonSize }}>
      <IconContext.Provider
        value={{ color: 'var(--color-main)', size: iconSize }}
      >
        {toggled ? <FaHeart /> : <FaRegHeart />}
      </IconContext.Provider>
    </button>
  );
}