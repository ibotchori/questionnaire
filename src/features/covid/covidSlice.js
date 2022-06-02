import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  had_covid: null,
  had_antibody_test: null,
  covid_sickness_date: "",
  antibodies: {
    test_date: "",
    number: "",
  },
};

export const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    setCovid: (state, action) => {
      state.had_covid = action.payload;
    },
    setTest: (state, action) => {
      state.had_antibody_test = action.payload;
    },
    setCovidPeriod: (state, action) => {
      state.covid_sickness_date = action.payload;
    },
    setTestDate: (state, action) => {
      state.antibodies.test_date = action.payload;
    },
    setTestQuantity: (state, action) => {
      state.antibodies.number = action.payload;
    },
    resetCovid: (state) => {
      state.had_covid = null;
      state.had_antibody_test = null;
      state.covid_sickness_date = "";
      state.antibodies.test_date = "";
      state.antibodies.number = "";
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
  resetCovid,
} = covidSlice.actions;

export default covidSlice.reducer;
