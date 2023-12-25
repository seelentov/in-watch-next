import { FC, PropsWithChildren } from 'react';
import { UserProvider } from './UserProvider/UserProivider';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserProvider>
        {children}
    </UserProvider>
    
  );
}