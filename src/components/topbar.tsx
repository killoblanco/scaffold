import { AppBar, Box, DrawerProps, IconButton, styled, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { useScaffoldContext } from '../../lib'
import { DrawerList } from './drawer-list'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export function TopBar () {
  const ctx = useScaffoldContext()

  const openDrawer = (anchor: DrawerProps['anchor'] = 'left') => ctx.drawer.open({
    anchor,
    children: <DrawerList />,
    onClose: ctx.drawer.close
  })

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={() => openDrawer()}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6">
            Scaffold
          </Typography>
          <Box flexGrow={1} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={() => openDrawer('right')}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  )
}
