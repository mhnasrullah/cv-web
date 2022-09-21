import { createSlice } from "@reduxjs/toolkit";

export const inputVal = createSlice({
    name : 'inputVal',
    initialState : {
        val : ''
    },
    reducers : {
        change : ({val},{payload})=>{
            console.log(payload)
            val += payload
        }
    }
})

export const {change} = inputVal.actions;
export default inputVal.reducer;