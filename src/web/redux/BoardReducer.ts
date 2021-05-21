import { createReducer } from '@reduxjs/toolkit';
import { Board, Thread } from '../../domain/model';
import { fetchBoards, fetchThreads } from './BoardMiddleware';
import { setActiveBoard } from './BoardAction';

export interface BoardState {
  boardList: Board[];
  activeBoard?: Board;
  threadList: Thread[];
  loading: boolean;
  error?: string;
}

const initialState: BoardState = {
  boardList: [],
  activeBoard: undefined,
  threadList: [],
  loading: false,
  error: undefined
};

const BoardReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(fetchBoards.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(fetchBoards.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      boardList: action.payload
    }))
    .addCase(fetchBoards.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
    .addCase(fetchThreads.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(fetchThreads.fulfilled, (state, action) => ({
      ...state,
      threadList: action.payload
    }))
    .addCase(fetchThreads.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
    .addCase(setActiveBoard, (state, action) => ({
      ...state,
      activeBoard: state.boardList.find((b) => b.shorthand === action.payload.boardShorthand)
    }))
);

export default BoardReducer;
