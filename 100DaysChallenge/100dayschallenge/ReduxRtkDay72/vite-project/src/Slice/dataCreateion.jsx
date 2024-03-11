// create the slice here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

    export const CounterToast = createSlice({
    name:"toastwithcount",
        initialState,
        reducers:{
            //creating the function here
            increment:(state)=>{
                state.value +=1;
            }
            toastVerify : (state)=>{
                state.value = 
            }

        }

})
