import { FC, PropsWithChildren } from 'react';
import { NotifProvider } from './NotifProvider';
import { AuthProviderAdmin } from './AuthProviderAdmin';

export const ProviderAdmin: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NotifProvider>
      <AuthProviderAdmin>
        {children}
      </AuthProviderAdmin>
    </NotifProvider>
  );
}