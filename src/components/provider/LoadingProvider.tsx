'use client'

import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from 'react';
import { UserProvider } from './UserProvider';
import Loading from '@/app/(client)/loading';


interface ILoadingContext {
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
}
export const LoadingContext = createContext({} as ILoadingContext)

export const LoadingProvider: FC<PropsWithChildren> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)

  return <LoadingContext.Provider value={{ loading, setLoading }}>
    {loading ?
      <UserProvider>
        <Loading />
      </UserProvider> :
      <UserProvider>
        {children}
      </UserProvider>}
  </LoadingContext.Provider>;
}