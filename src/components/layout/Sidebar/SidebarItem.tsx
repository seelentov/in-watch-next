import { FC, ReactNode } from 'react';
import styles from './Sidebar.module.scss';
import cn from 'classnames';

export interface ISidebarItemProps {
  icon?: ReactNode
  text: string
  active?:boolean
}

export const SidebarItem: FC<ISidebarItemProps> = ({ icon, text, active }) => {
  return (
    <div className={cn(styles.item, active && styles.active)}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.text}>
        {text}
      </p>
    </div>
  );
}