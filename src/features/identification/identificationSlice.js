import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

export const identificationSlice = createSlice({
  name: "identification",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetIdentification: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setEmail, resetIdentification } =
  identificationSlice.actions;

export default identificationSlice.reducer;
