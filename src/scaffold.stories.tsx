import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { RecoilRoot } from 'recoil'
import { MockComponent, MockProps } from '../__mocks__/component'
import { useDialogsCtrls } from './dialogs/controll'
import { useDrawersCtrls } from './drawers/controll'
import { Scaffold } from './scaffold'
import { DrawerProps } from '@mui/material'
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

const DrawersStory = (): JSX.Element => {
  const { open } = useDrawersCtrls<MockProps>()

  const openSingle = (times: number = 1, anchor: DrawerProps['anchor'] = 'left'): void => {
    open(MockComponent, { title: `Dialog ${times}` }, { anchor })
  }

  const openAll = (): void => {
    openSingle(1, 'top')
    openSingle(2, 'right')
    openSingle(3, 'bottom')
    openSingle(4, 'left')
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      <Button onClick={() => openSingle(1)}>Open Default</Button>
      <Button onClick={() => openSingle(1, 'top')}>Open Top</Button>
      <Button onClick={() => openSingle(1, 'right')}>Open Right</Button>
      <Button onClick={() => openSingle(1, 'bottom')}>Open Bottom</Button>
      <Button onClick={() => openSingle(1, 'left')}>Open Left</Button>
      <Button onClick={() => openAll()}>Open All</Button>
    </Stack>
  )
}

export const Drawers = (): JSX.Element => (
  <RecoilRoot>
    <Scaffold>
      <DrawersStory />
    </Scaffold>
  </RecoilRoot>
)
