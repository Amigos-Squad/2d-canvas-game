import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostBody, ITopicBody, ITopicItem } from '@/modules';
import { initialState } from './const';
import { dateConverter } from '@/utils';

const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {
    getTopics: () => {},
    setTopics: (state, action) => {
      state.topics = action.payload.map((item: ITopicItem) => ({
        ...item,
        createdAt: dateConverter.convertISOtoLocal(item.createdAt),
      }));
    },
    getPosts: (_, action: PayloadAction<string>) => {},
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    createTopic: (_, action: PayloadAction<ITopicBody>) => {},
    createPost: (_, action: PayloadAction<IPostBody>) => {},
  },
});

export const {
  getTopics,
  getPosts,
  setTopics,
  setPosts,
  createTopic,
  createPost,
} = forumSlice.actions;

export default forumSlice.reducer;
