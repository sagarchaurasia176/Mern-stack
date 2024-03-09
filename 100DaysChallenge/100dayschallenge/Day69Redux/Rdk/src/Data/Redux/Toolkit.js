//create the redux
import { configureStore } from "@reduxjs/toolkit";
import Data from "../Components/Data";

export const storeDataPass = configureStore({
    reducer: {
        // this is the main part where we actually updated everythings
 
        Data : Data,
    },
});
