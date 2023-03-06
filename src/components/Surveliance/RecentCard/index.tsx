import { Box, Card, CardContent, CardHeader, List, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeadCount from './HeadCount'
import VechicleCard from './VechicleCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function RecentCard() {
  const [data, setdata] = useState([])
  const getData=()=>{
    axios.get('http://192.168.0.134:5456/api/get')
    .then(result=>{
      console.log(result.data.data);
      setdata(result.data.data.alertsEvent)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  useEffect(() => {
  getData()
  }, [])
  
  return (
    <Card  sx={{height:"725px"}}>
    <CardHeader title="Recent Captures">
    </CardHeader>
    <CardContent style={{alignItems:"start"}}>
       
        <Typography></Typography>

    <List sx={{ width: '100%',
        
        bgcolor: 'background.paper',
        // position: 'relative',
        overflow: 'auto',
        maxHeight: "620px",
        "::-webkit-scrollbar":{
          display:"none"
        },
        '& ul': { padding: 0 },  }}>

    {data?.map(result=>(
          
          <HeadCount data={result}/>
      ))}
  
    </List>
        {/* <HeadCount/>
        <VechicleCard/> */}
        
    </CardContent>  
</Card>
  )
}

export default RecentCard