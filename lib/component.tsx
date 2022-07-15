import { PropsWithChildren } from 'react'

export function Scaffold ({ children }: PropsWithChildren) {
  return (
    <div>
      <h3>scaffold</h3>
      {children}
    </div>
  )
}
