import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  had_vaccine: null,
  vaccination_stage: null,
  i_am_waiting: null,
};

export const injectionSlice = createSlice({
  name: "injection",
  initialState,
  reducers: {
    setInjection: (state, action) => {
      state.had_vaccine = action.payload;
    },
    setStage: (state, action) => {
      state.vaccination_stage = action.payload;
    },
    setWaitingFor: (state, action) => {
      state.i_am_waiting = action.payload;
    },
    resetInjection: (state) => {
      state.had_vaccine = null;
      state.vaccination_stage = null;
      state.i_am_waiting = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInjection, setStage, setWaitingFor, resetInjection } =
  injectionSlice.actions;

export default injectionSlice.reducer;
