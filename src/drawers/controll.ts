import { DialogProps, DrawerProps } from '@mui/material'
import { atom } from 'recoil'
import { useBuildState } from '../state-builder'
import { StateItem, UseDrawersCtrlsReturn } from '../types'

const activeAtom = atom<string | null>({
  key: 'scaffoldDrawersActive',
  default: null
})

const listAtom = atom<string[]>({
  key: 'scaffoldDrawersList',
  default: []
})

const itemsAtom = atom<Record<string, StateItem<DialogProps, any>>>({
  key: 'scaffoldDrawersItems',
  default: {}
})

export const useDrawersCtrls = <P>(): UseDrawersCtrlsReturn<P> => useBuildState<DrawerProps, P>(
  activeAtom,
  listAtom,
  itemsAtom
)
