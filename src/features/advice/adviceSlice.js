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
      state.online = action.payload;
    },
    setOffice: (state, action) => {
      state.office = action.payload;
    },
    setAssembly: (state, action) => {
      state.assembly = action.payload;
    },
    setEnvironment: (state, action) => {
      state.environment = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnline, setOffice, setAssembly, setEnvironment } =
  adviceSlice.actions;

export default adviceSlice.reducer;
