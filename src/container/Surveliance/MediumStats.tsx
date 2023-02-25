import { MdStore } from 'react-icons/md'
import { FaFunnelDollar } from 'react-icons/fa'
import { Grid, Typography } from '@mui/material';
import Surveliance from './Surveliance'
import MCardStats from '../../components/Overview/MCardStats';
import { GiFootprint } from "react-icons/gi";
import Chart from "react-apexcharts";
import { GrRestroomMen ,GrRestroomWomen} from "react-icons/gr";
import stopwatch from '../../assets/img/stopwatch.png';
import ChartCard from '../../components/Surveliance/ChartCard';
import Donut from '../../components/Surveliance/ChartCard/Donut';
import LineChart from '../../components/Surveliance/ChartCard/LineChart';
function MediumStats() {

    return (
        <Grid container spacing={2} columns={12}>
            {/* First half */}
            <Grid container spacing={2} item xs={12} lg={6}>
                <Grid xs={12} lg={6} item >                    
                            <Donut/>
                </Grid>
                <Grid xs={12} lg={6} item >

                   
                            <LineChart/>
                    
                </Grid>
               
               
            </Grid>

            {/* Next Half */}
            <Surveliance />
        </Grid>

    )
}

export default MediumStats