import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../Slice/Slices'

export const store = configureStore({
    reducer: {
        counter: counterSlice,

    },
})