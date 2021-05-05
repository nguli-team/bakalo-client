import { createAction } from '@reduxjs/toolkit';

export const getBoards = createAction('board/get');
export const setActiveBoard = createAction<{ boardShorthand: string }>('board/setActive');
export const getThreads = createAction<{ boardId: number }>('board/getThreads');
export const getPopularThreads = createAction('board/getPopularThreads');
