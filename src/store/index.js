import { authSlice } from "./auth/authSlice";
import { calculateSlice } from "./calculator/calculatorSlice";

const { createStore, combineReducers } = require("redux");

const rootReducer = combineReducers({
  [calculateSlice.name]: calculateSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("RENDER", store.getState());
});
