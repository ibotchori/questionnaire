import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  injection: null,
  stage: null,
  waitingFor: null,
};

export const injectionSlice = createSlice({
  name: "injection",
  initialState,
  reducers: {
    setInjection: (state, action) => {
      state.injection = action.payload;
    },
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    setWaitingFor: (state, action) => {
      state.waitingFor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInjection, setStage, setWaitingFor } = injectionSlice.actions;

export default injectionSlice.reducer;