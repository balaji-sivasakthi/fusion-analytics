import { Card, CardContent, CardHeader, Grid, Tabs, Typography } from '@mui/material'
import React from 'react'
import OverviewCard from '../../components/Overview/OverviewCard'
import LineChart from '../../components/Surveliance/ChartCard/LineChart'

function Overview() {
    return (
        <Grid item xs={12} lg={6}>
         <LineChart/>
        </Grid>
    )
}

export default Overview