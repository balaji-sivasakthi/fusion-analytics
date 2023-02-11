import { AppBar, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Tab, Tabs, Toolbar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/system'
import React from 'react'
import LineAxisIcon from '@mui/icons-material/LineAxis';
import { useTranslation } from 'react-i18next'
import menu from '../../constants/menu'
import { blue } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';
function CustomAppBar() {
  const { t } = useTranslation()
  const location = useLocation()
  console.log(location);
  const navigate=useNavigate()
  return (
    <AppBar position='static'>
      <Toolbar>
        {menu.map((list,index) => (
          <ListItemButton 
          key={index}
          onClick={()=>{
              navigate(list.path)
          }} disableRipple sx={{
          
            borderStyle:"solid",
            borderTopWidth:"0",
            borderLeftWidth:"0",
            borderRightWidth:"0",
            borderBottomWidth:"5px",
            borderRadius:"3px",
            borderColor: (location.pathname==list.path)?blue[700]:"#fff",
            ":hover":{
            backgroundColor:"#fff"
          }}}>
            <ListItemIcon sx={{color:(location.pathname==list.path)?blue[700]:"#000"}}>
             {list.Icons}
            </ListItemIcon>
            <ListItemText sx={{color:(location.pathname==list.path)?blue[700]:"#000"}}> {t(list.label)}</ListItemText>
          </ListItemButton>
        ))}
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar