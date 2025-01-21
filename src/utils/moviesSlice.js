import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingPagination: 1,
    popularMovies: null,
    popularPagination: 1,
    topRatedMovies: null,
    topRatedPagination: 1,
    upcomingMovies: null,
    upcomingPagination: 1,
    trailerVideo: null,
    movieVideos: null,
    movieInfo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    nextPageNowPlaying: (state, action) => {
      state.nowPlayingPagination = state.nowPlayingPagination + 1;
    },
    prevPageNowPlaying: (state, action) => {
      if (state.nowPlayingPagination > 1)
        state.nowPlayingPagination = state.nowPlayingPagination - 1;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    nextPagePopular: (state, action) => {
      state.popularPagination = state.popularPagination + 1;
    },
    prevPagePopular: (state, action) => {
      if (state.popularPagination > 1)
        state.popularPagination = state.popularPagination - 1;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    nextPageTopRated: (state, action) => {
      state.topRatedPagination = state.topRatedPagination + 1;
    },
    prevPageTopRated: (state, action) => {
      if (state.topRatedPagination > 1)
        state.topRatedPagination = state.topRatedPagination - 1;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    nextPageUpcoming: (state, action) => {
      state.upcomingPagination = state.upcomingPagination + 1;
    },
    prevPageUpcoming: (state, action) => {
      if (state.upcomingPagination > 1)
        state.upcomingPagination = state.upcomingPagination - 1;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
  addMovieVideos,
  addMovieInfo,
  nextPageNowPlaying,
  prevPageNowPlaying,
  nextPagePopular,
  prevPagePopular,
  nextPageTopRated,
  prevPageTopRated,
  nextPageUpcoming,
  prevPageUpcoming,
} = moviesSlice.actions;

export default moviesSlice.reducer;
