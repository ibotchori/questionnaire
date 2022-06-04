import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adviceService from "./adviceService";

export const submitData = createAsyncThunk(
  "advice/submitData", // <-- action name
  async function (dataForSubmit, { rejectWithValue }) {
    try {
      // API call from adviceService file
      return await adviceService.SubmitData(dataForSubmit);
    } catch (error) {
      // pass error message to fetchSkills.reject (action.payload)
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  non_formal_meetings: null,
  number_of_days_from_office: null,
  what_about_meetings_in_live: "",
  tell_us_your_opinion_about_us: "",
  status: "",
  error: "",
};

export const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {
    setOnline: (state, action) => {
      state.non_formal_meetings = action.payload;
    },
    setOffice: (state, action) => {
      state.number_of_days_from_office = action.payload;
    },
    setAssembly: (state, action) => {
      state.what_about_meetings_in_live = action.payload;
    },
    setEnvironment: (state, action) => {
      state.tell_us_your_opinion_about_us = action.payload;
    },
    resetAdvice: (state) => {
      state.non_formal_meetings = null;
      state.number_of_days_from_office = null;
      state.what_about_meetings_in_live = "";
      state.tell_us_your_opinion_about_us = "";
    },
  },
  extraReducers: {
    [submitData.pending]: (state) => {
      state.status = "pending";
    },
    [submitData.fulfilled]: (state, action) => {
      state.status = action.payload;
    },
    [submitData.rejected]: (state, action) => {
      state.status = "rejected";
      // set value to error from rejectWithValue parameter
      state.error = action.payload;

      // set value to error from rejectWithValue parameter
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setOnline,
  setOffice,
  setAssembly,
  setEnvironment,
  resetAdvice,
} = adviceSlice.actions;

export default adviceSlice.reducer;
