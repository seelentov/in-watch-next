'use client'

import { ROUTING } from '@/core/config/routing.config';
import { useIsAuth } from '@/core/hooks/useIsAuth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MENU } from '@/core/config/menu.config';
import { FaFilm } from 'react-icons/fa6';
import { Logout } from './Logout';
import styles from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem';
import { SidebarList } from './SidebarList';
import apiGetMovies from '@/core/api/api';


export const SidebarMenu = async () => {

  const isAuth = useIsAuth()
  const pathname = usePathname()

  const tags = await apiGetMovies.getAllTags()


  return (
    <nav className={styles.menu}>
      <SidebarList>
        <ul>
          {MENU.ALL.map((menuItem) => (
            <li key={menuItem.name}>
              <Link href={menuItem.link}>
                <SidebarItem icon={menuItem.icon} text={menuItem.name} active={pathname === menuItem.link} />
              </Link>
            </li>
          ))}
        </ul>
      </SidebarList>
      <SidebarList>
        <ul className={styles.tags}>
          {tags.map(tag =>
            <li key={tag}>
              <Link href={ROUTING.TAG + `/${tag}`}>
                <SidebarItem icon={<FaFilm size={24} />} text={tag} />
              </Link>
            </li>)}
        </ul>
      </SidebarList>
      {isAuth && <SidebarList>
        <ul >
          {MENU.USER.map((menuItem) => (
            <li key={menuItem.name}>
              <Link href={menuItem.link}>
                <SidebarItem icon={menuItem.icon} text={menuItem.name} active={pathname === menuItem.link} />
              </Link>
            </li>
          ))}
          <li>
            <Logout />
          </li>
        </ul>
      </SidebarList>}
    </nav>
  );
}