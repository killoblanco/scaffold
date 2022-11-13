import Dialog from '@mui/material/Dialog'
import { createElement } from 'react'
import { useDialogsCtrls } from './controll'

export const Dialogs = (): JSX.Element | null => {
  const { state: { list, items }, active, close } = useDialogsCtrls()

  if (list.length === 0) return null

  return (
    <>
      {list.map((id) => (
        <Dialog
          key={id}
          {...(items[id].typeProps ?? {})}
          open={active === id}
          onClose={() => close(id)}
        >
          {createElement(items[id].component, { ...(items[id].props ?? {}), dialogId: id })}
        </Dialog>
      ))}
    </>
  )
}
