import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../domain/model';
import { CreatePostDto } from '../../adapters/dto';
import di from '../di';

export const getPosts = createAsyncThunk<Post[], number>(
  '[Post] Get Posts',
  (threadId, thunkApi) => {
    try {
      return di.services.postService.getPost(threadId);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const createPost = createAsyncThunk<Post, CreatePostDto>(
  '[Post] Create Post',
  (post, thunkApi) => {
    try {
      return di.services.postService.createPost(post);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const deletePost = createAsyncThunk<void, number>(
  '[Post] Delete Post',
  (postId, thunkApi) => {
    try {
      return di.services.postService.deletePost(postId);
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);
