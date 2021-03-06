import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const _getInitialCounterState = (state: RootState) => state.countReducer;

export const getCount = createSelector(
  [_getInitialCounterState],
  (state) => state.count
);

const _getInitialThunkState = (state: RootState) => state.thunkReducer;

export const getData = createSelector(
  [_getInitialThunkState],
  (state) => state.data
);
