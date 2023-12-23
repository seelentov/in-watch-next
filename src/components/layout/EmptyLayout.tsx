'use client'

import { FC, PropsWithChildren } from 'react';

export const EmptyLayout: FC<PropsWithChildren> = ({ children }) => {

  return (
    <main>{children}</main>
  );
}