import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slice/counterSlice';
import navActiveSlice from './slice/navActiveSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    navActive : navActiveSlice.reducer
  },
});


export const counterActions = counterSlice.actions;
export const navActiveActions = navActiveSlice.actions;
export default store;