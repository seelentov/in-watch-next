import { FC, PropsWithChildren, useState } from 'react';
import { LoginAdmin } from '../Admin/LoginAdmin/LoginAdmin';

export const AuthProviderAdmin: FC<PropsWithChildren> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>()


  if (!isAuth) {
    return (
      <LoginAdmin />
    );
  }

  return (
    <>
      {children}
    </>
  );
}