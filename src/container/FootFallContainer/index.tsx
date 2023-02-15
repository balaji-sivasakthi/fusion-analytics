import Grid from '@mui/material/Grid'
import React from 'react'
import ConversionAnalysis from '../../components/FootFall/ConversionAnalysis'
import ConverstionFlowChart from '../../components/FootFall/ConverstionFlowChart'
import FootFallCard from '../../components/FootFall/FootFallCard'
import TrafficDensity from '../../components/FootFall/TrafficDensity'

function FootFallContainer() {
    const data = [
        {
            title: "Footfall",
            value: " 1238",
            percent: 55
        },
        {
            title: "Bounced Footfall",
            value: " 575",
            percent: 60
        },
        {
            title: "Engagers",
            value: " 663",
            percent: 44
        },
        {
            title: "Billable Entites",
            value: "504",
            percent: 34
        },
        {
            title: "Missed Opportunity",
            value: "247",
            percent: 70
        },
        {
            title: "Conversion",
            value: "416",
            percent: 99
        }
    ]
    return (
        <Grid spacing={2} container >
           
            <Grid lg={6} xs={12} item>
                <ConverstionFlowChart />
            </Grid>
            <Grid xs={12} lg={6} spacing={2} container flexDirection={"row"} item columns={12}>
                {data.map(item => (
                    <Grid item xs={12} lg={4}>
                        <FootFallCard percent={item.percent} value={item.value} />
                    </Grid>
                ))}

            </Grid>

            <Grid lg={6} xs={12} item>
                <ConversionAnalysis />
            </Grid>
            
          
            <Grid lg={6} xs={12} item>
                <TrafficDensity />
            </Grid>

        </Grid>
    )
}

export default FootFallContainer