import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../config/todoConfig";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
