import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'counter',
    initialState: {
        value : 0
    },
    reducers:{
        increment : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        incByVal : ({value},{payload}) =>[
            value += payload
        ]
    }
})

export const {increment,decrement,incByVal} = counterSlice.actions;
export default counterSlice.reducer