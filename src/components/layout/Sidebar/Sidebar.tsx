

import apiGetMovies from '@/core/api/api';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar = async () => {

  const {genres} = await apiGetMovies.getMayValues()
  return (
    <SidebarMenu {...{ genres }} />
  );
}