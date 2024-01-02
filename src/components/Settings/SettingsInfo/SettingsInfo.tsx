import { NotifContext } from '@/components/provider/NotifProvider';
import { UserContext } from '@/components/provider/UserProvider';
import { Button } from '@/components/ui/Button/Button';
import { updateUserInfo } from '@/core/api/account.api';
import { validEmailRegex } from '@/core/constants/validEmailRegex';
import { UserUpdateInfo } from '@/core/types/user';
import cn from 'classnames';
import { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SettingsInfo.module.scss';

export interface ISettingsInfoProps {
  email: string
  login: string
  id: string
  role: string
}

export const SettingsInfo: FC<ISettingsInfoProps> = ({ email, login, id, role }) => {
  const { setUser } = useContext(UserContext)
  const { toast } = useContext(NotifContext)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: email,
      login: login,
    } as UserUpdateInfo,
    mode: 'onChange',
  })

  const errorsState = {
    email: Boolean(errors.email?.message),
    login: Boolean(errors.login?.message),
  }


  const onSubmit = async (dt: UserUpdateInfo) => {

    let info
    if(dt.email === email){
      info = {login: dt.login}
    } else {
      info = dt
    }
    
    const { status, data } = await updateUserInfo(info, localStorage.getItem('token') || '')
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
      toast.success('Информация успешно изменена')
      setUser(userData)
    }
    else {
      toast.error(data.message)
    }
  }

  return (
    <form className={styles.page} onSubmit={handleSubmit(onSubmit)}>
      <p>ID: {id}</p>
      <p>Роль: {role}</p>
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
      <input {...register('login', {
        required: 'Введите логин!'
      })}
        className={cn(styles.input, errorsState.login && styles.error)}
        placeholder={errorsState.login ? errors.login?.message : 'Логин'}
        type="text"
      />
      <Button>Изменить данные</Button>
    </form>
  );
}