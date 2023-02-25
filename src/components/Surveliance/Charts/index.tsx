import { CardHeader, CardContent, CardActions, Typography, Button } from '@mui/material'
import Card from '@mui/material/Card/Card'
import { Box } from '@mui/system'
import { IconBaseProps } from '@react-icons/all-files'
import React from 'react'
import { IconType } from 'react-icons/lib'
import { NavLink, useNavigate } from 'react-router-dom'


interface IMCardStats {
  title: String,
  path: String | any,
  value: any,
  icon: React.ReactNode,
  style?:any,
  children?: any
}


function Charts({ title, icon, value, path, children,style }: IMCardStats) {

  const navigate = useNavigate()

  return (
    <Card sx={{ width: "100%" ,...style}}>
      <CardHeader title={title} />
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        <Button   sx={{color:"deepskyblue"}} onClick={()=>navigate(path)}>View more info</Button>
      </CardActions>
    </Card>
  )
}

export default MCardStats