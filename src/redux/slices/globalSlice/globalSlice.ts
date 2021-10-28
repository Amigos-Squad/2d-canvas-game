import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './const';

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.toast = action.payload;
    },
  },
});

export const { setToast } = globalSlice.actions;

export default globalSlice.reducer;
