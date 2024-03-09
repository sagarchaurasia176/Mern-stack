import { createSlice } from "@reduxjs/toolkit"

//initialState values
const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        //creating the two functions here

        // this is the ways to decalred the functions here

        //increment the values here 
        Increment: (state) => {
            state.value += 1;
        },
        //decrement the values here
        Decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

//now start to destructing the values here 

export const { Increment, Decrement, incrementByAmount } = counterSlice.actions;
//finally improt the counter slice
export default counterSlice.reducer