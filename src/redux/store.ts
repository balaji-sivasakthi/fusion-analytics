import {configureStore} from '@reduxjs/toolkit'
import recentCaptureModelSlice from './surveillance/recentCaptureModelSlice';

import recentCaptureSlice from './surveillance/recentCaptureSlice';


const store = configureStore({
    reducer:{
        recentCaptures:recentCaptureSlice,
        recentCaptureModel:recentCaptureModelSlice
    },
    devTools:true
 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;