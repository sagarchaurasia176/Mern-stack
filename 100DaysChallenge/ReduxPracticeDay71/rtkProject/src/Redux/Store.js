import { configureStore } from '@reduxjs/toolkit'
import OperationSlice from '../Slice/OperationSlice'

export const store = configureStore({

  reducer: {
    counter: OperationSlice,

  },
})