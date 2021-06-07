import { createAction } from '@reduxjs/toolkit';
import di from '../di';

// eslint-disable-next-line import/prefer-default-export
export const checkAccount = createAction('[VIP] Check Vip', () => {
  return {
    payload: {
      isVip: di.services.vipService.checkVip(),
      isAdmin: di.services.vipService.checkAdmin()
    }
  };
});
