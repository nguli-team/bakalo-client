import { configureStore } from '@reduxjs/toolkit';
import BoardReducer from './BoardReducer';
import ThreadReducer from './ThreadReducer';
import BookmarkReducer from './BookmarkReducer';
import VipReducer from './VipReducer';

export const store = configureStore({
  reducer: {
    BoardReducer,
    ThreadReducer,
    BookmarkReducer,
    VipReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
