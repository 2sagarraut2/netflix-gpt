import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, // Key matches the slice name
    movies: moviesReducer,
  },
});

export default appStore;
