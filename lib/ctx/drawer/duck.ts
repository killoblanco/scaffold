import { DrawerProps } from '@mui/material'
import type { Action } from '../../types'

export const drawerActionTypes = {
  open: 'OPEN_DRAWER',
  close: 'CLOSE_DRAWER'
}

export const drawerState: DrawerProps = {
  anchor: 'left'
}

export const drawerReducer = (state: DrawerProps, action: Action<DrawerProps>) => {
  switch (action.type) {
    case drawerActionTypes.open:
      return { ...state, ...action.payload, open: true }
    case drawerActionTypes.close:
      return { ...state, open: false }
    default:
      return state
  }
}
