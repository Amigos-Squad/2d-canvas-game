import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToastDefault } from '@/components/Toast';
import { initialState } from './const';
import { ILeaderboardListItem } from '@/modules';

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    pullLeaderboard: (
      _,
      action: PayloadAction<keyof ILeaderboardListItem>
    ) => {},
    setLeaderboard: (state, action) => {
      state.leaderboard = action.payload;
    },
    setToast: (state, action) => {
      state.toast = getToastDefault(action.payload);
    },
  },
});

export const { setToast, pullLeaderboard, setLeaderboard } =
  globalSlice.actions;

export default globalSlice.reducer;
