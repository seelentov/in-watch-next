
'use client'

import cn from 'classnames';
import { FormEvent, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import styles from './Header.module.scss';


export const Search = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!input) return


  }


  return (
    <div className={cn(styles.search, isOpen && styles.isOpen)}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Поиск.." onBlur={() => setIsOpen(false)}/>
        <button onMouseEnter={() => setIsOpen(true)}>
          <IoSearchSharp color={isOpen ? 'var(--color-background)' : 'var(--color-text)'} size={24} />
        </button>
      </form>
    </div >
  );
}