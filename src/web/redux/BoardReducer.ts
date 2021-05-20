import { createReducer } from '@reduxjs/toolkit';
import { Board, Thread } from '../../domain/model';
import { getBoards, getPopularThreads, getThreads, setActiveBoard } from './BoardAction';

export interface BoardState {
  boardList: Board[];
  activeBoard?: Board;
  popularThreads: Thread[];
  threadList: Thread[];
}

const initialState: BoardState = {
  boardList: [],
  activeBoard: undefined,
  threadList: [],
  popularThreads: []
};

const BoardReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getBoards, (state, action) => ({
      ...state,
      boardList: action.payload.boardList
    }))
    .addCase(setActiveBoard, (state, action) => ({
      ...state,
      activeBoard: state.boardList.find((b) => b.shorthand === action.payload.boardShorthand)
    }))
    .addCase(getThreads, (state, action) => ({
      ...state,
      threadList: action.payload.threadList
    }))
    .addCase(getPopularThreads, (state, action) => ({
      ...state,
      popularThreads: action.payload.popularThreads
    }))
);

export default BoardReducer;
