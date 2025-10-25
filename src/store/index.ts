import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postReducer from "./postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const a = () => ({
//   s: "",
// });
// // const a = () => "";

// export type b = typeof a;
// export type c = ReturnType<typeof a>;
