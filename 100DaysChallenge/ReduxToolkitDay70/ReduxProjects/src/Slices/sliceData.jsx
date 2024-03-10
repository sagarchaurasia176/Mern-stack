import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "welcome sir!",
};

export const counterSlice = createSlice({
  //set always name
  name: "alert",
  initialState,

  reducers: {
    validName: (state) => {
      alert(state).value;
    },
  },

});


//exp the dest
export const { validName } = counterSlice.actions;
//exp the final expo
export default counterSlice.reducer;
