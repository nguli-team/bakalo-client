import { createReducer } from '@reduxjs/toolkit';
import { Post, Thread } from '../../domain/model';
import { getThread } from './ThreadMiddleware';
import { createPost, getPosts } from './PostMiddleware';
import { removeActiveThread } from './ThreadAction';

interface ThreadState {
  activeThread?: Thread;
  posts: Post[];
  newPost?: Post;
  loading: boolean;
  error?: string;
}

const initialState: ThreadState = {
  activeThread: undefined,
  posts: [],
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
      posts: action.payload
    }))
    .addCase(getPosts.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
    .addCase(createPost.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(createPost.fulfilled, (state) => {
      return {
        ...state,
        loading: false
      };
    })
    .addCase(createPost.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
    .addCase(removeActiveThread, (state) => ({
      ...state,
      activeThread: undefined
    }))
);

export default ThreadReducer;
