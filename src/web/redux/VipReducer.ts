import { createReducer } from '@reduxjs/toolkit';
import { loginVip, registerVip } from './VipMiddleware';
import { checkVip } from './VipAction';

interface VipState {
  isVip: boolean;
  loading: boolean;
  error?: string;
}

const initialState: VipState = {
  isVip: false,
  loading: false,
  error: undefined
};

const VipReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(checkVip, (state, action) => ({
      ...state,
      isVip: action.payload
    }))
    .addCase(registerVip.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(registerVip.fulfilled, (state) => ({
      ...state,
      loading: false
    }))
    .addCase(registerVip.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message
    }))
    .addCase(loginVip.pending, (state) => ({
      ...state,
      loading: true
    }))
    .addCase(loginVip.fulfilled, (state) => ({
      ...state,
      loading: false,
      isVip: true
    }))
    .addCase(loginVip.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
      isVip: false
    }))
);

export default VipReducer;
