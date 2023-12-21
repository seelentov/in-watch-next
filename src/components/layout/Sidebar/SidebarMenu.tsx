'use client'

import { ROUTING } from '@/core/config/routing.config';
import { useIsAuth } from '@/core/hooks/useIsAuth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaFilm } from 'react-icons/fa6';
import { Logout } from './Logout';
import styles from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem';
import { SidebarList } from './SidebarList';
import { MENU } from '@/core/config/menu.config';


export const SidebarMenu = () => {

  const isAuth = useIsAuth()
  const pathname = usePathname()

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
          {MENU.TAGS.map(tag =>
            <li key={tag}>
              <Link href={ROUTING.SEARCH + `/${tag.replace(' ', '_')}`}>
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