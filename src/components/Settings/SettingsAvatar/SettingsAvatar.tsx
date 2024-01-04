'use client'

import { NotifContext } from '@/components/provider/NotifProvider';
import { UserContext } from '@/components/provider/UserProvider';
import { changeAvatarUrl } from '@/core/api/account.api.client';
import { API_URL } from '@/core/api/api';
import Image from 'next/image';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { BeatLoader } from 'react-spinners';
import styles from './SettingsAvatar.module.scss';
export interface ISettingsAvatarProps {
  avatarUrl: string
}

export const SettingsAvatar: FC<ISettingsAvatarProps> = ({ avatarUrl }) => {

  const { toast } = useContext(NotifContext)
  const { user, setUser } = useContext(UserContext)

  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {

    if (!e.target.files) {
      return toast.error('Не удалось получить изображение')
    }

    const file = e.target.files[0]

    if (!file?.type?.includes('image')) {
      return toast.error('Выберите изображение')
    }

    const token = localStorage.getItem('token') || ''

    setLoading(true)
    changeAvatarUrl(file, token)
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data)
          toast.success('Изображение успешно загружено')
        } else {
          toast.error(response.data.message)
        }
      })
      .then(() => { setLoading(false) })
      .catch((err) => {
        toast.error(err)
        setLoading(false)
      })


  }


  return (
    <div className={styles.main}>
      <Image src={API_URL + user.avatarUrl} alt="Нажмите, что бы загрузить новое изображение" width={250} height={250} priority />
      <label>
        <div className={styles.editIcon}>
          {loading ? <BeatLoader
            color="#fff"
            size={6}
          /> : <FaEdit size={30} />}

        </div>
        <input type="file" onChange={handleChange} hidden />
      </label>
    </div>
  );
}