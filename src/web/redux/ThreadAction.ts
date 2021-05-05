import { createAction } from '@reduxjs/toolkit';

export const getThread = createAction<string>('thread/get');
export const createThread = createAction<string>('thread/create');
export const createThreadSuccess = createAction<string>('thread/create/success');
export const createThreadFail = createAction<string>('thread/create/fail');
export const getReplies = createAction<string>('thread/replies/get');
export const createReply = createAction<string>('thread/replies/create');
