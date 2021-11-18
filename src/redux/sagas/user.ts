import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLeading } from '@redux-saga/core/effects';

import { IUser } from '@/models';
import { PasswordForm } from '@/modules';
import {
  updatePassword,
  updateProfile,
  setUser,
  updateAvatar,
  setUserAvatar,
} from '../slices';
import { authAPI, userAPI } from '@/api';
import { converter } from '@/utils';

function* updateProfileWorker({ payload }: PayloadAction<IUser>) {
  try {
    yield call(
      userAPI.changeProfile,
      converter.convertCamelToSnakeCase(payload)
    );
    const user: IUser = yield call(authAPI.loadUser);

    const { id, displayName, login, avatar } = user;
    yield call(userAPI.changeBaseProfile, {
      userId: id,
      name: displayName ?? login,
      avatar,
    });

    yield put(setUser(user));
  } catch (e) {
    console.error(e);
  }
}

function* updatePasswordWorker({ payload }: PayloadAction<PasswordForm>) {
  try {
    yield call(userAPI.changePassword, payload);
  } catch (e) {
    console.error(e);
  }
}

function* updateAvatarWorker({ payload }: PayloadAction<FormData>) {
  try {
    yield call(userAPI.changeAvatar, payload);
    const user: IUser = yield call(authAPI.loadUser);

    yield call(userAPI.changeBaseProfile, {
      avatar: user.avatar,
    });

    yield put(setUserAvatar(user.avatar || ''));
  } catch (e) {
    console.error(e);
  }
}

export function* updateProfileSaga() {
  yield takeLeading(updateProfile.type, updateProfileWorker);
}

export function* updatePasswordSaga() {
  yield takeLeading(updatePassword.type, updatePasswordWorker);
}

export function* updateAvatarSaga() {
  yield takeLeading(updateAvatar.type, updateAvatarWorker);
}
