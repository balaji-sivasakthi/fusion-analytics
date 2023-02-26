import React, { useState } from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import Chart from "react-apexcharts";
import Popup from '../../Popup'

function Donut() {
   
      
    const options = {
          
      series: [20, 20, 20, 20],
      options: {
        labels: ['User Entry', 'Vehicle Entry', 'User Exit', 'Vehicle Exit'],
        chart: {
          type: 'donut',
          zoom: {
            enabled: false
          }
        },
       
      },
    
    };
      

    const [open, setopen] = useState(true)
    return (
        <Card sx={{height:"100%"}}>

            <CardHeader title={"Entry/Exit"} />
            <Typography px={2}>Based on selected Stores</Typography>
            <CardContent>
                <Chart
                    options={options.options}
                    series={options.series}
                    type="donut"
                    width={"100%"}          
                />
                <Popup open={open} handleClose={setopen}/>
            </CardContent>

        </Card>
    )
}
export default Donut