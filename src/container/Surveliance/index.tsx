import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import SCardStats from '../../components/Overview/SCardStats'
import MediumStats from './MediumStats'
import SmallStats from './SmallStats'


function SurvelianceContainer() {

  
  
  return (
    <Grid rowSpacing={1} container >
      {/* MediumCard Static Container */}
      <MediumStats/>      
    </Grid>
  )
}

export default SurvelianceContainer


