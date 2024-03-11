// create the slice here
import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'


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
            },        
            //toastify values
            alertMsg : (state)=>{
                state.toast = "msg passed"
            }
            

        }

})
