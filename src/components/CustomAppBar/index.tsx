import { AppBar, ListItemButton, ListItemText, Menu, MenuItem, Tab, Tabs, Toolbar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/system'
import React from 'react'

function CustomAppBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <ListItemButton>
          <ListItemText>Dashboard</ListItemText>
        </ListItemButton>
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar