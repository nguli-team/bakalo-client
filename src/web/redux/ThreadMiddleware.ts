import { createAsyncThunk } from '@reduxjs/toolkit';
import { Thread } from '../../domain/model';
import { CreateThreadDto } from '../../adapters/dto';
import di from '../di';

export const getThreads = createAsyncThunk<Thread[], number | undefined>(
  '[Thread] Fetch Threads',
  async (boardId, thunkAPI) => {
    try {
      if (boardId) {
        return await di.services.threadService.getThreads(boardId);
      }
      return await di.services.threadService.getPopularThread();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getThread = createAsyncThunk<Thread, number>(
  '[Thread] Get Thread',
  (threadId, thunkApi) => {
    try {
      return di.services.threadService.getThread(threadId);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const createThread = createAsyncThunk<Thread, CreateThreadDto>(
  '[Thread] Create Thread',
  (thread, thunkApi) => {
    try {
      return di.services.threadService.createThread(thread);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
