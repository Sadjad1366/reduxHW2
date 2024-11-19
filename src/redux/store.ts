import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./cartSlice";
import filterSlice from "./filterSlice";

export const reduxStore = configureStore({
      reducer:{
            cart:cartSlice,
            filter:filterSlice
      }
})
export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
