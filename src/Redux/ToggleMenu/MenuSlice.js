import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggleMenu: false
}


export const menuSlice = createSlice({
    name:'toggleMenu',
    initialState:initialState,
    reducers: {
changeToggleState: (state) => {
    return {
    ...state,
    toggleMenu: !state.toggleMenu
    }
}
    }
})


export const {changeToggleState} = menuSlice.actions

export default menuSlice.reducer