

import { FC, ReactNode } from 'react';
import styles from './Sidebar.module.scss';

export interface ISidebarListProps {
  children?: ReactNode
}

export const SidebarList: FC<ISidebarListProps> = ({ children }) => {

  return (
    <div className={styles.list}>
      {children}
    </div>
  );
}