import React, { memo, ReactElement } from 'react';
import { TopicItem } from './TopicItem';
import { NewTopic } from '../NewTopic';

import './Topics.scss';

export const Topics = memo(
  (): ReactElement => (
    <div className="topics">
      <div className="topics-header">
        <div className="topics-header__item title">Title</div>
        <div className="topics-header__item posts">Posts</div>
        <div className="topics-header__item starter">Topic Starter</div>
        <div className="topics-header__item last-message">Last message</div>
      </div>
      <div className="topics-container">
        <TopicItem />
        <TopicItem />
        <TopicItem />
        <TopicItem />
        <TopicItem />
        <TopicItem />
        <TopicItem />
      </div>
      <NewTopic />
    </div>
  )
);
