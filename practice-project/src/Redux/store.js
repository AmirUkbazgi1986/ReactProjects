import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import nameReducer from "./features/nameSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
  },
});
console.log(store);
