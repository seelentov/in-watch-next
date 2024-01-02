'use client'

import { FC, PropsWithChildren, createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface INotifContext {
  toast: any
}
export const NotifContext = createContext({} as INotifContext)

export const NotifProvider: FC<PropsWithChildren> = ({ children }) => {
  
  return <NotifContext.Provider value={{ toast }}>
    {children}
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </NotifContext.Provider>;
}