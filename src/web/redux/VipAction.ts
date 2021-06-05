import { createAction } from '@reduxjs/toolkit';
import di from '../di';

// eslint-disable-next-line import/prefer-default-export
export const checkVip = createAction('[VIP] Check Vip', () => {
  return { payload: di.services.vipService.checkVip() };
});
