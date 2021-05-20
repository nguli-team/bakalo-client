import { createAction } from '@reduxjs/toolkit';
import { Board, Thread } from '../../domain/model';

export const getBoards = createAction('board/get', (boardList: Board[]) => {
  return {
    payload: {
      boardList
    }
  };
});
export const setActiveBoard = createAction<{ boardShorthand: string }>('board/setActive');
export const getThreads = createAction('board/getThreads', (threadList: Thread[]) => ({
  payload: {
    threadList
  }
}));
export const getPopularThreads = createAction(
  'board/getPopularThreads',
  (popularThreads: Thread[]) => ({
    payload: {
      popularThreads
    }
  })
);
