import { RecoilState, useRecoilState } from 'recoil'
import { StateItem, OpenFn, CloseFn, UseBuildStateReturn } from '../types'
import { nanoid } from 'nanoid'

export const useBuildState = <T, P = any>(
  activeAtom: RecoilState<string | null>,
  listAtom: RecoilState<string[]>,
  itemsAtom: RecoilState<Record<string, StateItem<T, P>> | any>
): UseBuildStateReturn<T, P> => {
  const [active, setActive] = useRecoilState(activeAtom)
  const [list, setList] = useRecoilState(listAtom)
  const [items, setItems] = useRecoilState(itemsAtom)

  const open: OpenFn<T, P> = (component, props, typeProps) => {
    const id = nanoid(6)
    setList((curList) => {
      const nextList = new Set(curList)
      nextList.add(id)
      return Array.from(nextList)
    })
    setItems((curItems: Record<string, StateItem<T, P>>) => ({
      ...curItems,
      [id]: { component, props, typeProps }
    }))
    setTimeout(() => setActive(id), 128)
  }

  const close: CloseFn = (id) => {
    let nextActive: string | null = null
    setActive(null)
    setTimeout(() => {
      setList((curList) => {
        const nextList = curList.filter((item) => item !== id)
        if (nextList.length > 0) nextActive = nextList[nextList.length - 1]
        return nextList
      })
      setItems(({ [id]: _, ...rest }) => rest)
      setActive(nextActive)
    }, 256)
  }

  return { state: { list, items, active }, open, close }
}
