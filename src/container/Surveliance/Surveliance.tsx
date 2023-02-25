import { Card, CardContent, CardHeader, Grid, Tabs, Typography } from '@mui/material'
import React from 'react'
import RecentCard from '../../components/Surveliance/RecentCard'

function Surveliance() {
    return (
        <Grid item xs={12} lg={6}>
           <RecentCard/>
        </Grid>
    )
}

export default Surveliance