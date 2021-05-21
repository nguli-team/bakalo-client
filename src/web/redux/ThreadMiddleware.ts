import { createAsyncThunk } from '@reduxjs/toolkit';
import { Thread } from '../../domain/model';
import { ThreadDto } from '../../adapters/dto';
import di from '../di';

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

export const createThread = createAsyncThunk<Thread, ThreadDto>(
  '[Thread] Create Thread',
  (thread, thunkApi) => {
    try {
      return di.services.threadService.createThread(thread);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
