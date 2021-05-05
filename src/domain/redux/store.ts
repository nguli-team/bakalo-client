import { configureStore } from '@reduxjs/toolkit';
import BoardReducer from './BoardReducer';
import ThreadReducer from './ThreadReducer';

export const store = configureStore({
  reducer: {
    BoardReducer,
    ThreadReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
