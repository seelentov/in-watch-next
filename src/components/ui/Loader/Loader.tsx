import { FC } from 'react'
import styles from './Loader.module.scss'

export interface ILoaderProps {

}

export const Loader: FC<ILoaderProps> = () => {
  return (
    <span className={styles.main}></span>
  );
}