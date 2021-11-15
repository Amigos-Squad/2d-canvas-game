import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getToastDefault } from '@/components/Toast';
import { initialState } from './const';
import { ILeaderboardListItem } from '@/modules';

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setServiceId: (state, action: PayloadAction<string>) => {
      state.serviceId = action.payload;
    },
    pullLeaderboard: (
      _,
      action: PayloadAction<keyof ILeaderboardListItem>
    ) => {},
    setLeaderboard: (state, action) => {
      state.leaderboard = action.payload.map(
        (item: { data: Record<string, any> }) => {
          const date = new Date(item.data.date).toLocaleDateString('ru-RU');
          return Object.assign(item.data, { date });
        }
      );
    },
    setToast: (state, action) => {
      state.toast = getToastDefault(action.payload);
    },
  },
});

export const { setToast, pullLeaderboard, setLeaderboard, setServiceId } =
  globalSlice.actions;

export default globalSlice.reducer;
