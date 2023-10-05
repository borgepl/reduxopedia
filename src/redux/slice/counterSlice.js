import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";

const initialState = { count : 0};

export const counterSlice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count+=1;
        },
        decrement: (state) => {
            state.count-=1;
        },
        incrementMultiplier: (state, action) => {
            state.count += Number(action.payload);
        },
        decrementMultiplier: (state, action) => {
            state.count -= Number(action.payload);
        },
        resetCounter: (state) => {
            state.count = 0
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetDestination.toString(), (state) => {
            state.count = 0;
        })
    }
})

export const {increment,decrement, incrementMultiplier, decrementMultiplier, resetCounter} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;