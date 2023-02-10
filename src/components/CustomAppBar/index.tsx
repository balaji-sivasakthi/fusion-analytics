import { AppBar, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Tab, Tabs, Toolbar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/system'
import React from 'react'
import LineAxisIcon from '@mui/icons-material/LineAxis';
import { useTranslation } from 'react-i18next'
import menu from '../../constants/menu'
function CustomAppBar() {
  const { t } = useTranslation()
  return (
    <AppBar position='static'>
      <Toolbar>
        {menu.map(list => (
          <ListItemButton>
            <ListItemIcon>
             {list.Icons}
            </ListItemIcon>
            <ListItemText> {t(list.label)}</ListItemText>
          </ListItemButton>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar