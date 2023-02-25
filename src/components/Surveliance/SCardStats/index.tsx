import { CardHeader, CardContent, CardActions, Typography, Button } from '@mui/material'
import Card from '@mui/material/Card/Card'
import { Box } from '@mui/system'
import { IconBaseProps } from '@react-icons/all-files'
import React from 'react'
import { IconType } from 'react-icons/lib'
import { NavLink, useNavigate } from 'react-router-dom'


interface ISCardStats {
  title: String,
  path: String | any,
  value: any,
  icon: React.ReactNode
}


function SCardStats({ title, icon, value, path }: ISCardStats) {

  const navigate = useNavigate()

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={title} />
      <CardContent>
        <Box flex={1}  flexDirection={"row"}>
            {icon}
          <Typography sx={{display:"inline"}} variant='h4'> {value}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <NavLink  to={path}/>
      </CardActions>
    </Card>
  )
}

export default SCardStats