import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { describe, it } from 'vitest'
import { Dialogs } from './index'

describe('Scaffold Dialogs', () => {
  it('Should render empty', () => {
    render(<RecoilRoot><Dialogs /></RecoilRoot>)
  })

  it('Should render with dialog', () => {
    render(<RecoilRoot><Dialogs /></RecoilRoot>)
  })
})
