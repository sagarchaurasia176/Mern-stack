import { createSlice } from "@reduxjs/toolkit";
//store slice for redcer purpose

export const cartRedux = createSlice({
    //here it's also act as the array => 'cart'
  name: "cart",
  initialState: [],
  reducers: {
    add: () => {},
    remove: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartRedux.actions;

export default cartRedux.reducer;
