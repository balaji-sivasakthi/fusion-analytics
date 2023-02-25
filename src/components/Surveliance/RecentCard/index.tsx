import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import HeadCount from './HeadCount'

function RecentCard() {
  return (
    <Card>
    <CardHeader title="Recent Captures">
    </CardHeader>
    <CardContent>
        <Typography></Typography>
        <HeadCount/>
    </CardContent>  
</Card>
  )
}

export default RecentCard