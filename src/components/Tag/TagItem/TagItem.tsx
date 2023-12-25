import { ROUTING } from '@/core/config/routing.config';
import { FC } from 'react';
import styles from './TagItem.module.scss';
import Link from 'next/link';

export interface ITagItemProps {
  tag: string
}

export const TagItem: FC<ITagItemProps> = ({ tag }) => {
  return (
    <Link href={ROUTING.TAG + `/${tag}`}>
      <div className={styles.main}>
        <p>{tag}</p>
      </div>
    </Link>
  );
}