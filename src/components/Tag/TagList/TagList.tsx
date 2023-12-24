import { FC } from 'react'
import styles from './TagList.module.scss'

export interface ITagListProps {
  tags: string[]
}

export const TagList: FC<ITagListProps> = ({tags}) => {
  return (
    <div className={styles.main}>
      
    </div>
  );
}