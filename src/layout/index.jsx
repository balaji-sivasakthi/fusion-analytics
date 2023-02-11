import Grid from '@mui/material/Unstable_Grid2'

import React from 'react'
import CustomAppBar from '../components/CustomAppBar'
function Layout({ children }) {
    return (
        <>
            <Grid container padding={2} >
                <CustomAppBar />
                <Grid xs={12} py={5}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default Layout