import Drawer from '@mui/material/Drawer'
import { createElement } from 'react'
import { useDrawersCtrls } from './controll'

export const Drawers = (): JSX.Element | null => {
  const { state: { list, items, active }, close } = useDrawersCtrls()

  if (list.length === 0) return null

  return (
    <>
      {list.map((id) => (
        <Drawer
          key={id}
          {...(items[id].typeProps ?? {})}
          open={active === id}
          onClose={() => close(id)}
        >
          {createElement(items[id].component, { ...(items[id].props ?? {}), dialogId: id })}
        </Drawer>
      ))}
    </>
  )
}
