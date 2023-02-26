import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import HeadCount from './HeadCount'
import VechicleCard from './VechicleCard'

function RecentCard() {
  return (
    <Card  sx={{height:"100%"}}>
    <CardHeader title="Recent Captures">
    </CardHeader>
    <CardContent style={{alignItems:"start"}}>
        <Typography></Typography>
        <HeadCount/>
        <VechicleCard/>
    </CardContent>  
</Card>
  )
}

export default RecentCard