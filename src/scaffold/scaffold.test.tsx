import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Scaffold } from './index'

describe('Scaffold Component', () => {

  it('Should render children', () => {
    render(
      <Scaffold>
        <div>Test</div>
      </Scaffold>
    )

    expect(screen.getByText('Test')).toBeTruthy()
  })
})
