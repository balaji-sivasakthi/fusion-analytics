import React, { useState } from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import Chart from "react-apexcharts";
import Popup from '../../Popup'


function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
    }

function Donut() {
   
   
    
    const options = {
          
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    };
      

    const [open, setopen] = useState(true)
    return (
        <Card>

            <CardHeader title={"Donut"} />
            <Typography px={2}>Based on selected Stores</Typography>
            <CardContent>
                <Chart
                    options={options?.options}
                    series={options.series}
                    type="donut"
                    width={"100%"}
                    height={"400px"}
                    
                />
                <Popup open={open} handleClose={setopen}/>
            </CardContent>

        </Card>
    )
}
export default Donut