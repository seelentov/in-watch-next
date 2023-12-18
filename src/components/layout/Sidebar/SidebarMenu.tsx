'use client'

import { ROUTING } from '@/core/config/routing.config';
import { useIsAuth } from '@/core/hooks/useIsAuth';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

import { FaArrowUpWideShort, FaFilm, FaHeart } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { Logout } from './Logout';
import styles from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem';
import { SidebarList } from './SidebarList';


export const SidebarMenu = () => {

  const isAuth = useIsAuth()
  const pathname = usePathname()

  return (
    <nav className={styles.menu}>
      <SidebarList>
        <ul>
          <li>
            <Link href={ROUTING.HOME}>
              <SidebarItem icon={<FaFilm size={24} />} text="Главная" active={pathname === ROUTING.HOME} />
            </Link>
          </li>
          <li>
            <Link href={ROUTING.TRENDING}>
              <SidebarItem icon={<FaArrowUpWideShort size={24} />} text="Тренды" active={pathname === ROUTING.TRENDING} />
            </Link>
          </li>
        </ul>
      </SidebarList>
      {isAuth && <SidebarList>
        <ul>
          <li>
            <Link href={ROUTING.FAVORITES}>
              <SidebarItem icon={<FaHeart size={24} />} text="Любимое" active={pathname === ROUTING.FAVORITES} />
            </Link>
          </li>
          <li>
            <Link href={ROUTING.SETTINGS}>
              <SidebarItem icon={<IoMdSettings color='var(--color-text)' size={24} />} text="Настройки" active={pathname === ROUTING.SETTINGS} />
            </Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </SidebarList>}
    </nav>
  );
}