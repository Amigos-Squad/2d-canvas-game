import { all, spawn, call } from '@redux-saga/core/effects';
import { Saga } from '@redux-saga/types';
import {
  signInSaga,
  signUpSaga,
  loadUserSaga,
  preLoadUserSaga,
  signOutSaga,
} from './auth';

import {
  updateProfileSaga,
  updatePasswordSaga,
  updateAvatarSaga,
} from './user';

import { pullLeaderboardSaga } from './leaderboard';

export function* rootSaga() {
  const sagas = [
    signInSaga,
    signUpSaga,
    loadUserSaga,
    preLoadUserSaga,
    signOutSaga,
    updateProfileSaga,
    updatePasswordSaga,
    updateAvatarSaga,
    pullLeaderboardSaga,
  ];

  const retrySagas: Saga[] = yield sagas.map((saga) =>
    spawn(function* TempSaga() {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (err) {
          console.error(err);
        }
      }
    })
  );

  yield all(retrySagas);
}
