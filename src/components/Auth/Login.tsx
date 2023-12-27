'use client'

import { ROUTING } from '@/core/config/routing.config';
import { useToken } from '@/core/hooks/useToken';
import { UserSignUp } from '@/core/types/user';
import cn from 'classnames';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../provider/UserProvider';
import { Button } from '../ui/Button/Button';
import styles from './Auth.module.scss';
import { login } from '@/core/api/account.api';


export const Login = () => {

  const { setUser } = useContext(UserContext)
  const navigate = useRouter()
  const { token, setToken } = useToken()

  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'test@test.ru',
      password: 'test@test.ru',
    } as UserSignUp,
    mode: 'onChange',
  })

  const errorsState = {
    email: Boolean(errors.email?.message),
    password: Boolean(errors.password?.message),
    root: Boolean(errors.root?.message),
  }

  useEffect(() => {
    if (token) {
      navigate.push(`${ROUTING.HOME}`)
    }

  }, [token])

  const onSubmit = async (dt: UserSignUp) => {
    try {
      setError('root', {
        message: '',
      })
      const user = await login(dt)

      const { token, ...userData } = user

      setToken(token)
      setUser(userData)

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <form className={styles.page} onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email', { required: 'Введите E-mail!' })}
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
      <p className={styles.rootError}>{errorsState.root}</p>
    </form>
  );
}