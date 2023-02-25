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
import { BiTimer } from "react-icons/bi";

function HeadCount() {

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
        <Card sx={{height:'300px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' ,padding:'10px'}}>
            <Box width='50%'>
                <CardHeader
                    avatar={
                        <TbDeviceCctv />
                    }
                    title="HEAD-COUNT"
                    sx={{fontSize : '30px',fontWeight: 'bold'}}
                />
                <CardMedia
                    component="img"
                    sx={{ width: 350 }}
                    image="https://www.keycdn.com/img/support/react-cdn.png"
                    alt="Img"
                />
    <Box sx={{ width: '100%' }}>
      <LinearProgress variant="determinate" sx={{color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8')}} value={progress} />
    </Box>
            </Box> 
            <Box width='50%' sx={{ml: 4}}>
                <CardHeader
                    avatar={
                        <BiTimer />
                    }
                    title="2023-12-04 Time 6:40pm"
                    sx={{fontSize : 50}}
                />
                <Grid container>
                    <Grid item xs={6}>
                        <CardContent sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            <Typography variant='h5' sx={{mb: 1.5}}>Balaji</Typography>
                            <Typography variant='h6' sx={{mb: 1.5}}>Demographics:</Typography>
                            <Typography variant='h6' sx={{mb: 1.5}}>Gender</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6} sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <Button variant='text' sx={{color:'black'}}>VIEW</Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    )
}

export default HeadCount