import { configureStore } from "@reduxjs/toolkit";

import identificationReducer from "../features/identification/identificationSlice";

export const store = configureStore({
  reducer: {
    identification: identificationReducer,
  },
});
