import { FC, useContext, useEffect } from 'react'
import styles from './LoginAdmin.module.scss'
import { NotifContext } from '@/components/provider/NotifProvider'
import { UserContext } from '@/components/provider/UserProvider'
import { Button } from '@/components/ui/Button/Button'
import { login } from '@/core/api/account.api'
import { ROUTING } from '@/core/config/routing.config'
import { useIsAuth } from '@/core/hooks/useIsAuth'
import { UserSignUp } from '@/core/types/user'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import cn from 'classnames';

export const LoginAdmin = () => {
  const { setUser, user } = useContext(UserContext)
  const isAuth = useIsAuth()
  const navigate = useRouter()
  const { toast } = useContext(NotifContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'root',
      password: 'root',
    } as UserSignUp,
    mode: 'onChange',
  })

  const errorsState = {
    email: Boolean(errors.email?.message),
    password: Boolean(errors.password?.message),
  }

  useEffect(() => {
    if (isAuth) {
      navigate.push(`${ROUTING.ADMIN}`)
    }

  }, [isAuth])

  const onSubmit = async (dt: UserSignUp) => {
    const { status, data } = await login(dt)
    if (status !== 200) {
      toast.error(data.message)
    } else {
      const { token, ...userData } = data
      localStorage.setItem('token', token)
      setUser(userData)
    }

  }




  return (
    <form className={styles.page} onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', {
        required: 'Введите логин!'
      })}
        className={cn(styles.input, errorsState.email && styles.error)}
        placeholder={errorsState.email ? errors.email?.message : 'E-mail'}
        type="text"
      />
      <input {...register('password', { required: 'Введите пароль' })}
        className={cn(styles.input, errorsState.password && styles.error)}
        placeholder={errorsState.password ? errors.password?.message : 'Пароль'}
        type="password"
      />
      <Button>Войти</Button>
    </form>
  );
}