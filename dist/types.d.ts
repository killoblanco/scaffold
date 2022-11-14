import { FunctionComponent } from 'react'
import { DialogProps, DrawerProps } from '@mui/material'

export interface StateItem<T, P> {
  component: FunctionComponent<any>
  props?: P
  typeProps?: T
}

export interface BaseState<T, P> {
  active: string | null
  list: string[]
  items: Record<string, StateItem<T, P>>
}

export type OpenFn<T, P> = (
  component: FunctionComponent<P>,
  props?: P,
  typeProps?: T
) => void

export type CloseFn = (id: string) => void

export interface UseBuildStateReturn<T, P> {
  state: BaseState<T, P>
  open: OpenFn<T, P>
  close: CloseFn
}

export type UseDialogsCtrlsReturn<P> = UseBuildStateReturn<DialogProps, P>
export type UseDrawersCtrlsReturn<P> = UseBuildStateReturn<DrawerProps, P>

export interface UseScaffoldReturn {
  dialogs: {
    open: UseDialogsCtrlsReturn<P>['open']
    close: UseDialogsCtrlsReturn<P>['close']
  }
  drawers: {
    open: UseDrawersCtrlsReturn<P>['open']
    close: UseDrawersCtrlsReturn<P>['close']
  }
}
