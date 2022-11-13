import { render, renderHook, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { afterAll, describe, expect, it } from 'vitest'
import { Scaffold, useScaffold } from './index'

describe('Scaffold Component', () => {
  it('Should render children', () => {
    render(
      <RecoilRoot>
        <Scaffold>
          <div>Test</div>
        </Scaffold>
      </RecoilRoot>
    )

    expect(screen.getByText('Test')).toBeTruthy()
  })

  describe('Hook', () => {
    const { result, unmount } = renderHook(
      () => useScaffold(),
      { wrapper: RecoilRoot }
    )

    afterAll(unmount)

    it('Should have dialogs with open and close fns', () => {
      expect(result.current.dialogs).toBeDefined()
      expect(result.current.dialogs.open).toBeDefined()
      expect(result.current.dialogs.close).toBeDefined()
    })
  })
})
