
import {configureStore} from '@reduxjs/toolkit'
import { backgroundSlice } from './backgroundSlice'


export const store = configureStore({

reducer: {

background: backgroundSlice.reducer,

} 

})

