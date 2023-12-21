'use client'

import cn from 'classnames';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import styles from './Header.module.scss';
import { Sidebar } from '../Sidebar/Sidebar';

export const HeaderMenuMobile = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
      <div className={cn(styles.menuMobile, isOpen && styles.menuMobileisOpen)}>
        <button onClick={() => setIsOpen(prev => !prev)}>
          <Hamburger toggled={isOpen} />
        </button>
        <nav onClick={() => setIsOpen(false)}>
          <Sidebar/>
        </nav>
        
      </div>
  );
}