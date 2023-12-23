import { UserContext } from '@/components/provider/UserProvider/UserProivider'
import { useContext } from 'react'

export const useIsAuth = () => {
  const { user } = useContext(UserContext)

  return !!user
}
