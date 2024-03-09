import React from "react";
//whatever you want to pass the values and then the want to check some updates on that case you wanna do here
import { createSlice } from "@reduxjs/toolkit";

const intial = {
  state: "hey I am sagar",
};

//now start to creating the slice
export const slice = createSlice({
  name: "alert",
  //the actuall game start from here only
  reducers: {
    //create the () here which is kind of pass the props here
    alerts: (datas) => {
      alert(datas);
    },
    prompts: () => {
      prompt("enter you're dream company");
    },
  },
});

//destructure the data here

//here we write the actions it means update the state
export const { alerts, prompts } = slice.actions;
export default slice.reducer;
