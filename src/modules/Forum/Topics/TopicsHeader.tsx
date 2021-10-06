import React, { ReactElement } from 'react';

export const TopicsHeader = (): ReactElement => (
  <thead className="forum-topics__header">
    <tr>
      <th className="topics-header__item"> </th>
      <th className="topics-header__item title">Title</th>
      <th className="topics-header__item posts">Posts</th>
      <th className="topics-header__item starter">Topic Starter</th>
      <th className="topics-header__item last-message">Last message</th>
    </tr>
  </thead>
);
