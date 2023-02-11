import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import OverviewTabs from './OverviewTabs'

function OverviewCard() {
  return (
    <Card>
    <CardHeader title="Overview">
    </CardHeader>
    <CardContent>
        <Typography>Based on selected stores</Typography>
        <OverviewTabs />
    </CardContent>
</Card>
  )
}

export default OverviewCard