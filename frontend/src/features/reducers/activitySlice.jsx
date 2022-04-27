import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../services/api";

const initialState = {
  activity: null,
  isError: false,
  isLoading: false,
  response: "",
};

export const getActivity = createAsyncThunk(
  "activity/getActivity",
  async (data, thunkAPI) => {
    try {
      const activitydata = await API.activity(data);
      return thunkAPI.fulfillWithValue(activitydata);
    } catch (error) {
      const response = error.data;
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const activitySlice = createSlice({
  name: "activity",
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
    [getActivity.pending]: (state) => {
      state.isLoading = true;
    },
    [getActivity.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.activity = action.payload;
    },
    [getActivity.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.response = action.payload;
    },
  },
});

export const { reset } = activitySlice.actions;

export default activitySlice.reducer;
