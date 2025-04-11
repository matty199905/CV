
import {configureStore} from '@reduxjs/toolkit'
import { backgroundSlice } from './Background Color/backgroundSlice'
import { menuSlice } from './ToggleMenu/MenuSlice'



export const store = configureStore({

reducer: {

Background: backgroundSlice.reducer,
MenuSlice : menuSlice.reducer}


})

