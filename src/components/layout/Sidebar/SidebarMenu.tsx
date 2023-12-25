'use client'

import { useIsAuth } from '@/core/hooks/useIsAuth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react'
import { MENU } from '@/core/config/menu.config';
import { ROUTING } from '@/core/config/routing.config';
import cn from 'classnames';
import { FC, useState } from 'react';
import { FaFilm } from 'react-icons/fa6';
import { Logout } from './Logout';
import styles from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem';
import { SidebarList } from './SidebarList';

export const SidebarMenu: FC<{ tags: string[] }> = ({ tags }) => {

  const isAuth = useIsAuth()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <button onClick={() => setIsOpen(prev => !prev)} className={styles.burgerBtn}>
        <Hamburger toggled={isOpen}/>
      </button>
      <aside className={cn(styles.sidebar, isOpen && styles.open)}>
        <nav className={styles.menu} onClick={() => setIsOpen(false)}>
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
      </aside>
    </>
  );
}