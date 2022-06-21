import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { SEARCH_MOVIE_URL } from "../constants"

export const fetchMoviesList = createAsyncThunk(
  'movies/fetchMoviesList',
  async ({ value, callback }) => {
    const { data } = await axios.get(`${SEARCH_MOVIE_URL}/${value}`)
    callback();
    return data.results;
  }
)

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    moviesLoading: false,
    favorites: []
  },
  reducers: {
    updateMoviesList: (state, action) => {
      state.moviesList = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesList.pending, (state, action) => {
      state.moviesLoading = true;
    })
    builder.addCase(fetchMoviesList.fulfilled, (state, action) => {
      state.moviesList = action.payload;
      state.moviesLoading = false;
    })
    builder.addCase(fetchMoviesList.rejected, (state, action) => {
      console.log(action.error);
      state.moviesLoading = false;
    })
  },
})

export const { updateMoviesList } = moviesSlice.actions;
export default moviesSlice.reducer;