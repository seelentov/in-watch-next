import { FC } from 'react';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import styles from './FilmMore.module.scss';
export interface IRatingProps {
  rating: number
}

export const Rating: FC<IRatingProps> = ({ rating }) => {


  const fillStar = new Array(Math.floor(rating)).fill(null)
  const halfStar = Math.floor(rating) !== rating ? new Array(1).fill(null) : []
  const emptyStar = new Array(10 - Math.ceil(rating)).fill(null)

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>

        {fillStar.map((el, index) => <IoMdStar key={index} color={`ff9100`} size={60}/>)}
        {halfStar.map((el, index) => <IoMdStarHalf key={index} color={`ff9100`} size={60} />)}
        {emptyStar.map((el, index) => <IoMdStarOutline key={index} color={`ff9100`} size={60}/>)}

      </div>
      <p>{rating} / 10</p>
    </div>
  );
}