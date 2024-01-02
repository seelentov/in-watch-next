'use client'

import { getMe } from '@/core/api/account.api';
import User from '@/core/types/user';
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { LoadingContext } from './LoadingProvider';
import { NotifContext } from './NotifProvider';


interface IUserContext {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
  logout: () => void
  updateFavorite: (arg0: string[]) => void
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
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
  const { toast } = useContext(NotifContext)

  useEffect(() => {
    const fetchData = async () => {

      const response = await getMe(localStorage.getItem('token') || '')
      if (response.status === 200) {
        setUser(response.data)
        toast.success(`${response.data.login}, добро пожаловать!`)
        setLoading(false)
      } else {
        setLoading(false)
      }
    }
    fetchData()

  }, [])


  const updateFavorite = (newFavorite: string[]) => {
    setUser(prev => { return { ...prev, favorites: newFavorite } })
  }

  const logout = () => {
    setUser(initialState)
    localStorage.removeItem('token')
  }

  return <UserContext.Provider value={{ user, setUser, logout, updateFavorite }}>
    {children}
  </UserContext.Provider>;
}