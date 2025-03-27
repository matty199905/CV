import { createSlice } from "@reduxjs/toolkit";



const initial_State = {
   color: 'light'
}

export const backgroundSlice = createSlice({
    name: 'Background',
    initialState: initial_State,
    reducers: {

        changeBackgroundColor: (state, action) => {
            return {
                ...state,
                color: action.payload,
            }
        }
    }
})

export const {changeBackgroundColor} = backgroundSlice.actions

export default backgroundSlice.reducer