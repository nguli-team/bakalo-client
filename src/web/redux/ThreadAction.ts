import { createAction } from '@reduxjs/toolkit';
import { Post, Thread } from '../../domain/model';

// TODO: implements status states
export const getThread = createAction('thread/get', (thread: Thread) => ({
  payload: {
    thread
  }
}));
export const createThread = createAction<string>('thread/create');
export const createThreadSuccess = createAction<string>('thread/create/success');
export const createThreadFail = createAction<string>('thread/create/fail');
export const getReplies = createAction('thread/replies/get', (posts: Post[]) => ({
  payload: {
    posts
  }
}));
export const createReply = createAction<string>('thread/replies/create');
