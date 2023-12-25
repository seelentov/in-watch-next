import { FC } from 'react';
import { TagItem } from '../TagItem/TagItem';
import styles from './TagList.module.scss';

export interface ITagListProps {
  tags: string[]
}

export const TagList: FC<ITagListProps> = ({ tags }) => {
  return (
    <div className={styles.main}>
      {tags.map(tag => <TagItem key={tag} tag={tag} />)} 
    </div>
  );
}