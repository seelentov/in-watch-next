import { FC, PropsWithChildren } from 'react';
import { LoadingProvider } from './LoadingProvider';
import { NotifProvider } from './NotifProvider';
import { UserProvider } from './UserProvider';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NotifProvider>
      <LoadingProvider>
          {children}
      </LoadingProvider>
    </NotifProvider>
  );
}