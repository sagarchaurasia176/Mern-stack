// create configuations

import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../Slices/sliceData'


//KEEP IN YOUR MIND THAT WHATEVER YOU HAVE CREATED THE () NAME WRITE SAME AS IT INTO THE MAIN.JSX COMPONENTS
export const store = configureStore({
    reducer: {
        counterSlice : counterSlice,
    },
})

