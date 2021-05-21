import { createAsyncThunk } from '@reduxjs/toolkit';
import di from '../di';
import { Thread } from '../../domain/model';

export const fetchBoards = createAsyncThunk('[Board] Fetch Boards', async (_arg, thunkAPI) => {
  try {
    return await di.services.boardService.getBoards();
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const fetchThreads = createAsyncThunk<Thread[], number | undefined>(
  '[Board] Fetch Threads',
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

export const fetchPopularThreads = createAsyncThunk<Thread[]>(
  '[Board] Fetch Threads',
  async (_arg, thunkAPI) => {
    try {
      return await di.services.threadService.getPopularThread();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
