import { FunctionComponent } from 'react'
import { DialogProps } from '@mui/material'

export interface StateItem<T, P> {
  component: FunctionComponent<any>
  props?: P
  typeProps?: T
}

export interface BaseState<T, P> {
  list: string[]
  items: Record<string, StateItem<T, P>>
}

export type OpenFn<T, P> = (
  component: FunctionComponent<P>,
  props?: P,
  typeProps?: T
) => void

export type CloseFn = (id: string) => void

export interface UseDialogsCtrlsReturn<P> {
  state: BaseState<DialogProps, P>
  active: string | null
  open: OpenFn<DialogProps, P>
  close: CloseFn
}

export interface UseScaffoldReturn {
  dialogs: {
    open: UseDialogsCtrlsReturn<P>['open']
    close: UseDialogsCtrlsReturn<P>['close']
  }
}
