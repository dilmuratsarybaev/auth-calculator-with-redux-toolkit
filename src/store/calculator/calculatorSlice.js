import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    add(state, action) {
      state.result = state.result + action.payload;
    },
    subract(state, action) {
      state.result = state.result - action.payload;
    },
    divide(state, action) {
      state.result = state.result / action.payload;
    },
    multiply(state, action) {
      state.result = state.result * action.payload;
    },
  },
});
export const calculate = calculateSlice.actions;
