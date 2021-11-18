import { ITopicPost, ITopicItem } from '@/modules';

export type ForumSlice = {
  topics: ITopicItem[];
  posts: ITopicPost[];
};
