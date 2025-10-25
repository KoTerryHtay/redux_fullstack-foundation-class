import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from ".";

interface User {
  id: number;
  name: string;
  age: number;
}

interface CounterState {
  value: number;
  users: User[];
}

const initialState: CounterState = {
  value: 0,
  users: [
    { id: 1, name: "User 1", age: 30 },
    { id: 2, name: "User 2", age: 20 },
    { id: 3, name: "User 3", age: 40 },
  ],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  selectors: {
    countUsers: (state) => {
      const newUser = state.users.filter((user) => user.age >= 30);
      return newUser.length;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { countUsers } = counterSlice.selectors;
export default counterSlice.reducer;

export const counter = (state: RootState) => state.counter.value;

// type "counter/increment"
// payload
