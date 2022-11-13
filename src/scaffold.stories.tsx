import { Paper, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { FunctionComponent } from 'react'
import { RecoilRoot } from 'recoil'
import { useDialogsCtrls } from './dialogs/controll'
import { Scaffold } from './scaffold'

type MockProps = { title: string }
const MockComponent: FunctionComponent<MockProps> = ({ title }) => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h5">
      {title}
    </Typography>
  </Paper>
)
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
