import { createAsyncThunk } from '@reduxjs/toolkit';
import di from '../di';

// eslint-disable-next-line import/prefer-default-export
export const getBoards = createAsyncThunk('[Board] Fetch Boards', async (_arg, thunkAPI) => {
  try {
    return await di.services.boardService.getBoards();
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});
