import { StrictMode } from 'react'
import { Scaffold } from '../lib'
import { TopBar } from './components/topbar'

export function App () {
  return (
    <StrictMode>
      <Scaffold
        topbar={<TopBar />}
      >
        <h1>Hello, world!</h1>
      </Scaffold>
    </StrictMode>
  )
}
