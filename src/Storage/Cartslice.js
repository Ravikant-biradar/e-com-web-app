import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
  name: "cart",
  initialState: {
    thingstoadd: [],
  },
  reducers: {
    add(state, action) {
      state.thingstoadd.push(action.payload);
    },
    removeitems(state , action){
      state.thingstoadd =  state.thingstoadd.filter(thingstoadd => thingstoadd.id !== action.payload.id);
    }
  },
});

export const { add , removeitems } = Cartslice.actions;
export const select = (state) => state.cart.thingstoadd;
export default Cartslice.reducer;
