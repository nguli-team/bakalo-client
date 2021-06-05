import { createAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const setActiveBoard = createAction<{ boardShorthand: string }>('[Boards] Set Active Board');
export const removeActiveBoard = createAction('[Boards] Remove Active Board');
export const clearThreadList = createAction('[Boards] Clear Thread List');
