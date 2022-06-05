import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  non_formal_meetings: null,
  number_of_days_from_office: null,
  what_about_meetings_in_live: "",
  tell_us_your_opinion_about_us: "",
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
