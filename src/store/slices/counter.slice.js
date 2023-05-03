import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name : 'count',
    initialState : 1,
    reducers: {
        mathCount : (state, action)=>  state + action.payload,
        countStatic : (state, action) => action.payload
    }
})

export const {mathCount, countStatic} = slice.actions

export default slice.reducer