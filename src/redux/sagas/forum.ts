import { call, put, takeLeading } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { IPostBody, ITopicBody, ITopicItem, ITopicPost } from '@/modules';
import {
  getTopics,
  getPosts,
  setTopics,
  createTopic,
  createPost,
  setPosts,
} from '../slices';
import { forumAPI } from '@/api';

function* getTopicsWorker() {
  try {
    const topics: ITopicItem[] = yield call(forumAPI.getTopics);
    yield put(setTopics(topics));
  } catch (e) {
    console.error(e);
  }
}

function* createTopicsWorker({ payload }: PayloadAction<ITopicBody>) {
  try {
    yield call(forumAPI.createTopic, payload);
    const topics: ITopicItem[] = yield call(forumAPI.getTopics);
    yield put(setTopics(topics));
  } catch (e) {
    console.error(e);
  }
}

function* getPostsWorker({ payload }: PayloadAction<string>) {
  try {
    const topics: ITopicPost[] = yield call(forumAPI.getPosts, payload);
    yield put(setPosts(topics));
  } catch (e) {
    console.error(e);
  }
}

function* createPostsWorker({ payload }: PayloadAction<IPostBody>) {
  try {
    yield call(forumAPI.createPost, payload);
    const posts: ITopicPost[] = yield call(
      forumAPI.getPosts,
      payload.topicId.toString()
    );
    yield put(setPosts(posts));
  } catch (e) {
    console.error(e);
  }
}

export function* getTopicsSaga() {
  yield takeLeading(getTopics.type, getTopicsWorker);
}

export function* createTopicsSaga() {
  yield takeLeading(createTopic.type, createTopicsWorker);
}

export function* getPostsSaga() {
  yield takeLeading(getPosts.type, getPostsWorker);
}

export function* createPostsSaga() {
  yield takeLeading(createPost.type, createPostsWorker);
}
