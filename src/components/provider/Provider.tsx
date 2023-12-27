import { FC, PropsWithChildren } from 'react';
import { LoadingProvider } from './LoadingProvider';
import { UserProvider } from './UserProvider';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (

    <LoadingProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </LoadingProvider>
  );
}