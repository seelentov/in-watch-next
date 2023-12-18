'use client'

import { ROUTING } from '@/core/config/routing.config';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styles from './Header.module.scss';

export interface IHeaderMenuProps {

}

export const HeaderMenu: FC<IHeaderMenuProps> = () => {

  const pathname = usePathname()

  return (
    <nav className={styles.menu}>
      <Link href={ROUTING.CATALOG_FILMS}>
        <p className={cn(pathname === ROUTING.CATALOG_FILMS && styles.active)}>Фильмы</p>

      </Link>
      <Link href={ROUTING.CATALOG_SERIES}>
        <p className={cn(pathname === ROUTING.CATALOG_SERIES && styles.active)}>Сериалы</p>

      </Link>
    </nav>
  );
}