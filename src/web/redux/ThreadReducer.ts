import { createReducer } from '@reduxjs/toolkit';
import { Post, Thread } from '../../domain/model';
import { getReplies, getThread } from './ThreadAction';
import replylist from '../../utils/replylist';
import threadlist from '../../utils/threadlist';

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
    .addCase(getThread, (state) => ({
      ...state,
      activeThread: threadlist[0]
    }))
    .addCase(getReplies, (state) => ({
      ...state,
      replies: replylist
    }))
);

export default ThreadReducer;
