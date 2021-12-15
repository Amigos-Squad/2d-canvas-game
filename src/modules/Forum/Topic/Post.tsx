import React, { ReactElement, memo } from 'react';
import { UserAvatar } from '@/components';
import { ITopicPost } from '..';

export const Post = memo(
  ({ author, message, time, avatar }: ITopicPost): ReactElement => (
    <div className="topic-post">
      <UserAvatar src={avatar} alt={`${author} avatar`} />
      <div className="topic-post__content">
        <div className="topic-post__title">
          <div className="topic-post__author">{author}</div>
          <div className="topic-post__time">{time}</div>
        </div>
        <div className="topic-post__message">{message}</div>
      </div>
    </div>
  )
);
