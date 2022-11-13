import { DialogProps } from '@mui/material'
import { atom } from 'recoil'
import { useBuildState } from '../state-builder'
import { StateItem, UseDialogsCtrlsReturn } from '../types'

const activeAtom = atom<string | null>({
  key: 'scaffoldDialogsActive',
  default: null
})

const listAtom = atom<string[]>({
  key: 'scaffoldDialogsList',
  default: []
})

const itemsAtom = atom<Record<string, StateItem<DialogProps, P>>>({
  key: 'scaffoldDialogsItems',
  default: {}
})

export const useDialogsCtrls = <P>(): UseDialogsCtrlsReturn<P> => useBuildState<DialogProps, P>(
  activeAtom,
  listAtom,
  itemsAtom
)
