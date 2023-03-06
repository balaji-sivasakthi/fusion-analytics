import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


interface initialState{
    loading?:boolean;
    recentCaptures?:[]|undefined;
    error?:string;

}


const initialState:initialState = {
    loading:false,
    recentCaptures:[],
    error:''
}

const fetchRecentCaptures=createAsyncThunk('recentcaptures/fetchRecentCaptures',()=>{
    axios.get('http://192.168.0.134:5456/api/get')
    .then(response=>{
        console.log("[Response from Redux]",response.data.alertsEvent);
        return []
    })
})


const recentCaptureSlice = createSlice({
    name:'recentCaptures',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchRecentCaptures.pending,state=>{
            state.loading=true
        })  
        builder.addCase(fetchRecentCaptures.fulfilled,(state,action)=>{
            state.loading=false
            state.recentCaptures=[]
            state.error=''

        })
        builder.addCase(fetchRecentCaptures.rejected,(state,action)=>{
            state.loading=false
            state.recentCaptures=[]
            state.error=action.error.message

        })
    }
})

   

export default  recentCaptureSlice.reducer;