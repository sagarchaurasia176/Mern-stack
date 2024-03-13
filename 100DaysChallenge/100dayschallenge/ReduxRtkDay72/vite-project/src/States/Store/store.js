import { configureStore } from '@reduxjs/toolkit'
import Slice  from '../slice/Slice'

export const store = configureStore({
  reducer: {
    //enter your file name
    counter : Slice,
  },
})