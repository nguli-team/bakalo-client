import { createAsyncThunk } from '@reduxjs/toolkit';
import { Thread } from '../../domain/model';
import di from '../di';

const getBookmarks = createAsyncThunk<Thread[]>('[Thread] Get Bookmarks', (threads, thunkApi) => {
  try {
    return di.services.bookmarkService.getBookmarks();
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
});

export default getBookmarks;
