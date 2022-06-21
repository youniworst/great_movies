import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import moviesSlice from "./moviesSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
    movies: moviesSlice
  }
});