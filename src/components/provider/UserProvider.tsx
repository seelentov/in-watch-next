'use client'

import { useToken } from '@/core/hooks/useToken';
import User from '@/core/types/user';
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { LoadingContext } from './LoadingProvider';
import { getMe } from '@/core/api/account.api';


interface IUserContext {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
  logout: () => void
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
    favorite: [],
    receit: []
  }
  const [user, setUser] = useState<User>(initialState)

  useEffect(() => {
  const fetchData = async () => {
    const response = await getMe(token)
    if(response.status === 200){
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


  const logout = () => {
    setUser(initialState)
    clearToken()
    alert('Вы успешно вышли из аккаунта!')
  }

  return <UserContext.Provider value={{ user, setUser, logout }}>
    {children}
  </UserContext.Provider>;
}