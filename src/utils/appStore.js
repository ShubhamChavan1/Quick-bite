import { configureStore } from "@reduxjs/toolkit";
import cartReaducer from "./CartSlice"

const appStore = configureStore({
   reducer:{
     cart:cartReaducer
   }
})

export default appStore;