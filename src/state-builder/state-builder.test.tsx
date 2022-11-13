import { renderHook } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { describe, expect, it } from 'vitest'
import { useBuildState } from './index'
import { mockItemsAtom, mockListAtom } from '../../__mocks__/selector'

describe('useBuildState Hook', () => {
  const component = (): JSX.Element => <div>Test</div>

  it('Should open a component', () => {
    const { result, rerender } = renderHook(
      () => useBuildState(mockListAtom, mockItemsAtom),
      { wrapper: RecoilRoot }
    )

    result.current.open(component, {})
    rerender()

    expect(result.current.state.list.length).toBe(1)

    const itemId = result.current.state.list[0]

    expect(result.current.state.items[itemId].component).toBe(component)
    expect(result.current.state.items[itemId].props).toEqual({})
  })

  it('Should store multiples components', () => {
    const { result, rerender } = renderHook(
      () => useBuildState(mockListAtom, mockItemsAtom),
      { wrapper: RecoilRoot }
    )

    result.current.open(component, {})
    result.current.open(component, {})
    result.current.open(component, {})
    rerender()

    expect(result.current.state.list.length).toBe(3)

    result.current.state.list.forEach((id) => {
      expect(result.current.state.items[id].component).toBe(component)
      expect(result.current.state.items[id].props).toEqual({})
    })
  })

  it('Should close a component', () => {
    const { result, rerender } = renderHook(
      () => useBuildState(mockListAtom, mockItemsAtom),
      { wrapper: RecoilRoot }
    )

    result.current.open(component, {})
    rerender()

    const itemId = result.current.state.list[0]

    result.current.close(itemId)
    rerender()

    expect(result.current.state.list.length).toBe(0)
    expect(result.current.state.items[itemId]).toBeUndefined()
  })
})
