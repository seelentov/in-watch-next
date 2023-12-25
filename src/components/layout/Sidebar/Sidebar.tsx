

import apiGetMovies from '@/core/api/api';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar = async () => {

  const tags = await apiGetMovies.getAllTags()
  return (
    <SidebarMenu {...{ tags }} />
  );
}