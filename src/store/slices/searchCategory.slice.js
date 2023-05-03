import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'showCategory',
    initialState : 0,
    reducers: {
        getSearchCategory : (state, action)=> action.payload 
    }
})

export const{getSearchCategory} = slice.actions

export default slice.reducer