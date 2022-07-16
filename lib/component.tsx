import { PropsWithChildren, ReactElement } from 'react'
import { DrawerProvider } from './ctx/drawer/provider'

export interface ScaffoldProps {
  topbar?: ReactElement
}

export const Scaffold = ({
  children,
  topbar
}: PropsWithChildren<ScaffoldProps>) => (
  <DrawerProvider>
    {topbar}
    {children}
  </DrawerProvider>
)
