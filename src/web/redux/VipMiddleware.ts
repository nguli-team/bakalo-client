import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateVipDto, VipDto } from '../../adapters/dto';
import di from '../di';

export const registerVip = createAsyncThunk<VipDto, CreateVipDto>(
  '[VIP] Create VIP',
  async (createVipDto, thunkAPI) => {
    try {
      return await di.services.vipService.registerVip(createVipDto);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const loginVip = createAsyncThunk<boolean, VipDto>(
  '[VIP] Login VIP',
  async (vipDto, thunkAPI) => {
    try {
      return await di.services.vipService.loginVip(vipDto);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
