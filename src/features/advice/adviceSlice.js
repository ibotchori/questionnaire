import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  online: null,
  office: null,
  assembly: "",
  environment: "",
};

export const adviceSlice = createSlice({
  name: "advice",
  initialState,
  reducers: {
    setOnline: (state, action) => {
      state.covid = action.payload;
    },
    setOffice: (state, action) => {
      state.test = action.payload;
    },
    setAssembly: (state, action) => {
      state.covidPeriod = action.payload;
    },
    setEnvironment: (state, action) => {
      state.testDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnline, setOffice, setAssembly, setEnvironment } =
  adviceSlice.actions;

export default adviceSlice.reducer;
