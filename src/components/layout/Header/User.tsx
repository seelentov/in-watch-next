'use client'

import { Button } from '@/components/ui/Button/Button'
import { ROUTING } from '@/core/config/routing.config'
import { useIsAuth } from '@/core/hooks/useIsAuth'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Header.module.scss'
import { usePathname } from 'next/navigation'

export interface IUserProps {

}

export const User: FC<IUserProps> = () => {
  const isAuth = useIsAuth()
  const pathname = usePathname()
  if (!isAuth && pathname !== ROUTING.LOGIN) {
    return (
      <Link href={ROUTING.LOGIN}>
        <Button>Войти</Button>
      </Link>
    )
  }
  return (
    <Link href={ROUTING.SETTINGS}>
      <div className={styles.user}>

      </div>
    </Link>
  );
}