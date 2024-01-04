'use client'

import { login } from '@/core/api/account.api';
import { ROUTING } from '@/core/config/routing.config';
import { validEmailRegex } from '@/core/constants/validEmailRegex';
import { useIsAuth } from '@/core/hooks/useIsAuth';
import { UserSignUp } from '@/core/types/user';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../provider/UserProvider';
import { Button } from '../ui/Button/Button';
import styles from './Auth.module.scss';
import { NotifContext } from '../provider/NotifProvider';


export const Login = () => {

  const { setUser, user } = useContext(UserContext)
  const isAuth = useIsAuth()
  const navigate = useRouter()
  const {toast} = useContext(NotifContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'test@test.ru',
      password: 'testtesttest',
    } as UserSignUp,
    mode: 'onChange',
  })

  const errorsState = {
    email: Boolean(errors.email?.message),
    password: Boolean(errors.password?.message),
  }

  useEffect(() => {
    if (isAuth) {
      navigate.push(`${ROUTING.HOME}`)
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
        required: 'Введите E-mail!', pattern: {
          value: validEmailRegex,
          message: "Введите валидный E-mail"
        }
      })}
        className={cn(styles.input, errorsState.email && styles.error)}
        placeholder={errorsState.email ? errors.email?.message : 'E-mail'}
        type="email"
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