import { Box, Card, CardContent, CardHeader, List, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HeadCount from './HeadCount'
import VechicleCard from './VechicleCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux'
import recentCaptureSlice, { fetchRecentCaptures, recentAction } from '../../../redux/surveillance/recentCaptureSlice'
import { AppDispatch } from '../../../redux/store'
import Popup from '../../Popup'

interface data {
  loading: true | false
  data: []
  error: string
}

function RecentCard() {

  const { loading, data, error }:data = useSelector((state: any) => state.recentCaptures)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchRecentCaptures())
  }, [dispatch])
  console.log("[RECENT CARDS STATE]", data);

  return (
    <>
      {!loading && data?.length ? (
        <Card sx={{ height: "725px" }}>
          <CardHeader title="Recent Captures">
          </CardHeader>
          <CardContent style={{ alignItems: "start" }}>

            <Typography></Typography>

            <List sx={{
              width: '100%',

              bgcolor: 'background.paper',
              // position: 'relative',
              overflow: 'auto',
              maxHeight: "620px",
              "::-webkit-scrollbar": {
                display: "none"
              },
              '& ul': { padding: 0 },
            }}>

              {data?.map((result) => (

                <HeadCount data={result} />
              ))}

            </List>
            <Popup/>
           {/* <VechicleCard/> */}
          </CardContent>
        </Card>
      ):<div>Loading...</div>}
    </>
  )
}

export default RecentCard