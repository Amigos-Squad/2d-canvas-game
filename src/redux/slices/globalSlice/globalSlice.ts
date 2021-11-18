import { createSlice } from '@reduxjs/toolkit';
import { getToastDefault } from '@/components/Toast';
import { initialState } from './const';

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.toast = getToastDefault(action.payload);
    },
  },
});

export const { setToast } = globalSlice.actions;

export default globalSlice.reducer;
