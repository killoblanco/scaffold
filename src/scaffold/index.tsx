import { PropsWithChildren } from 'react'
import { Dialogs } from '../dialogs'
import { Drawers } from '../drawers'

export { useScaffold } from './hook'

export const Scaffold = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <>
      {children}
      <Dialogs />
      <Drawers />
    </>
  )
}
