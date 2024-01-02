'use client'

import { UserContext } from "@/components/provider/UserProvider";
import { useContext } from "react";
import { RiLogoutBoxFill } from "react-icons/ri";
import { SidebarItem } from "./SidebarItem";
import { NotifContext } from "@/components/provider/NotifProvider";

export const Logout = () => {
  const { logout } = useContext(UserContext)
  const { toast } = useContext(NotifContext)

  const handleClick = () => {
    logout()
    toast.success("Вы успешно вышли из аккаунта")
  }

  return (
    <button onClick={() => handleClick()}>
      <SidebarItem icon={<RiLogoutBoxFill color='var(--color-text)' size={24} />} text="Выйти" />
    </button>
  );
}