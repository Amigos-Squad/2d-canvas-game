import { all, spawn, call } from '@redux-saga/core/effects';
import { Saga } from '@redux-saga/types';
import {
  signInSaga,
  oauthSignInSaga,
  signUpSaga,
  loadUserSaga,
  preLoadUserSaga,
  signOutSaga,
  getServiceIdSaga,
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
    oauthSignInSaga,
    signUpSaga,
    loadUserSaga,
    preLoadUserSaga,
    signOutSaga,
    updateProfileSaga,
    updatePasswordSaga,
    updateAvatarSaga,
    pullLeaderboardSaga,
    getServiceIdSaga,
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
