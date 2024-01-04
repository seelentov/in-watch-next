'use client'

import { signUp } from '@/core/api/account.api';
import { ROUTING } from '@/core/config/routing.config';
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

export const SignUp = () => {

  const { setUser } = useContext(UserContext)
  const isAuth = useIsAuth()
  const navigate = useRouter()
  const { toast } = useContext(NotifContext)

  const {
    register,
    handleSubmit,
    setError,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      login: ''
    } as UserSignUp,
  })

  const errorsState = {
    login: Boolean(errors.login?.message),
    email: Boolean(errors.email?.message),
    password: Boolean(errors.password?.message),
  }

  useEffect(() => {
    if (isAuth) {
      navigate.push(`${ROUTING.HOME}`)
    }

  }, [isAuth,navigate ])

  const onSubmit = async (dt: UserSignUp) => {
    const { status, data } = await signUp(dt)
    if (status === 420) {
      data.map((error: any) => {
        setValue(error.path, '')
        setError(error.path, {
          type: 'custom',
          message: error.msg
        })
      })
    }
    else if (status === 200) {
      const { token, ...userData } = data
      localStorage.setItem('token', token)
      setUser(userData)
    }
    else {
      toast.error(data.message)
    }
  }



  return (
    <form className={styles.page} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <input {...register('login', { required: 'Введите логин!' })}
          className={cn(styles.input, errorsState.login && styles.error)}
          type="text"
          placeholder='Логин'
        />
        <p>{errors.login?.message}</p>
      </div>

      <div className={styles.field}>
        <input {...register('email', { required: 'Введите E-mail!' })}
          className={cn(styles.input, errorsState.email && styles.error)}
          placeholder='E-mail'
          type="email"
        />
        <p>{errors.email?.message}</p>

      </div>
      <div className={styles.field}>
        <input {...register('password', { required: 'Введите пароль' })}
          className={cn(styles.input, errorsState.password && styles.error)}
          placeholder='Пароль'
          type="password"
        />
        <p>{errors.password?.message}</p>
      </div>
      <Button>Создать аккаунт</Button>
    </form>
  );
}