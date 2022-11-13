import { useDialogsCtrls } from '../dialogs/controll'
import { useDrawersCtrls } from '../drawers/controll'
import { UseScaffoldReturn } from '../types'

export const useScaffold = (): UseScaffoldReturn => {
  const dialogs = useDialogsCtrls()
  const drawers = useDrawersCtrls()

  return {
    dialogs: {
      open: dialogs.open,
      close: dialogs.close
    },
    drawers: {
      open: drawers.open,
      close: drawers.close
    }
  }
}
