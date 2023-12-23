'use client'

import User from '@/core/types/user';
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from 'react';


interface IUserContext {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
  logout: () => void
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const initialState: User = {
    _id: '',
    avatarUrl: '',
    login: '',
    email: '',
    role: '',
    favorite: [series[0]._id, films[0]._id]
  }

  const [user, setUser] = useState<User>(initialState)

  const logout = () => {
    setUser(initialState)
  }


  return <UserContext.Provider value={{ user, setUser, logout }}>
    {children}
  </UserContext.Provider>;
}