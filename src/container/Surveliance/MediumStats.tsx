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
import VideoCard from '../../components/Surveliance/VideoCard';

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
            <Grid container spacing={2} item xs={12} lg={9}>
                <Grid xs={12} lg={12} item >
                    <VideoCard />
                </Grid>
                {/* </Grid> */}
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