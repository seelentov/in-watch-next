
'use client'

import { Autocomplete } from '@/components/Autocomplete/Autocomplete';
import { ROUTING } from '@/core/config/routing.config';
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import styles from './Header.module.scss';

export const Search: FC<{ mayNames: string[] }> = ({
  mayNames
}) => {

  const [mayNamesFiltred, setMayNamesFiltred] = useState<string[]>([])

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')

  const navigate = useRouter()
  const pathname = usePathname()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!input) {
      return
    }

    navigate.push(`${ROUTING.SEARCH}?name=${input}`)
  }


  if (pathname.includes(ROUTING.SEARCH)) {
    return
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)

    const value = e.target.value.trim()

    if (value === '') return setMayNamesFiltred([])

    const newMayNames: string[] = mayNames.filter(name => name.includes(e.target.value)).slice(0, 3)
    setMayNamesFiltred(newMayNames)
  }

  const handleClickName = (name: string) => {
    setMayNamesFiltred([])
    navigate.push(`${ROUTING.SEARCH}?name=${name}`)
  }

  const handleBlur = () => {
    setIsOpen(false)
    setMayNamesFiltred([])
  }

  const handleMouseEnter = (e: any) => {
    setIsOpen(true)

    if (input === '') return setMayNamesFiltred([])

    const newMayNames: string[] = mayNames.filter(name => name.includes(input)).slice(0, 3)
    setMayNamesFiltred(newMayNames)
  }
  return (
    <div className={cn(styles.search, isOpen && styles.isOpen)}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChangeName} placeholder="Поиск.." onBlur={handleBlur} />
        <button onMouseEnter={handleMouseEnter}>
          <IoSearchSharp color={isOpen ? 'var(--color-background)' : 'var(--color-text)'} size={24} />
        </button>
      </form>
      <Autocomplete
        mayNames={mayNamesFiltred}
        handleClickName={handleClickName}
      />
    </div >
  );
}