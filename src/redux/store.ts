import {configureStore} from '@reduxjs/toolkit'

import recentCaptureSlice from './surveillance/recentCaptureSlice';


const store = configureStore({
    reducer:{
        recentCaptures:recentCaptureSlice
    },
 
})

export default store;