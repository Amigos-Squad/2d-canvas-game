export type HeaderProps = {
  toggleFunction: () => void;
};

export type ContentProps = {
  showNewTopic: boolean;
};

export interface ITopicItem {
  id: number;
  isLocked: boolean;
  title: string;
  posts: number;
  author: string;
  createdAt: string;
}

export interface ITopicBody {
  title: string;
  message: string;
  author: number;
}
export interface IPostBody {
  topicId: number;
  title: string;
  message: string;
}

export interface ITopicPost {
  id: number;
  avatar: string;
  author: string;
  message: string;
  time: string;
}
