import { createReducer } from '@reduxjs/toolkit';
import { Post, Thread } from '../../domain/model';
import { getReplies, getThread } from './ThreadAction';

interface ThreadState {
  activeThread?: Thread;
  replies?: Post[];
}

const initialState: ThreadState = {
  activeThread: undefined,
  replies: []
};

const ThreadReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getThread, (state, action) => ({
      ...state,
      activeThread: action.payload.thread
    }))
    .addCase(getReplies, (state, action) => ({
      ...state,
      replies: action.payload.posts
    }))
);

export default ThreadReducer;
