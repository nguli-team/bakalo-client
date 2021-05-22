import { createReducer } from '@reduxjs/toolkit';
import getBookmarks from './BookmarkMiddleware';
import { Thread } from '../../domain/model';

interface ThreadState {
  bookmarks?: Thread[];
  loading: boolean;
  error?: string;
}

const initialState: ThreadState = {
  bookmarks: [],
  loading: false,
  error: undefined
};

const BookmarkReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getBookmarks.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(getBookmarks.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      bookmarks: action.payload
    }))
    .addCase(getBookmarks.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
);

export default BookmarkReducer;
