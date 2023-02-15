import styled from '@emotion/styled';
import { Box, Card, CardContent, CardHeader, Typography ,CardActions} from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import React from 'react'



function FootFallCard({value,percent}) {
  


  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  

  return (
    <Card  sx={{height:"100%"}}>

      <CardHeader title={value}/>
      <Typography px={2}>Footfall</Typography>
      <CardContent> 
        <BorderLinearProgress  color='secondary' variant="determinate" value={percent}/>
        <Typography mt={3}>{percent}% of footfall</Typography>
      </CardContent>
   
    </Card>
  )
}

export default FootFallCard