import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  offset: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialState,
  reducers: {
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setData(state, action) {
      state.data = [...state.data, ...action.payload];
    },
    incrementOffset(state) {
      state.offset = state.offset + 10;
    },
  },
});

export const { toggleLoading, setError, setData, incrementOffset } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
