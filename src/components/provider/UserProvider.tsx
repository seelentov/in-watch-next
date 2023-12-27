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
  const { token, setToken } = useToken()
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
    getMe(token)
      .then(setUser)
      .then(() => setLoading(false))
  }, [token])


  const logout = () => {
    setUser(initialState)
    setToken('')
  }

  return <UserContext.Provider value={{ user, setUser, logout }}>
    {children}
  </UserContext.Provider>;
}