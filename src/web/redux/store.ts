import { configureStore } from '@reduxjs/toolkit';
import BoardReducer from './BoardReducer';
import ThreadReducer from './ThreadReducer';
import BookmarkReducer from './BookmarkReducer';

export const store = configureStore({
  reducer: {
    BoardReducer,
    ThreadReducer,
    BookmarkReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
