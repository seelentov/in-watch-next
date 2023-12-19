'use client'

import cn from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { Header } from './Header/Header';
import styles from './Layout.module.scss';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className={styles.main}>
      <Sidebar />
      <div className={cn(styles.page)}>
        <Header />
        <main>{children}</main>
      </div>

    </div>
  );
}