import { RecoilState, useRecoilState } from 'recoil'
import { StateItem, OpenFn, CloseFn } from '../types'
import { nanoid } from 'nanoid'

export const useBuildState = <T, P>(
  listAtom: RecoilState<string[]>,
  itemsAtom: RecoilState<Record<string, StateItem<T, P>>>
): {
    state: {
      list: string[]
      items: Record<string, StateItem<T, P>>
    }
    open: OpenFn<T, P>
    close: CloseFn
  } => {
  const [list, setList] = useRecoilState(listAtom)
  const [items, setItems] = useRecoilState(itemsAtom)

  const open: OpenFn<T, P> = (component, props, typeProps) => {
    const id = nanoid(6)
    setList((curList) => {
      const nextList = new Set(curList)
      nextList.add(id)
      return Array.from(nextList)
    })
    setItems((curItems) => ({
      ...curItems,
      [id]: { component, props, typeProps }
    }))
  }

  const close: CloseFn = (id) => {
    setList((curList) => curList.filter((item) => item !== id))
    setItems(({ [id]: _, ...rest }) => rest)
  }

  return { state: { list, items }, open, close }
}
