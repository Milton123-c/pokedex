import { createSlice } from "@reduxjs/toolkit";

const trinerNameSlice = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        setTrinerName : (state, action)=> action.payload
    }
    
})

export const {setTrinerName} = trinerNameSlice.actions

export default trinerNameSlice.reducer