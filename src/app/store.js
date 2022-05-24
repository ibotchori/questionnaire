import { configureStore } from "@reduxjs/toolkit";

import identificationReducer from "../features/identification/identificationSlice";
import covidReducer from "../features/covid/covidSlice";

export const store = configureStore({
  reducer: {
    identification: identificationReducer,
    covid: covidReducer,
  },
});
