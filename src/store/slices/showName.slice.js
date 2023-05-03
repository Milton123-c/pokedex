import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'showName',
    initialState : '',
    reducers: {
        showPoke : (state, action) => action.payload 
    }
})

export const {showPoke} = slice.actions

export default slice.reducer