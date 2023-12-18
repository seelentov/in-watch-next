

import { Logo } from '@/components/ui/Logo/Logo';
import { ROUTING } from '@/core/config/routing.config';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Sidebar.module.scss';
import { SidebarMenu } from './SidebarMenu';


export interface ISidebarProps {

}

export const Sidebar: FC<ISidebarProps> = () => {
  return (
    <aside className={styles.sidebar}>
      <Link href={ROUTING.HOME}>
        <Logo />
      </Link>
      <SidebarMenu />
    </aside>
  );
}