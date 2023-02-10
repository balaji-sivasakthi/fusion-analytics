import Grid from '@mui/material/Unstable_Grid2'

import React from 'react'
import CustomAppBar from '../components/CustomAppBar'
function index({ children }) {
    return (
        <>
            <Grid container padding={2}>
                <CustomAppBar />
                <Grid py={5}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default index