import { configureStore } from "@reduxjs/toolkit";

import identificationReducer from "../features/identification/identificationSlice";
import covidReducer from "../features/covid/covidSlice";
import injectionReducer from "../features/injection/injectionSlice";
import adviceReducer from "../features/advice/adviceSlice";

export const store = configureStore({
  reducer: {
    identification: identificationReducer,
    covid: covidReducer,
    injection: injectionReducer,
    advice: adviceReducer,
  },
});
