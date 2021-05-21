import { createReducer } from '@reduxjs/toolkit';
import { Post, Thread } from '../../domain/model';
import { getThread } from './ThreadMiddleware';
import { getPosts } from './PostMiddleware';

interface ThreadState {
  activeThread?: Thread;
  replies?: Post[];
  loading: boolean;
  error?: string;
}

const initialState: ThreadState = {
  activeThread: undefined,
  replies: [],
  loading: false,
  error: undefined
};

const ThreadReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getThread.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(getThread.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      activeThread: action.payload
    }))
    .addCase(getThread.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
    .addCase(getPosts.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(getPosts.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      replies: action.payload
    }))
    .addCase(getPosts.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
);

export default ThreadReducer;
