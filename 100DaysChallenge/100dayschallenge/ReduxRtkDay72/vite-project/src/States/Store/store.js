import { configureStore } from '@reduxjs/toolkit'
import Slice, { counterSlice } from '../slice/Slice'

export const store = configureStore({
  reducer: {
    //enter your file name
    counter : Slice,
  },
})