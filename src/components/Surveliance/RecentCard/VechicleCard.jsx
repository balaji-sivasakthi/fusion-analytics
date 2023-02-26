import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid'

import IconButton from '@mui/material/IconButton';
import { TbDeviceCctv } from "react-icons/tb";
import { BiTimer, BiX } from "react-icons/bi";
import logo from '../../../assets/img/car.jpeg';
import { IoTimer } from 'react-icons/io5';
import { GrLocation } from 'react-icons/gr';

function VechicleCard() {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return (
       <Card sx={{marginBottom:"10px"}}>
        <CardHeader title="Vechicle Recognition"/>
        <CardContent>
            <Grid spacing={2}  container>
                <Grid  xs={6} item>
                    <Typography mb={2}><GrLocation/> Channel033</Typography>
                    <Box width={"100%"}>
                        <img width={"50%"} src={logo} alt="" />
                    <img src={logo} width={"50%"} alt="" />
                    </Box>
                    
                </Grid>
                <Grid xs={6} item>
                    <Typography mb={2}> <IoTimer/> 2023-02-26</Typography>
                    <Typography variant='h5'>TN 32 AW 8082</Typography>
                    <Typography >Nishan</Typography>
                    <Typography >Red</Typography>
                </Grid>
            </Grid>
        </CardContent>
       </Card>  
    )
}

export default VechicleCard