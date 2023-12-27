import { UserContext } from '@/components/provider/UserProvider'
import { useContext } from 'react'

export const useIsAuth = () => {
  const { user } = useContext(UserContext)

  return !!user?._id
}
