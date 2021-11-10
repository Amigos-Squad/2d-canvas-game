import { ToastConfig } from '@/components';
import { ILeaderboardListItem } from '@/modules';

export type GlobalSliceState = {
  toast: null | ToastConfig;
  leaderboard: ILeaderboardListItem[];
};
