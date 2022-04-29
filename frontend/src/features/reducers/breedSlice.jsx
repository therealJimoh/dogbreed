import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

const initialState = {
  breed: null,
  isError: false,
  isLoading: false,
  response: "",
};

export const getBreed = createAsyncThunk(
  "breed/getBreed",
  async (breed, thunkAPI) => {
    try {
      const breedData = await API.breed(breed);
      return thunkAPI.fulfillWithValue(breedData);
    } catch (error) {
      const response = error.data;
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const breedSlice = createSlice({
  name: "breed",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.response = "";
    },
  },
  extraReducers: {
    [getBreed.pending]: (state) => {
      state.isLoading = true;
    },
    [getBreed.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.response = action.payload;
      state.breed = action.payload
    },
    [getBreed.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.response = action.payload;
    },
  },
});

export const { reset } = breedSlice.actions;

export default breedSlice.reducer;
