import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { RecoilRoot } from 'recoil'
import { MockComponent, MockProps } from '../__mocks__/component'
import { useDialogsCtrls } from './dialogs/controll'
import { Scaffold } from './scaffold'
export const RenderChildren = (): JSX.Element => (
  <RecoilRoot>
    <Scaffold>
      <MockComponent title="Child Component" />
    </Scaffold>
  </RecoilRoot>
)

const DialogsStory = (): JSX.Element => {
  const { open } = useDialogsCtrls<MockProps>()

  const openSingle = (times: number = 1): void => {
    open(MockComponent, { title: `Dialog ${times}` })
  }

  const openMultiple = (): void => {
    openSingle(1)
    openSingle(2)
    openSingle(3)
    openSingle(4)
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button onClick={() => openSingle()}>Open Single</Button>
      <Button onClick={() => openMultiple()}>Open Many</Button>
    </Stack>
  )
}

export const Dialogs = (): JSX.Element => (
  <RecoilRoot>
    <Scaffold>
      <DialogsStory />
    </Scaffold>
  </RecoilRoot>
)
