import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_MOVIE_URL } from "../constants";

export const fetchMoviesList = createAsyncThunk(
  "movies/fetchMoviesList",
  async ({ value, callback }) => {
    const { data } = await axios.get(`${SEARCH_MOVIE_URL}/${value}`);
    callback();
    return data.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    moviesLoading: false,
    favoritesList: [],
  },
  reducers: {
    updateFavoritesList: (state, action) => {
      const favoriteMovie = action.payload;

      const alreadуAdded = state.favoritesList.find(
        (item) => item.id === favoriteMovie.id
      );
      
      if (alreadуAdded) {
        state.favoritesList = state.favoritesList.filter((item) => {
          return item.id !== favoriteMovie.id;
        });
      } else {
        state.favoritesList.push(favoriteMovie);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesList.pending, (state) => {
      state.moviesLoading = true;
    });
    builder.addCase(fetchMoviesList.fulfilled, (state, action) => {
      state.moviesList = action.payload;
      state.moviesLoading = false;
    });
    builder.addCase(fetchMoviesList.rejected, (state, action) => {
      console.log(action.error);
      state.moviesLoading = false;
    });
  },
});

export const { updateFavoritesList } = moviesSlice.actions;
export default moviesSlice.reducer;
