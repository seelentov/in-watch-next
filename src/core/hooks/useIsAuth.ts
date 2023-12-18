import { useContext } from 'react'
import { useStoreBy } from './useStoreBy'
import { UserContext } from '@/components/provider/UserProvider/UserProivider'

export const useIsAuth = () => {
  const {user} = useContext(UserContext)

	return !!user._id
}
