import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import submitService from "./submitService";

export const submitData = createAsyncThunk(
  "submit/submitData", // <-- action name
  async function (dataForSubmit, { rejectWithValue }) {
    try {
      // API call from adviceService file
      return await submitService.SubmitData(dataForSubmit);
    } catch (error) {
      // pass error message to fetchSkills.reject (action.payload)
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: "",
  error: "",
};

export const submitSlice = createSlice({
  name: "submit ",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = "";
    },
  },
  extraReducers: {
    [submitData.pending]: (state) => {
      state.status = "pending";
    },
    [submitData.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [submitData.rejected]: (state, action) => {
      state.status = "rejected";
      // set value to error from rejectWithValue parameter
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { resetStatus } = submitSlice.actions;

export default submitSlice.reducer;
