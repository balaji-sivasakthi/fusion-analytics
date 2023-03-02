import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
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
    <Card  sx={{height:"100%"}}>
    <CardHeader title="Recent Captures">
    </CardHeader>
    <CardContent style={{alignItems:"start"}}>
       
        <Typography></Typography>

        <Swiper
        direction='vertical'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper:any) => console.log(swiper)}
    >
      {data?.map(result=>(
          <SwiperSlide>
            <HeadCount data={result}/>
          </SwiperSlide>
        ))}
    
   
     
    </Swiper>
        {/* <HeadCount/>
        <VechicleCard/> */}
        
    </CardContent>  
</Card>
  )
}

export default RecentCard