import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

interface RecentCardState {
    loading: false | true
    data: string[]
    error: string
}


const initialState = {
    loading: false,
    data: [],
    error: ''
} as RecentCardState


export const fetchRecentCaptures = createAsyncThunk('recentcaptures/fetchRecentCaptures', async () => {
    try {
        const response = (await axios.get('http://192.168.0.134:5456/api/get')).data;
        return response.data;
    } catch (error) {
        return error;
    }
})


const recentCaptureSlice = createSlice({
    name: 'recentCaptures',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecentCaptures.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchRecentCaptures.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.alertsEvent
            state.error = ''

        })
        builder.addCase(fetchRecentCaptures.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message || 'Something Went Wrong'
        })
    }
})

export const recentAction = recentCaptureSlice.caseReducers
export default recentCaptureSlice.reducer;