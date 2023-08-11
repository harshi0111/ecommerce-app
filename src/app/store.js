import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartSlice from "../redux/slices/cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
  },
});
export default store;
