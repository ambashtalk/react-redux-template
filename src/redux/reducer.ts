import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { decrement, getPostData, increment } from "./actions";
import {
  CounterInterface,
  counterState,
  ThunkInterface,
  thunkState,
} from "./state";

const countReducer = createReducer<CounterInterface>(
  counterState,
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.count++;
      })
      .addCase(decrement, (state, action) => {
        state.count--;
      })
      .addDefaultCase((state) => state);
  }
);

export const thunkReducer = createReducer<ThunkInterface>(
  thunkState,
  (builder) => {
    builder.addCase(getPostData.fulfilled, (state, action) => {
      console.log(action.payload);

      state.data = action.payload;
    });
  }
);

export const rootReducer = combineReducers({ countReducer, thunkReducer });
