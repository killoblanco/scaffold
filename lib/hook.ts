import { useContext } from 'react'
import { drawerCtx } from './ctx/drawer/provider'

export const useScaffoldContext = () => {
  const drawer = useContext(drawerCtx)
  return { drawer }
}
