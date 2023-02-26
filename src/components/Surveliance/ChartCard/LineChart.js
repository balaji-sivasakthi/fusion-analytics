import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import Chart from "react-apexcharts";


function LineChart() {


  const options = {
    series: [{
      name: "User",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    },
    {
      name: "Vehicle",
      data: [1, 42, 25, 21, 39, 52, 69, 71, 168]
    }
    ],
    options: {
      chart: {

        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },

      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },

  };



  return (
    <Card sx={{ height: "100%" }}>

      <CardHeader title={"User/Vechicle"} />
      <Typography px={2}>Based on selected Stores</Typography>
      <CardContent>
        <Chart
          options={options?.options}
          series={options.series}
          type="line"
          width={"100%"}


        />
      </CardContent>

    </Card>
  )
}
export default LineChart