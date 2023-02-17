import React,{useEffect} from 'react'

import {io} from 'socket.io-client'

function Test() {
  
  const getData=()=>{
        const socket = io('ws://192.168.0.206:8090');
        console.log(socket);
        socket.on('connect',(data)=>{
          console.log(data);
        })
  }
  
  useEffect(()=>{

    getData()

  },[])
  return (
    <div>Test</div>
  )
}

export default Test