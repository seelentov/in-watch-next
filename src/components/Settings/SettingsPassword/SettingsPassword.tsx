import { NotifContext } from '@/components/provider/NotifProvider';
import { Button } from '@/components/ui/Button/Button';
import { UserUpdatePassword } from '@/core/types/user';
import cn from 'classnames';
import { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from './SettingsPassword.module.scss';
import { updatePassword } from '@/core/api/account.api';

export interface ISettingsPasswordProps {

}

export const SettingsPassword: FC<ISettingsPasswordProps> = () => {
  const { toast } = useContext(NotifContext)

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      newPassword: '',
      confirmNewPassword: ''
    } as UserUpdatePassword,
    mode: 'onChange',
  })

  const errorsState = {
    password: Boolean(errors.password?.message),
    newPassword: Boolean(errors.newPassword?.message),
    confirmNewPassword: Boolean(errors.confirmNewPassword?.message),
  }


  const onSubmit = async (dt: UserUpdatePassword) => {

    const { status, data } = await updatePassword(dt, localStorage.getItem('token') || '')
    if (status === 420) {
      console.log(data)
      data.map((error: any) => {
        setValue(error.path, '')
        setError(error.path, {
          type: 'custom',
          message: error.msg
        })
      })
    }
    if (status === 403) {
      reset()
      toast.error(data.message)
    }
    else if (status === 200) {
      reset()
      toast.success('Пароль успешно изменен')
    }
    else {
      toast.error(data.message)
    }
  }

  return (
    <form className={styles.page} onSubmit={handleSubmit(onSubmit)}>
      <input {...register('password', {
        required: 'Введите пароль!'
      })}
        className={cn(styles.input, errorsState.password && styles.error)}
        placeholder={errorsState.password ? errors.password?.message : 'Старый пароль'}
        type="password"
      />
      <input {...register('newPassword', {
        required: 'Введите пароль!'
      })}
        className={cn(styles.input, errorsState.newPassword && styles.error)}
        placeholder={errorsState.newPassword ? errors.newPassword?.message : 'Новый пароль'}
        type="password"
      />
      <input {...register('confirmNewPassword', {
        required: 'Введите пароль!'
      })}
        className={cn(styles.input, errorsState.confirmNewPassword && styles.error)}
        placeholder={errorsState.confirmNewPassword ? errors.confirmNewPassword?.message : 'Подтверждение пароля'}
        type="password"
      />
      <Button>Изменить пароль</Button>
    </form>
  );
}