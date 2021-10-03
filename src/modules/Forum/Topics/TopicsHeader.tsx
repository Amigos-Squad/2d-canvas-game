import React, { ReactElement } from 'react';

export const TopicsHeader = (): ReactElement => (
  <div className="topics-header">
    <div className="topics-header__item title">Title</div>
    <div className="topics-header__item posts">Posts</div>
    <div className="topics-header__item starter">Topic Starter</div>
    <div className="topics-header__item last-message">Last message</div>
  </div>
);
