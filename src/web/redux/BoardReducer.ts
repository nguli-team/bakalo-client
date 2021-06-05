import { createReducer } from '@reduxjs/toolkit';
import { Board, Thread } from '../../domain/model';
import { clearThreadList, removeActiveBoard, setActiveBoard } from './BoardAction';
import { getBoards } from './BoardMiddleware';
import { getThreads } from './ThreadMiddleware';

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
    .addCase(getBoards.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(getBoards.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      boardList: action.payload
    }))
    .addCase(getBoards.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
    .addCase(getThreads.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(getThreads.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      threadList: action.payload
    }))
    .addCase(getThreads.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
    .addCase(setActiveBoard, (state, action) => ({
      ...state,
      activeBoard: state.boardList.find((b) => b.shorthand === action.payload.boardShorthand)
    }))
    .addCase(removeActiveBoard, (state) => ({
      ...state,
      activeBoard: undefined
    }))
    .addCase(clearThreadList, (state) => ({
      ...state,
      threadList: []
    }))
);

export default BoardReducer;
