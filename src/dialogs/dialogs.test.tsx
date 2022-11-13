import { render, renderHook } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { describe, it, afterAll, expect } from 'vitest'
import { MockComponent } from '../../__mocks__/component'
import { useDialogsCtrls } from './controll'
import { Dialogs } from './index'

describe('Scaffold Dialogs', () => {
  it('Should render', () => {
    render(<RecoilRoot><Dialogs /></RecoilRoot>)
  })

  describe('Dialogs Ctrl', () => {
    const { result, rerender, unmount } = renderHook(
      () => useDialogsCtrls<{ title: string }>(),
      { wrapper: RecoilRoot }
    )

    afterAll(unmount)

    it('Should have a default state', () => {
      expect(result.current.state.list).toEqual([])
      expect(result.current.state.items).toEqual({})
    })

    it('Should open a component', () => {
      result.current.open(MockComponent, { title: 'Test' })
      rerender()

      expect(result.current.state.list.length).toBe(1)

      const itemId = result.current.state.list[0]

      expect(result.current.state.items[itemId].component).toBeDefined()
      expect(result.current.state.items[itemId].props).toEqual({ title: 'Test' })
    })
  })
})
