import { MdStore } from 'react-icons/md'
import { FaFunnelDollar } from 'react-icons/fa'
import { Grid, Typography } from '@mui/material';
import Surveliance from './Surveliance'
import MCardStats from '../../components/Overview/MCardStats';
import { GiFootprint } from "react-icons/gi";
import Chart from "react-apexcharts";
import { GrRestroomMen, GrRestroomWomen } from "react-icons/gr";
import stopwatch from '../../assets/img/stopwatch.png';
import ChartCard from '../../components/Surveliance/ChartCard';
import Donut from '../../components/Surveliance/ChartCard/Donut';
import LineChart from '../../components/Surveliance/ChartCard/LineChart';

function MediumStats() {
 const MData = [
        { title: "Total FootFall", icon: <GiFootprint size={32} color={"deepskyblue"} />, value: "1200", path: '/' },
        { title: "Conversion Rate", icon: <FaFunnelDollar size={32} color={"deepskyblue"} />, value: "23", path: '/' },
        { title: "Age", icon: <MdStore size={32} color={"deepskyblue"} />, value: "13", path: '/' },
        { title: "Gender & Dwell Time", icon: <MdStore size={32} color={"deepskyblue"} />, value: "13", path: '/' },
    ]
    return (
        <Grid container spacing={2} columns={12}>
            {/* First half */}
            <Grid container spacing={2} item xs={12} lg={6}>
                <Grid xs={12} lg={6} item >
                    {/* <Donut /> */}
                </Grid>
                <Grid xs={12} lg={6} item >
                {/* <MCardStats title={MData[3].title} icon={MData[3].icon} value={MData[3].value} path={MData[3].path} style={{height:"370px"}} >
                        <Grid container>
                            <Grid xs={6} item>
                                <GrRestroomMen size={32} style={{color:"red"}} />
                                <Typography display={"inline"} variant='h5'> {MData[1].value}%</Typography>
                            </Grid>
                            <Grid xs={6} item>
                                <GrRestroomWomen size={32} />
                                <Typography display={"inline"} variant='h5'> {MData[1].value    }%</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} >
                            <Grid xs={6} p={5} justifyContent={"center"} alignItems={"center"} item>
                               <img src={stopwatch} width={"50px"} height={"50px"} alt="" />
                            </Grid>
                            <Grid xs={6} justifyContent={"center"} alignItems={"center"} item>
                                <Typography color={"deepskyblue"} variant='subtitle1'>Avg Dwell Time</Typography>
                                <Typography  variant='h6'>8 Mins</Typography>
                            </Grid>
                        </Grid>
                    </MCardStats>    */}
                </Grid>
                <Grid xs={12} lg={12} item >
                {/* <LineChart /> */}
                </Grid>

            </Grid>

            {/* Next Half */}
            <Surveliance />
        </Grid>

    )
}

export default MediumStats