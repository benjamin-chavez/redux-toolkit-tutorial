// src/features/counter/counter-slice.ts

// THIS IS A REDUX SLICE

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment
    incremented(state) {
      // its okay to mutate the param here because `immer` make it
      // immutable under the hood
      state.value++;
    },

    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },

    // decrement

    // reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
