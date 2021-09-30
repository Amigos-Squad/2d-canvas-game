export type Props = {} & ITopicItem;

/* eslint-disable */
export interface ITopicItem {
  id: number;
  isLocked: boolean;
  title: string;
  posts: number;
  starter: string;
  last_message: string;
}
