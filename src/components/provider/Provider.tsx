import { FC, PropsWithChildren } from 'react';
import { NotifProvider } from './NotifProvider';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NotifProvider>
      {children}
    </NotifProvider>
  );
}