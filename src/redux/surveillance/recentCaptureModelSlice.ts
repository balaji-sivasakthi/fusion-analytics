import { createSlice } from "@reduxjs/toolkit";


const initialState  ={
    isOpen:false,
    data:{}
}

const recentCaptureModelSlice=  createSlice({
    name:"recentCaptureModel",
    initialState:initialState,
    reducers:{
        AddModelbyId:(state,action)=>{
            return {isOpen:true,data:action.payload}
        },
        closeModel:()=>{
            return {data:{},isOpen:false}
        }
    }
})


export default recentCaptureModelSlice.reducer

export const {AddModelbyId,closeModel} = recentCaptureModelSlice.actions