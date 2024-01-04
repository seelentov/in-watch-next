'use client'

import { SettingsAvatar } from '@/components/Settings/SettingsAvatar/SettingsAvatar'
import { SettingsInfo } from '@/components/Settings/SettingsInfo/SettingsInfo'
import { SettingsPassword } from '@/components/Settings/SettingsPassword/SettingsPassword'
import { UserContext } from '@/components/provider/UserProvider'
import { ROUTING } from '@/core/config/routing.config'
import { useIsAuth } from '@/core/hooks/useIsAuth'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import styles from './SettingsPage.module.scss'

export default function SettingsPage() {

  const isAuth = useIsAuth()
  const navigate = useRouter()
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!isAuth) {
      navigate.push(`${ROUTING.HOME}`)
    }

  }, [isAuth,navigate])

  return (
    <div className="content">
      <h2>Настройки</h2>
      <div className={styles.row}>
        <div className={styles.col}>
          <h3>Изображение профиля</h3>
          <SettingsAvatar avatarUrl={user.avatarUrl} />
        </div>
        <div className={styles.col}>
          <h3>Информация</h3>
          <SettingsInfo email={user.email} login={user.login} id={user._id} role={user.role} />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <h3>Смена пароля</h3>
          <SettingsPassword />
        </div>
        <div className={styles.col}>

        </div>
      </div>
    </div>
  )
}
