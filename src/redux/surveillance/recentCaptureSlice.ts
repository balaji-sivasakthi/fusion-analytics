import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    recentCaptures:[

    ],
    spectificuser:{

    }
}

const recentCaptureSlice = createSlice({
    name:'recentCaptures',
    initialState:initialState,
    reducers:{
        getAll:(state,action)=>{
            return state.recentCaptures+=action.payload;
        },
        getById:(state,action)=>{
            return state.spectificuser+=action.payload;
        }
    }
})

   

export default  recentCaptureSlice.reducer;