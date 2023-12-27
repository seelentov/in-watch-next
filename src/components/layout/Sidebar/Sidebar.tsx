

import { getMayValues } from '@/core/api/movies.api';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar = async () => {

  const { genres } = await getMayValues()
  return (
    <SidebarMenu {...{ genres }} />
  );
}