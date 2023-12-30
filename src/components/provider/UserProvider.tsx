'use client'

import { getMe } from '@/core/api/account.api';
import { useToken } from '@/core/hooks/useToken';
import User from '@/core/types/user';
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { LoadingContext } from './LoadingProvider';


interface IUserContext {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
  logout: () => void
  updateFavorite: (arg0: string[]) => void
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const { token, clearToken, setToken } = useToken()
  const { setLoading } = useContext(LoadingContext)
  const initialState: User = {
    _id: '',
    avatarUrl: '',
    login: '',
    email: '',
    role: '',
    favorites: [],
    receit: []
  }
  const [user, setUser] = useState<User>(initialState)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMe(token)
      if (response.status === 200) {
        const { token, ...userData } = response.data
        setToken(token)
        setUser(userData)
        setLoading(false)
      } else {
        setLoading(false)
      }

    }
    fetchData()
  }, [token])


  const updateFavorite = (newFavorite: string[]) => {
    setUser(prev => { return { ...prev, favorites: newFavorite } })
  }

  const logout = () => {
    setUser(initialState)
    clearToken()
    alert('Вы успешно вышли из аккаунта!')
  }

  return <UserContext.Provider value={{ user, setUser, logout, updateFavorite }}>
    {children}
  </UserContext.Provider>;
}