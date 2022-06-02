import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
};

export const identificationSlice = createSlice({
  name: "identification",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.first_name = action.payload;
    },
    setLastName: (state, action) => {
      state.last_name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetIdentification: (state) => {
      state.first_name = "";
      state.last_name = "";
      state.email = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setEmail, resetIdentification } =
  identificationSlice.actions;

export default identificationSlice.reducer;
