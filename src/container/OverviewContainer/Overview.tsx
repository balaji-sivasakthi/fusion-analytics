import { Card, CardContent, CardHeader, Grid, Tabs, Typography } from '@mui/material'
import React from 'react'
import OverviewCard from '../../components/Overview/OverviewCard'

function Overview() {
    return (
        <Grid item xs={12} lg={6}>
           <OverviewCard/>
        </Grid>
    )
}

export default Overview