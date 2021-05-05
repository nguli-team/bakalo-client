import { createReducer } from '@reduxjs/toolkit';
import { Board } from '../model';
import { getBoards, getPopularThreads, getThreads, setActiveBoard } from './BoardAction';
import boardlist from '../../utils/boardlist';
import popularthreadlist from '../../utils/popularthreadlist';
import threadlist from '../../utils/threadlist';

export interface BoardState {
  boardList: Board[];
  activeBoard?: Board;
  popularThreads: typeof popularthreadlist;
  threadList: typeof threadlist;
}

const initialState: BoardState = {
  boardList: [],
  activeBoard: undefined,
  threadList: [],
  popularThreads: []
};

const BoardReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getBoards, (state) => ({
      ...state,
      boardList: boardlist
    }))
    .addCase(setActiveBoard, (state, action) => ({
      ...state,
      activeBoard: state.boardList.find((b) => b.shorthand === action.payload.boardShorthand)
    }))
    .addCase(getThreads, (state) => ({
      ...state,
      threadList: threadlist
    }))
    .addCase(getPopularThreads, (state) => ({
      ...state,
      popularThreads: popularthreadlist
    }))
);

export default BoardReducer;
