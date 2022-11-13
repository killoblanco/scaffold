import { Paper, Typography } from '@mui/material'
import { FunctionComponent } from 'react'

export interface MockProps { title: string }
export const MockComponent: FunctionComponent<MockProps> = ({ title }) => (
  <Paper sx={{ p: 2 }}>
    <Typography variant="h5">
      {title}
    </Typography>
  </Paper>
)
