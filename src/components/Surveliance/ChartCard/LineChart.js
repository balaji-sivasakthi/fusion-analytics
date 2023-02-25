import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import Chart from "react-apexcharts";


function LineChart() {


  const options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  options: {
    chart: {
      height: 350,
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
  <Card>

    <CardHeader title={"Line Chart"} />
    <Typography px={2}>Based on selected Stores</Typography>
    <CardContent>
      <Chart
                    options={options?.options}
                    series={options.series}
                    type="line"
                    width={"100%"}
                    height={"200px"}
                    
                />
    </CardContent>

  </Card>
)
}
export default LineChart