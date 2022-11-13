import { DialogProps } from '@mui/material'
import { atom } from 'recoil'
import { useBuildState } from '../state-builder'
import { StateItem, UseDialogsCtrlsReturn } from '../types'

const listAtom = atom<string[]>({
  key: 'scaffoldDialogsList',
  default: []
})

const itemsAtom = atom<Record<string, StateItem<DialogProps, any>>>({
  key: 'scaffoldDialogsItems',
  default: {}
})

export const useDialogsCtrls = <P>(): UseDialogsCtrlsReturn<P> => {
  const { state, open, close } = useBuildState<DialogProps, P>(listAtom, itemsAtom)
  const active = state.list[state.list.length - 1]

  return { state, active, open, close }
}
