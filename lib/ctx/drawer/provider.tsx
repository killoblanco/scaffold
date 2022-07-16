import { Drawer, DrawerProps } from '@mui/material'
import { createContext, PropsWithChildren, useReducer } from 'react'
import { drawerActionTypes, drawerReducer, drawerState } from './duck'

export interface DrawerCtx {
  props: DrawerProps
  open: (props: DrawerProps) => void
  close: () => void
}

export const drawerCtx = createContext<DrawerCtx>({} as DrawerCtx)

export function DrawerProvider ({ children }: PropsWithChildren) {
  const [props, dispatch] = useReducer(drawerReducer, drawerState)

  const open = (props: DrawerProps) => dispatch({
    type: drawerActionTypes.open,
    payload: props
  })
  const close = () => dispatch({ type: drawerActionTypes.close })

  return (
    <drawerCtx.Provider value={{ props, open, close }}>
      {children}
      <Drawer {...props} />
    </drawerCtx.Provider>
  )
}
