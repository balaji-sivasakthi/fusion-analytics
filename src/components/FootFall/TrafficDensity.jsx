import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import Chart from "react-apexcharts";
function TrafficDensity() {
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
    
    const options = {
          
        series: [{
          name: '23:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '22:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '21:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '20:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '19:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '18:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '17:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '16:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '15:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
          name: '14:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        }
        ,
        {
          name: '13:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        }
        ,
        {
          name: '12:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        }
        ,
        {
          name: '11:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        }
        ,
        {
          name: '10:00',
          data: generateData(7, {
            min: 0,
            max: 90
          })
        },
        {
            name: '09:00',
            data: generateData(7, {
              min: 0,
              max: 90
            })
          },
          {
            name: '08:00',
            data: generateData(7, {
              min: 0,
              max: 90
            })
          }
        ],
        options: {
        stoke:{
            width:0
        },
          chart: {
            height: 350,
            type: 'heatmap',
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#008FFB"],
          title: {
            text: ''
          },
        },
      
    }

    return (
        <Card>

            <CardHeader title={"TrafficDensity"} />
            <Typography px={2}>Footfall</Typography>
            <CardContent>
                <Chart
            
                    options={options.options}
                    series={options.series}
                    type="heatmap"
                    height={"400px"}
                    
                />
            </CardContent>

        </Card>
    )
}

export default TrafficDensity