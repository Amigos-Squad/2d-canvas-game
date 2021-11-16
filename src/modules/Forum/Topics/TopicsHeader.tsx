import React, { ReactElement } from 'react';
import block from 'bem-cn-lite';

const th = block('topics-header__item');

export const TopicsHeader = (): ReactElement => (
  <thead className="forum-topics__header">
    <tr>
      <th className={th()}> </th>
      <th className={th({ full: true })}>Title</th>
      <th className={th({ fixed: true })}>Posts</th>
      <th className={th({ fixed: true })}>Topic Starter</th>
      <th className={th({ fixed: true })}>Created</th>
    </tr>
  </thead>
);
