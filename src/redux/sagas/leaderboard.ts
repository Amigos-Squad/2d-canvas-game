import { call, put, takeLeading } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { leaderboardAPI } from '@/api';
import { ILeaderboardListItem } from '@/modules';
import { pullLeaderboard, setLeaderboard } from '../slices';

function* pullLeaderboardWorker({
  payload,
}: PayloadAction<keyof ILeaderboardListItem>) {
  try {
    const leaderboard: ILeaderboardListItem[] = yield call(
      leaderboardAPI.pullAll,
      payload
    );
    yield put(setLeaderboard(leaderboard));
  } catch (e) {
    console.error(e);
  }
}

export function* pullLeaderboardSaga() {
  yield takeLeading(pullLeaderboard.type, pullLeaderboardWorker);
}
