'use client'

import { UserSignUp } from '@/core/types/user';
import cn from 'classnames';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../provider/UserProvider/UserProivider';
import { Button } from '../ui/Button/Button';
import styles from './Auth.module.scss';
export const Login = () => {

  const { setUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    } as UserSignUp,
    mode: 'onChange',
  })

  const errorsState = {
    email: Boolean(errors.email?.message),
    password: Boolean(errors.password?.message),
    root: Boolean(errors.root?.message),
  }



  const onSubmit = async (dt: UserSignUp) => {

    await setError('root', {
      message: '',
    })

    //if (res.error) {
    //  resetField('email')
    //  resetField('password')
    //  return setError('root', {
    //    message: 'Wrong login or password',
    //  })
    //}


    //if (res.error) {
    //  return res.error.data.map((error: any) => {
    //    resetField(error.path)
    //    setError(error.path, {
    //      message: error.msg,
    //    })
    //  })
    //}

    //const { token, ...user } = res.data

    //localStorage.setItem('token', token)

    //setUser(user)
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