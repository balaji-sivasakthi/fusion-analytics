import { MdStore } from 'react-icons/md'
import { FaFunnelDollar } from 'react-icons/fa'
import { Grid, Typography } from '@mui/material';
import Overview from './Overview';
import MCardStats from '../../components/Overview/MCardStats';
import { GiFootprint } from "react-icons/gi";
import Chart from "react-apexcharts";
function MediumStats() {


    const option =

    {
        options: {
            chart: {
                id: "basic-bar"
            },
            plotOptions: {
                bar: {
                  horizontal: true
                }
              },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    }



    const MData = [
        { title: "Total FootFall", icon: <GiFootprint size={32} color={"deepskyblue"} />, value: "1200", path: '/' },
        { title: "Conversion Rate", icon: <FaFunnelDollar size={32} color={"deepskyblue"} />, value: "23", path: '/' },
        { title: "Age", icon: <MdStore size={32} color={"deepskyblue"} />, value: "13", path: '/' },
        { title: "Gender & Dwell Time", icon: <MdStore size={32} color={"deepskyblue"} />, value: "13", path: '/' },
    ]

    return (
        <Grid container mb={2} spacing={2} columns={12}>
            {/* First half */}
            <Grid container spacing={2} item xs={12} lg={6}>
                <Grid xs={12} lg={6} item >

                    <MCardStats title={MData[0].title} icon={MData[0].icon} value={MData[0].value} path={MData[0].path} >
                        {MData[0].icon}
                        <Typography display={"inline"} variant='h3'> {MData[0].value}</Typography>
                    </MCardStats>
                </Grid>
                <Grid xs={12} lg={6} item >

                    <MCardStats title={MData[1].title} icon={MData[1].icon} value={MData[1].value} path={MData[1].path} >
                        {MData[1].icon}
                        <Typography display={"inline"} variant='h3'> {MData[1].value}%</Typography>
                    </MCardStats>
                </Grid>
                <Grid xs={12} lg={6} item >

                    <MCardStats title={MData[2].title} icon={MData[2].icon} value={MData[2].value} path={MData[2].path} >
                        <Chart
                            options={option.options}
                            series={option.series}
                            type="bar"
                            width="100%"
                        />
                    </MCardStats>
                </Grid>
                <Grid xs={12} lg={6} item >

                    <MCardStats title={MData[3].title} icon={MData[3].icon} value={MData[3].value} path={MData[3].path} >
                            
                    </MCardStats>
                </Grid>
            </Grid>

            {/* Next Half */}
            <Overview />
        </Grid>

    )
}

export default MediumStats