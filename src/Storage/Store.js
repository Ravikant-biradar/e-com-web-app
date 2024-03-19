import { configureStore } from "@reduxjs/toolkit";
import  Cartslice  from "./Cartslice";
// import { cartSlice } from './../Store/Cartslice';

export const Store = configureStore({
  reducer: {
    cart: Cartslice,
  },
});
