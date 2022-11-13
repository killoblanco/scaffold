import { useDialogsCtrls } from '../dialogs/controll'
import { UseScaffoldReturn } from '../types'

export const useScaffold = (): UseScaffoldReturn => {
  const dialogs = useDialogsCtrls()

  return {
    dialogs: {
      open: dialogs.open,
      close: dialogs.close
    }
  }
}
