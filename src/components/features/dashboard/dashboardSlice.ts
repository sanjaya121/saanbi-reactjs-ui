import { createSlice } from "@reduxjs/toolkit";
import { Value } from "sass";

interface CounterState {
    value : number
}

const initialState : CounterState={
    value:0
}
export const dashBoardSlice =createSlice({
    name:"dashboard",
    initialState,
    reducers:{
        loadUser:(state)=>{
            console.log("UserLoaded",state)
            state.value += 1
        }
    }
})

export const {loadUser}=dashBoardSlice.actions