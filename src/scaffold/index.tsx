import { PropsWithChildren } from 'react'
import { Dialogs } from '../dialogs'

export { useScaffold } from './hook'

export const Scaffold = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <>
      {children}
      <Dialogs />
    </>
  )
}
