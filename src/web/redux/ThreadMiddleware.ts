import { createAsyncThunk } from '@reduxjs/toolkit';
import { Thread } from '../../domain/model';
import { CreatePostDto, CreateThreadDto } from '../../adapters/dto';
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
  (opId, thunkApi) => {
    try {
      return di.services.threadService.getThread(opId);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const createThread = createAsyncThunk<Thread, { data: CreateThreadDto; op: CreatePostDto }>(
  '[Thread] Create Thread',
  (thread, thunkApi) => {
    try {
      return di.services.threadService.createThread(thread.data);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
