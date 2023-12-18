import { FC } from 'react';
import { IconContext } from 'react-icons';
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import styles from './ButtonLike.module.scss';

export interface IButtonLikeProps {
  size?: 's' | 'm'
  toggled?: boolean
}

export const ButtonLike: FC<IButtonLikeProps> = ({
  size = 's', toggled
}) => {

  const iconSize = size === 's' ? '14px' : '24px'
  const buttonSize = size === 's' ? '32px' : '54px'

  return (
    <button className={styles.buttonLike} style={{width: buttonSize,height: buttonSize}}>
      <IconContext.Provider
        value={{ color: 'var(--color-main)', size: iconSize }}
      >
        {toggled ? <FaRegHeart/> : <FaHeart/>}
      </IconContext.Provider>
    </button>
  );
}