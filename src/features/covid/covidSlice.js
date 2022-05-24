import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  covid: null,
  test: null,
  covidPeriod: "",
  testDate: "",
  testQuantity: "",
};

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setCovid: (state, action) => {
      state.covid = action.payload;
    },
    setTest: (state, action) => {
      state.test = action.payload;
    },
    setCovidPeriod: (state, action) => {
      state.covidPeriod = action.payload;
    },
    setTestDate: (state, action) => {
      state.testDate = action.payload;
    },
    setTestQuantity: (state, action) => {
      state.testQuantity = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCovid,
  setTest,
  setCovidPeriod,
  setTestDate,
  setTestQuantity,
} = covidSlice.actions;

export default covidSlice.reducer;
