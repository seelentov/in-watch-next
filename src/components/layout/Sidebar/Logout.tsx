'use client'

import { UserContext } from "@/components/provider/UserProvider";
import { useContext } from "react";
import { RiLogoutBoxFill } from "react-icons/ri";
import { SidebarItem } from "./SidebarItem";

export const Logout = () => {
  const { logout } = useContext(UserContext)

  return (
    <button onClick={() => logout()}>
      <SidebarItem icon={<RiLogoutBoxFill color='var(--color-text)' size={24} />} text="Выйти" />
    </button>
  );
}