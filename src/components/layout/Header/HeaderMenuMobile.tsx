'use client'

import cn from 'classnames';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Header.module.scss';

export const HeaderMenuMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const screenWidth = window.screen.width

  return (
    <div className={cn(styles.menuMobile, isOpen && styles.menuMobileisOpen)}>
      <button onClick={() => {
        console.log('yes')
        setIsOpen(prev => !prev)
      }}>
        <Hamburger toggled={isOpen} />
      </button>
      <nav onClick={() => setIsOpen(false)}>
        <Sidebar />
      </nav>
    </div>
  );
}