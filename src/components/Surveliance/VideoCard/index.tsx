import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'

function VideoCard() {
    const data = [
        {
            id: "camera1"
        },
        {
            id: "camera2"
        },
        {
            id: "camera3"
        },
        {
            id: "camera4"
        }
    ]

    return (
        <Card >
            <CardHeader title="Camera" />
            <CardContent>
                <Grid container spacing={1}>
                    {data.map(camera => (
                        <Grid item lg={6} >
                            <video src='' width={"100%"} style={{ backgroundColor: "#000" }} height={300}></video>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    )
}

export default VideoCard