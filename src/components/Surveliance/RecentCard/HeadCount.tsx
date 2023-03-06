import React,{useEffect,useState} from 'react'
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
import logo from '../../../assets/img/person.jpeg';
import { IoTimer } from 'react-icons/io5';
import { GrLocation } from 'react-icons/gr';
import Popup from '../../Popup';

function HeadCount({ data }: { data: any }) {
   const [open, setopen] = useState(false)
    
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
        <Card sx={{ marginBottom: "10px" }}>
            <CardContent>
                <Grid spacing={2} container>
                    <Grid xs={12} item>
                        <Typography mb={2}><GrLocation /> IPC1</Typography>
                        <Box height={150} width={"100%"}>
                            <img height={"100%"} width={"50%"} src={`http://192.168.0.104${data?.captureImageURL}`} alt="" />
                            <img height={"100%"} src={`http://192.168.0.104${data?.top1.faceImageURL}`} width={"50%"} alt="" />
                        </Box>
                    </Grid>
                    <Grid container item>
                        <Grid xs={6} item>
                            <Typography mb={2}> <IoTimer /> 2023-02-27</Typography>
                            <Typography variant='h5'>{data?.top1.description}</Typography>
                            <Typography mb={2} >Watch List</Typography>
                        </Grid><Grid xs={6} item>
                            <Typography mb={2}> <IoTimer /> 2023-02-27</Typography>
                            <Typography variant='h5'>{data?.top1.description}</Typography>
                            <Typography mb={2} >Watch List</Typography>
                        </Grid>
                        <Button variant='contained'>View</Button>
                    </Grid>
                </Grid>
                <Popup open={true} handleClose={setopen}/>
            </CardContent>
        </Card>
    )
}

export default HeadCount