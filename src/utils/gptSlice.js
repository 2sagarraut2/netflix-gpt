import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT Search",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    clearGptSearchView: (state) => {
      state.showGptSearch = null;
    },
    addGPTMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGPTMovieResults, clearGptSearchView } =
  gptSlice.actions;

export default gptSlice.reducer;
